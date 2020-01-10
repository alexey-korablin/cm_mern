import React, { Component } from 'react';
import styled from 'styled-components';

// Import logo svg
import logo from '../logo.svg';

// Create styled anchor element the name is Wrapper by setting the attribute
//  className with value 'navbar-brand'
const Wrapper = styled.a.attrs({
    className: 'navbar-brand'
})``;

// Class Logo which render method returns the Wrapper with href and image
// in it. Attributes of image are src, width, height and alt
class Logo extends Component {
    render() {
        return (
            <Wrapper href='https://yandex.ru'>
                <img src={logo} width="50" height="50" alt="yandex.ru"/>
            </Wrapper>
        );
    }
}

// export the class Logo as default
export default Logo;