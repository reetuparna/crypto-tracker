import React from 'react';

import { useSortBy, useTable } from 'react-table';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import './table.css';
import {cols} from './columns';
/**
* @author
* @function Cointable
**/

const Cointable = (props) => {

    const { coinData } = props;

    const columns = React.useMemo(()=> cols, []);

    const data = React.useMemo(() => coinData, []);
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
            columns,
            data
        }, useSortBy);

  return(
    <div className="tableContainer">{data!=undefined ?
        
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
    
        :<p></p>}</div>
   )


 }

export default Cointable