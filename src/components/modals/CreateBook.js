import React, {useContext, useState} from 'react';
import {Modal, Button, Form, Dropdown, Row, Col} from "react-bootstrap";
import {Context} from "../../index";


const CreateBook = ({show, onHide}) => {
    const {books} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
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
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {books.types.map(type =>
                            <Dropdown.Item
                                key={type.id}
                            >
                                {type.name}
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle>Выберите автора</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {books.authors.map(author =>
                                <Dropdown.Item
                                    key={author.id}
                                >
                                    {author.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите название книги' />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите стоимость книги'
                        type='number'/>
                    <Form.Control
                        className='mt-3'
                        type='file'/>
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
                                <Form.Control placeholder='Введите название' />
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder='Введите описание' />
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
                    onClick={onHide}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBook;