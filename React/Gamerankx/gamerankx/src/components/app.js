import React from 'react';
import SeachBar from '../containers/search_bar';
import SearchResultList from '../containers/search_results'
import GameDetails from '../containers/game_details'

class App extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">GameRank X</a>
                </nav>
                <div className="container-fluid">
                    <div className="row justify-content-lg-center" style={{"marginTop": 10}}>
                        <div className="col-lg-6">
                            <SeachBar />
                        </div>
                    </div>
                    <div className="row justify-content-lg-left" style={{marginTop: 50, marginBottom:50}}>
                        <div className="col-lg-6">
                            <SearchResultList />
                        </div>
                        <div className="col-lg-6">
                            <GameDetails />
                        </div>
                    </div>
                </div>    
            </div>
            
        )
    }
}

export default App;