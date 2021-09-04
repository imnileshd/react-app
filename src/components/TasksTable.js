import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Status</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.tasks.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.status}</td>
        <td>
          <button className="btn btn-danger" onClick={() => props.deleteTask(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class TasksTable extends Component {
  render() {
    const { tasks, deleteTask } = this.props;
    return (
      <table class="table">
        <TableHeader />
        <TableBody tasks={tasks} deleteTask={deleteTask} />
      </table>
    );
  }
}

export default TasksTable;
