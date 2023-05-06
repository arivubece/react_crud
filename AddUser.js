import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from "./App";

function AddUser(props) {

    const initialFormState = {"id": null,"Name":'', "Age":'', "Phone": ''}

    const [user, setUser] = useState(initialFormState);

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    const handleInputChanges = (event) => {
        const {name, value} = event.target;

        setUser({...user, [name]: value})
    }

    return (
        <div>
        <form onSubmit={
            event => {
                event.preventDefault();


                axios({
                    url: BASE_API_URL+'create.php',
                    data:user,
                    method:"POST",
                    mode: 'no-cors',
                    headers:{
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": process.env.REACT_APP_API_URL,
                        "Access-Control-Request-Headers": 'Content-Type',
                        "Access-Control-Allow-Headers": '*',
                        "Authorization": 'Bearer 5384562389563535sfsafdsf'          
                    }
                })
                .then(res => {
                    
                    navigate('/');
                })
                .catch(err =>{
                    alert(err);
                })

                setUser(initialFormState);
            }
        } >
            <h1>Add User</h1>
            Name: <input type="text" onChange={handleInputChanges} name="Name" value={user.Name} /><br /><br />
            Age: <input type="text" onChange={handleInputChanges} name="Age" value={user.Age} /><br /><br />
            Phone: <input type="text" onChange={handleInputChanges} name="Phone" value={user.Phone} /><br /><br />
            <button>Add User</button>
        </form>
        <br/><button onClick={backToHome}>Back</button>
        </div>
    )
}

export default AddUser;