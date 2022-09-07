import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  let params = useParams();

  let id = params.id;

  // không được giá trị khi gọi axios, error promise <pending>
  // let user = axios.get(`https://reqres.in/api/users/${params.id}`).then(result => result.data)

  return (
    <>
      <div>hello detail user id is: {id}</div>
      {/* <div>Email: {user.email}</div>
      <div>Name: {`${user.first_name}${user.last_name}`}</div>
      <div>
        Avatar:
        <img src={user.avatar} alt="avatar" />
      </div> */}
    </>
  );
};

export default Detail;
