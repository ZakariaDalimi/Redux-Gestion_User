import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deteleuser } from "../ReduxToolkit/userslice";


const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 18px;
    text-align: left;
`;

const Th = styled.th`
    background-color: #333;
    color: white;
    padding: 12px 15px;
`;

const Tr = styled.tr`
    &:nth-of-type(even) {
        background-color: #f2f2f2;
    }
`;

const Td = styled.td`
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
    padding: 8px 12px;
    margin: 0 5px;
    border: none;
    background-color: #333;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #555;
    }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


const AllUser = () => {

    const datauserState = useSelector(state => state.user.datauser)

    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(datauserState)
    } , [datauserState] )

    const navigate = useNavigate();

    const handleEdit = (user) => {
        navigate('/EditUser' , { state: { user } })
    }

    const handleDelete = (user) => {
        dispatch(deteleuser(user))
    }

    return (
        <>
            <h1>All Users</h1>
            <StyledLink to='/AddUser'>Add User</StyledLink>
            <Table>
                <thead>
                    <tr>
                        <Th>Id</Th>
                        <Th>FirstName</Th>
                        <Th>LastName</Th>
                        <Th>Edit</Th>
                        <Th>Destroy</Th>
                    </tr>
                </thead>
                <tbody>
                    {datauserState && datauserState.map((user, index) => (
                        <Tr key={index}>
                            <Td>{user.id}</Td>
                            <Td>{user.firstname}</Td>
                            <Td>{user.lastname}</Td>
                            <Td><Button onClick={() => handleEdit(user.id)}>Edit</Button></Td>
                            <Td><Button onClick={() => handleDelete(user.id)}>Destroy</Button></Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default AllUser ;