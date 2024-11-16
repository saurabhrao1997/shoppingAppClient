import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const notificationApi = createApi({
    refetchOnMountOrArgChange: true,
    reducerPath: 'notificationApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_API}/api/v1/` ,
      prepareHeaders:(headers,{getState})=>{
        headers.set("Authorization",`Bearer ${localStorage.getItem("token")}`)

      }
    }),
    tagTypes: ["notification"],
    endpoints: (builder) => ({
      getAllNotification: builder.query({
        query: (id) => `notification?userId=${id}`,
        providesTags:["notification"]
      }),
      

    }),
  })
  export const { useGetAllNotificationQuery} = notificationApi
