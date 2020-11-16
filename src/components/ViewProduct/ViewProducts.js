import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { ButtonGroup, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


export default class ViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    productCode: "Test",
                    productName: "Test",
                    createdDate: new Date().toLocaleString(),
                    mrp: 35.65,
                    qty: 10,
                    stock: 10
                },
                {
                    productCode: "Test1",
                    productName: "Test1",
                    createdDate: new Date().toLocaleString(),
                    mrp: 35.65,
                    qty: 10,
                    stock: 10
                }
            ]
        };

    }
    render() {
        const { products } = this.state;
        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <div style={{ "float": "left" }}>
                            <FontAwesomeIcon icon={faList} /> View All Products
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Created Date</th>
                                    <th>MRP</th>
                                    <th>Quantity</th>
                                    <th>Stock</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="7">
                                                No Records Available
                                        </td>
                                        </tr> : products.map((product) => (
                                            <tr key={product.productCode}>
                                                <td>{product.productCode}</td>
                                                <td>{product.productName}</td>
                                                <td>{product.createdDate}</td>
                                                <td>{product.mrp}</td>
                                                <td>{product.qty}</td>
                                                <td>{product.stock}</td>
                                                <td>
                                                    <ButtonGroup>
                                                        <Link to={'edit/' + product.productCode} className="btn btn-sm btn-outline-primary">
                                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                                        </Link>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>

                </Card>
            </div >
        );
    }
}