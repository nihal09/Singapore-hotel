import React, { Component } from 'react';
import axios from 'axios';
import Search from "./components/Search";
import Hotel from "./components/Hotel";
import Filters from "./components/Filters";
import Sort from "./components/Sort";

class App extends Component {
  constructor(props) {
    super(props);

    
    

    this.state = {
      sort: "ASC",
      activeFilters: [],
      filteredHotels: [],
      isFiltered: false,
      filtered: [],
      filters: [
        {
          name: "Bugis",
          active: false
        },
        {
          name: "Orchard Road",
          active: false
        },
        {
          name: "Sentosa",
          active: false
        },
        {
          name: "China Town",
          active: false,
        },
        {
          name: "Little India",
          active: false,
        },
        {
          name: "Marina Bay",
          active: false,
        }
        

      ],
      allHotels : []
      
    };

    this.updateFilters = this.updateFilters.bind(this);
    this.filterHotels = this.filterHotels.bind(this);
    this.updateSort = this.updateSort.bind(this);
    this.getActiveFilters = this.getActiveFilters.bind(this);
  }

  

  updateFilters(filter) {
    const filters = [...this.state.filters];
    const filterId = filters.findIndex(index => index.name === filter);
        
    filters[filterId].active = !this.state.filters[filterId].active;

    this.setState({
        filters,
        activeFilters: this.getActiveFilters()},
      () => this.filterHotels()
    );
    
  }

  updateSort(event) {
    this.setState({ sort: event.target.value });
  }  

  getActiveFilters() {
    const activeFilters = this.state.filters.reduce((total, filter) => {
      filter.active && total.push(filter.name);
      return total;
    }, []);
    
    return activeFilters;
    
  }

  filterHotels() {
    let filteredHotels = null;

    if (this.state.activeFilters) {
      filteredHotels = this.state.allHotels.filter(hotel => {
        return this.state.activeFilters.some(filter => hotel.region.toLowerCase().includes(filter.toLowerCase()));
      });
    }

    this.setState({ filteredHotels });
  } 

  componentDidMount() {
    axios.get('http://localhost:8081/users/hotels')
    .then (
      response => {
        console.log(response)
        this.setState({ allHotels : response.data });
        this.alHotels=this.state.allHotels
        
       }
    )
  }
    

  render() {
    const { filters, sort, filteredHotels } = this.state;
    const isFiltered = this.state.activeFilters.length > 0;
    let hotels = isFiltered ? filteredHotels : this.state.allHotels;

    this.state.sort === 'ASC' && hotels.sort((a, b) => b.price - a.price);
    this.state.sort === 'DEC' && hotels.sort((a, b) => a.price - b.price);    

    return (
      <div className="App">
        <header className="hotelname">Singapore Hotels🏨</header>
        <header className="header">
          <Search />
          <Sort sort={sort} updateSort={this.updateSort} />
          <br></br>
          <br></br>
          <Filters filters={filters} updateFilter={this.updateFilters} />
          
        </header>
        <section className="hotel-container">
          { isFiltered && hotels.length === 0  
              ? <span>sorry nothing found </span>
              : hotels.map((hotel, i) => <Hotel key={i} {...hotel} />)
          }
        </section>
      </div> 
    );
  }
}

export default App;
