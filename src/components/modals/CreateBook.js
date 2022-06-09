import React, {useContext, useEffect, useState} from 'react';
import {Modal, Button, Form, Dropdown, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createBook, fetchAuthors, fetchBooks, fetchTypes} from "../../http/bookAPI";
import {observer} from "mobx-react-lite";


const CreateBook = observer(({show, onHide}) => {
    const {books} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [author, setAuthor] = useState(null);
    const [type, setType] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => books.setTypes(data));
        fetchAuthors().then(data => books.setAuthors(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addBook = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('authorId', books.selectedAuthor.id);
        formData.append('typeId', books.selectedType.id);
        formData.append('info', JSON.stringify(info));
        createBook(formData).then(data => onHide());
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить книгу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle>
                            {books.selectedType.name || 'Выберите тип'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {books.types.map(type =>
                            <Dropdown.Item
                                onClick={() => books.setSelectedType(type)}
                                key={type.id}
                            >
                                {type.name}
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle>
                            {books.selectedAuthor.name || 'Выберите автора'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {books.authors.map(author =>
                                <Dropdown.Item
                                    onClick={() => books.setSelectedAuthor(author)}
                                    key={author.id}
                                >
                                    {author.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите название книги'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите стоимость книги'
                        type='number'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant='outline-dark'
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className='mt-2' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={e => changeInfo('title', e.target.value, i.number)}
                                    placeholder='Введите название' />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={e => changeInfo('description', e.target.value, i.number)}
                                    placeholder='Введите описание' />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant='outline-danger'
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant='outline-danger'
                    onClick={onHide}
                >
                    Закрыть
                </Button>
                <Button
                    variant='outline-success'
                    onClick={addBook}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBook;