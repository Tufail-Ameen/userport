import React from 'react'
import { Element } from 'react-scroll';

// Mock data that will be replaced with backend data
const menuItems = [
    {
        id: 1,
        name: "Waffle Fries Chick-fil-A",
        description: "Crispy on the outside, tender on the inside — Chick-fil-A's signature Waffle Fries are cooked in canola oil and served hot with the perfect salty crunch. These golden fries are a fan favorite and pair perfectly with any Chick-fil-A entrée.",
        image: '/still-life-fast-food-dishes.jpg',
        calories: 400,
        price: 2.11
    },
    {
        id: 2,
        name: "Double-Double In-N-Out",
        description: "Stacked with two beef patties and two slices of American cheese, the Double-Double is In-N-Out's classic burger. Topped with lettuce, tomato, onions, and signature spread, it's served on a toasted bun and made fresh to order.",
        image: '/side-view-double-cheeseburger-with-grilled-beef-patties-cheese-lettuce-leaf-burger-buns.jpg',
        calories: 670,
        price: 4.04
    },
    // Add more items here to reach 24 items
    // For now, we'll duplicate these items to demonstrate the layout
    ...Array(22).fill().map((_, index) => ({
        id: index + 3,
        name: `Menu Item ${index + 3}`,
        description: "Delicious food item description",
        image: 'Landing_Page_1.jpg',
        calories: Math.floor(Math.random() * 500) + 200,
        price: (Math.random() * 10).toFixed(2)
    }))
];

export default function MenuCard() {
    return (
        <div className='grid grid-cols-12 gap-6 p-4'>
            {menuItems.map((item) => (
                <Element key={item.id} name={`card${item.id}`} className="col-span-12 md:col-span-6">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 h-48 flex justify-center items-center">
                                <img
                                    className="object-cover w-full h-full"
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                            <p className="text-gray-900 font-medium">Calories: {item.calories}</p>
                                            <p className="text-gray-500">Price: ${item.price}</p>
                                        </div>
                                    </div>
                                    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
            ))}
        </div>
    )
}
