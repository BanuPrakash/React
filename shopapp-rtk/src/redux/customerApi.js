import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// http://localhost:1234/customers
// http://localhost:1234/customers/3

export const customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
    endpoints: (builder) => ({
        customers: builder.query({
            query: () => `customers`,
        }),
        customer: builder.query({
            query: (id) => `customers/${id}`,
        }),
        newCustomer: builder.mutation({
            query: customer => ({
                url: '/customers',
                method: 'post',
                body: customer
            })
        })
    })
})

export const { useCustomersQuery, useCustomerQuery, useNewCustomerMutation } = customerApi;