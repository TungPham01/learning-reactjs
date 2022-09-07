import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
import logo from '../../assets/images/heatmap.jpg'
import { connect } from 'react-redux'

const Home = (props) => {
  let navigate = useNavigate();

  function handleButton() {
    navigate("/todos");
  }

  let { usersRedux, nameRedux } = props

  const handleRemove = (user) => {
    props.deleteUserRedux(user);
  }

  const handleCreate = () => {
    props.addUserRedux(nameRedux);
    props.resetNameRedux();
  }

  const handleOnChange = (event) => {
    props.onChangeUserRedux(event.target.value);
  }

  return (
    <>
      <h1>Hello Home</h1>
      <div>
        {usersRedux && usersRedux.length > 0 &&
          usersRedux.map((user, index) => {
            return (
              <div key={user.id}>
                {index + 1} - {user.name}({user.id}) ---
                <span onClick={() => handleRemove(user)}> X </span> ---
              </div>
            )
          })
        }
      </div>
      <input type="text" value={nameRedux} onChange={(event) => handleOnChange(event)} />
      <button onClick={() => handleCreate()}>Add</button><br/>
      <button onClick={handleButton}>Go to page Todo using redirect</button>
      <div style={{ margin: '0 auto' }}>
        <img src={logo} style={{ width: '500px', height: '500px' }} alt="logo" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usersRedux: state.users,
    nameRedux: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => dispatch({
      type: 'DELETE_USER',
      payload: userDelete
    }),
    addUserRedux: (user) => dispatch({
      type: 'ADD_USER',
      payload: user
    }),
    onChangeUserRedux: (userChange) => dispatch({
      type: 'ON_CHANGE_ADD_USER',
      payload: userChange
    }),
    resetNameRedux: () => dispatch({
      type: 'RESET_NAME_USER',
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
// const ChildComponent = (props) => {
//     console.log(props)
//     return (
//         <div>
//             hello test
//         </div>
//     );
// }
