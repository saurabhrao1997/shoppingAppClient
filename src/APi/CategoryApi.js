import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const categoryApi = createApi({
    refetchOnMountOrArgChange: true,
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_API}/api/v1/` ,
      prepareHeaders:(headers,{getState})=>{
        headers.set("Authorization",`Bearer ${localStorage.getItem("token")}`)

      }
    }),
    tagTypes: ["category"],
    endpoints: (builder) => ({
      category: builder.query({
        query: (id) => `getcategory?category=${id}`,
        providesTags:["category"]
      }),
      

      category: builder.query({
        query: () => `category`,
        providesTags:["category"]
      }),

      createCategory: builder.mutation({
        query: (body) => ({
               url: `createcategory`,
               method: "POST",
               body:body,

            })
           ,
           invalidatesTags:["category"]
      }),

      updateCategory: builder.mutation({
        query: (body) => ({
               url: `updatecategory`,
               method: "PUT",
               body:body,

            })
           ,
           invalidatesTags:["category"]
      }),
      deleteCategory: builder.mutation({
        query: (id) => ({
               url: `deletecategory?category=${id}`,
               method: "DELETE",
            //    body:body,

            })
           ,
           invalidatesTags:["category"]
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
  export const { useCategoryQuery,useDeleteCategoryMutation,useCreateCategoryMutation,useUpdateCategoryMutation} = categoryApi
