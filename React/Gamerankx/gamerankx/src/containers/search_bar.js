import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchGames} from '../actions'

class SearchBar extends React.Component{

    constructor(props){
        super(props);

        this.state = { inputValue: '' }
    }

    onInputChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    searchSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGames(this.state.inputValue)
        this.setState({inputValue: ''})
    }

    render(){
        return (
            <div>
                <form 
                onSubmit={this.searchSubmit}
                className="input-group">
                    <input
                    placeholder="Seach a game ranking here!"
                    className="form-control"
                    value={this.state.inputValue}
                    onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-light">Search</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchGames}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);