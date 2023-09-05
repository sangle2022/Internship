import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  listProducts } from "../Actions/CardAction";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

const HomeScreens = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="outer_div">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center align-items-center">
            <h1>Chuck Norries</h1>
          </div>
        </div>
        <div className="row">
          {loading?<Loader/>: products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-12 " key={product}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreens;
