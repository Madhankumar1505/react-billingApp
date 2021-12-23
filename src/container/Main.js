import React, { lazy } from "react";
import { Suspense } from "react";
const Welcome = lazy(() => import("../components/Welcome"));


const getView = (page, goToPage) => {
    let component;
    switch (page) {
        case "":
            break;
        default:
            component = <Welcome />;
            break;
    }
    return component;
};

const Main = ({ page, goToPage }) => {

    return (
        <Suspense>
            <div style={{
                height: "100%"
            }}>
                {getView(page, goToPage)}
            </div>
        </Suspense >
    );
}

export default Main;