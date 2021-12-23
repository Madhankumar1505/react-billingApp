import { useState } from "react";
import { useNavHook } from "./nav-hook";
import { useValidate } from "./validate-hook";

export const useAppState = () => {

    const [productForm, setProductForm] = useState({
        id: '',
        productName: '',
        productCode: '',
        createDate: new Date(),
        mrp: 0.0,
        qty: 0,
        stock: 0
    });
    const [validate, setValidate] = useValidate();
    const navInfo = useNavHook(validate, setValidate);
    const headerArray =
    {
        heading: "Welcome to the Sai Deepan Store Shop",
        quote: "A Big Business Starts Small.",
        footer: "Madhan Kumar"
    };

    const appState = {
        product: { productForm, setProductForm },
        navInfo: { ...navInfo },
        headerArray: { ...headerArray }
    };
    return appState;
};