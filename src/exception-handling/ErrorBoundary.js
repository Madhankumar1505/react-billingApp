import React, { Component } from "react";
import Prototypes from "prop-types";

export default class ErrorBoundary extends Component {
    state = {
        error: "",
        errorInfo: "",
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.log({ error, errorInfo });
        this.setState({ errorInfo });
    }

    render() {
        const { hasError, errorInfo } = this.state;
        if (hasError) {
            return (
                <div className="card my-5">
                    <div className="card-header">
                        <p>
                            There is an error in loading this.page.{' '}
                            <span style={{ cursor: 'pointer', color: '#0077FF' }}
                                onClick={() => {
                                    window.location.reload();
                                }}>
                                Reload this page
                            </span>{' '}
                        </p>
                    </div>

                </div>
            );
        }
        return this.props.children;
    }
}

ErrorBoundary.prototypes = {
    children: Prototypes.oneOfType([Prototypes.object, Prototypes.array]).isRequired,
}