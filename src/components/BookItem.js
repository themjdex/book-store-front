import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import Star from '../assets/star.png';
import {useNavigate} from 'react-router-dom';
import {BOOK_ROUTE} from "../utils/constants";

const BookItem = ({book}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className='mt-3' onClick={() => navigate(BOOK_ROUTE + '/' + book.id)}>
            <Card style={{width: 150, cursor: 'pointer', marginRight: '5px'}}
            border='light'>
                <Image width={150} height={150} src={book.img}/>
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>Литература</div>
                    <div className='d-flex align-items-center'>
                        <div>{book.rating}</div>
                        <Image width={10} height={10} src={Star}/>
                    </div>
                </div>
                <div>{book.name}</div>
            </Card>
        </Col>
    );
};

export default BookItem;