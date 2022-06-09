import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row, Button} from "react-bootstrap";
import BigStar from '../assets/StarBig.png'
import {useParams} from "react-router-dom";
import {fetchOneBook} from "../http/bookAPI";

const BookPage = () => {
    const [book, setBook] = useState({info: []});
    const {id} = useParams();
    console.log(book)
    useEffect(() => {
        fetchOneBook(id).then(data => setBook(data));
    }, []);

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + book.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex align-items-center flex-column'>
                        <h2>{book.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${BigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 60}}>
                            {book.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                    className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>{book.price} руб.</h3>
                        <Button variant='outline-dark'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column'>
                <h2>{book.info[0]}</h2>
                {book.info.map(info =>
                    <Row key={info.id}>
                         {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default BookPage;