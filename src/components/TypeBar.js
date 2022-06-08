import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {ListGroup} from 'react-bootstrap';

const TypeBar = observer(() => {
    const {books} = useContext(Context);
    return (
        <ListGroup>
            {books.types.map(type =>
            <ListGroup.Item
                style={{cursor: 'pointer'}}
                active={type.id === books.selectedType.id}
                key={type.id}
                onClick={() => books.setSelectedType(type)}
            >
                {type.name}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;