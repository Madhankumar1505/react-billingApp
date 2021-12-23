import React, { useContext, useState } from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPlusSquare, faUndo, faEdit } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../App';
import { useFetchData } from '../../api';
import axios from 'axios';

const CreateProduct = () => {

    const appState = useContext(AppContext);
    const { productForm, setProductForm } = appState.product;
    const [resData, setResData] = useState(null);

    const changeEvent = event => {
        setProductForm({ ...productForm, [event.target.name]: event.target.value });

    }

    const reqURL = {
        url: "saveProduct",
        method: "POST",
        dataPrefix: "",
        data: {
            productForm
        }
    };

    const [loading, error, saveAPI] = useFetchData({ reqObj: reqURL, setData: setResData });

    const submit = event => {
        //debugger;
        window.alert(productForm.createDate);
        console.log(productForm);
        saveAPI(reqURL);

        /*axios.post("http://localhost:7080/apps/saveProduct", productForm)
            .then(response => {
                if (response.data != null) {
                    //this.setState({ "show": true, "saveFlag": true });
                    //setTimeout(() => this.setState({ "show": false }), 3000);
                } else {
                    //this.setState({ "show": true, "saveFlag": false });
                    //setTimeout(() => this.setState({ "show": false }), 3000);
                }
            }).catch((error) => {
                //this.setState({ "show": true, "saveFlag": false });
                //setTimeout(() => this.setState({ "show": false }), 3000);
                console.error("Error - " + error);
            });*/
    }

    const resetForm = () => {
        setProductForm({
            id: '',
            productName: '',
            productCode: '',
            createDate: new Date(),
            mrp: 0.0,
            qty: 0,
            stock: 0
        });
    }
    /*componentDidMount() {
        const productCode = props.match.params.productCode;
        if (productCode) {
            if (productCode === 'Test') {
                setState({
                    productCode: productCode,
                    productName: 'Testing 1',
                    createDate: new Date(),
                    mrp: 67.45,
                    qty: 10,
                    stock: 10,
                });
            }
        }
    }*/

    return (
        <div>
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    <FontAwesomeIcon icon={productForm.productCode ? faEdit : faPlusSquare} />
                    {productForm.productCode ? "Edit the Product" : "Add New Product"}
                </Card.Header>
                <Form id="createPrd">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridProductName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" name="productName"
                                    value={productForm.productName}
                                    className={"bg-dark text-white"}
                                    onChange={changeEvent}
                                    placeholder="Enter The Product Name"
                                    autoComplete="off" required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupProductCode">
                                <Form.Label>Product Code</Form.Label>
                                <Form.Control type="text" name="productCode"
                                    value={productForm.productCode}
                                    onChange={changeEvent}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter The Product Code"
                                    disabled={true} autoComplete="off" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGroupDate">
                                <Form.Label>Created Date</Form.Label>
                                <Form.Control type="date" name="createDate"
                                    value={productForm.createDate} onChange={changeEvent}
                                    placeholder="Pick the Date"
                                    autoComplete="off" required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupMRP">
                                <Form.Label>MRP</Form.Label>
                                <Form.Control type="text" name="mrp"
                                    value={productForm.mrp}
                                    placeholder="Enter the MRP"
                                    autoComplete="off" onChange={changeEvent}
                                    className={"bg-dark text-white"}
                                    size="sm" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGroupqty">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" name="qty"
                                    value={productForm.qty}
                                    onChange={changeEvent}
                                    placeholder="Enter the Quantity" autoComplete="off"
                                    className={"bg-dark text-white"} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupstock">
                                <Form.Label>Stock </Form.Label>
                                <Form.Control type="number" name="stock"
                                    value={productForm.stock} onChange={changeEvent}
                                    placeholder="Enter the Stock" autoComplete="off"
                                    className={"bg-dark text-white"} />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{ "textAlign": "center" }}>
                        <Button size="sm" variant="success" type="button" onClick={submit}>
                            <FontAwesomeIcon icon={faSave} />
                            {productForm.productCode ? "Save" : "Save"}
                        </Button>{' '}
                        <Button size="sm" variant="info" type="button"
                            onClick={resetForm}>
                            <FontAwesomeIcon icon={faUndo} /> Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
    );

}
export default CreateProduct;