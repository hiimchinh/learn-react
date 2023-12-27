import { FormControl, TextField } from "@mui/material";
import { useState } from "react";

export default function TodoListForm({ addNewItem }) {
    const [item, setItem] = useState("");
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewItem(item);
        }
    };
    return (
        <FormControl>
            <TextField
                id="outlined-todo-list-item"
                placeholder="New item"
                label="Task"
                value={item}
                onKeyDown={handleKeyDown}
                onChange={(e) => setItem(e.target.value)}
            />
        </FormControl>
    );
}
