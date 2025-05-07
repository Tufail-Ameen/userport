import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, Element } from 'react-scroll';
import './MenuCarousel.css';

export default function MenuCarousel() {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 12,
            slidesToSlide: 12 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6,
            slidesToSlide: 6 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        }
    };

    const menuItems = [
        { src: '/Catagories/1 Waffle Fries Chick-fil-A.jpg', alt: 'Item 1', name: 'Fries' },
        { src: '/Catagories/2 Double-Double In-N-Out.jpg', alt: 'Item 2', name: 'Burger' },
        { src: '/Catagories/3 Fries McDonalds.jpg', alt: 'Item 3', name: 'Fries' },
        { src: '/Catagories/4 Chicken Popeyes.jpg', alt: 'Item 4', name: 'Chicken' },
        { src: '/Catagories/5 Chicken Sandwich Chick-fil-A.jpg', alt: 'Item 5', name: 'Sandwich' },
        { src: '/Catagories/6 Curly Fries Arbys.jpg', alt: 'Item 6', name: 'Fries' },
        { src: '/Catagories/7 Blizzard Dairy Queen.jpg', alt: 'Item 7', name: 'Blizzard' },
        { src: '/Catagories/8 Frosty Wendys.jpg', alt: 'Item 8', name: 'Frosty' },
        { src: '/Catagories/9 McFlurry McDonalds.jpg', alt: 'Item 9', name: 'McFlurry' },
        { src: '/Catagories/10 Bacon Cheeseburger Five Guys.jpg', alt: 'Item 10', name: 'Burger' },
        { src: '/Catagories/11 Animal Style Burger In-N-Out.jpg', alt: 'Item 11', name: 'Burger' },
        { src: '/Catagories/12 Spicy Chicken Sandwich Chick-fil-A.jpg', alt: 'Item 12', name: 'Sandwich' },
        { src: '/Catagories/13 Chicken Nuggets Chick-fil-A.jpg', alt: 'Item 13', name: 'Nuggets' },
        { src: '/Catagories/14 McNuggets McDonalds.jpg', alt: 'Item 14', name: 'Nuggets' },
        { src: '/Catagories/15 Cheesy Gordita Crunch Taco Bell.jpg', alt: 'Item 15', name: 'Taco' },
        { src: '/Catagories/16 Big Mac McDonalds.jpg', alt: 'Item 16', name: 'Burger' },
        { src: '/Catagories/17 Pretzel Auntie Annes.jpg', alt: 'Item 17', name: 'Pretzel' },
        { src: '/Catagories/18 Shack Burger ShakeShack.jpg', alt: 'Item 18', name: 'Burger' },
        { src: '/Catagories/19 Two Tacos for 99¢ Jack in the Box.jpg', alt: 'Item 19', name: 'Taco' },
        { src: '/Catagories/20 Spicy Chicken Sandwich Wendys.jpg', alt: 'Item 20', name: 'Sandwich' },
        { src: '/Catagories/21 Chicken Tenders Popeyes.jpg', alt: 'Item 21', name: 'Tenders' },
        { src: '/Catagories/22 Biscuits Popeyes.jpg', alt: 'Item 22', name: 'Biscuit' },
        { src: '/Catagories/23 Soft Tacos Chipotle.jpg', alt: 'Item 23', name: 'Taco' },
        { src: '/Catagories/24 Animal Style Fries In-N-Out.jpg', alt: 'Item 24', name: 'Fries' }
    ];

    return (
        <>
            <Carousel
                className='bg-white'
                swipeable={false}
                draggable={false}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                //   deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {menuItems.map((item, index) => (
                    <Link key={index} to={`card${index + 1}`} smooth={true} duration={500} onClick={() => handleItemClick(index)}>
                        <div className={`menu-item py-1 cursor ${activeItem === index ? 'active' : ''}`}>
                            <img
                                className="carousel-image"
                                src={item.src}
                                alt={item.alt}
                            />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </>
    )
}
