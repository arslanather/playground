import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import SearchBar from '../containers/search_bar'
import SearchResults from '../containers/seach_results';

class App extends React.Component{
    render(){
        return <div>
            <nav className="navbar navbar-static-top navbar-dark purple-gradient">
                <span className="navbar-brand">Moviz</span>
            </nav>
            <div className="container-fluid">
                <div className="row justify-content-lg-center">
                    <div className="col-lg-8">
                        <SearchBar />
                    </div>
                </div>
                <div className="row justify-content-lg-center">
                    <SearchResults />
                </div>
            </div>
        </div>
    }
}

export default App;