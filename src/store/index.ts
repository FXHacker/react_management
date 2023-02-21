import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './redecers/homeReducer'

// // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 使用浏览器redux插件
// const store = configureStore(
//     counterSlice,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const store = configureStore({
    reducer: {
        home: counterSlice
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch