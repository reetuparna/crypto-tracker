import React from 'react';

import { useTable } from 'react-table';


/**
* @author
* @function Cointable
**/

const Cointable = (props) => {

    const { coinData } = props;

    const columns = React.useMemo(()=> [{  
        Header: 'ID',  
        accessor: 'id',
       }
       ,{  
        Header: 'Symbol',  
        accessor: 'symbol' ,
       }
       ,{  
       Header: 'Name',  
       accessor: 'name' ,
       }
       ,{  
       Header: 'Image',  
       accessor: 'image',
       },
       {  
        Header: 'Current Price',  
        accessor: 'current_price',
        },
        {  
        Header: 'Rank',  
        accessor: 'market_cap_rank',
        }
      ], []);

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
    <div>{data!=undefined ?
        
        <table {...getTableProps()}>
            <thead>
            { headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}> 
                {
                    headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))
                }
                <th></th>
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