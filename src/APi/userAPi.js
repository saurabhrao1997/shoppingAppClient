import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const userApi = createApi({
    refetchOnMountOrArgChange: true,
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' ,
      prepareHeaders:(headers,{getState})=>{
        headers.set("Authorization",`Bearer ${localStorage.getItem("token")}`)

      }
    }),
    tagTypes: ["user"],
    endpoints: (builder) => ({
      getUserDetail: builder.query({
        query: (id) => `getuser?id=${id}`,
        providesTags:["user"]
      }),
      

      getAllUserDetail: builder.query({
        query: () => `getalluser`,
        providesTags:["user"]
      }),

      updateuserprofile: builder.mutation({
        query: (body) => ({
               url: `updateuser`,
               method: "PUT",
               body:body,

            })
           ,
           invalidatesTags:["user"]
      }),

      updateUserProfileImage: builder.mutation({
        query: (body) => ({
               url: `profileimage`,
               method: "PUT",
               body:body,

            })
           ,
           invalidatesTags:["user"]
      }),
    }),
  })
  export const { useGetUserDetailQuery,useGetAllUserDetailQuery,useUpdateuserprofileMutation,useUpdateUserProfileImageMutation } = userApi
