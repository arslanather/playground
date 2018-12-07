import React from 'react';
import {connect} from 'react-redux';
import {selectGame} from '../actions/index'
import {bindActionCreators} from 'redux';
import NAImage from '../img/na.png'

class SearchResultList extends React.Component{

    render(){
        if(!this.props.game_reducer){
            return <div></div>
        }else{
            return(
                <div className="list-group">
                    {this.props.game_reducer.map((game) => {
                        if(game.cover){
                            return <li onClick={() => {this.props.selectGame(game)}} className="list-group-item list-group-item-action" key={game.id}>
                                <img src={game.cover.url} height="10%" width="10%"/>
                                <span style={{marginLeft: 10}}>{game.name}</span></li>
                        }else{        
                            return <li onClick={() => {this.props.selectGame(game)}} className="list-group-item list-group-item-action" key={game.id}>
                                <img src={NAImage} height="10%" width="10%"></img>
                                <span style={{marginLeft: 10}}>{game.name}</span></li>
                        }
                    })}
                </div>
            )
        }
        
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectGame}, dispatch);
}
function mapStateToProps(state){
    return { game_reducer: state.game_reducer}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList);