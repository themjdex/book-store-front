import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import AuthorsBar from "../components/AuthorsBar";
import BookList from "../components/BookList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAuthors, fetchBooks, fetchTypes} from "../http/bookAPI";

const Shop = observer(() => {
    const {books} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => books.setTypes(data));
        fetchAuthors().then(data => books.setAuthors(data));
        fetchBooks().then(data => books.setBooks(data.rows));
    }, []);

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
});

export default Shop;