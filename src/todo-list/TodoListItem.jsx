import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import {
    Checkbox,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

export default function TodoListItem({ todo, handleToggle }) {
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
            <ListItemButton role={undefined} onClick={handleToggle(todo)} dense>
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
                <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
        </ListItem>
    );
}
