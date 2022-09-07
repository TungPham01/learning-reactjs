import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  let params = useParams();

      let id = params.id;
//       let res =  axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
//         return res
//       });
  
//   console.log(res)

    let user = axios.get(`https://reqres.in/api/users/${params.id}`).then(result => result.data)

    let fetchTodo = async () => {
        try {
            const res = await axios.get(`https://reqres.in/api/users/${id}`);
            return res;
        } catch (error) {
            console.log(error);
        }
    };

    // Promise.fetchTodo().then(function(value) {
    //     console.log(value);
    // }

    console.log(fetchTodo())
    // const res = await user();
    // console.log(res)

  return (
    <>
    sss
      {/* <div>hello detail user id is {user.id}</div>
      <div>Email: {user.email}</div>
      <div>Name: {`${user.first_name}${user.last_name}`}</div>
      <div>
        Avatar:
        <img src={user.avatar} alt="avatar" />
      </div> */}
    </>
  );
};

export default Detail;
