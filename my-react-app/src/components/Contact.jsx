import useSWR from "swr"
import "./Contact.css"
import { useState, useEffect, use } from "react"
import axios from "axios";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Contact = () => {
    // const [users, setUsers] = useState([]);
    const { data, error, isLoading, mutate } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    // setUsers(data);

    const addNewContact = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)

        const credentials = {
            username: e.target.name.value,
            password: e.target.email.value
        };

        const api = "https://jsonplaceholder.typicode.com/users";

        axios.post(api, credentials)
            .then((response) => {
                console.log("Add user successfully: ", response.data);
                alert("Success!");
                e.target.reset();
                
                const newUser = response.data;// Clear the form 
                // Refresh the contact list
                mutate([...data, newUser], false); // Update the local data without revalidating
            })
            .catch((error) => {
                console.error("Error adding user: ", error);
                alert("Failed!");
            })
    }

    return (
        <div id="contact-container">
            <h1>Contact List</h1>
            <table id="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <form onSubmit={e => addNewContact(e)}>
                <label for="name">Name: </label>
                <input type="text" id="name" />

                <label for="email">Email: </label>
                <input type="text" id="email" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;