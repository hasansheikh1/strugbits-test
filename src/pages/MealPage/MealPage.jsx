import React, { useEffect } from 'react'
import './MealPage.css';
import NavTab from '../../components/NavTab/NavTab';

// import Cards from '../../components/Card/Card';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMeals, getMealsData } from '../../features/mealSlice';

function MealPage() {



    return (
        <div className='container'>
            <div className='top-cont'>
                <span className='main-head'>
                    Optimized Your Meal
                </span>

                <span className='sub-head'>
                    Select Meal to Add in Week. You will be able to edit. modify and change the Meal Weeks.
                </span>

            </div>
            <div className='week'>

                <span>Week Orders</span>
            </div>
            <NavTab />

            {/* <div className='meal-container'>
                <Cards />
            </div> */}

        </div>
    )
}

export default MealPage