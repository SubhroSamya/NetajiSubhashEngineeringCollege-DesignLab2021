import React from 'react';
import './Search.css';
import { Link } from 'react-router-dom';

export function Search() {
  return (
    <Link to='sign-up'>
      <input className= 'margin-bottom-none header-input w-input' type='text' placeholder='Enter Your Work Email.'/>      
    </Link>
  );
}
