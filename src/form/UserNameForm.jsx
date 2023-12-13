import { useState } from "react";

function UserNameForm() {
    const [username, setUsername] = useState("timmy");
    const updateUsername = (e) => {
        setUsername(e.target.value);
    };
    return (
        <div>
            <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={updateUsername}
            />
            <button>Submit</button>
        </div>
    );
}
export default UserNameForm;
