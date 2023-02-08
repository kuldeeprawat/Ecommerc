import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDetail = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );
  const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const resJson = await res.json();
    const FilterData = resJson.products.find((pro) => pro.id == productId);
    setData(FilterData);
  };
  // Whenever items change save to localStorage
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartData));
  }, [cartData]); //dependency is items
  const addToCart = () => {
    setCartData([...cartData, data]);
  };
  useEffect(() => {
    fetchData();
  }, [productId]);
  return (
    <Container>
      <Row>
        {data && (
          <Col className="preview col-md-12">
            <Col>
              <div className="tab-pane active" id="pic-1">
                <img src={data.thumbnail} />
              </div>

              <ul className="preview-thumbnail nav nav-tabs">
                {data.images &&
                  data.images.map((img, index) => (
                    <li key={img} className="active">
                      <a data-target={'#pic-' + 1} data-toggle="tab">
                        <img src={img} width="40" />
                      </a>
                    </li>
                  ))}
              </ul>
            </Col>
            <Col>
              <h3 className="product-title">{data.title}</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description">{data.description}</p>
              <h4 className="price">
                current price: <span>{data.price}</span>
              </h4>
              <p className="vote">
                <strong>91%</strong> of buyers enjoyed this product!{' '}
                <strong>(87 votes)</strong>
              </p>

              <div className="action">
                <button
                  className="add-to-cart btn btn-default"
                  onClick={() => addToCart()}
                  type="button"
                >
                  add to cart
                </button>
                <button className="like btn btn-default" type="button">
                  <span className="fa fa-heart"></span>
                </button>
              </div>
            </Col>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ProductDetail;
