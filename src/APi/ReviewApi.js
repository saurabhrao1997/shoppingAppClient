import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const reviewApi = createApi({
    refetchOnMountOrArgChange: true,
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_API}/api/v1/` ,
      prepareHeaders:(headers,{getState})=>{
        headers.set("Authorization",`Bearer ${localStorage.getItem("token")}`)

      }
    }),
    tagTypes: ["review"],
    endpoints: (builder) => ({
     
      getAllReview: builder.query({
        query: () => `getallreview`,
        providesTags:["review"]
      }),

      createReview: builder.mutation({
        query: (body) => ({
               url: `createreview`,
               method: "POST",
               body:body,

            })
           ,
           invalidatesTags:["review"]
      }),

      updateReview: builder.mutation({
        query: (body) => ({
               url: `updatereview`,
               method: "PUT",
               body:body,

            })
           ,
           invalidatesTags:["review"]
      }),


      
      deleteReview: builder.mutation({
        query: (id) => ({
               url: `deletereview?id=${id}`,
               method: "DELETE",
               

            })
           ,
           invalidatesTags:["review"]
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
  export const { useCreateReviewMutation,useDeleteReviewMutation,useGetAllReviewQuery,useUpdateReviewMutation } = reviewApi;
