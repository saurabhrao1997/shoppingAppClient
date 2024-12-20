import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const productApi = createApi({
    refetchOnMountOrArgChange: true,
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_API}/api/v1/` ,
      prepareHeaders:(headers,{getState})=>{
        headers.set("Authorization",`Bearer ${localStorage.getItem("token")}`)

      }
    }),
    tagTypes: ["product"],
    endpoints: (builder) => ({
      getProductDetail: builder.query({
        query: (id) => `getproduct?id=${id}`,
        providesTags:["product"]
      }),

      getSearchProduct: builder.query({
        query: (name) => `searchproduct?name=${name}`,
        providesTags:["product"]
      }),

      getAllProductDetail: builder.query({
        query: () => `getallproduct`,
        providesTags:["product"]
      }),

      createProduct: builder.mutation({
        query: (body) => ({
               url: `createproduct`,
               method: "POST",
               body:body,

            })
           ,
           invalidatesTags:["product"]
      }),
      reviewProduct: builder.mutation({
        query: (body) => ({
               url: `reviewproduct`,
               method: "POST",
               body:body,

            })
           ,
           invalidatesTags:["product"]
      }),

      updateProduct: builder.mutation({
        query: (body) => ({
               url: `updateproduct`,
               method: "PUT",
               body:body,

            })
           ,
           invalidatesTags:["product"]
      }),


      
      deleteProduct: builder.mutation({
        query: (id) => ({
               url: `deleteproduct?id=${id}`,
               method: "DELETE",
               

            })
           ,
           invalidatesTags:["product"]
      }),

      

    //   updateUserProfileImage: builder.mutation({
    //     query: (body) => ({
    //            url: `profileimage`,
    //            method: "PUT",
    //            body:body,

    //         })
    //        ,
    //        invalidatesTags:["product"]
    //   }),
    }),
  })
  export const {
     useCreateProductMutation,
    useGetAllProductDetailQuery,
    useGetProductDetailQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useGetSearchProductQuery,
    useReviewProductMutation } = productApi
