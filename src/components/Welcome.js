import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function Welcome(props) {
    return (
        <Jumbotron className="bg-dark text-white">
            <blockquote className="blockquote mb-0">
                <h1>
                    {props.headerArray.heading}
                </h1>
                <p>
                    {props.headerArray.quote}
                </p>
                <footer className="blockquote-footer">
                    {props.headerArray.footer}
                </footer>
            </blockquote>
        </Jumbotron>
    );
}