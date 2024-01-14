import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { observer } from "mobx-react";
import "./Products.css";
import baseStore from "../../stores/base";
import { settings } from "../../brandSettings";
const Product = ({ col }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(baseStore.products.length / settings.perPay);

  const startIndex = (currentPage - 1) * settings.perPay;
  const endIndex = startIndex + settings.perPay;

  const currentData = baseStore.products.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
 
  return (
    <div className={col} key={baseStore.selectedSort}>
      <div className="row">
        {/* {baseStore.products[0].createdAt} */}
        {currentData.map((product) => (
          <div className="col-md-3">
            <div className="productArea">
              <div className="ImageContainer d-flex justify-content-center">
                <img
                  className="img-fluid productImage"
                  src={product.image}
                  title={product.name}
                  loading="lazy"
                />
                
              </div>
              <div className="productAreaChild">
                <div className="mb-2">
                  <span className="price">
                    {product.price}
                    {settings.currency}
                  </span>
                </div>

                <div>
                  <h2 className="productName">{product.name}</h2>
                </div>
              </div>
              <div className="d-flex">
                <button
                  type="button"
                  onClick={() => baseStore.addToCart(product)}
                  className="addCartBtn"
                >
                  <span>Add to Cart</span>
                </button>
                <button
                  type="button"
                  onClick={()=>navigate("/Detail", {
                    state: { product:{...product} },
                  })}
                  className="moreBtn"
                >
                  <span>View</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default observer(Product);
