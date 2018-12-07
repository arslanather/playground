import React from 'react';
import {connect} from 'react-redux';
import NAImage from '../img/na.png'

class GameDetails extends React.Component{

    getFullSizeUrl(game){
        if(game.cover){
            return game.cover.url.replace("thumb", "cover_big")
        }else{
            return NAImage
        }
    }

    getNullFreeRating(game){
        if(game.rating){
            return `${game.rating.toFixed(2)}%`
        }else{
            return "N/A"
        }
    }

    getNullFreeSummary(game){
        if(game.summary){
            return game.summary
        }else{
            return "Summary N/A"
        }
    }

    render(){
        if(this.props.selected_game){   
            console.log(this.props.selected_game)
            return(
                <div className="jumbotron jumbotron-fluid">
                    <img className="img-thumbnail rounded mx-auto d-block" 
                    src={this.getFullSizeUrl(this.props.selected_game)}></img>
                    <h2 className="text-center" style={{marginTop: 10}}>{this.props.selected_game.name}&nbsp;
                        <span className="badge badge-success">{this.getNullFreeRating(this.props.selected_game)}</span>
                    </h2>
                    <p className="text-center" style={{marginLeft: 10, marginRight: 10}}>
                        {this.getNullFreeSummary(this.props.selected_game)}</p>
                </div>
            )
        }else{
            return <div></div>
        }
    }
}

function mapStateToProps({ selected_game }){
    return { selected_game }
}

export default connect(mapStateToProps)(GameDetails);