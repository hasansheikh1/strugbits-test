

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getMeals = createAsyncThunk('user/meals', async () => {
    // console.log("payload", payload);

    try {
        const response = await fetch("https://dummyjson.com/recipes")

        const meals = await response.json()
        if (meals) {
            console.log("response", meals)
        }

        return meals?.recipes;

    } catch (error) {
        console.log("Err", error)

    }


});

// Create a slice for login
export const mealSlice = createSlice({
    name: 'meals',
    initialState: {
        data: {
            'all_meals': [],
            'week_1': [],
            'week_2': [],
            'week_3': [],
            'week_4': [],
        },
        weeks: {
            'week 1': [],
            'week 2': [],
            'week 3': [],
            'week 4': [],
        },
        status: 'idle',  // To track status of async thunk
        error: null  // To track errors
    },
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        addDataToWeek: (state, action) => {
            const { data, week } = action.payload;
            state.data[week] = data
        },
        deleteFromWeek: (state, action) => {
            const { week, id } = action.payload
            state.data[week] = state.data[week]?.filter(data => data?.id != id)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMeals.pending, (state) => {
                console.log("Pending");
                state.status = 'loading';
            })
            .addCase(getMeals.fulfilled, (state, action) => {

                // if (action?.payload?.access_token) {
                //     state.isLoggedIn = true
                // }
                console.log("Succeeded")
                state.data.all_meals = action.payload;
                state.status = 'succeeded';
                console.log("state", state.data)

            })
            .addCase(getMeals.rejected, (state, action) => {
                state.status = 'failed';
                // state.error = action.error.message;
                console.log("Failed")
            });
    }
});


export const { setError, addDataToWeek, deleteFromWeek } = mealSlice.actions;
export const getMealsData = (state) => state.meal; 

export default mealSlice.reducer;