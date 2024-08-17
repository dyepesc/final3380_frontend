import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import BookCard from './BookCard'; 
// import './BookList.css'; 
import './style.css'; 
// import '../App.css'; 

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://final338-backend.onrender.com/api/v1/book')
    
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from BookList');
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://final338-backend.onrender.com/api/v1/book${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const bookList =
    books.length === 0
      ? 'You don\'t have books on the list!'
      : books.map((book) => <BookCard book={book} key={book._id} onDelete={handleDelete} />);

  return (
    <>
        <div className='BookList'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <br />
                        <h2 className='display-4 text-center'>Books List</h2>
                    </div>
                <div className='col-md-11'>
                    <Link
                        to='/create-book'
                        className='btn btn-outline-warning float-right'
                        >
                        + Add New Book
                    </Link>
                    <br />
                    <br />
                    <hr />
                </div>
                
            </div>

            <div className='list'>{bookList}</div>
            </div>
        </div>
     
    </>
    
  )
}

export default BookList;
