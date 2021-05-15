import React from 'react';

import { useTable } from 'react-table';
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
    
    const tableInstance = useTable({
        columns,
        data
    })
    
  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
  } = tableInstance 


  return(
    <div className="tableContainer">{data!=undefined ?
        
        <table {...getTableProps()}>
            <thead>
            { headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}> 
                {
                    headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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