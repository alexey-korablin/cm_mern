import React, { Component } from 'react';
import styled from 'styled-components';

import api from '../api';

const Title = styled.h1.attrs({
    className: 'h1',
})``;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 20px;
`;

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
`;

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger'
})`
    margin: 15px 15px 15px 5px;
`;

class MoviesUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            title: '',
            time: ''
        };
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

    handleUpdateMovie = async () => {
        const { id, name, rating, time } = this.state;
        const arrayTime = time.split('/');
        const payload = { name, rating, time: arrayTime };

        await api.updateMovieById(id, payload).then(res => {
            window.alert(`Movie updated successfully`);
            this.setState({
                name: '',
                rating: '',
                time: '',
            })
        })
    }

    componentDidMount = async () => {
        const id = this.state.id;
        const movie = await api.getMovieById(id);

        this.setState({
            name: movie.data.data.name,
            rating: movie.data.data.rating,
            time: movie.data.data.time.join('/')
        })
    }

    render() {
        const { name, rating, time } = this.state;
        return (
            <Wrapper>
                <Title>Update Movie</Title>
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
                <Button onClick={this.handleUpdateMovie}>Update Movie</Button>
                <CancelButton href='/movies/list'>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

export default MoviesUpdate;