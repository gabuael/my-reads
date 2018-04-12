import React,{Component} from 'react';
import '../App.css';
import List from '../components/List';
import { Link } from 'react-router-dom';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }
    
    onChangeSearch(value){
        this.setState({search: value});
    }
    
    render (){
        const { filterBooks, updateShelf} = this.props;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => console.log(true)}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.search} onChange={(v) => this.onChangeSearch(v.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <List books={filterBooks(this.state.search)} title={'search'} updateShelf={updateShelf}/>
                </div>
            </div>
        )
    }
    
}

export default Search;