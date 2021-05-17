export const cols = [
  {
    Header: '',  
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
  },
  {
    Header: '24h delta',
    accessor: 'price_change_24h',
    // not working
    getProps: (state, rowInfo, column) => {
      return {
          style: {
              background: rowInfo && rowInfo.value >= 0 ? 'green' : 'red',
          },
      };
    },
    //working
    Cell: ({ cell: {value}}) => {
      var m = Number((Math.abs(value) * 100).toPrecision(15));
      return Math.round(m) / 100 * Math.sign(value);
    }
  }

];