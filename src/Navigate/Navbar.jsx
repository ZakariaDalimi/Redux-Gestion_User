import { Link } from "react-router-dom";
import Routing from "./Routing";
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #333;
    overflow: hidden;
`;

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const Li = styled.li`
    float: left;
`;

const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    margin : 7px;

    &:hover {
        background-color: #111;
    }
`;

const Logo = styled(Li)`
    font-size: 24px;
    font-weight: bold;
    color: white;
    padding: 14px 16px;
    text-transform: uppercase;
`;

const Navbar = () => {
    return (
        <>
            <Nav>
                <Ul>
                    <Logo>Logo</Logo>
                    <Li><StyledLink to='/'>List Of Users</StyledLink></Li>
                    <Li><StyledLink to='/AddUser'>Add User</StyledLink></Li>
                </Ul>
            </Nav>
            <Routing />
        </>
    );
}

export default Navbar;
