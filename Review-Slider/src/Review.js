import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = (num) => {
        if (num < 0) {
            return people.length - 1;
        } else if (num > people.length - 1) {
            return 0;
        } else {
            return num;
        }
    };

    const prevHandler = () => {
        setIndex(checkNumber(index - 1));
    };

    const nextHandler = () => {
        setIndex(checkNumber(index + 1));
    };

    const randomHandler = () => {
        let random = Math.floor(Math.random() * people.length);
        if (random === index) {
            random++;
        }
        setIndex(checkNumber(random));
    };

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevHandler}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextHandler}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomHandler}>
                Random
            </button>
        </article>
    );
};

export default Review;
