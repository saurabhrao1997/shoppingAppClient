import React, { useEffect,useState } from 'react'
import {  useParams } from 'react-router-dom';
import {useGetProductDetailQuery,useGetSearchProductQuery,useReviewProductMutation} from "../../../APi/ProductApi"
import {useNavigate} from "react-router-dom"
import  ProdutCard from '../Product/ProdutCard'
import Rating from "react-rating"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ProductDetails() {
  const Navigate = useNavigate()
  const [search,setSearch]=useState("")
  const [rating,setRating] = useState(1)
  const [comment,setComment] = useState("")
    const {id} = useParams()




    const {data} = useGetProductDetailQuery(id,{skip:!id})
    const {data:searchProductData} = useGetSearchProductQuery(search,{skip:!search})
    const [reviewProduct] = useReviewProductMutation()
    console.log("data",data,searchProductData)
    useEffect(()=>{
      if(data?.data?.length > 0){
        setSearch(data?.data[0]?.category?.label)
      }
    },[data])
  return (
    <div>
      <div className='text-center'>ProductDetails</div>
      
      <div>
        {
          data && data?.data.map((obj,ind)=>{
            return(
          <div key={ind} className='w-full flex'>
            <div className='w-1/2  flex flex-col'>
            <div className='w-full'>
              <img className='w-full' src={obj?.productimage[0]?.url} alt="" />
            </div>
            <div className=' flex flex-wrap'>
            {obj?.productimage?.map((image,inx)=>{
              return(
              <div key={inx+"images"} className=''>
                <img className='w-20' src={image?.url} alt="" />
              </div>
              )
            })}

            </div>

            </div>
            <div className='w-1/2  flex flex-col'>
            <div><span>Name :</span><span className='text-lg'>{obj?.name}</span> </div>
            <div><span>Description :</span><span className='text-gray-500'>{obj?.description}</span></div>
            <div><span>Offer :</span><span className='text-lime-800'>{obj?.offer}</span></div>
            <div><span>Quantity :</span><span className='text-blue-600'>{obj?.quantity}</span></div>
            <div><span>Price :</span><span className='text-blue-600'> {obj?.price}</span></div>
            <div><span>Rating :</span><span className='text-blue-600'> <Rating initialRating={obj?.rating} readonly /></span></div>
       
          
  
         

            </div>
          </div>)
          })
        }
      </div>
      <div className=''>
        <div className='font-bold text-[20px] mt-4 ml-4'>Review section</div>
        {
          data?.data?.length > 0 && data?.data?.map((obj)=>{
           return(
            <>
            {
               obj?.review?.length > 0 && obj?.review?.map((obj2)=>{
                return(
                  <>
                  {
                     (obj2?.review && obj2?.name) && <div className='ml-4 my-2 border-2 px-4'>
                      <div>

                     Name: <span>{obj2?.name}</span>
                      </div>
                      <div>

                     rating: <span>{obj2?.review?.rating}</span>
                      </div>
                      <div>

                     Comment: <span>{obj2?.review?.comment}</span>
                      </div>
                     
                    </div>
                  }
                  
                  
                  
                  </>
                )
               
           } )
            }
            </>
           )

          
          })
        }
      </div>
      <div className='ml-4'>
        <div>Review</div>
        <div className='flex gap-2 justify-start ml-2'>
          <div>rating</div>
          <Rating
  placeholderRating={rating}
  emptySymbol={
    <>
     <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
    //  xmlnsXlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 478.53 478.53"
        // xml:space="preserve"
        >
    <g>
      <g>
        <path d="M477.795,184.28c-1.764-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35
          c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.071
          c-5.65,0.82-10.343,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.797L85.877,450.018
          c-0.965,5.627,1.349,11.315,5.968,14.671c4.618,3.355,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199
          c2.196,1.154,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.865c4.619-3.357,6.933-9.044,5.968-14.671l-25.138-146.565
          l106.484-103.797C478.088,195.671,479.56,189.71,477.795,184.28z M340.927,287.476c-3.536,3.446-5.149,8.411-4.314,13.277
          l21.333,124.382l-111.701-58.726c-2.185-1.149-4.583-1.723-6.98-1.723c-2.397,0-4.795,0.574-6.981,1.722l-111.701,58.726
          l21.333-124.382c0.835-4.866-0.778-9.831-4.314-13.277l-90.367-88.087L172.12,181.24c4.886-0.71,9.109-3.778,11.294-8.205
          l55.851-113.166l55.851,113.167c2.185,4.427,6.408,7.495,11.294,8.205l124.884,18.148L340.927,287.476z"
          
          />
      </g>
    </g>
    </svg>
    </>
 }
  placeholderSymbol={
    <svg width="20px" height="20px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" 
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="ic_fluent_star_28_filled" fill="#212121" fill-rule="nonzero">
                <path d="M14.4373398,3.10348696 C14.6345524,3.20081719 14.7941799,3.36044472 14.8915102,3.55765732 L17.8153782,9.48206111 L24.353346,10.4320834 C24.8998908,10.511501 25.2785723,11.0189439 25.1991547,11.5654888 C25.1675302,11.7831258 25.065043,11.9842682 24.9075593,12.1377768 L20.1766414,16.749282 L21.2934597,23.2608319 C21.3868207,23.8051684 21.0212328,24.3221243 20.4768964,24.4154853 C20.2601388,24.4526621 20.0371707,24.4173475 19.8425102,24.3150084 L13.9947741,21.2406716 L8.14703796,24.3150084 C7.65819337,24.5720092 7.05356621,24.3840627 6.79656541,23.8952181 C6.69422634,23.7005576 6.65891166,23.4775895 6.69608851,23.2608319 L7.81290673,16.749282 L3.08198882,12.1377768 C2.68650524,11.7522756 2.67841294,11.1191623 3.06391415,10.7236788 C3.21742275,10.5661951 3.41856517,10.4637079 3.6362022,10.4320834 L10.1741699,9.48206111 L13.098038,3.55765732 C13.3424603,3.06240366 13.9420861,2.85906466 14.4373398,3.10348696 Z" id="🎨-Color">
    
    </path>
            </g>
        </g>
    </svg>}
  fullSymbol={<svg width="20px" height="20px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" 
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="ic_fluent_star_28_filled" fill="#212121" fill-rule="nonzero">
                <path d="M14.4373398,3.10348696 C14.6345524,3.20081719 14.7941799,3.36044472 14.8915102,3.55765732 L17.8153782,9.48206111 L24.353346,10.4320834 C24.8998908,10.511501 25.2785723,11.0189439 25.1991547,11.5654888 C25.1675302,11.7831258 25.065043,11.9842682 24.9075593,12.1377768 L20.1766414,16.749282 L21.2934597,23.2608319 C21.3868207,23.8051684 21.0212328,24.3221243 20.4768964,24.4154853 C20.2601388,24.4526621 20.0371707,24.4173475 19.8425102,24.3150084 L13.9947741,21.2406716 L8.14703796,24.3150084 C7.65819337,24.5720092 7.05356621,24.3840627 6.79656541,23.8952181 C6.69422634,23.7005576 6.65891166,23.4775895 6.69608851,23.2608319 L7.81290673,16.749282 L3.08198882,12.1377768 C2.68650524,11.7522756 2.67841294,11.1191623 3.06391415,10.7236788 C3.21742275,10.5661951 3.41856517,10.4637079 3.6362022,10.4320834 L10.1741699,9.48206111 L13.098038,3.55765732 C13.3424603,3.06240366 13.9420861,2.85906466 14.4373398,3.10348696 Z" id="🎨-Color">
    
    </path>
            </g>
        </g>
    </svg>
  }
  onChange={(value)=>{console.log("sakllkfal",value);setRating(value)}}
/>

        </div>
        <div className='flex gap-2 justify-start ml-2'>
        <div>Comment:</div>  
          <textarea value={comment} rows={"3"} onChange={(e)=>{setComment(e?.target?.value)}}></textarea>
        </div>
        <div className='mt-4 w-1/6 flex justify-end'>
          <button className='border-2 rounded-lg px-4 py-1' onClick={()=>{
           if(rating && comment){
            reviewProduct({id:id,review:{
              rating:rating,
              comment:comment,
              userId:localStorage.getItem("userId"),
              userName:localStorage.getItem("userName")
            },
            userId:localStorage.getItem("userId"),
          }).then((res)=>{
                console.log("aslfklasfflka", res)
                setComment("")
                setRating(1);
                toast('🦄 Review successfully updated', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                  });

            }).catch((err)=>{})
           }else{
            toast('🦄 Rating and Comment both are mandate!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              });
           }

          }}>Submit</button>
        </div>
         
      </div>




      <div className='px-4 mb-10 '>
      <div className='font-bold my-2'>Relative Product</div>
      <div className='flex gap-4 overflow-x-auto py-1 border-2 rounded-md px-1'>

      {
        searchProductData && searchProductData?.data?.map((obj)=>{
           return(
                
            <ProdutCard
            showAdditionFeature={false}
            id={obj?._id}
            url={obj?.productimage[0]?.url}
            name={obj?.name}
            description={obj?.description}
            offer={obj?.offer}
            discount={obj?.discount}
            onCardClick={(e)=>{
              Navigate(`/productdetail/${obj?._id}`); e.stopPropagation()
            }}
            // onDeleteClick={(e)=>{
            //   setShowModal(true);setDeleteId(obj);e?.stopPropagation();
            // }}
            // onWishList={(e)=>{
            //   dispatch(addToWishlist(obj));e.stopPropagation(); 
            // }}
            />

           )
        })
      }
      </div>
      </div>



      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition= "Bounce"/>
{/* Same as */}
{/* <ToastContainer /> */}
    </div>

  )
}
