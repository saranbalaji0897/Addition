
import React from 'react';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
export const Add = () =>{
    return (
        <div>
            <Row className="d-flex justify-content-center">
            <div >
            <input type="text"></input>
            <Button variant="primary">ADD</Button>
            </div>
            </Row>
        </div>
    )
}