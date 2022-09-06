import React from "react";
import "./ListTodo.scss";
import AddComponent from "./AddComponent";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      { id: "todo1", title: "homework" },
      { id: "todo2", title: "working" },
      { id: "todo3", title: "fixbug" },
    ],
    updateTodo: {},
  };

  addTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
    toast.success("Thêm thành công!");
  };

  handleDelete = (item) => {
    this.setState({
      listTodo: this.state.listTodo.filter((todo) => todo.id !== item.id),
    });
    toast.success("Xóa thành công!");
  };

  handleEdit = (item) => {
    this.setState({
      updateTodo: item,
    });
  };

  handleOnChangeEdit = (event) => {
    let editTodoCopy = this.state.updateTodo;
    editTodoCopy.title = event.target.value;
    this.setState({
      updateTodo: editTodoCopy,
    });
  };

  handleOnClickUpdate = (item, updateTodo) => {
    let isEmptyObj = Object.keys(updateTodo).length === 0;
    let { listTodo } = this.state;

    if (!isEmptyObj && item.id === this.state.updateTodo.id) {
      let listTodoCopy = [...listTodo];

      //Find index of specific object using findIndex method.
      let objIndex = listTodoCopy.findIndex((obj) => obj.id === item.id);

      listTodoCopy[objIndex].title = updateTodo.title;
      this.setState({
        listTodo: listTodoCopy,
      });
    }
  };

  render() {
    let { listTodo, updateTodo } = this.state;
    let isEmptyObj = Object.keys(updateTodo).length === 0;
    return (
      <>
        <p>Simple to do App</p>
        <div className="list-todo-container">
          <AddComponent addTodo={this.addTodo} />
          <br />
          <div className="list-todo-content">
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="todo-child mb-10" key={item.id}>
                    <span className="mr-10">
                      {index + 1} -
                      {isEmptyObj ? (
                        item.title
                      ) : (
                        <>
                          {item.id === updateTodo.id ? (
                            <input
                              type="text"
                              className="mr-10"
                              value={updateTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEdit(event)
                              }
                            />
                          ) : (
                            item.title
                          )}
                        </>
                      )}
                    </span>
                    {isEmptyObj ? (
                      <button
                        className="mr-10 edit"
                        onClick={() => this.handleEdit(item)}
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        className="mr-10 edit"
                        onClick={() =>
                          this.handleOnClickUpdate(item, updateTodo)
                        }
                      >
                        Save
                      </button>
                    )}
                    <button
                      className="delete"
                      onClick={() => this.handleDelete(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
