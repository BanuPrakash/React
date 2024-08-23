import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk(
    'products/fetch',
  
    async () => {
      const response = await fetch(`http://localhost:1234/products`)
      const data =  await response.json();
      return data;
    },
  )