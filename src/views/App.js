import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import ListUser from "./Users/ListUser";
import Detail from "./Users/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<ListTodo />} />
            <Route path="/example" element={<MyComponent />} />

            <Route path="/users" element={<ListUser />} />
            <Route path="/users/:id" element={<Detail />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
