import TodoListForm from "./TodoListForm.jsx";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import TodoListItem from "./TodoListItem.jsx";
import { List } from "@mui/material";
const getTodos = () => {
    const initTodos = [
        { id: 1, text: "do laundry", completed: true },
        { id: 2, text: "make breakfast", completed: true },
        { id: 3, text: "learn some stuff", completed: false },
    ];
    const savedItems = JSON.parse(localStorage.getItem("todo-list-items"));
    return Array.isArray(savedItems) ? savedItems : initTodos;
};
export default function TodoList() {
    const [todos, setTodos] = useState(getTodos);
    const handleToggle = (toggledTodo) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === toggledTodo.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        });
    };
    const handleRemove = (removedTodo) => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== removedTodo.id)
        );
    };
    const addNewItem = (todoTask) => {
        const newTodo = { id: uuid(), text: todoTask, completed: false };
        setTodos((prevTodos) => {
            return [...prevTodos, newTodo];
        });
    };
    const saveTodos = (todos) => {
        localStorage.setItem("todo-list-items", JSON.stringify(todos));
    };
    useEffect(() => {
        saveTodos(todos);
    }, [todos]);
    return (
        <div>
            <h1>Todos</h1>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                {todos.map((todo) => {
                    return (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            handleToggle={handleToggle}
                            handleRemove={handleRemove}
                        />
                    );
                })}
            </List>
            <TodoListForm addNewItem={addNewItem} />
        </div>
    );
}
