import { USERS_URL } from "../constants";
import { apiSlice } from "./apliSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        login: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}/login`,
              method: 'POST',
              body: data,
            }),
          }),

          register: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}`,
              method: 'POST',
              body: data,
            }),
          }), 

          logout: builder.mutation({
            query: () => ({
              url: `${USERS_URL}/logout`,
              method: 'POST'
            }),
          })  
        // getProductDetails:builder.query({
        //     query:(productId)=> ({
        //         url:`${USERS_URL}/${productId}`,
        //         keepUnusedDataFor:5
        //     })
        // })
    })
}) 

export const { useLoginMutation, useLogoutMutation, useRegisterMutation} = userApiSlice;