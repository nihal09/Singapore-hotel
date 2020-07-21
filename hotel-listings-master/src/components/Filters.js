import React from 'react';

const Filters = ({ filters, updateFilter }) => {

  const Filter = ({ active,  name }) => {
    const activeClass = active ? 'filter__item--active' : '';

    return (

      <button onClick={() => updateFilter(name)} name="hello" className={`filter__item ${activeClass}`}>
        📍{name}
      </button>
    )
  }

  return (
    <div>
      { filters.map((filter, i) => <Filter key={i} {...filter} /> )}
    </div>
  )

}
export default Filters;