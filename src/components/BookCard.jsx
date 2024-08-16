import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './DeleteBook';
// import './BookList.css';
import '../App.css'; 

function BookCard({ book, deleteBookHandler }) {
  
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div className="desc">
      {/* <button onClick={() => props.deleteBook(id)}>X</button> */}
      
      {/* <button className="deleteBook" onClick={() => deleteBookHandler()} p-6> */}
            {/* X
          </button> */}
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
        {/* <button onClick={() => deleteBookHandler(book._id)}>X</button> */}
        
        {/* onDelete={handleDeleteCard} */}
      </div>
    </div>
  );
}

export default BookCard;