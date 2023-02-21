import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

type InitialState = {
    value: number
}
const initialState = {
    value: 33
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload
        },
        updateCakeNum: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsyncByAmount.fulfilled, (state, action) => {
            state.value += action.payload as number
        })
    }
})

function resolveAfter(num: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num)
        }, 1000)
    })
}
export const incrementAsyncByAmount = createAsyncThunk(
    'home/count', async (num: number) => await resolveAfter(num)
)

export const { increment, updateCakeNum } = counterSlice.actions // 导出操作state的函数
export default counterSlice.reducer