import { Rating, Typography } from "@mui/material";
import { useState } from "react";

function RatingDemo() {
    const [value, setValue] = useState(2);
    return (
        <div>
            <Typography component="legend">Controlled</Typography>
            <Rating
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    );
}
export default RatingDemo;
