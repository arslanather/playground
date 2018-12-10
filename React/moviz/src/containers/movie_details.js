import React from 'react';
import {connect} from 'react-redux'
import na from '../img/nopicture.gif'

class MovieDetails extends React.Component{

    getPoster = (movie) => {
        if(movie.Poster !== "N/A"){
            return movie.Poster
        }else{
            return na
        }
    }

    render(){
        console.log("test", this.props)
        return(
            <div className="col-lg-8">
                <div className="jumbotron text-center">

                    <h4 className="card-title h4 pb-2"><strong>{this.props.selectedMovie.Title}</strong></h4>

                        <img src={this.getPoster(this.props.selectedMovie)} className="img-fluid z-depth-4" alt="" />

                    <p />
                    <p className="card-text h5">{this.props.selectedMovie.Genre}</p>

                    <p className="card-text">{this.props.selectedMovie.Plot}</p>
                    {this.props.selectedMovie.Ratings.map((rating) => {
                        return <p className="h5" key={rating.Source}>{rating.Source} : <span className="badge badge-pill badge-success">{rating.Value}</span></p>
                    })}

                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {selectedMovie: state.selectedMovie}
}

export default connect(mapStateToProps)(MovieDetails);