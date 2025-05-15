"use client"

import React, { useEffect, useState } from 'react'
import { Element } from 'react-scroll';
import { BsPlusCircle } from "react-icons/bs";
import './MenuCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '@/Redux/Slice/cartSlice';
import { toggleCart } from '@/Redux/Slice/toggleCartSlice';
import { MdDelete } from "react-icons/md";

// Mock data that will be replaced with backend data
const menuItems = [
    {
        id: 1,
        name: "Classic Cheeseburger",
        description: "Beef patty with cheddar cheese, fresh lettuce, and our signature sauce",
        image: '/still-life-fast-food-dishes.jpg',
        calories: 400,
        price: 2.11
    },
    {
        id: 2,
        name: "Double Bacon Deluxe",
        description: "Two juicy beef patties with crispy bacon and smoky BBQ sauce",
        image: '/side-view-double-cheeseburger-with-grilled-beef-patties-cheese-lettuce-leaf-burger-buns.jpg',
        calories: 670,
        price: 4.04
    },
    {
        id: 3,
        name: "Spicy Chicken Sandwich",
        description: "Crispy chicken breast with spicy mayo and fresh pickles",
        image: 'Landing_Page_1.jpg',
        calories: 450,
        price: 3.99
    },
    {
        id: 4,
        name: "Veggie Supreme",
        description: "Grilled portobello mushroom with roasted peppers and vegan cheese",
        image: 'Landing_Page_1.jpg',
        calories: 380,
        price: 3.75
    },
    {
        id: 5,
        name: "BBQ Pulled Pork",
        description: "Slow-cooked pork shoulder with tangy BBQ sauce and coleslaw",
        image: 'Landing_Page_1.jpg',
        calories: 520,
        price: 4.25
    },
    {
        id: 6,
        name: "Fish & Chips",
        description: "Beer-battered cod fillet with crispy fries and tartar sauce",
        image: 'Landing_Page_1.jpg',
        calories: 580,
        price: 4.50
    },
    {
        id: 7,
        name: "Chicken Caesar Wrap",
        description: "Grilled chicken breast with Caesar dressing in flour tortilla",
        image: 'Landing_Page_1.jpg',
        calories: 420,
        price: 3.85
    },
    {
        id: 8,
        name: "Mushroom Swiss Burger",
        description: "Beef patty with sautéed mushrooms and melted Swiss cheese",
        image: 'Landing_Page_1.jpg',
        calories: 480,
        price: 4.15
    },
    {
        id: 9,
        name: "Crispy Chicken Tenders",
        description: "Hand-breaded chicken tenders with your choice of dipping sauce",
        image: 'Landing_Page_1.jpg',
        calories: 460,
        price: 3.95
    },
    {
        id: 10,
        name: "Philly Cheesesteak",
        description: "Thinly sliced beef with melted provolone and bell peppers",
        image: 'Landing_Page_1.jpg',
        calories: 550,
        price: 4.35
    },
    {
        id: 11,
        name: "Grilled Chicken Salad",
        description: "Fresh mixed greens with grilled chicken and balsamic vinaigrette",
        image: 'Landing_Page_1.jpg',
        calories: 320,
        price: 3.65
    },
    {
        id: 12,
        name: "Buffalo Wings",
        description: "Crispy chicken wings tossed in spicy buffalo sauce",
        image: 'Landing_Page_1.jpg',
        calories: 480,
        price: 4.20
    },
    {
        id: 13,
        name: "Turkey Club",
        description: "Triple-decker sandwich with turkey, bacon, and fresh lettuce",
        image: 'Landing_Page_1.jpg',
        calories: 510,
        price: 4.10
    },
    {
        id: 14,
        name: "Loaded Nachos",
        description: "Crispy tortilla chips with melted cheese and fresh toppings",
        image: 'Landing_Page_1.jpg',
        calories: 620,
        price: 4.45
    },
    {
        id: 15,
        name: "Grilled Salmon",
        description: "Fresh salmon fillet with creamy lemon butter sauce",
        image: 'Landing_Page_1.jpg',
        calories: 420,
        price: 5.25
    },
    {
        id: 16,
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
        image: 'Landing_Page_1.jpg',
        calories: 580,
        price: 4.75
    },
    {
        id: 17,
        name: "Beef Tacos",
        description: "Three soft tacos with seasoned beef and fresh toppings",
        image: 'Landing_Page_1.jpg',
        calories: 490,
        price: 4.15
    },
    {
        id: 18,
        name: "Chicken Quesadilla",
        description: "Flour tortilla with grilled chicken and melted cheese",
        image: 'Landing_Page_1.jpg',
        calories: 520,
        price: 4.30
    },
    {
        id: 19,
        name: "Greek Salad",
        description: "Fresh vegetables with feta cheese and Kalamata olives",
        image: 'Landing_Page_1.jpg',
        calories: 350,
        price: 3.95
    },
    {
        id: 20,
        name: "Shrimp Po' Boy",
        description: "Fried shrimp with spicy remoulade sauce on French bread",
        image: 'Landing_Page_1.jpg',
        calories: 540,
        price: 4.65
    },
    {
        id: 21,
        name: "Chicken Parmesan",
        description: "Breaded chicken breast with marinara sauce and cheese",
        image: 'Landing_Page_1.jpg',
        calories: 560,
        price: 4.85
    },
    {
        id: 22,
        name: "Steak Frites",
        description: "Grilled sirloin steak with garlic butter and French fries",
        image: 'Landing_Page_1.jpg',
        calories: 680,
        price: 5.50
    },
    {
        id: 23,
        name: "Vegetable Stir Fry",
        description: "Fresh vegetables and tofu stir-fried in Asian sauce",
        image: 'Landing_Page_1.jpg',
        calories: 380,
        price: 4.25
    },
    {
        id: 24,
        name: "Lobster Roll",
        description: "Fresh lobster meat with mayo on a buttered roll",
        image: 'Landing_Page_1.jpg',
        calories: 520,
        price: 5.75
    }
];

// cart component
export function Cart() {
    const dispatch = useDispatch();
    const isCartOpen = useSelector((state) => state.toggle.value);
    const { items, totalItems, totalAmount } = useSelector((state) => state.cart);

    const handleCloseCart = () => {
        dispatch(toggleCart());
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <>
            {isCartOpen && (
                <div className="fixed top-15 right-4 z-50">
                    <div className="bg-white rounded-lg p-4 w-90 shadow-lg cart-container max-h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-xl font-bold">Your Cart ({totalItems} )</h1>
                            <button
                                onClick={handleCloseCart}
                                className="text-gray-500 hover:text-gray-700 cursor"
                            >
                                ×
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item.id} className="border-b pb-2">
                                        {/* Grid System */}
                                        <div className='grid  grid-cols-12' >

                                            {/* Image Part */}
                                            <div className='col-span-3 flex justify-center items-center'>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded-lg"
                                                />
                                            </div>

                                            {/* Text Part */}
                                            <div className='col-span-8 ms-1'>
                                                <div>
                                                    <span className="font-medium">{item.name}</span>
                                                    <div className="text-sm text-gray-600">
                                                        ${item.price} × {item.quantity}
                                                    </div>

                                                    <div className="flex gap-1">
                                                        <button
                                                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                                            className=" bg-gray-200 rounded hover:bg-gray-300 quantity-btn cursor"
                                                        >
                                                            -
                                                        </button>

                                                        <div className='text-gray-700 font-semibold text-md' >
                                                            {item.quantity}
                                                        </div>

                                                        <button
                                                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                                            className="bg-gray-200 rounded hover:bg-gray-300 quantity-btn cursor"
                                                        >
                                                            +
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>

                                            {/* Delete Part */}
                                            <div className='col-span-1 flex justify-end items-satrt'>
                                                <MdDelete className='text-xl text-gray-700 cursor' onClick={() => handleRemoveItem(item.id)} />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-2 pt-4">
                            <div className="flex justify-between font-bold mb-2">
                                <span>Cart Total:</span>
                                <span>${totalAmount.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between font-bold mb-2">
                                <span>Tax (10%):</span>
                                <span>${(totalAmount * 0.1).toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between font-bold mb-2">
                                <span>Delivery Fee:</span>
                                <span>${(totalAmount > 0 ? 2.99 : 0).toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between font-bold mb-2">
                                <span>Subtotal:</span>
                                <span>${(totalAmount + (totalAmount * 0.1) + (totalAmount > 0 ? 2.99 : 0)).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Menu Card Content
function MenuCardContent() {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image
        }));
    };

    return (
        <div className='grid grid-cols-12 gap-3 p-6'>
            {menuItems.map((item) => (
                <Element key={item.id} name={`card${item.id}`} className="col-span-12 md:col-span-12 lg:col-span-4">
                    <div className="bg-white rounded-lg overflow-hidden transition-shadow duration-300 card-container p-2">
                        <div className="grid grid-cols-12 gap-3 p-2 cursor">
                            {/* Text Part */}
                            <div className="col-span-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-2">{item.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                            <p className="text-gray-900 font-medium">Calories: {item.calories}</p>
                                            <p className="text-gray-500">Price: ${item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Part */}
                            <div className="col-span-4 flex items-center justify-center relative">
                                <img
                                    className="object-cover w-10/12 h-10/12 rounded-xl"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <BsPlusCircle
                                    onClick={() => handleAddItem(item)}
                                    className="absolute bottom-4 right-4 text-gray-700 text-4xl bg-white/90 hover:bg-white/80 rounded-4xl"
                                />
                            </div>
                        </div>
                    </div>
                </Element>
            ))}
        </div>
    );
}

export default function MenuCard() {
    return (
        <>
            <Cart />
            <MenuCardContent />
        </>
    );
}