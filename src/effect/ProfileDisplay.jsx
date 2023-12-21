import ProfileSearchForm from "./ProfileSearchForm.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://api.github.com/users/";

function ProfileDisplay() {
    const [profileData, setProfileData] = useState({});
    const fetchUsername = (username) => {
        axios.get(url + username).then(({ data }) => {
            console.log("data", data);
            setProfileData(data);
        });
    };
    useEffect(() => {
        fetchUsername("hiimchinh");
    }, []);
    return (
        <div>
            <ProfileSearchForm fetchUsername={fetchUsername} />
            <h2>Full name: {profileData.name}</h2>
            <img src={profileData.avatar_url} alt={profileData.login} />
        </div>
    );
}
export default ProfileDisplay;
