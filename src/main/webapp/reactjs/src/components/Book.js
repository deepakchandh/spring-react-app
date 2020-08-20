import React, { Component } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSave, faUndo, faList, faEdit } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import MyToast from './MyToast'

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = this.initialState;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    initialState = {
        id: '',
        title: '',
        author: '',
        coverPhotoURL: '',
        isbnNumber: '',
        language: '',
        price: '',
    }

    componentDidMount() {
        const bookId = +this.props.match.params.id;
        if (bookId) {
            this.findBookById(bookId);
        }
    }

    findBookById = (bookId) => {
        fetch("http://localhost:8080/api/v1/books/" + bookId)
            .then(response => response.json())
            .then((book) => {
                this.setState({
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    coverPhotoURL: book.coverPhotoURL,
                    isbnNumber: book.isbnNumber,
                    price: book.price,
                    language: book.language
                });
            }).catch((error) => {
                console.error("Error - " + error);
            });
    }
    submitBook = event => {
        event.preventDefault();
        const book = {
            title: this.state.title,
            author: this.state.author,
            isbnNumber: this.state.isbnNumber,
            coverPhotoURL: this.state.coverPhotoURL,
            language: this.state.language,
            price: this.state.price
        };

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch("http://localhost:8080/api/v1/books", {
            method: 'POST',
            body: JSON.stringify(book),
            headers
        })
        .then(response => response.json())
        .then((book) =>{
            if(book != null){
                this.setState({"show" : "true", "method" : "true"});
                setTimeout(() => this.setState({"show" : "false"}), 3000);
            }else{
                this.setState({"show" : "false"});
            }
        });
    }

    updateBook = event => {
        event.preventDefault();
        const book = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
            coverPhotoURL: this.state.coverPhotoURL,
            isbnNumber: this.state.isbnNumber,
            price: this.state.price,
            language: this.state.language
        };
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        fetch("http://localhost:8081/api/v1/books", {
            method: 'PUT',
            body: JSON.stringify(book),
            headers
        })
        .then(response => response.json())
        .then((book) => {
            if(book) {
                this.setState({"show":true, "method":"put"});
                setTimeout(() => this.setState({"show":false}), 3000);
                setTimeout(() => this.bookList(), 3000);
            } else {
                this.setState({"show":false});
            }
        });
        this.setState(this.initialState);
    };

    /*findBookById = (bookId) =>{
        axios.get("http://localhost:8080/api/v1/books/"+bookId)
            .then(response => {
                if(response.data != null) {
                    this.setState({
                        id: response.data.id,
                        title: response.data.title,
                        author: response.data.author,
                        coverPhotoURL: response.data.coverPhotoURL,
                        isbnNumber: response.data.isbnNumber,
                        price: response.data.price,
                        language: response.data.language
                    });
                }
            }).catch((error) => {
                console.error("Error - "+error);
            });
    }*/

    /*submitBook = event => {
        event.preventDefault();
        const book = {
            title: this.state.title,
            author: this.state.author,
            isbnNumber: this.state.isbnNumber,
            coverPhotoURL: this.state.coverPhotoURL,
            language: this.state.language,
            price: this.state.price
        };

        axios.post("http://localhost:8080/api/v1/books", book)
            .then(response => {
                if (response.data != null) {
                    this.setState({"show" : true, "method":"post"});
                    this.setState(this.initialState);
                    // alert('Book Saved Successfully');
                    setTimeout(() => this.setState({"show" : false}), 3000);
                }else{
                    this.setState({'show' : false});
                }
            })
    }*/

    /*updateBook = event => {
        event.preventDefault();
        const book = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
            isbnNumber: this.state.isbnNumber,
            coverPhotoURL: this.state.coverPhotoURL,
            language: this.state.language,
            price: this.state.price
        };

        axios.put("http://localhost:8080/api/v1/books", book)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true, "method": "put" });
                    this.setState(this.initialState);
                    // alert('Book Saved Successfully');
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    setTimeout(() => this.bookList(), 500);

                } else {
                    this.setState({ 'show': false });
                }
            })
    }*/

    resetBook = () => {
        this.setState(() => this.initialState);
    }

    bookChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    bookList = () => {
        return this.props.history.push("/list");
    }

    render() {
        const { title, author, isbnNumber, coverPhotoURL, language, price } = this.state;
        return (
            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show={this.state.show} message={this.state.method === "put" ? "Book updated successfully" : "Book sav successfully"} type={"success"} />
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update book" : "Add book "}
                    </Card.Header>
                    <Form onReset={this.resetBook} onSubmit={this.state.id ? this.updateBook : this.submitBook} id='bookFormId'>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId='formGridTitle'>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='title'
                                        value={title}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter book title" />
                                </Form.Group>
                                <Form.Group as={Col} controlId='formGridAuthor'>
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='author'
                                        value={author}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter Author name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId='formGridISBNNumber'>
                                    <Form.Label>ISBN Number</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='isbnNumber'
                                        value={isbnNumber}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter ISBN number" />
                                </Form.Group>
                                <Form.Group as={Col} controlId='formGridcoverPhotoURL'>
                                    <Form.Label>Cover pic URL</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='coverPhotoURL'
                                        value={coverPhotoURL}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter cover pic URL" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId='formGridLanguage'>
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='language'
                                        value={language}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter Language" />
                                </Form.Group>
                                <Form.Group as={Col} controlId='formGridPrice'>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='price'
                                        value={price}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter Price" />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{ 'textAlign': 'right' }}>
                            <Button variant="primary" type="submit">
                                <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Save "}
                            </Button>{' '}
                            <Button variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                        </Button>
                            {' '}
                            <Button variant="info" type="button" onClick={this.bookList.bind()}>
                                <FontAwesomeIcon icon={faList} /> Book List
                        </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>


        )
    }
}

export default Book
