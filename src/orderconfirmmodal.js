import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var createReactClass = require('create-react-class');

const OrderingModal = createReactClass({
  
    getInitialState() {
        return { showModal: false, quantity: 0 };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    confirm() {
        var data = [];
        this.props.orderItem.quantity = this.state.quantity;
        this.props.orderItem.date = this.getCurrentDate('-');
        var savedobject = JSON.parse(localStorage.getItem("orderedItems"));
        if (savedobject) {
            data = savedobject;
            data.push(this.props.orderItem);
        } else {
            data.push(this.props.orderItem);
        }
        localStorage.setItem('orderedItems', JSON.stringify(data));
        this.setState({ showModal: false });
    },

    getCurrentDate(separator = '') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`;
    },

    handleChange(event) {
        this.setState({ quantity: event.target.value });
    },
    canBeSubmitted() {
        const errors = validate(this.state.quantity);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    },

    render() {
        const errors = validate(this.state.quantity);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        return (
            <div>
                <Button
                    bsstyle="primary"
                    bssize="large"
                    onClick={this.open}
                >
                    Add to cart
        </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.orderItem.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>
                            Quantity : <input type="number" className={errors.quantity ? "error" : ""} name="quantity" onChange={this.handleChange} required/>
                        </label>
                     
                    </Modal.Body>
                    <Modal.Footer>
                        <Button disabled={isDisabled} onClick={this.confirm}>Confim</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

function validate(quantity) {
    if (quantity.length === 0) {
        quantity = 0;
    }

    return {
        quantity: quantity < 1
    };
}

export default OrderingModal;