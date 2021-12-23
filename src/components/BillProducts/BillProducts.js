import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { Button, Card, Col, Form, Table, } from 'react-bootstrap';
import testJson from './billing.json';

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? testJson : testJson.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionsValue = suggest => suggest;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

export default class BillProducts extends Component {
    constructor(props) {
        super(props);
        this.state = this.initiateForm;
        this.onChnageValue = this.onChnageValue.bind(this);
        this.state = {
            value: '',
            suggestions: [],
            show: false,
            billTable: []
        }
    };

    initiateForm = {
        productCode: '',
        name: '',
        mrp: 0,
        sellRate: 0,
        qty: 0,
        stock: 0,
        amount: 0
    }

    onChange = (event, { newValue }) => {
        if (newValue.name != null) {
            this.setState({
                name: newValue.name,
                productCode: newValue.productCode,
                mrp: newValue.mrp,
                sellRate: newValue.sellRate,
                qty: newValue.qty,
                stock: newValue.stock,
                amount: newValue.sellRate * newValue.qty
            });
        } else {
            this.setState({
                value: newValue
            });
        }
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
            value: '',
        });
    }

    Add = (event) => {
        event.preventDefault();
        if (this.state.productCode !== undefined && this.state.productCode.length > 0) {
            const tempData = this.state.billTable;
            tempData.push(this.state);
            this.setState({ billTable: tempData });
        } else {
            window.alert("Add the line item");
        }
        this.setState(this.initiateForm);
    };

    onChangeAmount = event => {
        if (this.state.stock != null
            && this.state.stock !== '' && this.state.stock > 0) {
            this.setState({
                name: this.state.name,
                productCode: this.state.productCode,
                mrp: this.state.mrp,
                sellRate: this.state.sellRate,
                qty: this.state.qty,
                stock: this.state.stock,
                amount: this.state.sellRate * this.state.qty
            });
        }
    };

    onChnageValue = event => {
        if (event.target.name === 'qty') {
            if (event.target.value < 0) {
                this.setState({
                    [event.target.name]: 0
                });
                return;
            }
        }
        this.setState({
            [event.target.name]: event.target.value
        });
        if (this.state !== null && this.state.sellRate !== undefined
            && this.state.qty !== undefined && event.target.value !== undefined) {
            if (event.target.name === 'sellRate' || event.target.name === 'qty') {
                const sellRate = event.target.name === 'sellRate' ? event.target.value
                    : this.state.sellRate === undefined ? 0 : this.state.sellRate;
                const qty = event.target.name === 'qty' ? event.target.value
                    : this.state.qty === undefined ? 0 : this.state.qty;
                this.setState({ amount: sellRate * qty });
            }
        }
        //window.alert(event.target.name);
    };

    deleteLineItem = (produtcCode) => {
        window.alert('Testing');
    };


    render() {
        const { value, suggestions } = this.state;
        const { productCode, mrp, sellRate, qty, stock, amount } = this.state;
        const inputProps = {
            placeholder: 'Type the programming language',
            value,
            onChange: this.onChange
        };
        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <div style={{ "float": "left" }}>
                            <FontAwesomeIcon icon={faShoppingCart} /> Bill All the Products
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionsValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                        />
                        <br />
                        <br />
                        <div style={{ "display": "block" }}>
                            <Form id="billPrd" onSubmit={this.Add} noValidate>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBillprd">
                                        <Form.Label>Product Code</Form.Label>
                                        <Form.Control type="text" name="productCode" value={productCode}
                                            onChange={this.onChnageValue} disabled></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formBillmrp">
                                        <Form.Label>MRP</Form.Label>
                                        <Form.Control type="text" name="mrp"
                                            value={mrp} autoComplete="off"
                                            onChange={this.onChnageValue} ></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formBilllsp">
                                        <Form.Label>LSP</Form.Label>
                                        <Form.Control type="text" name="sellRate"
                                            value={sellRate} autoComplete="off"
                                            onChange={this.onChnageValue}></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formBillqty">
                                        <Form.Label>QTY</Form.Label>
                                        <Form.Control type="number" name="qty"
                                            value={qty} autoComplete="off"
                                            onChange={this.onChnageValue} ></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formBillstk">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control type="number" name="stock"
                                            value={stock} onChange={this.onChnageValue}
                                            disabled></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formBillamt">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control type="text" name="amount" value={amount}
                                            onChange={this.onChnageValue} disabled></Form.Control>
                                    </Form.Group>
                                    <Button id="sbmit" size="sm" variant="success" type="submit">Add</Button>
                                </Form.Row>
                            </Form>
                        </div>

                        <div style={{ "display": this.state.billTable.length === 0 ? "none" : "block" }}>
                            <Table bordered hover striped variant="dark">
                                <thead>
                                    <tr>
                                        <td>Product Code</td>
                                        <td>Product Name</td>
                                        <td>MRP</td>
                                        <td>Sell Price</td>
                                        <td>Qty</td>
                                        <td>Total</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.state.billTable.length === 0 ?
                                            <tr align="center">
                                                <td colSpan="7">
                                                    No Records Available
                                       </td>
                                            </tr> : this.state.billTable.map((data) =>
                                                <tr key={data.productCode}>
                                                    <td>{data.productCode}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.mrp}</td>
                                                    <td>{data.sellRate}</td>
                                                    <td>{data.qty}</td>
                                                    <td>{data.amount}</td>
                                                    <td>
                                                        <Button type="button"
                                                            id="delte" size="sm" variant="danger"
                                                            onChange={this.deleteLineItem(data.productCode)}>Delete</Button></td>
                                                </tr>)
                                    }
                                </tbody>

                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </div >

        );
    }
}