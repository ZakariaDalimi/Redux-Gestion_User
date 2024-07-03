import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../ReduxToolkit/userslice";
import { useNavigate } from "react-router-dom";

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

const AddUser = () => {

    const [user , setUser] = useState({
        id : 1 ,
        firstname : '' ,
        lastname : ''
    })

    const dispatch = useDispatch()

    const datauserState = useSelector(state => state.user.datauser)

    const handleInput = (e) => {
        e.preventDefault()
        setUser({
            ...user ,
            id : datauserState.length + 1 ,
            [e.target.name] : e.target.value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${user.firstname} , ${user.lastname}`)
        dispatch(adduser(user))
        navigate('/')
    }



    return <>
        <h1>Add User</h1>
        <Form onSubmit={handleSubmit}>
            <Input type="text" name="firstname" placeholder="Enter your FirstName" onChange={handleInput} />
            <Input type="text" name="lastname" placeholder="Enter your LastName" onChange={handleInput} />
            <SubmitButton type="submit" value="Add user"/>
        </Form>
    </>
}

export default AddUser ;