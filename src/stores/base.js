import { makeAutoObservable, toJS } from "mobx";
import _ from "lodash";

import {
  genericGetMethod,
  genericPostMethod,
  endPoints,
} from "../services/api";
import logger from "../utils/logger";

class BaseStore {
  productsBaseData = [];
  cart = [];
  products = [];
  selectedSort = null;
  selectedBrands = [];
  selectedModel = [];
  defaultBrands = [];
  defaultModels = [];
  brands = [];
  models = [];
  constructor() {
    this.init();
    makeAutoObservable(this);
  }
  async init() {
    await this.getProducts();
    this.getFilterItem();
    
    this.getCart();
  }
  getCart(){
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
  }

  getFilterItem() {
    this.models = _.uniqBy(this.productsBaseData, "model");
    this.brands = _.uniqBy(this.productsBaseData, "brand");
    this.defaultBrands = this.brands;
    this.defaultModels = this.models;
  }
  changeSelectedSort(val) {
    this.selectedSort = val;
    this.filter();
  }
  ResetFilter() {
    this.selectedSort = [];
    this.selectedBrands = [];
    // this.filter();
  }
  changeSelectedBrands(brand) {
    const index = this.selectedBrands.indexOf(brand);
    if (index === -1) {
      this.selectedBrands.push(brand);
    } else {
      this.selectedBrands.splice(index, 1);
    }
    this.filter();

    // alert(JSON.stringify(this.selectedBrands))
  }
  changeSelectedModel(val) {
    const index = this.selectedModel.indexOf(val);
    if (index === -1) {
      this.selectedModel.push(val);
    } else {
      this.selectedModel.splice(index, 1);
    }
    this.filter();
  }
  deleteCart(){
    this.cart=[];
    localStorage.setItem('cart', JSON.stringify(this.cart));

  }
  calculateTotalPrice() {
    let totalPrice = 0;
  
    for (const product of this.cart) {
      totalPrice += product.quantity * product.price;
    }
  
    return totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  SearchBox(type = null, search = null, filter) {
    console.log(type, search);
    var data = null;
    const like = (value, searchTerm) => {
      const regex = new RegExp(_.escapeRegExp(searchTerm), "i");
      return regex.test(value);
    };
    switch (type) {
      case 1:
        data = _.filter(this.productsBaseData, (item) =>
          like(item[filter], search)
        );
        this.products = data;
        this.ResetFilter();
        break;
      case 2:
        data = _.filter(this.defaultBrands, (item) =>
          like(item[filter], search)
        );
        this.brands = data;
        break;
      case 3:
        data = _.filter(this.defaultModels, (item) =>
          like(item[filter], search)
        );
        this.models = data;
        break;

      default:
        break;
    }
  }

  filter() {
    let filterData = [];
    switch (this.selectedSort) {
      case 1:
        filterData = _.sortBy(this.productsBaseData, ["createdAt"]).reverse();
        break;
      case 2:
        filterData = _.sortBy(this.productsBaseData, ["createdAt"]);
        break;
      case 3:
        filterData = _.sortBy(this.productsBaseData, ["price"]).reverse();
        break;
      case 4:
        filterData = _.sortBy(this.productsBaseData, ["price"]);
        break;
      default:
        filterData = this.productsBaseData;
        break;
    }
    if (this.selectedBrands.length != 0) {
      console.log(toJS(this.selectedBrands));
      filterData = _.filter(filterData, (product) => {
        //this.selectedBrands.includes çalışmadı daha sonra bka.
        return this.selectedBrands.includes(product.brand);
      });
    } else {
      filterData = filterData;
    }
    if (this.selectedModel.length != 0) {
      console.log(toJS(this.selectedModel));
      filterData = _.filter(filterData, (product) => {
        //this.selectedBrands.includes çalışmadı daha sonra bka.
        return this.selectedModel.includes(product.model);
      });
    } else {
      filterData = filterData;
    }
    this.products = filterData;
  }

  async getProducts() {
    const endPoint = endPoints.product.products;

    try {
      const productsData = await genericGetMethod(endPoint);
      logger.info({
        endPoint: endPoint,
        type: "getProducts",
        data: productsData.length,
      });
      if (productsData != null) {
        this.products = productsData;
        this.productsBaseData = productsData;
      }
    } catch (error) {
      logger.error({
        endPoint: endPoint,
        type: "getProducts",
        error: error,
      });
    }
  }
    
  addToCart(product, type = null) {
    var existingProductIndex = this.cart.findIndex(
      (item) => item.id === product.id
    );
  
    if (type === 0 && existingProductIndex !== -1) {
      this.cart[existingProductIndex].quantity -= 1;
  
      if (this.cart[existingProductIndex].quantity === 0) {
        this.cart.splice(existingProductIndex, 1);
      }
    } else if (existingProductIndex !== -1) {
      this.cart[existingProductIndex].quantity += 1;
  
      if (this.cart[existingProductIndex].quantity === 0) {
        this.cart.splice(existingProductIndex, 1);
      }
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  
     this.saveCartToLocalStorage();
  }
  
  saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  
}

const baseStore = new BaseStore();
export default baseStore;
