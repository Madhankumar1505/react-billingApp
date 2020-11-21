import { faList, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Card, FormGroup, FormLabel } from 'react-bootstrap';


export default class BillProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billPrd: 'Test',
            dataLists: ['Test', 'Test1', 'Test3', 'Test4']
        }
    };
    render() {
        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <div style={{ "float": "left" }}>
                            <FontAwesomeIcon icon={faShoppingCart} /> Bill All the Products
                        </div>
                    </Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
            </div>

        );
    }
}