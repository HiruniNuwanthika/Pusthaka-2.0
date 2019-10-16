import React, { useState } from 'react';
import axios from 'axios';
import {Row, Label, Input, Button, Form} from 'reactstrap'

const BookRepo = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState({items: []});
    const onInputChange = (e) => {
      setSearchTerm(e.target.value);
    }

    let API_URL = `https://www.googleapis.com/books/v1/volumes`;
  
    const fetchBooks = async () => {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
    }
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      fetchBooks();
    }
  
    const bookAuthors = (authors) => {
      if (authors.length <= 2) {
        authors = authors.join(' and ')
      }
      else if (authors.length > 2) {
        let lastAuthor = ' and ' + authors.slice(-1);
        authors.pop();
        authors = authors.join(', ');
        authors += lastAuthor;
      };
      return authors;
    }

    return (
      <section>
        
        <span>&nbsp;&nbsp;</span>
        <Form onSubmit={onSubmitHandler}>
        <Row>
          <Label style={{margin:"5px"}}>Name of the book</Label>
          <Input
            style={{margin:"5px"}}
            type="text" 
            placeholder="type name of the book" 
            value={searchTerm}
            onChange={onInputChange}
          />
          <Button style={{margin:"5px"}} type="submit"  color="primary" >Search</Button>
        </Row>
          
            
        </Form>
        <ul>
          {
            books.items.map((book, index) => {
              return (
                <li key={index}>
                  <div>
                    <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                    <div>
                      <h3>{ book.volumeInfo.title }</h3>
                      <p>{ bookAuthors(book.volumeInfo.authors) }</p>
                      <p>{book.volumeInfo.publishedDate}</p>
                    </div>
                  </div>
                  <hr />
                </li>
              );
            })
          }
        </ul>
      </section>
    );
  }
  
  export default BookRepo;