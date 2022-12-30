import { configureStore } from "@reduxjs/toolkit"
// const reduxLogger = require('redux-logger')
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/iceCream/iceCreamSlice'
import userReducer from "../features/users/userSlice"



// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch