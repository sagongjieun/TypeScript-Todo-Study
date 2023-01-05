import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: string;
  setCompletedTodos: string;
}

const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
  return (
    // <div className="todos"><
    //   {todos.map((todo) => (
    //     <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
    //   ))}
    // </div>
    <div className="container">
      <div className="todos">
        <span className="todos-heading">할 일</span>
        {todos.map((todo) => (
          <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos-heading">한 일</span>
        {todos.map((todo) => (
          <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
