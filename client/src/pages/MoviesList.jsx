import React, { Component } from 'react';
import ReactTable from 'react-table';
import styled from 'styled-components';
import 'react-table/react-table.css';

import api from '../api';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

// Styled Update component
const Update = styled.div`
    color: #ef9d0f;
    cursor: pointer;
`;

// Styled Delete component
const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`;

// Update movie class component. Implements two methods updateMovie and render
class UpdateMovie extends Component {
    updateMovie = e => {
        e.preventDefault();
        window.location.href = `/movies/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateMovie}>Update</Update>
    }
}

// Delete movie class component. Implements two methods: delete movie and render
class DeleteMovie extends Component {
    deleteMovie = e => {
        e.preventDefault();
        if ( window.confirm(`Do you want to delete the movie ${this.props.id} permanently?`) ) {
            api.deleteMovieById(this.props.id)
            window.location.reload();
        }
    }

    render() {
        return <Delete onClick={this.deleteMovie}>Delete</Delete>
    }
}

class MoviesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({isLoading: true});

        await api.getAllMovies().then(movies => {
            console.log(movies);
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            });
        })
    }

    render() {
        const { movies, isLoading } = this.state;

        let isShowTable = true;

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: '',
                accessor: '',
                Cell: props => <UpdateMovie id={props.original._id} />,
            },
            {
                Header: '',
                accessor: '',
                Cell: props => <DeleteMovie id={props.original._id} />,
            },
        ]

        if (!movies.length) {
            isShowTable = false;
        }

        return (<Wrapper>
            {
                isShowTable &&
                <ReactTable 
                    data={movies}
                    columns={columns}
                    loading={isLoading}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={0}
                />
            }
        </Wrapper>);
    }
}

export default MoviesList;