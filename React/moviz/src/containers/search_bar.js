import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchSearch} from '../actions/index'


class SearchBar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {inputValue: ''}
    }
    
    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    submitCallback = (event) => {
        event.preventDefault();
        this.props.fetchSearch(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submitCallback}
                    className="md-form input-group">
                    <input className="form-control" 
                    onChange={this.onInputChange}
                    value={this.state.inputValue}
                    type="text" placeholder="Search for you favorite movies here !" aria-label="Search" />
                    <button className="input-group-btn btn purple-gradient btn-rounded btn-md" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchSearch}, dispatch)
}


export default connect(null, mapDispatchToProps)(SearchBar);