import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_API_URL } from "./App";

function EditUser() {

    const { user_id } = useParams();

    const userData = {"Id": null,"Name":'', "Age":'', "Phone": ''}

    const [user, setUser] = useState(userData);

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/')
    }

    

    const loadUser = () => {
        let url = BASE_API_URL+"edit.php?user_id="+user_id;
        axios.get(url).then((response) => {
            setUser(response.data);
        });
    }

    useEffect(() => {
        loadUser();
    }, []);

    const handleInputChanges = (event) => {
        const {name, value} = event.target;

        setUser({...user, [name]: value})
    }

    return (
        <div>
        <form onSubmit={
            event => {
                event.preventDefault();

                console.log(user);

                axios({
                    url:BASE_API_URL+'update.php',
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
                    navigate('/')
                })
                .catch(err =>{
                    alert(err);
                })

            }
        } >
            <h1>Edit User</h1>
            Name: <input type="text" onChange={handleInputChanges} name="Name" value={user.Name} /><br /><br />
            Age: <input type="text" onChange={handleInputChanges} name="Age" value={user.Age} /><br /><br />
            Phone: <input type="text" onChange={handleInputChanges} name="Phone" value={user.Phone} /><br /><br />
            <button>Update</button>
        </form>
        <br/><button onClick={backToHome}>Back</button>
        </div>
    )
}

export default EditUser;