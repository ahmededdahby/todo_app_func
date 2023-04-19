import React from 'react';

const DataContext = React.createContext({
  data: [],
  add: () => {},
});

export default DataContext;