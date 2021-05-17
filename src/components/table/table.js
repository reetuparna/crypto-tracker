import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Pagination from "@material-ui/lab/Pagination";

import './table.css';
import {cols} from './columns';
import GlobalFilter from '../globalFilter/globalFilter';

/**
* @author
* @function Cointable
**/

const Cointable = (props) => {

    const [coins, setCoins] = useState([]);
    const [currency, setCurrency] = useState('USD');
    const [page, setPage] = useState(1);

    const columns = React.useMemo(()=> cols, []);
    const data = React.useMemo(() => coins, [coins]);

    const options = ["USD", "INR"];
    const pageSize = 10;

    useEffect(() => {
        axios
       .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${pageSize}&page=${page}&sparkline=false&price_change_percentage=24h`)
       .then(res => {
         setCoins(res.data);
         console.log(coins);
       })
       .catch(error => console.log(error));

    }, [currency, page]);
    
    const {
      getTableProps,
      getTableBodyProps,
      getProps,
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
                                    
                                    return <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>  
                
                <div className="pagination-div">
                    <Pagination
                        page={page}
                        count={5}
                        variant="outlined"
                        shape="rounded"
                        onChange={(e, v)=>setPage(v)}
                    />   
                </div>
            </>
            :<p></p>}
        </div>

    ) 

 }

export default Cointable;
