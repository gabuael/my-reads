import React,{Component} from 'react';
import '../App.css';
import * as api from '../util/BooksAPI';
import { Link } from 'react-router-dom';

class Book extends Component {

    constructor(props){
        super(props);
        this.state = {
            book: {
                title: '',
                imageLinks: {
                    smallThumbnail: '',
                    thumbnail: ''
                }
            }
        }
    }
    
    componentWillMount(){
        const { bookId } = this.props.routeProps.match.params;
        api.get(bookId).then(book => {
            this.setState({book});
            console.log(book);
        })
    }
    
    render (){
        const { book } = this.state;
        return(
            <div >
                <div >
                    <Link className="close" to='/'>Close</Link>
                </div>
                <div >
                    <div>{book.title}</div>
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                </div>
            </div>
        )
    }
    
}

export default Book;