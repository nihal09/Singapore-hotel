
import axios from 'axios';
import React, { Component } from 'react';
import Hotel from "./Hotel";
export default class Search extends Component {
    constructor(props) {
        super(props);
    this.state = {
        items: [],
        s: 0,
        alHotels:[]
        
    };

    this.filterList = this.filterList.bind(this);
  }

    filterList = (event) => {

      event.target.value ==="" ? this.state.s=0 : this.state.s=1
      let items = this.state.alHotels.filter((item) => {
        return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      
      this.setState({items: items});
    }

    componentWillMount = () => {
      axios.get('http://localhost:8081/users/hotels')
    .then (
      response => {
        console.log(response)
        this.setState({ alHotels : response.data });})
    }

    render() {
      return (
        <div>
         <input type="text" class="searchTerm" placeholder="Search Hotels" onChange={this.filterList}/>
          <header></header>
                <section className="hotel-container">
                    
               {  this.state.s===0? "" : this.state.items.map((filter, i) => <Hotel key={i} {...filter}  /> )}
                </section>
            </div>
      );
    }
}
;