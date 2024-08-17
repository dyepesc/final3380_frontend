import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DeleteBook from './DeleteBook';
// import './BookList.css';
import '../App.css'; 

function BookCard({ book, onDelete }) {
  
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div className="desc">
              
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      
        
      </div>
      <button onClick={() => onDelete(book._id)}>X</button>                               
    </div>
  );
}

export default BookCard;
