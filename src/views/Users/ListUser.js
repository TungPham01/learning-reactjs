import React from "react";
import axios from "axios";
import "./ListUser.scss";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };

  //   componentDidMount() {
  //      let res =  axios.get('https://reqres.in/api/users?page=1')
  //       .then(res => {
  //           console.log('res: ', res.data.data)
  //       })
  //   }

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  render() {
    const { listUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Danh sách user</div>
        <div className="content-list">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((user, key) => {
              return (
                <div className="child" key={user.id}>
                  {key + 1} - {`${user.first_name} ${user.last_name}`}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListUser;
