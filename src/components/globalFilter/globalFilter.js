import React from 'react'
import { BsSearch } from 'react-icons/bs';
import './globalFilter.css';
import {useSelector, useDispatch} from 'react-redux';

const GlobalFilter = ({filter, setFilter}) => {
  const test = useSelector((state) => state.test);
  const dispatch = useDispatch();

  return(
    <div className='search'>
      <BsSearch />
      <input onClick={(()=>dispatch({type: 'TEST', value:'Type Anything....'}))} placeholder={test} className="searchInput" value={filter || ''} onChange = {e => setFilter(e.target.value)} />
    </div>
   )
}

export default GlobalFilter