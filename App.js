import Table from "./Table"
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const BASE_API_URL = "https://purebeautyindia.in/react/php_api/";

function App() {
        return (
            <Router>
                <div>
                    <Routes>
                    <Route path="" element={<Table />} />
                    <Route path="add" element={<AddUser />} />
                    <Route path="edit/:user_id" element={<EditUser />} />
                    </Routes>
                </div>
            </Router>
        )
}

export default App;