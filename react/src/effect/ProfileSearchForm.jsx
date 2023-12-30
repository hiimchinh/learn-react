import { useState } from "react";

function ProfileSearchForm({ fetchUsername }) {
    const [username, setUsername] = useState("");
    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const findUsername = (e) => {
        e.preventDefault();
        console.log("find this");
        fetchUsername(username);
    };
    return (
        <form>
            <label htmlFor="name">Input name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={username}
                onChange={handleUsername}
            />
            <button onClick={findUsername}>Find user</button>
        </form>
    );
}
export default ProfileSearchForm;
