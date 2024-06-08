// TabBar.js
import React, { useEffect, useState } from 'react';
import './NavTab.css';
import Cards from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addDataToWeek, deleteFromWeek, getMeals, getMealsData } from '../../features/mealSlice';
import AddModal from '../AddModal/AddModal';

const NavTab = () => {
    const [activeTab, setActiveTab] = useState('all_meals');
    const [selectedItem, setSelectedItem] = useState([])
    const [menuOpen, setMenuOpen] = useState(false);
    const [data, setData] = useState()
    const [visible, setVisible] = useState(false)
    const tabs = [
        {
            key: 'all_meals',
            label: 'All Meals'
        },
        {
            key: 'week_1',
            label: 'Week 1',
        },
        {
            key: 'week_2',
            label: 'Week 2'
        },
        {
            key: 'week_3',
            label: 'Week 3',
        },
        {
            key: "week_4",
            label: 'Week 4'
        }
    ];

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const dispatch = useDispatch();
    const mealsData = useSelector(getMealsData)
    useEffect(() => console.log('llllll', mealsData), [mealsData])

    useEffect(() => {
        dispatch(getMeals())
    }, [dispatch])

    useEffect(() => {
        setData(mealsData)
    }, [mealsData])

    const handleModal = () => {
        setVisible(!visible)
    }

    const handleAddWeek = (week) => {
        dispatch(addDataToWeek({ data: selectedItem, week }))
        setSelectedItem([])
        setVisible(false)
    }

    const handleDeleteFromWeek = (week, id) => {
        console.log('lllllll3222', week, id)
        dispatch(deleteFromWeek({ week: week, id }))
    }

    return (
        <>
            <div className="tab-bar">
                <div className="tabs">
                    {tabs.map(tab => (
                        <div
                            key={tab.key}
                            className={`tab ${activeTab === tab.key ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(tab.key);
                                setMenuOpen(false); // Close menu on tab click
                            }}
                        >
                            {tab.label}
                            {activeTab === tab.key && <div className="underline" />}
                        </div>
                    ))}
                </div>
                {  activeTab=='all_meals'&&
                    <button onClick={() => { handleModal() }} className={`add-to-week ${selectedItem.length === 0 ? 'disabled' : ''}`} disabled={selectedItem.length==0}>Add to Week</button>
                }
                     
                {
                    activeTab!='all_meals'&&
                     <button onClick={() => { handleModal() }} className={`add-to-week ${activeTab!='all_meals' ? 'disabled' : ''}`} disabled={activeTab!='all_meals'}>Add to Week</button>
                }
                    
                   
                
                
                <div className="hamburger-menu" onClick={handleMenuToggle}>
                    &#9776;
                </div>
                {menuOpen && (
                    <div className="dropdown-menu">
                        {tabs.map(tab => (
                            <div
                                key={tab.key}
                                className={`dropdown-tab ${activeTab === tab.key ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab(tab.key);
                                    setMenuOpen(false); // Close menu on tab click
                                }}
                            >
                                {tab.key}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='meal-container'>
                {data && data.data[activeTab].map((elm, idx) =>
                    <Cards
                        id={elm?.id}
                        imgSrc={elm.image}
                        mealtype={elm.mealType.join(",")}
                        ratings={elm.rating}
                        heading={elm.name}
                        cuisine={elm.cuisine}
                        description={elm.instructions.join("")}
                        selected={selectedItem.find(itm => itm.id == elm?.id)}
                        activeTab={activeTab}
                    
                        
                        handleSelect={() => {
                            if (selectedItem.find(itm => itm.id == elm?.id)) {
                                setSelectedItem(selectedItem.filter((itm) => itm.id != elm?.id))
                            } else setSelectedItem([...selectedItem, elm])
                        }}
                    

                        handleDeleteFromWeek={handleDeleteFromWeek}
                    />
                )}
            </div>
            <AddModal weeks={tabs} visible={visible} setVisible={setVisible} handleAddWeek={handleAddWeek} />
        </>
    );
};

export default NavTab;
