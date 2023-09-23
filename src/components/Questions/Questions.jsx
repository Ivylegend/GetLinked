import React from 'react';
import {FaPlus} from "react-icons/fa";
import "./Questions.css";

const Questions = ({text}) => {
  return (
    <div className='app__question'>
        <p>{text}</p>
        <FaPlus />
        {/* <img src="" alt=''/> */}
    </div>
  )
}

export default Questions