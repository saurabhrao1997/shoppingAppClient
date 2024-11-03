import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const orderApi = createApi({
    refetchOnMountOrArgChange: true,
    reducerPath: 'oderApis',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_API}/api/v1/` ,
      prepareHeaders:(headers,{getState})=>{
        headers.set("Authorization",`Bearer ${localStorage.getItem("token")}`)

      }
    }),
    tagTypes: ["order"],
    endpoints: (builder) => ({
      getOrer: builder.query({
        query: () => `getorder`,
        providesTags:["order"]
      }),
      

    //   category: builder.query({
    //     query: () => `category`,
    //     providesTags:["order"]
    //   }),

      createCategory: builder.mutation({
        query: (body) => ({
               url: `createorder`,
               method: "POST",
               body:body,

            })
           ,
           invalidatesTags:["order"]
      }),

    //   updateCategory: builder.mutation({
    //     query: (body) => ({
    //            url: `updatecategory`,
    //            method: "PUT",
    //            body:body,

    //         })
    //        ,
    //        invalidatesTags:["category"]
    //   }),
    //   deleteCategory: builder.mutation({
    //     query: (id) => ({
    //            url: `deletecategory?category=${id}`,
    //            method: "DELETE",
    //         //    body:body,

    //         })
    //        ,
    //        invalidatesTags:["category"]
    //   }),

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
  export const {useCreateCategoryMutation,useGetOrerQuery} = orderApi
