import React, { Component } from 'react';
import axios from 'axios';
import Search from "./components/Search";
import Hotel from "./components/Hotel";
import Filters from "./components/Filters";
import TopFilters from "./components/TopFilters";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "ASC",
      activeFilters: [],
      TopactiveFilters: [],
      filteredHotels: [],
      TopfilteredHotels: [],
      isFiltered: false,
      TopisFiltered: false,
      filtered: [],
      Topfiltered: [],
      filters: [
        {
          name: "Myanmar",
          active: false,
        },
        {
          name: "Singapore",
          active: false,
        },
        {
          name: "Taiwan",
          active: false,
        },
        {
          name: "China",
          active: false,
        },
        {
          name: "Malaysia",
          active: false,
        },
        {
          name: "Thailand",
          active: false,
        },
        {
          name: "Japan",
          active: false,
        },
        {
          name: "South Korea",
          active: false,
        },
        {
          name: "USA",
          active: false,
        },
        {
          name: "Indonesia",
          active: false,
        },
        {
          name: "Hong Kong",
          active: false,
        }],

        Topfilters: [
          {
            name: "2012",
            active: false,
          },
          {
            name: "2013",
            active: false,
          },
          {
            name: "2014",
            active: false,
          },
          {
            name: "2015",
            active: false,
          },
          {
            name: "2016",
            active: false,
          }
          ],
      allHotels : []
      
    };

    this.updateFilters = this.updateFilters.bind(this);
    this.filterHotels = this.filterHotels.bind(this);
    this.getActiveFilters = this.getActiveFilters.bind(this);
    this.TopupdateFilters = this.TopupdateFilters.bind(this);
    this.TopfilterHotels = this.TopfilterHotels.bind(this);
    this.TopgetActiveFilters = this.TopgetActiveFilters.bind(this);
  }

  

  TopupdateFilters(Topfilter) {
    const Topfilters = [...this.state.Topfilters];
    this.state.filters.forEach(element => element.active=false)
    Topfilters.forEach(element => {
      if (element.name===Topfilter) {
        element.active=!element.active;
      } else {
        element.active=false;
      }
      
    })
    this.setState({
        Topfilters,
        Filters,
        activeFilters: this.getActiveFilters(),
        TopactiveFilters: this.TopgetActiveFilters()},
      () => this.TopfilterHotels()
      
    );
    
  }

  updateFilters(filter) {
    const filters = [...this.state.filters];
    this.state.Topfilters.forEach(element => element.active=false)
    const filterId = filters.findIndex(index => index.name === filter);
        
    filters[filterId].active = !this.state.filters[filterId].active;

    this.setState({
        TopFilters,
        filters,
        TopactiveFilters: this.TopgetActiveFilters(),
        activeFilters: this.getActiveFilters()},
      () => this.filterHotels()
    );
    
  } 

  getActiveFilters() {
    const activeFilters = this.state.filters.reduce((total, filter) => {
      filter.active && total.push(filter.name);
      return total;
    }, []);
    
    return activeFilters;
    }

  TopgetActiveFilters() {
    const TopactiveFilters = this.state.Topfilters.reduce((total, filter) => {
      filter.active && total.push(filter.name);
      return total;
    }, []);
    //console.log(TopactiveFilters);
    return TopactiveFilters;
    
    
  }

  filterHotels() {
    let filteredHotels = null;
    if (this.state.activeFilters) {
      filteredHotels = this.state.allHotels.filter(hotel => {
        return this.state.activeFilters.some(filter =>
          hotel.Country.toLowerCase().includes(filter.toLowerCase())
        );
          
      });
    }

    this.setState({ filteredHotels });
  } 
  TopfilterHotels() {
    let TopfilteredHotels = null;
    if (this.state.TopactiveFilters) {
      TopfilteredHotels = this.state.allHotels.filter(hotel => {
        return this.state.TopactiveFilters.some(filter =>
          hotel['Top Ten'].toLowerCase().includes(filter.toLowerCase())
        );
          
      });
    }

    this.setState({ TopfilteredHotels });
    //console.log(TopfilteredHotels);
  } 

  componentDidMount() {
    axios.get('http://starlord.hackerearth.com/TopRamen')
    .then (
      response => {
        //console.log(response)
        response.data.forEach(element => {
          if (element.Country==="SG") {
            element.Country = "Singapore"
          } 
          if (element.Country==="JPN") {
            element.Country = "Japan"
          } 
        });
        this.setState({ allHotels : response.data });
        this.alHotels=this.state.allHotels
        //console.log(this.state.allHotels)
      }
    )
  }
    

  render() {
    const { filters, sort, filteredHotels,Topfilters,TopfilteredHotels,foo } = this.state;
    const isFiltered = this.state.activeFilters.length > 0;
    const TopisFiltered = this.state.TopactiveFilters.length > 0;
    let hotels = isFiltered ? filteredHotels : this.state.allHotels;
    let Tophotels = TopisFiltered ? TopfilteredHotels : this.state.allHotels;
    console.log(isFiltered);
    
  

    return (
      
      <div>
        <div class="topnav">
        👨🏻‍🍳RAMEN RESTURANTS 🍽
        </div>
        <div className="App">
        <header className="header">
          <Search content={this.state.allHotels}/>
          <br></br>
          <Filters filters={filters} updateFilter={this.updateFilters} />
          <br></br>
          <div className="top"> 🔝 Resturants </div>
          <br></br>
          <TopFilters Topfilters={Topfilters} TopupdateFilter={this.TopupdateFilters} />
          </header>
          <section className="hotel-container">
            {
              TopisFiltered || isFiltered
              ?(TopisFiltered 
              ?   <Hotel hotel={Tophotels} />
              :   (isFiltered
              ?   <Hotel hotel={hotels} />
              :   <span>sss</span>))
              :   <Hotel hotel={this.state.allHotels} />
              }
              </section>
              </div>
              </div>
              );
            }
          }
export default App;
