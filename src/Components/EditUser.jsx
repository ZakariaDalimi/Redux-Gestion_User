import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateuser } from "../ReduxToolkit/userslice";

import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;



const EditUser = () => {

    const location = useLocation();
    const { user } = location.state;

    const dispatch = useDispatch();

    const [oldUser , setOldUser] = useState({ id: 0, firstname: "firstname", lastname: "lastname" })

    const datauserState = useSelector(state => state.user.datauser)

    useEffect(() => {
        const datauser = datauserState.find(item => item.id === user)
        if (datauser) {
            setOldUser({
                id : datauser.id ,
                firstname : datauser.firstname ,
                lastname : datauser.lastname
            })
        }
    } , [datauserState, user])

    const handlechangeInput = (e) => {
        e.preventDefault()
        setOldUser({
            ...oldUser ,
            id : user ,
            [e.target.name] : e.target.value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateuser({oldUser , user}))
        navigate('/')
    }

    return <>
        <h1>Edit user id : {user}</h1>
        {
            oldUser && (
                    <Form onSubmit={handleSubmit}>
                        <Input type="text" name="firstname" value={oldUser.firstname} onChange={handlechangeInput}  placeholder="Enter your FirstName"/>
                        <Input type="text" name="lastname" value={oldUser.lastname} onChange={handlechangeInput} placeholder="Enter your LastName" />
                        <SubmitButton type="submit" value="Update"/>
                    </Form>
            )
        }
    </>
}

export default EditUser;