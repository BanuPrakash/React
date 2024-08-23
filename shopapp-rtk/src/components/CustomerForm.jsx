import React from 'react'
import { useCustomersQuery, useNewCustomerMutation } from '../redux/customerApi'

export default function CustomerForm() {
    const [newCustomer] = useNewCustomerMutation();
    const { refetch } = useCustomersQuery();
    const customer = {
        "id": 4,
        "name": "Venus"
    }

    async function addCustomer() {
        await newCustomer(customer);
        refetch(); // update the cache
    }
    return (
        <div>
            <button type='button' onClick={addCustomer}>Add Customer</button>
        </div>
    )
}
