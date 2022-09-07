import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import ListUser from "./views/Users/ListUser";
import Detail from "./views/Users/Detail";
import MyComponent from "./views/Example/MyComponent";
import ListTodo from "./views/Todos/ListTodo";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="/todos" element={<ListTodo />} />
          <Route path="/example" element={<MyComponent />} />

          <Route path="/users" element={<ListUser />} />
          <Route path="/users/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
