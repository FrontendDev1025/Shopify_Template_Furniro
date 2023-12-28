import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CountryType } from '../../models/CountryType';
import { ProvinceType } from '../../models/ProvinceType';

const baseUrl = "http://immutable858-001-site1.atempurl.com/api/";

interface CheckoutState {
    countries: CountryType[],
    provinces: ProvinceType[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
};

export const getAllCountries = createAsyncThunk(
    'checkout/getAllCountries',
    async () => {
        const response = await axios.get(`${baseUrl}Country`);
        return (await response.data);
    }
);

export const getAllProvinces = createAsyncThunk(
    'checkout/getAllProvinces',
    async () => {
        const response = await axios.get(`${baseUrl}Province`);
        return (await response.data);
    }
);

const initialState = {
    loading: 'idle',
    countries: [],
    provinces: []
} as CheckoutState;

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCountries.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getAllCountries.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.countries = action.payload;
        });
        builder.addCase(getAllCountries.rejected, (state) => {
            state.loading = 'failed'
        });


        builder.addCase(getAllProvinces.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getAllProvinces.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.provinces = action.payload;
        });
        builder.addCase(getAllProvinces.rejected, (state) => {
            state.loading = 'failed'
        });
    }
});

export default checkoutSlice.reducer;