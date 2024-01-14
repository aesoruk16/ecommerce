
import React from "react";
import { observer } from "mobx-react";
import _ from 'lodash';
import "./CustomFilter.css";
import { sortBy, brands, model } from "../../../data/index";
import SearchBox from "../../Partials/SearchBox/SearchBox";
import baseStore from "../../../stores/base";
const CustomFilter = ({ title, selectedData, type,searchType }) => {
  let data,name;
  var method;
  switch (selectedData) {
    case "sortBy":
      data = sortBy;
      name="name";
      method = (selectedItem)=>baseStore.changeSelectedSort(selectedItem);
      break;
    case "brands":
      data =baseStore.brands
      name="brand";
      method = (selectedItem)=>baseStore.changeSelectedBrands(selectedItem);
      break;
    case "model":
      data =baseStore.models;
      name="model";
      method = (selectedItem)=>baseStore.changeSelectedModel(selectedItem);
      break;
    default:
      data = [];
  }
 
  return (
    <div className="filterCard">
      <div className="mb-1">
        <span className="title">{title}</span>
      </div>
      <div className="filterCardChild">
        {type == "checkbox" ? (
          <div className="mb-3">
            <SearchBox type={searchType} filter={name}/>
          </div>
        ) : null}
       <div className={type=="checkbox"?"listFilter":null}>
       {data.map((option) => (
          <div className="filterItem" key={option.key??option[name]}>
            <input
              onChange={() => method(option.key??option[name])}
              className="select"
              type={type}
              id={`option-${option.key??option[name]}`}
              name="filterOption"
            />
            <label className="filterItemText" htmlFor={`option-${option.key??option[name]}`}>
              {option[name]}
            </label>
          </div>
        ))}
       </div>
      </div>
    </div>
  );
};

export default observer(CustomFilter);
