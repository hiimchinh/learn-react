import { useState } from "react";
import { Box, TextField } from "@mui/material";

function FormDemo() {
    const [name, setName] = useState("");
    return (
        <Box sx={{ border: "1px solid black", p: 2 }}>
            <h1>My name is: {name}</h1>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
        </Box>
    );
}

export default FormDemo;
