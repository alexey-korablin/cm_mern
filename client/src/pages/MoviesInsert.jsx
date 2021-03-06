import React, { Component } from 'react';
import styled from 'styled-components';

import api from '../api';

const Title = styled.h1.attrs({
    className: 'h1',
})``;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})``;

const Label = styled.label`
    margin: 5px;
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`;

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
    margin: 15px 15px 15px 5px;
`;

class MoviesInsert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            time: '',
        }
    }

    handleChangeInputName = e => {
        const name = e.target.value;
        this.setState({ name });
    }

    handleChangeInputRating = e => {
        const rating = e.target.validity.valid
            ? e.target.value
            : this.state.rating;
        this.setState({ rating });
    }

    handleChangeInputTime = e => {
        const time = e.target.value;
        this.setState({ time });
    }

    handleIncludeMovie = async () => {
        const { name, rating, time } = this.state;
        const arrayTime = time.split('/');
        const payload = { name, rating, time: arrayTime };

        await api.insertMovie(payload).then(res => {
            window.alert(`Movie inserted successfully`);
            this.setState({
                name: '',
                rating: '',
                time: '',
            })
        })
    }

    render() {
        const { name, rating, time } = this.state;
        return (
            <Wrapper>
                <Title>Create Movie</Title>
                <Label>Name:</Label>
                <InputText 
                    type='text' 
                    value={name} 
                    onChange={this.handleChangeInputName}
                />
                <Label>Rating:</Label>
                <InputText 
                    type='number'
                    step='0.1'
                    lang='en-US'
                    min='0'
                    max='10'
                    pattern='[0-9]+([,\.]+[0-9]+)?'
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />
                <Label>Time:</Label>
                <InputText 
                    type='text' 
                    value={time} 
                    onChange={this.handleChangeInputTime}
                />
                <Button onClick={this.handleIncludeMovie}>Add Movie</Button>
                <CancelButton href='/movies/list'>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

export default MoviesInsert;