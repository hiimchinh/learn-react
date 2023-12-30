import { FormControl, TextField } from "@mui/material";
import { useState } from "react";

export default function TodoListForm({ addNewItem }) {
    const [item, setItem] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewItem(item);
        setItem("");
    };
    return (
        <FormControl>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-todo-list-item"
                    placeholder="New item"
                    label="Task"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
            </form>
        </FormControl>
    );
}
