import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GetProduct = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const resJson = await res.json();
    setData(resJson);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <Row>
        {data &&
          data.products &&
          data.products.map((product, index) => {
            return (
              <Col xs={6} md={4} key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product.thumbnail} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Link href={'products/' + product.id}>
                      Go to Detail
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default GetProduct;
