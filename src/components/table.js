import React, {useState} from 'react';

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

    const { coinData, currency } = props;

    const columns = React.useMemo(()=> cols, []);

    const data = React.useMemo(() => coinData, [coinData]);

    const options = ["USD", "INR"];
    
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
                        onChange={handleChange} >
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
