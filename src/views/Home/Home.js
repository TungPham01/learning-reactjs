import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
import logo from '../../assets/images/heatmap.jpg'

const Home = () => {
  let navigate = useNavigate();

  function handleButton() {
      navigate("/todos");
  }

  return (
    <>
      <h1>Hello Home</h1>
      <div style={{margin: '0 auto;'}}>
        <img src={logo} style={{width: '500px;', height: '500px'}}/>
      </div>
      <button onClick={handleButton}>Go to page Todo using redirect</button>
    </>
  );
};

export default Color(Home);
// const ChildComponent = (props) => {
//     console.log(props)
//     return (
//         <div>
//             hello test
//         </div>
//     );
// }
