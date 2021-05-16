import React from 'react'
import { BsSearch } from 'react-icons/bs';
import './globalFilter.css';
/**
* @author
* @function GlobalFilter
**/

const GlobalFilter = ({filter, setFilter}) => {

  return(
    <div className='search'>

        <BsSearch />
        
        <input className="searchInput" value={filter || ''} 
            onChange = {e => setFilter(e.target.value)} />
    </div>
   )

 }

export default GlobalFilter