import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import './table.css';
import {cols} from './columns';
import GlobalFilter from './globalFilter/globalFilter';

/**
* @author
* @function Cointable
**/

const Cointable = (props) => {

    const [coins, setCoins] = useState([]);
    const [currency, setCurrency] = useState('USD');

    const columns = React.useMemo(()=> cols, []);

    const data = React.useMemo(() => coins, [coins]);

    const options = ["USD", "INR"];

    useEffect(() => {
        axios
       .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
       .then(res => {
         setCoins(res.data);
         console.log(coins);
       })
       .catch(error => console.log(error));

    }, [currency]);
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      setGlobalFilter,
    } = useTable(
        {
            columns,
            data
        }, 
        useGlobalFilter,
        useSortBy
    );

    const { globalFilter } = state;

    function handleChange(e) {
        props.onChange(e.target.value);
    }

    return(

        <div className="tableContainer">{
            data!==undefined ?
            <> 
                <div className='filter-wrapper'>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                    <div className="currency-dropdown">
                        <select  
                        defaultValue={currency} 
                        onChange={(e)=>setCurrency(e.target.value)} >
                            <option value="USD">USD</option>
                            <option value="INR">INR</option>
                        </select>
                    </div>
                </div>
                <table {...getTableProps()}>
                    <thead>
                    { headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}> 
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span className="sortIcon">
                                        {column.isSorted ? (column.isSortedDesc ? <TiArrowSortedUp />: <TiArrowSortedDown />) : ''}
                                    </span>
                                </th>
                            ))
                        }
                    </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>  
            </>
            :<p></p>}
        </div>

    ) 

 }

export default Cointable;
