import React, {useState} from 'react';
import {Modal, Button, Form} from "react-bootstrap";
import {createAuthor, createType} from "../../http/bookAPI";


const CreateAuthor = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const addAuthor = () => {
        createAuthor({name: value}).then(data => {
            setValue('');
            onHide();
        })
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
                    Добавить автора
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder='Введите ФИО автора'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
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
                    onClick={addAuthor}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAuthor;