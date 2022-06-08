import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateAuthor from "../components/modals/CreateAuthor";
import CreateType from "../components/modals/CreateType";
import CreateBook from "../components/modals/CreateBook";

const Admin = () => {
    const [authorVisible, setAuthorVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [bookVisible, setBookVisible] = useState(false);
    return (
        <Container className='d-flex flex-column'>
            <Button
                variant={'outline-dark'}
                className='mt-4 p-3'
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={'outline-dark'}
                className='mt-4 p-3'
                onClick={() => setAuthorVisible(true)}
            >
                Добавить автора
            </Button>
            <Button
                variant={'outline-dark'}
                className='mt-4 p-3'
                onClick={() => setBookVisible(true)}
            >
                Добавить книгу
            </Button>
            <CreateAuthor
                show={authorVisible}
                onHide={() => setAuthorVisible(false)}/>
            <CreateType
                show={typeVisible}
                onHide={() => setTypeVisible(false)}/>
            <CreateBook
                show={bookVisible}
                onHide={() => setBookVisible(false)}/>
        </Container>
    );

};

export default Admin;