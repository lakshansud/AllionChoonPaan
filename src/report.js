import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

export default class ReportForm extends React.Component {

    constructor(props) {
        super(props);
    }

    renderTableData() {
        var savedOrder = JSON.parse(localStorage.getItem("orderedItems"));
        if (savedOrder) {
            return savedOrder.map((item,index) => {
                const { id, name, quantity,date,status } = item;
                return (
                    <tr key={index}>
                        <td>{name}</td>
                        <td className="text-right">{quantity}</td>
                        <td>{date}</td>
                        <td>{status}</td>
                    </tr>
                );
            });
        } else {
            return (
                <tr className="text-center">
                    <th colSpan="3">Not Found</th>
                </tr>
            );
        }
    }
    render() {
        return (
            <div>
                <h1 id='title'>Ordered Items</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th width="50%">Name</th>
                            <th width="10%" className="text-right">Quantity</th>
                            <th width="20%">Ordered Date</th>
                            <th width="20%">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}
