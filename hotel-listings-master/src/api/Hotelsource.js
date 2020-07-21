import axios from 'axios'
import React, { Component } from 'react';

export default class Hotelsource extends Component
{
    constructor(props) {
        super(props);

this.retrieveAllHotel=this.retrieveAllHotel.bind(this);}

    retrieveAllHotel = () =>
{
return(axios.get('http://localhost:8081/users/hotels'));
}

}

