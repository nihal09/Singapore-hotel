
import axios from 'axios';
import React, { Component } from 'react';
import Hotel from "./Hotel";
export default class Search extends Component {
    constructor(props) {
        super(props);
    this.state = {
        items: [],
        s: 2,
     
        alHotels:[]
        
    };

    this.filterList = this.filterList.bind(this);
  }

    filterList = (event) => {

      event.target.value==="" ? this.state.s=0 : this.state.s=1
      let item1 = this.state.alHotels.filter((item) => {
        return item.Brand.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      
      this.setState({items: item1});
    }

    componentWillMount = () => {
      axios.get('http://starlord.hackerearth.com/TopRamen')
    .then (
      response => {
        console.log(response)
        this.setState({ alHotels : response.data });})
       
        this.setState({
          initialItems: this.props.content,
          items: this.props.content
      })
    }

    render() {
      return (
        <div>
         <input type="text" class="searchTerm" placeholder="Search Brands" onChange={this.filterList}/>
          <header></header>
                <section className="hotel-container">
                    
               {  this.state.s===0? "" :<Hotel hotel={this.state.items} /> }
                </section>
            </div>
      );
    }
}
;