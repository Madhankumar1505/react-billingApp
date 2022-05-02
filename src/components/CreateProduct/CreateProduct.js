import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPlusSquare, faUndo, faEdit } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../App';
import { useFetchData } from '../../api';
import MyToast from '../MyToast';

const CreateProduct = () => {

    const appState = useContext(AppContext);
    const { productForm, setProductForm } = appState.product;
    const [resData, setResData] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    const changeEvent = event => {
        setProductForm({ ...productForm, [event.target.name]: event.target.value });

    }

    const reqURL = {
        url: "saveProduct",
        method: "POST",
        dataPrefix: "",
        data: productForm
    };

    const [loading, error, saveAPI] = useFetchData({ reqObj: reqURL, setData: setResData });

    const submit = event => {
        //debugger;
        console.log(productForm);
        saveAPI(reqURL);
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

    useEffect(() => {
        if (resData) {
            setShowNotification(true);
        }
    }, [resData]);

    return (
        <div>
            <div style={{ "display": showNotification ? "block" : "none" }}>
                <MyToast show={showNotification} message={"Saved Sucessfully"} type={"success"}></MyToast>
            </div>
            <div className="card border border-dark bg-dark text-white">
                <div className="card-header">
                    <FontAwesomeIcon icon={productForm.productCode ? faEdit : faPlusSquare} />
                    {productForm.productCode ? " Edit the Product" : " Add New Product"}
                </div>
                <Form id="createPrd">
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col">
                                <label className="form-label">Product Name</label>
                                <input type="text" name="productName"
                                    value={productForm.productName}
                                    className="bg-dark text-white form-control"
                                    onChange={changeEvent}
                                    placeholder="Enter The Product Name"
                                    autoComplete="off" required />
                            </div>
                            <div className="form-group col">
                                <label className="form-label">Product Code</label>
                                <input type="text" name="productCode"
                                    value={productForm.productCode}
                                    onChange={changeEvent}
                                    className="bg-dark text-white form-control"
                                    placeholder="Enter The Product Code"
                                    disabled={true} autoComplete="off" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label className="form-label">Created Date</label>
                                <input type="date" name="createDate"
                                    value={productForm.createDate}
                                    onChange={changeEvent}
                                    placeholder="Pick the Date"
                                    className="bg-dark text-white form-control"
                                    autoComplete="off" required />
                            </div>
                            <div className="form-group col">
                                <label className="form-label">MRP</label>
                                <input type="text" name="mrp"
                                    value={productForm.mrp}
                                    placeholder="Enter the MRP"
                                    autoComplete="off" onChange={changeEvent}
                                    className="bg-dark text-white form-control"
                                    size="sm" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label className="form-label">Quantity</label>
                                <input type="number" name="qty"
                                    value={productForm.qty}
                                    onChange={changeEvent}
                                    placeholder="Enter the Quantity" autoComplete="off"
                                    className="bg-dark text-white form-control" />
                            </div>
                            <div className="form-group col">
                                <label className="form-label">Stock </label>
                                <input type="number" name="stock"
                                    value={productForm.stock} onChange={changeEvent}
                                    placeholder="Enter the Stock" autoComplete="off"
                                    className="bg-dark text-white form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer" style={{ "textAlign": "center" }}>
                        <Button size="sm" variant="success" type="button" onClick={submit}>
                            <FontAwesomeIcon icon={faSave} />
                            {productForm.productCode ? " Save" : " Save"}
                        </Button>{' '}
                        <Button size="sm" variant="info" type="button"
                            onClick={resetForm}>
                            <FontAwesomeIcon icon={faUndo} /> Reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );

}
export default CreateProduct;