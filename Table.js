import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from "./App";

function Table(props) {

    const userData = []

    const [users, setUsers] = useState(userData);

    const loadUsers = () => {
        let url = BASE_API_URL+"list.php";
        axios.get(url).then((response) => {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const navigate = useNavigate();
    const EditUserFunction = (user_id) => navigate('/edit/'+user_id);
    const AddUserFunction = () => navigate('/add');

    useEffect(() => {
        loadUsers();
    }, []);

    const DeleteUser = (user_id) => {
        
        axios.get(BASE_API_URL+"delete.php?user_id="+user_id).then(() => {
            loadUsers();
        }).catch(() => {
            alert("Error on delete")
        })
        
    }

    return (        
        <div>
            <h1>List Users</h1>

            <button onClick={AddUserFunction}>Add User</button><br/><br/>

            <table border="1" cellPadding="5">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            
            <tbody>
                { users.length > 0 ? (

                    users.map((user, index) => (
                    <tr key={user.Id}>
                        <td>{user.Name}</td>
                        <td>{user.Age}</td>
                        <td>{user.Phone}</td>
                        <td>
                            <button onClick={() => EditUserFunction(user.Id)}>Edit</button>
                            <button onClick={() => DeleteUser(user.Id)}>Delete</button>
                        </td>
                    </tr>
                    
                    ))

                ) : (
                    <tr><td align="center" colSpan={4}>No Users</td></tr>
                )            
            }
                
            </tbody>
            </table>
        </div>
        

        
    )
}

export default Table;