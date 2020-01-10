import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Create styled compontn Collapse as a div element that takes an attribute
// className with value 'collapse navbar-collapse'
const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``;

// Create styled compontn List as a div element that takes an attribute
// className with value 'navbar-nav mr-auto'
const List = styled.div.attrs({
    className: 'navbar-nav mr-auto'
})``;

// Create styled componetn Item as div element that takes an attribute
// className with value 'collapse navbar-collapse'
const Item = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``;

// Create class Links. The render method returns react fragment.
// The fragment contains the Link and the Collapse components
// >> The Link takes attribute 'to' to specify route. The route is '/'
//    The second attribute is className with value navbar-brand
// >> The Collapse contains the List component
// >>> The List component contains the Item components
// >>>> The Item components contains the Link components
// >>>>> The first Link takes the attributes 'to' with value '/' and 
//       className with value 'nav-link'.
// >>>>> Another one Link has attribute 'to' with value '/create' and 
//       className with value 'nav-link'
class Links extends Component {
    render() {
        return (
            <>
                <Link to='/' className='navbar-brand'>
                    The movie application
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to='/' className='nav-link'>
                                Movies
                            </Link>
                        </Item>
                        <Item>
                            <Link to='/create' className='nav-link'>
                                Create Movie
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </>
        );
    }
}

// Export the Links component as default
export default Links;