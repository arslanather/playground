import React from 'react';
import {bindActionCreators} from 'redux';
import {selectMovie} from '../actions/index'
import MovieDetails from './movie_details'
import {connect} from 'react-redux';
import na from '../img/nopicture.gif'

class SearchResults extends React.Component{

    onMovieSelect = (movie) => {
        this.props.selectMovie(movie)
    }

    createSearchCard(movie){
        if(movie.Poster==="N/A"){
            movie.Poster = na
        }
        return (
            <div className="col-lg-3" style={{marginTop: 50}} key={movie.imdbID}>
                <div className="card">
                    <div className="view overlay">
                        <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
                    <a onClick={()=> this.onMovieSelect(movie)}>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                    </div>
                    <div className="card-body">
                            <h4 className="card-title">{movie.Title}</h4>
                    </div>

                </div>
            </div>
            
        )
    }
    render(){
        if(this.props.searchResults){
            if(this.props.searchResults.Search){
            return <div className="row" style={{marginLeft:50, marginRight:50}}>
                    {this.props.searchResults.Search.map((movie)=>this.createSearchCard(movie))}
                </div>
            }else{
                return<div className="h1 purple-text">No results!</div>
            }   
        }else if(this.props.selectedMovie){
            return <MovieDetails />
        }else{
            return<div className="h1 purple-text">Welcome!</div>
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectMovie}, dispatch)
}

function mapStateToProps(state){
    return {searchResults: state.searchResults, selectedMovie: state.selectedMovie}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);