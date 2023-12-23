import TodoListForm from "./TodoListForm.jsx";
import { useEffect, useState } from "react";
import {
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
const initTodos = [
    { id: 1, text: "do laundry", completed: true },
    { id: 2, text: "make breakfast", completed: true },
    { id: 3, text: "learn some stuff", completed: false },
];
export default function TodoList() {
    const [todos, setTodos] = useState(initTodos);
    const handleToggle = (value) => () => {};
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
                    const labelId = `checkbox-list-label-${todo.text}`;
                    return (
                        <ListItem
                            key={todo.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <ClearIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton
                                role={undefined}
                                onClick={handleToggle(todo)}
                                dense
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={todo.completed}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{
                                            "aria-labelledby": labelId,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    id={labelId}
                                    primary={todo.text}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <TodoListForm />
        </div>
    );
}
