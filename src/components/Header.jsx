import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userAction';

const Header = () => {
    const userLogin = useSelector(state => state.userLogin)
    const dispatch = useDispatch()
    const { userInfo } = userLogin
    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(logout()z)
    }
    return (
        <header>
            <Navbar bg="dark" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Book-Shop</Navbar.Brand>
                    </LinkContainer>

                    <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link> <i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='userName'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : <LinkContainer to='/login'>
                            <Nav.Link><i className="fas fa-user"></i> Sign in</Nav.Link>
                        </LinkContainer>}

                    </Nav>
                </Container>
            </Navbar >
            <br />

        </header >
    )
}

export default Header
