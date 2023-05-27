import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tripsCardsData, tripsCardsType } from '../../utils/data';


const initialState = {
    tripsCardsData:tripsCardsData
}

export const tripSlice = createSlice({
    name:"tripSlice",
    initialState,
    reducers:{
        setTripsCardsData:(state,action:PayloadAction<tripsCardsType[]>) =>{
            state.tripsCardsData = action.payload
        }
    }
})

export const {setTripsCardsData} = tripSlice.actions
export default tripSlice.reducer