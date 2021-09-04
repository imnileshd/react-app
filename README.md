# React: An Overview and Walkthrough with simple app

## React

- React is a JavaScript library - one of the most popular.
- React is an open-source project created by Facebook.
- React is used to build user interfaces (UI) on the front end.
- React is the view layer of an MVC application (Model View Controller)

One of the most important aspects of React is the fact that you can create components, which are like custom, reusable HTML elements, to quickly and efficiently build user interfaces.

## Setup and Installation

We'll start by installing the project with create-react-app.

[Create React App](https://github.com/facebook/create-react-app) is the best way to start building a new single-page application in React. This is an environment that comes pre-configured with everything we need to build a React app.

To create a project, run the following command:

```bash
npx create-react-app react-app
```

> **_Note:_** `npm` includes `npx` tool — a package runner tool that comes with npm 5.2+.

Once that finishes, move to the newly created directory and start the project.

```bash
cd react-app
npm start
```

Once you run this command, a new window will popup at `localhost:3000` with our new React app.

To see how the environment automatically compiles and updates your React code in `/src/App.js` and you will see the new data.

Let's look at the project structure.

## Project Structure

If you look into the project structure, you'll see:

```bash
|   node_modules/
|   public/
|   src/
|   .gitignore
|   README.md
|   package-lock.json
|   package.json
```

Let's look at these one by one:

- `node_modules/` directory contains all of the external JavaScript libraries used by the application.

- `public/` directory contains base HTML, and image files. These are the roots of our project.

- `src/` directory contains the React JavaScript code for our project.

- `.gitignore` file contains some default directories and files that git will ignore, for eg. `node_modules/` directory

- `README.md` file contains a lot of useful information about Create React App.

- `package.json` file contains metadata about our project, such as the title, version number, and dependencies. Also contains script to run our project.

- `package-lock.json` this file is used by `npm` to ensure that the packages match exact versions.

## Initial Setup

Go ahead and delete all the files in `/src` directory, and we will create our own boilerplate file. We'll just keep `index.css` and `index.js`.

Now, We'll install `bootstrap` to provide user interface to our app.

```bash
npm install bootstrap@4.6.0
```

Now in `index.js`, we're importing React, ReactDOM, and the CSS file.

```js
// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"; 
```

Let's create our `App` component again.

```js
// src/index.js
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
```

Finally, we'll render the `App` to the `root`.

```js
// src/index.js
ReactDOM.render(<App />, document.getElementById('root'))
```

`root` div element in `public/index.html` is the entry point for our app, which is named by convention.

Here is our full `index.js`. This time, we're loading the `Component` as a property of React.

```js
// src/index.js
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

And you'll see "Hello, React!" at `localhost:3000`

## Components

A component is an independent, reusable code block, which divides the UI into smaller pieces.

In React, Almost everything consists of components, which can be class components or simple components.

Most React apps have many small components, and everything loads into the main `App` component.

We'll create a new file called `App.js` and add `App` component here.

```js
// src/App.js
import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

export default App
```

We export the component as `App` and load it in `index.js`.

So, `index.js` looks like this.

```js
// src/index.js
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"; 

ReactDOM.render(<App />, document.getElementById('root'))
```

### Class Components

Let's create another component, `Table`, Create new file `src/Components/Table.js` and add below code:

```js
// src/components/TasksTable.js
import React, {Component} from 'react'

class TasksTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Install</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>Create</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>Code</td>
            <td>Incomplete</td>
          </tr>
          <tr>
            <td>Deploy</td>
            <td>Incomplete</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TasksTable
```

Now load the `TasksTable` in `App.js` as below:

```js
import TasksTable from './components/TasksTable'_
```

Then by loading it into the `render()` of `App`, where before we had "Hello, React!". I also changed the class of the outer container.

```js
import React, { Component } from 'react'
import TasksTable from './components/TasksTable'

class App extends Component {
  render() {
    return (
      <div className="container">
        <TasksTable />
      </div>
    )
  }
}

export default App
```

If you check the output, you'll see the Tasks Table loaded in.

### Simple Components

The other type of component in React is the simple component, which is a function.

Let's take our `TasksTable` and make two simple components for it - a table header, and a table body.

First, the table header.

```js
// src/components/TasksTable.js
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
```

Then the body.

```js
const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Install</td>
        <td>Complete</td>
      </tr>
      <tr>
        <td>Create</td>
        <td>Complete</td>
      </tr>
      <tr>
        <td>Code</td>
        <td>Incomplete</td>
      </tr>
      <tr>
        <td>Deploy</td>
        <td>Incomplete</td>
      </tr>
    </tbody>
  );
};
```

Now our `Table` file will look like this.

```js
// src/components/TasksTable.js
const TableHeader = () => { ... };
const TableBody = () => { ... };

class TasksTable extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default TasksTable;
```

As you can see, components can be nested in other components, and simple and class components can be mixed.

## Props

We have `TasksTable` component, but the data is being hard-coded. In React we can handle data with props, Props is short for properties, and with state.

React's data flow between components is uni-directional (from parent to child only).

First, let's remove all the data from our `TableBody` component.

```js
// src/components/TasksTable.js
const TableBody = () => {
  return <tbody />
}
```

Then let's move all that data to an array of objects and pass the data to the child component (TasksTable) with properties.

```js
// src/App.js

const tasks = [
  {
    title: 'Install',
    status: 'Complete',
  },
  {
    title: 'Create',
    status: 'Complete',
  },
  {
    title: 'Code',
    status: 'Incomplete',
  },
  {
    title: 'Deploy',
    status: 'Incomplete',
  },
]

class App extends Component {
  render() {    
    return (
      <div className="container">
        <TasksTable tasks={tasks}/>
      </div>
    )
  }
}
```

Now, access that from other side.

```js
// src/components/TasksTable.js
class TasksTable extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody tasks={tasks} />
      </table>
    );
  }
}
```

We'll pass it through to the `TableBody`, once again through props.

Right now, `TableBody` takes no parameters and returns a single tag.

```js
// src/components/TasksTable.js
const TableBody = () => {
  return <tbody />
}
```

We're going to pass the props through as a parameter, and map through the array to return a table row for each object in the array.

```js
// src/components/TasksTable.js
const TableBody = (props) => {
  const rows = props.tasks.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.status}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};
```

If you view the front end of the app, all the data is loading in now.

### State

Right now, we're storing our tasks in an array in a variable, and passing it through as props. This is good to start, but imagine if we want to be able to delete an item from the array. With props, we have a one way data flow, but with state we can update private data from a component.

To start, we're going to create a `state` object.

```js
// src/App.js
class App extends Component {
  state = {}
}
```

The object will contain properties for everything you want to store in the state. For us, it's `tasks`.

```js
// src/App.js
class App extends Component {
  state = {
    tasks: [],
  }
}
```

Assign array of objects we created earlier to `state.tasks`.

```js
// src/App.js
class App extends Component {
  state = {
    tasks: tasks,
  }
}
```

Our data is contained in the state. Now, we'll create a `deleteTask` method on the parent `App` class.

```js
// src/App.js
deleteTask = (index) => {
  const {tasks} = this.state

  this.setState({
    tasks: tasks.filter((task, i) => {
      return i !== index
    }),
  })
}
```

Now we have to pass that function through to the component, and render a button next to each character that can invoke the function.

```js
// src/App.js
render() {    
    return (
      <div className="container">
        <TasksTable tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </div>
    )
  }
```

Nowe we'll pass it to `TableBody` from `Table`.

```js
// src/components/TasksTable.js
class TasksTable extends Component {
  render() {
    const { tasks, deleteTask } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody tasks={tasks} deleteTask={deleteTask}/>
      </table>
    );
  }
}
```

Here, We'll create a button with an `onClick` and pass it through.

```js
// src/components/TasksTable.js
const TableBody = (props) => {
  const rows = props.tasks.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.status}</td>
        <td>
          <button onClick={() => props.deleteTask(index)}>Delete</button>
        </td>
      </tr>
    );
  });
```

Cool. Now we have delete buttons, and we can modify our state by deleting a task.

## Building and Deploying a React App

Now, if you just want to compile all the React code and place it in the root of a directory, all you need to do is run the following line:

```bash
npm run build
```

This will create a `build` folder which will contain your app. Put the contents of that folder anywhere, and you're done!

We can also take it a step further, and deploy your app on GitHub pages.

First, we're going to add a `homepage` field to `package.json`, that has the URL we want our app to live on.

```json
// package.json
"homepage": "https://imnileshd.github.io/react-app",
```

We'll also add these two lines to the `scripts` property.

```json
// package.json
"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

In your project, you'll add gh-pages to the devDependencies.

```bash
npm install --save-dev gh-pages
```

We'll create the build, which will have all the compiled, static files.

```bash
npm run build
```

Finally, we'll deploy to gh-pages.

```bash
npm run deploy
```

And we're done! The app is now available live at [https://imnileshd.github.io/react-app](https://imnileshd.github.io/react-app).

## Conclusion

Here, I have given you a good introduction to React, simple and class components, state, props and deploying an app. There is much more to learn and do with React.

Go ahead and clone the repos [react-app](https://github.com/imnileshd/react-app) to view the full source code of the project.

Happy Coding!
