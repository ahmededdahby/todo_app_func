import { createContext, useState } from 'react';
import './App.css';
import TaskFormPage from './Pages/TaskFormPage';
import TaskListPage from './Pages/TaskListPage';
import TodoList from './component/TodoList';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const context = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  return (

    <div className="todoApp">
      <BrowserRouter>
      <context.Provider value={{todos,setTodos}}>
        <Routes>
          <Route path="/" exact element={<TaskListPage />} />
          <Route path="/form" element={<TaskFormPage />} />
        </Routes>
        </context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
