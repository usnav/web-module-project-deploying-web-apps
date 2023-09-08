import React from 'react';

const Form = (props) => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        props.change(name, value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submit();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name
            <input 
            placeholder = "Enter your name"
            value={props.values.name}
            name = "name"
            onChange={handleChange}
            />
            </label>
            <label>
                Email
                <input 
                placeholder="Enter your email"
                value={props.values.email}
                name="email"
                onChange={handleChange}
                />
            </label>
            <label>Role
                <input
                placeholder="Enter your role"
                value={props.values.role}
                name="role"
                onChange={handleChange}
                />
            </label>
            <input
                type= "submit" value="Create your team!"
            />
        </form>
    )
}

export default Form;