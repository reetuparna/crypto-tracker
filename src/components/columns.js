export const cols = [
    {  
        Header: 'Image',  
        accessor: 'image',
        Cell: ({ cell: { value } }) => (
            <img
              src={value}
              width={30}
            />
          )
        },
    
   ,{  
    Header: 'Symbol',  
    accessor: 'symbol' ,
   }
   ,{  
   Header: 'Name',  
   accessor: 'name' ,
   }
   ,
   {  
    Header: 'Current Price',  
    accessor: 'current_price',
    },
    {  
    Header: 'Rank',  
    accessor: 'market_cap_rank',
    }
  ];