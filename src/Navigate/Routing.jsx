import { Route, Routes } from "react-router-dom";
import AllUser from "../Components/AllUser";
import AddUser from "../Components/AddUser";
import EditUser from "../Components/EditUser";

const Routing = () => {
    return <>
        <Routes>
            <Route index element={<AllUser />}/>
            <Route path="/AddUser" element={<AddUser />}/>
            <Route path="/EditUser" element={<EditUser />}/>
        </Routes>
    </>
}

export default Routing;