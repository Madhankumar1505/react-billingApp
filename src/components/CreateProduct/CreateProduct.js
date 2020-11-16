import React, { Component } from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPlusSquare, faUndo, faEdit } from '@fortawesome/free-solid-svg-icons';

export default class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.changeProduct = this.changeProduct.bind(this);
        console.log(this);
        console.log(props);
        this.state = {
            show: false
        }
    };
    initialState = {
        id: '',
        productName: '',
        productCode: '',
        createDate: new Date(),
        mrp: 0.0,
        qty: 0,
        stock: 0
    };

    changeProduct = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    changeEvent = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submit = event => {
        debugger;
        console.log(this.state);
        window.alert(this.state.createDate);
    }
    componentDidMount() {
        const productCode = this.props.match.params.productCode;
        if (productCode) {
            if (productCode === 'Test') {
                this.setState({
                    productCode: productCode,
                    productName: 'Testing 1',
                    createDate: new Date(),
                    mrp: 67.45,
                    qty: 10,
                    stock: 10,
                });
            }
        }
    }

    render() {
        const { productName, productCode, createDate, mrp, qty, stock } = this.state;
        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <FontAwesomeIcon icon={this.state.productCode ? faEdit : faPlusSquare} /> {this.state.productCode ? "Edit the Product" : "Add New Product"}
                    </Card.Header>
                    <Form onReset={() => this.setState(() => this.initialState)} onSubmit={this.submit} id="createPrd">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" name="productName" value={productName}
                                        className={"bg-dark text-white"} onChange={this.changeEvent} placeholder="Enter The Product Name"
                                        autoComplete="off" required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGroupProductCode">
                                    <Form.Label>Product Code</Form.Label>
                                    <Form.Control type="text" name="productCode" value={productCode} onChange={this.changeEvent}
                                        className={"bg-dark text-white"} placeholder="Enter The Product Code"
                                        disabled={true} autoComplete="off" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGroupDate">
                                    <Form.Label>Created Date</Form.Label>
                                    <Form.Control type="date" name="createDate" value={createDate} onChange={this.changeEvent}
                                        placeholder="Pick the Date" autoComplete="off" required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGroupMRP">
                                    <Form.Label>MRP</Form.Label>
                                    <Form.Control type="text" name="mrp" value={mrp}
                                        placeholder="Enter the MRP" autoComplete="off" onChange={this.changeEvent}
                                        className={"bg-dark text-white"} size="sm" required />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGroupqty">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="number" name="qty" value={qty} onChange={this.changeEvent}
                                        placeholder="Enter the Quantity" autoComplete="off"
                                        className={"bg-dark text-white"} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGroupstock">
                                    <Form.Label>Stock </Form.Label>
                                    <Form.Control type="number" name="stock" value={stock} onChange={this.changeEvent}
                                        placeholder="Enter the Stock" autoComplete="off"
                                        className={"bg-dark text-white"} />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{ "textAlign": "center" }}>
                            <Button size="sm" variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave} /> {this.state.productCode ? "Update" : "Save"}
                            </Button>{' '}
                            <Button size="sm" variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        );
    }

};