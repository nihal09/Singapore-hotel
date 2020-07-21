import React from 'react';

const TopFilters = ({ Topfilters, TopupdateFilter }) => {

  const TopFilter = ({ active,  name }) => {
    const activeClass = active ? 'filter__item--active' : '';

    return (

     <button onClick={() => TopupdateFilter(name)} name="hello" className={`topfilter__item ${activeClass}`}><span>
        {name}
        </span>
      </button>
      
    )
  }

  return (
    <div>
      { Topfilters.map((filter, i) => <TopFilter key={i} {...filter} /> )}
    </div>
  )
}

export default TopFilters;