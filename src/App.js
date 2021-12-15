import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import TodoList from './components/todolist/TodoList';
import DoneList from './components/todolist/DoneList';
import UndoneList from './components/todolist/UndoneList';
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="todoApp">
            <nav className="navBar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/doneList">Done</Link>
                </li>
                <li>
                  <Link to="/undoneList">Undone</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/">
                <TodoList />
              </Route>
              <Route exact path="/doneList">
                <DoneList />
              </Route>
              <Route exact path="/undoneList">
                <UndoneList />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
    </div>

  );
}

export default App;
