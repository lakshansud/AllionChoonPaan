import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import OrderingModal from './orderconfirmmodal';

export default class FoodOrderingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '', foodList: [
                { id: 10, name: 'Mutton Pizza', quantity: 0, price: 600.00, image: 'https://previews.123rf.com/images/vvmich/vvmich1706/vvmich170600521/81224018-traditional-margarita-pizza.jpg' },
                { id: 20, name: 'Hot Butter Prawns', quantity: 0, price: 650.00, image: 'https://assets.bonappetit.com/photos/58a4e12a9fda6d7fbc740e91/16:9/w_2560,c_limit/shrimp-scampi.jpg' },
                { id: 30, name: 'Hot Butter Cuttlefish', quantity: 0, price: 650.00, image: 'https://media-cdn.tripadvisor.com/media/photo-i/15/09/f1/2a/hot-butter-cuttlefish.jpg' },
                { id: 40, name: 'Fried Rice With Chicken', quantity: 0, price: 500.00, image: 'https://vaya.in/recipes/wp-content/uploads/2018/03/Chicken-Singaporean-Fried-Rice.jpg' }
            ]
        };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    renderFoods() {
        return this.state.foodList.map((list, index) => {
            const { id, name, price, image } = list;
            return (
                <div className="col-2 text-center" key={id}>
                    <img src={image} className="img my-2" />
                    <h5>{name}</h5>
                    <p className="price">RS.{price}</p>
                    <OrderingModal orderItem={list} />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="row">
                {this.renderFoods()}
            </div>
        );
    }
}
