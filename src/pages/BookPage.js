import React from 'react';
import {Card, Col, Container, Image, Row, Button} from "react-bootstrap";
import BigStar from '../assets/StarBig.png'

const BookPage = () => {
    const book = {id: 1, name: 'Кровь Бога. Книга первая', price: 399, rating: 5, img: 'f9f4462b-f93d-4510-89f8-bb3706ed7438.jpg'};
    const description = [{
        id: 1,
        title: 'Аннотация',
        description: 'Са́реф — молодой успешный человек, который погибает в родном мире. Необъяснимым способом перерождается в теле более молодого человека в совершенно другом мире, где существуют магия и различные создания из сказок прежнего мира. Насильственно Са́рефа подвергают инициации, и теперь он является природным врагом людей и других рас. Герой становится вампиром и должен выжить в новом мире, где в этом поможет пытливый ум и странная Система. Но помимо вопроса выживания перед ним вскоре встанут моральные дилеммы и приближающаяся катастрофа.'
    }]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={book.img}/>
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
                <h2>{description[0].title}</h2>
                {description.map(info =>
                    <Row key={info.id}>
                         {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default BookPage;