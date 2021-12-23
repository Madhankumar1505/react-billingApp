import { useState } from "react";

export const useAppState = () => {

    const [productForm, setProductForm] = useState({
        id: '',
        productName: '',
        productCode: '',
        createDate: new Date(),
        mrp: 0.0,
        qty: 0,
        stock: 0
    })

    const appState = {
        product: { productForm, setProductForm }
    };
    return appState;
};