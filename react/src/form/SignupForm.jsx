import { useState } from "react";

function SignupForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
    });
    const updateForm = (event) => {
        const changedField = event.target.name;
        const newValue = event.target.value;
        setFormData((currentFormData) => {
            return {
                ...currentFormData,
                [changedField]: newValue,
            };
        });
    };
    return (
        <div>
            <label htmlFor="firstName">First name</label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={updateForm}
            />
            <label htmlFor="lastName">Last name</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={updateForm}
            />
            <button>Submit</button>
        </div>
    );
}
export default SignupForm;
