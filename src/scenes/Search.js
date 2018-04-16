import React,{Component} from 'react';
import '../App.css';
import List from '../components/List';
import If from '../components/If';
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
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.search} onChange={(v) => this.onChangeSearch(v.target.value)}/>
                    </div>
                </div>
                <If test={this.state.search !== ''}>
                    <div className="search-books-results">
                        <List books={filterBooks(this.state.search)} title={'search'} updateShelf={updateShelf}/>
                    </div>
                </If>
            </div>
        )
    }
    
}

export default Search;