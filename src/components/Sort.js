import React from 'react';

const Sort = ({ sort, updateSort }) => {

  return (
    <select className='sort' value={sort} onChange={updateSort}>
      <option value='ASC'>Price :High to Low</option>
      <option value='DEC'>Price :Low to High</option>
    </select>
  )
}

export default Sort;