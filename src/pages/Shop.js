import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import AuthorsBar from "../components/AuthorsBar";
import BookList from "../components/BookList";

const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <AuthorsBar />
                    <BookList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;