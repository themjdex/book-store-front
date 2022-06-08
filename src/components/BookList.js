import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import BookItem from "./BookItem";

const BookList = observer(() => {
    const {books} = useContext(Context);
    return (
        <Row className='d-flex'>
            {books.books.map(book =>
            <BookItem key={book.id} book={book}/>
            )}
        </Row>
    );
});

export default BookList;