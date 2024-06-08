
import { configureStore } from '@reduxjs/toolkit';

import mealsReducer from '../features/mealSlice'

const store = configureStore({
    reducer: {
        meal: mealsReducer
    },

});

export default store;