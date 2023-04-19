import { createContext, useEffect  } from 'react';
import './App.css';
import Data from './component/Data';
import { useDispatch, useSelector } from "react-redux"
import { getData, postData } from "../src/Redux/Action"
import Set from './component/Set';
import DataContext from './context/DataContext';

export const context = createContext();

function App() {
  const dispatch = useDispatch();
  const storetodo = useSelector((states) => states.data);
  const {data} = storetodo;
  useEffect(() => {
      dispatch(getData())
      
  }, [dispatch]);
  const add = (todo) => {
      dispatch(postData(todo));
  };
  const taskContextValue = {
    data ,
    add
  };
  return (

    <div className="todoApp">
      <DataContext.Provider value={taskContextValue }>
          <Data/>
          <Set/>
      </DataContext.Provider>
    </div>
  )
}
export default App;