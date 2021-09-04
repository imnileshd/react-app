import React, { Component } from "react";
import TasksTable from "./components/TasksTable";

const tasks = [
  {
    title: "Install",
    status: "Complete",
  },
  {
    title: "Create",
    status: "Complete",
  },
  {
    title: "Code",
    status: "Incomplete",
  },
  {
    title: "Deploy",
    status: "Incomplete",
  },
];

class App extends Component {
  state = {
    tasks: tasks,
  };

  deleteTask = (index) => {
    const { tasks } = this.state;
    console.log(tasks);

    this.setState({
      tasks: tasks.filter((task, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-capitalize my-5">Simple React App</h1>
        <div className="row">
          <TasksTable tasks={this.state.tasks} deleteTask={this.deleteTask} />
        </div>
      </div>
    );
  }
}

export default App;
