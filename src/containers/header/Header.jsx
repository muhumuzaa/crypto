import React from 'react';
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
        It is a long established fact that a reader will be distracted by the readable content of a page 
        </h1>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email address'/>
          <button type='button'>Get Started</button>
       
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>mmy text ever since the 1500s, when an</p>
        </div>
      
       
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header