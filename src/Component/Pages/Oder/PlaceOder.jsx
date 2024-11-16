import React, { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Delete from "../../Comman/Delete";
import Button from "../../Comman/Button";
import {
  useCreateOderMutation,
  useGetpaypalTokenQuery,
} from "../../../APi/OrderApi";
import { useGetUserDetailQuery } from "../../../APi/userAPi";
import {
  PayPalButtons,
  usePayPalScriptReducer,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";
import axios from "axios";
export default function PlaceOder() {
  const wishList = useSelector((state) => state.wishlist);
  const [step, setStep] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({});

  // const [{ isPending }] = usePayPalScriptReducer();
  const { data: token } = useGetpaypalTokenQuery();
  const [createOder] = useCreateOderMutation();

  let { data: getUserData, isLoading: userLoading } = useGetUserDetailQuery(
    localStorage.getItem("userId"),
    { skip: !localStorage.getItem("userId") }
  );

  console.log("getUserData", getUserData?.data?.email);

  const onChange = (e) => {
    const { name, value } = e?.target;
    setShippingAddress((pre) => ({ ...pre, [name]: value }));
  };

  const totalPrice = useMemo(() => {
    if (wishList?.wishlist?.length > 0) {
      return wishList?.wishlist?.reduce((sum, obj) => {
        obj?.price;
        sum = sum + Number(obj?.price);
        return sum;
      }, 0);
    }
  }, [wishList?.wishlist]);

  function convertRupeesToDollars(rupees, exchangeRate = 84) {
    // Replace the exchangeRate value with the current market rate for accuracy
    const dollars = rupees / exchangeRate;
    return dollars.toFixed(2); // Limit to 2 decimal places
  }

  const createOrder = async () => {
    console.log("create order");

    try {
      const orderData = {
        intent: "CAPTURE",
        // purchase_units: wishList?.wishlist?.map((obj)=>({

        //   amount:{
        //      value: convertRupeesToDollars(Number(obj?.price)),
        //      currency_code:"USD"
        //   }

        // }))
        purchase_units: [
          {
            amount: {
              value: "01.00",
              currency_code: "USD",
            },
          },
        ],
        // "payment_source": {
        //   "paypal": {
        //     "experience_context": {
        //       "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
        //       "brand_name": "EXAMPLE INC",
        //       "locale": "en-US",
        //       "landing_page": "LOGIN",
        //       "shipping_preference": "SET_PROVIDED_ADDRESS",
        //       "user_action": "PAY_NOW",
        //       "return_url": "https://example.com/returnUrl",
        //       "cancel_url": "https://example.com/cancelUrl"
        //     }
        //   }
        // }
      };

      console.log("alsalkflk orderid", orderData);
      const response = await axios.post(
        "https://api-m.sandbox.paypal.com/v2/checkout/orders",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token?.data}`,
          },
        }
      );

      return response.data.id;
    } catch (error) {
      console.error("Error creating PayPal order:", error);
    }
  };

  const onApprove = (data, actions) => {
    console.log("alsalkflk approve order", data);
    let date = new Date()
    const payloadData = {
      orderId: data?.orderID,
      payerId: data?.payerID,
      user: localStorage.getItem("userId"),
      orderItems: wishList?.wishlist?.map((obj) => ({
        ...obj,
        product: obj?._id,
        qty: 1,
      })),
      shippingAddress: shippingAddress,
      paymentMethod: data?.paymentSource,
      paymentResult: {
        id: data?.paymentID,
        status: "completed",
        updateTime: date.toISOString(),
        emailAddress: getUserData?.data?.email,
      },
      itemsPrice: totalPrice.toString(),
      taxPrice: "0",
      shippingPrice: "0",
      TotalPrice: totalPrice.toString(),
      isPaid: true,
      paidAt: date.toISOString(),
      isDelivered: false,
      deliveredAt: null,
    };

    createOder(payloadData)
      .then((res) => {
        console.log("alsalkflk response", res);
      })
      .catch((err) => {
        console.log("alsalkflk error", err);
      });
    console.log("alsalkflk approve order", data, actions);
  };

  return (
    <>
      <div className="text-center font-bold my-2">Place order</div>

      {step == 0 && (
        <div>
          <div className="flex flex-col gap-y-4 mx-auto border-2 px-10">
            <div className="font-bold">shipping Address</div>
            <div className="flex items-start">
              Address :{" "}
              <textarea
                rows={3}
                className="border-2 rounded-md"
                name="address"
                onChange={onChange}
              />
            </div>
            <div>
              pin code:{" "}
              <input
                type="number"
                className="border-2 rounded-md"
                name="postalCode"
                onChange={onChange}
              />
            </div>
            <div>
              City:{" "}
              <input
                type="text"
                className="border-2 rounded-md"
                name="city"
                onChange={onChange}
              />
            </div>
            <div>
              Country:{" "}
              <input
                type="text"
                className="border-2 rounded-md"
                name="country"
                onChange={onChange}
              />
            </div>
            <div className="w-1/6  flex justify-end">
              <button
                className="border-2 px-4 py-1 rounded-lg bg-blue-600 text-white"
                onClick={() => {
                  if (
                    shippingAddress?.address &&
                    shippingAddress?.postalCode &&
                    shippingAddress?.city &&
                    shippingAddress?.country
                  ) {
                    setStep(1);
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {step == 1 && (
        <div>
          <div>
            {wishList?.wishlist?.length > 0 &&
              wishList?.wishlist.map((obj, inx) => {
                console.log(
                  "sajkjkfj",
                  obj?.discount,
                  obj?.price,
                  obj?.rating,
                  obj
                );
                return (
                  <div className="border-2 px-4 py-2 rounded-lg flex justify-between items-center mx-2 my-4 shadow-lg">
                    <div className="flex gap-4">
                      <img
                        className="w-32"
                        src={obj?.productimage[0]?.url}
                        alt=""
                      />
                      <div className="flex flex-col">
                        <div>{obj?.name}</div>
                        <div>{obj?.price}</div>
                        <div>{obj?.rating}</div>
                        <div>{obj?.discount}</div>
                      </div>
                    </div>

                    <div
                      className=""
                      onClick={() => {
                        dispatch(RemoveFromWishList(inx));
                      }}
                    >
                      <Delete />
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex justify-between mr-10">
            {totalPrice && (
              <div>Total Price : {totalPrice ? totalPrice : 0}</div>
            )}
          </div>

          {token?.data && wishList?.wishlist?.length > 0 && (
            <PayPalButtons
              style={{ shape: "pill", layout: "horizontal", color: "blue" }}
              createOrder={createOrder}
              onApprove={onApprove}
            />
          )}
        </div>
      )}
    </>
  );
}
