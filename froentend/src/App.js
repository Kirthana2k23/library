import React, { useState } from 'react';
import axios from 'axios';
import Booksimages from './Booksimages';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/books/?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

    <Booksimages />
      <div className="container">
        <div className="row">
          <div className="col">
     <center>     <input type="text" value={query}  placeholder='Search Title '   onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}  className='btn btn-dark text-white'>Search</button></center>
   
     <div className="row">
     {results.map((book) => (
          <>


          <div className='col-sm' key={book.id}>
           <h4> {book.title}</h4> 
           <h6>{book.author}</h6>
           <img
          className="col-3 img-fluid img-thumbnail"
          src={book.image}
          alt="book.images "
        />
          </div>

          </>
        ))}
     </div>
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
