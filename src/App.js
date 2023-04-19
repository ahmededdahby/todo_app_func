import { createContext, useEffect } from 'react';
import './App.css';
import Data from './component/Data';
import { useDispatch, useSelector } from "react-redux"
import { getData, postData, deleteData } from "../src/Redux/Action"
import Set from './component/Set';


export const context = createContext();

function App() {
  const dispatch = useDispatch();
  const storetodo = useSelector((states) => states.data);
  const { data } = storetodo;
  useEffect(() => {
    dispatch(getData())

  }, [dispatch]);
  const add = (todo) => {
    dispatch(postData(todo));
  };
  const deleteItem = (id) => {
    dispatch(deleteData(id))

  }

  return (

    <div className="todoApp">
      <context.Provider value={{ data, add, deleteItem }}>
        <Data />
        <Set />
      </context.Provider>
    </div>
  )
}
export default App;