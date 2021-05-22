import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Pagination from "@material-ui/lab/Pagination";

import './table.css';
import {cols} from './columns';
import GlobalFilter from '../globalFilter/globalFilter';


const Cointable = (props) => {

    const coins = useSelector((state) => state.coins);
    const currency = useSelector((state) => state.currency);
    const page = useSelector((state) => state.page);
    const dispatch = useDispatch();

    const columns = React.useMemo(()=> cols, []);
    const data = React.useMemo(() => coins, [coins]);

    const pageSize = 10;
    
    function formatData(data) {
        return data.map(d => {
            var m = Number((Math.abs(d.price_change_percentage_24h) * 100).toPrecision(15));
            const percentage = Math.round(m) / 100 * Math.sign(d.price_change_percentage_24h);
            return {...d, price_change_percentage_24h:percentage};
        });
    };

    // eslint-disable-next-line
    useEffect(() => {
        axios
       .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${pageSize}&page=${page}&sparkline=false&price_change_percentage=24h`)
       .then(res => {
            dispatch({type: 'UPDATE_COINS', value: formatData(res.data)});
       })
       .catch(error => console.log(error));

    }, [currency, page, dispatch]);
    
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

    return(

        <div className="tableContainer">{
            data!==undefined ?
            <> 
                <div className='filter-wrapper'>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                    <div className="currency-dropdown">
                        <select 
                        className='currency-select' 
                        defaultValue={currency} 
                        onChange={e => dispatch({type:'CURRENCY_UPDATED',value: e.target.value}) } >
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
                        count={10}
                        variant="outlined"
                        shape="rounded"
                        onChange={(e, v)=>dispatch({type:'PAGE_UPDATED',value:v})}
                    />   
                </div>
            </>
            :<p></p>}
        </div>

    ) 

 }

export default Cointable;
