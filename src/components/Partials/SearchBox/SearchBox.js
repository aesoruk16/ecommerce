import React from 'react';
import { observer } from "mobx-react";
import './SearchBox.css';
import searchIcon from './images/Search.png';
import baseStore from '../../../stores/base';
const SearchBox = ({ type,filter }) => {
  return (
    <div className="input-group align-items-center" id='searchBox'>
      <img className='searchIcon' src={searchIcon} alt="Search Icon" />
      <input
        type="text"
        className="form-control searchBox"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        onChange={(text)=>baseStore.SearchBox(type,text.target.value,filter)}
      />
      
    </div>
     
  );
};

export default observer(SearchBox);
