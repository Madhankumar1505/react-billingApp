import React, { Component } from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPlusSquare, faUndo, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import MyToast from './MyToast';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
        this.state = {
            show: false
        };
    }
    initialState = {
        id: '', title: '', author: '', coverPhotoURL: '', isbnNumber: '', price: '', language: '', genre: ''
    };
    bookChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submitBook = event => {
        const book = {
            title: this.state.title,
            author: this.state.author,
            coverPhotoURL: this.state.coverPhotoURL,
            isbnNumber: this.state.isbnNumber,
            price: this.state.price,
            language: this.state.language,
            genre: this.state.genre
        };
        axios.post("http://localhost:7080/apps/savebook", book)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true, "saveFlag": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                } else {
                    this.setState({ "show": true, "saveFlag": false });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                }
            }).catch((error) => {
                this.setState({ "show": true, "saveFlag": false });
                setTimeout(() => this.setState({ "show": false }), 3000);
                console.error("Error - " + error);
            });

        this.setState(this.initialState);
    };
    resetBook = () => {
        this.setState(() => this.initialState);
    };

    render() {
        const { title, author, coverPhotoURL, isbnNumber, price, language } = this.state;
        return (
            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show={this.state.show} message={this.state.saveFlag ? "Saved Sucessfully" : "Failed to Save"} type={this.state.saveFlag ? "success" : "Failure"}></MyToast>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update Book" : "Add New Book"}
                    </Card.Header>

                    <Form onReset={this.resetBook} onSubmit={this.submitBook} id="bookFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" name="title" onChange={this.bookChange}
                                        value={title} className={"bg-dark text-white"}
                                        placeholder="Enter Book Title" autoComplete="off" required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAuthor">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" name="author" onChange={this.bookChange}
                                        value={author} className={"bg-dark text-white"}
                                        placeholder="Enter Book Author" autoComplete="off" required />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridcoverPhotoURL">
                                    <Form.Label>Cover Photo URL</Form.Label>
                                    <Form.Control type="text" name="coverPhotoURL" onChange={this.bookChange}
                                        value={coverPhotoURL} className={"bg-dark text-white"}
                                        placeholder="Enter Book coverPhotoURL" autoComplete="off" required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridisbnNumber">
                                    <Form.Label>ISBN Number</Form.Label>
                                    <Form.Control type="text" name="isbnNumber" onChange={this.bookChange}
                                        value={isbnNumber} className={"bg-dark text-white"}
                                        placeholder="Enter Book isbnNumber" autoComplete="off" required />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridprice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" name="price" onChange={this.bookChange}
                                        value={price} className={"bg-dark text-white"}
                                        placeholder="Enter Book price" autoComplete="off" required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridlanguage">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control type="text" name="language" onChange={this.bookChange}
                                        value={language} className={"bg-dark text-white"}
                                        placeholder="Enter Book language" autoComplete="off" required />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{ "textAlign": "center" }}>
                            <Button size="sm" variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Save"}
                            </Button>{' '}
                            <Button size="sm" variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card >
            </div >
        );
    };
}