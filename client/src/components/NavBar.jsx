import React, { Component } from 'react';
import styled from 'styled-components';

// Import Logo and Links components
import Logo from './Logo';
import Links from './Links';

// Create styled component Container that is div element with attribute
// className that contains value 'container'
const Container = styled.div.attrs({
    className: 'container'
})``;

// Create styled component Nav that is nav element with attribute
// className that contains value 'navbar navbar-expand-lg navbar-dark bg-dark'
// and template string with margin-bottom
const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark'
})`
    margin-bottom: '20px';
`;

// Create class NavBar. The render method returns the next layout:
// Container>Nav>Logo+Links
class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo></Logo>
                    <Links></Links>
                </Nav>
            </Container>
        );
    }
}

// Exports the NavBar as default
export default NavBar;