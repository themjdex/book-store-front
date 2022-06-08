import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const AuthorsBar = observer(() => {
    const {books} = useContext(Context);
    return (
        <Row className='d-flex'>
            {books.authors.map(author =>
            <Card
                style={{cursor: 'pointer'}}
                key={author.id}
                className='p-3'
                onClick={() => books.setSelectedAuthor(author)}
                border={author.id === books.selectedAuthor.id ? 'danger' : 'light'}
            >
                {author.name}
            </Card>
            )}
        </Row>
    );
});

export default AuthorsBar;