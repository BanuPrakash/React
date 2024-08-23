import React from 'react'
import {useCustomersQuery, useCustomerQuery} from '../redux/customerApi'
import CustomerForm from './CustomerForm';

export default function Customers() {
 const {data, error, isFetching, isLoading, isSuccess} = useCustomersQuery();
  return (
    <div className='container'>
        <h1>RTK Query Customer Example</h1>
        {
            isLoading && <h1>Loading...</h1>
        }
        {
            isFetching && <h1>Fetching...</h1>
        }
        {
            isSuccess && (
                <div>
                    {
                        data.map(customer => <div key={customer.id}> {customer.name}</div>)
                    }
                    <CustomerForm />
                </div>
            )
        }
    </div>
  )
}


