import baseStore from "../stores/base";
const _ = require('lodash');

describe("Filter Products Test", () => {
  beforeEach(async () => {
    await baseStore.getProducts();
    await baseStore.getFilterItem();

  });

  it("should filter products based on keyword", () => {
    const productList = baseStore.productsBaseData;
    const modelList = baseStore.models;
    const brandList = baseStore.brands;
    var randomIndex = 0,
      key = "name",
      searchText = "";
    var type = Math.floor(Math.random() * 3) + 1;
    var testData = [];
    switch (type) {
      case 1:
        //product
        randomIndex = Math.floor(Math.random() * productList.length);
        testData = productList[randomIndex];
        key = "name";
        console.log(testData);

        searchText = testData[key];
        break;
      case 2:
        randomIndex = Math.floor(Math.random() * brandList.length);
        testData = brandList[randomIndex];
        key = "brand";
        console.log(testData);

        searchText = testData[key];

        //brand
        break;
      case 3:
        randomIndex = Math.floor(Math.random() * modelList.length);
        testData = modelList[randomIndex];
        key = "model";
        console.log(testData);
        searchText = testData[key];

        //model
        break;

      default:
        break;
    }

    console.log(type, searchText, key);
    baseStore.SearchBox(type, searchText, key);
    const filteredProducts = _.filter(baseStore.products, (item) => {
      let dat = item[key];
      console.log("data and key, type: " + dat + ' - ' + key + ' - ' + type);
      return dat.includes(searchText);
    });
    
    expect(filteredProducts.length).toBeGreaterThan(0);
   });
});
