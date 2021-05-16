export const cols = [
  {
    Header: 'Logo',  
    accessor: 'image',
    Cell: ({ cell: { value } }) => (
      <img
        src={value}
        width={30}
      />
    )
  },
  {  
  Header: 'Symbol',  
  accessor: 'symbol' ,
    Cell: ({ cell: {value}}) => value.toUpperCase()
  },
  {  
    Header: 'Name',  
    accessor: 'name' ,
  },
  {  
    Header: 'Current Price',  
    accessor: 'current_price',
  },
  {  
    Header: 'Rank',  
    accessor: 'market_cap_rank',
    Cell: ({ cell: {value}}) => {return `#${value}`}
  }
];