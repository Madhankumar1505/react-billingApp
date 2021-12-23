import React, { useContext } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { AppContext } from '../App';

export default function Welcome(props) {

    const appState = useContext(AppContext);
    const headerArray = appState.headerArray;

    return (
        <Jumbotron className="bg-dark text-white">
            <blockquote className="blockquote mb-0">
                <h1>
                    {headerArray.heading}
                </h1>
                <p>
                    {headerArray.quote}
                </p>
                <footer className="blockquote-footer">
                    {headerArray.footer}
                </footer>
            </blockquote>
        </Jumbotron>
    );
}