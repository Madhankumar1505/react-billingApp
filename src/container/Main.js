import React, { lazy } from "react";
import { Suspense } from "react";
const Welcome = lazy(() => import("../components/Welcome"));
const BillProducts = lazy(() => import("../components/BillProducts/BillProducts"));
const CreateProduct = lazy(() => import("../components/CreateProduct/CreateProduct"));
const Newsletter = lazy(() => import("../components/PluralSight/Newsletter"));
const ViewProduct = lazy(() => import("../components/ViewProduct/ViewProducts"));

const getView = (page, goToPage) => {
    let component;
    switch (page) {
        case "createPRD":
            component = <CreateProduct />
            break;
        case "editPRD":
            component = <CreateProduct />
            break;
        case "viewPRD":
            component = <ViewProduct />
            break;
        case "billPRD":
            component = <BillProducts />
            break;
        case "cssplural":
            component = <Newsletter />
            break;
        default:
            component = <Welcome />;
            break;
    }
    return component;
};

const Main = ({ page, goToPage }) => {

    return (
        <Suspense fallback={true}>
            <div style={{
                height: "100%"
            }}>
                {getView(page, goToPage)}
            </div>
        </Suspense >
    );
}

export default Main;