import React, { useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  var [books, setBooks] = React.useState([]);
  var [newBook, setNewBook] = React.useState({
    title: '',
    views: ''
  })
  var [editFlag, setEditFlag] = React.useState(false);
  var [selectedBook,setSelectedBook]=React.useState(null)
  useEffect(function () {
    getBooks();
  }, [])
  function addBook() {
    axios.post('http://localhost:4000/books', newBook).then((res) => {
      getBooks();
    })
  }
  function getBooks() {
    axios.get('http://localhost:4000/books').then((res) => {
      setBooks([...res.data])
    }).catch(() => { })

  }
  function deleteBook(id) {
    axios.delete('http://localhost:4000/books/' + id).then(() => {
      alert('deleted...')
      getBooks()
    })

  }
  function updateBook() {
    axios.put('http://localhost:4000/books/'+selectedBook.id,selectedBook).then(()=>{
      // alert('updated...')
       getBooks()

    })
    
  }
  function editBook(book){
       setSelectedBook({...book})
       setEditFlag(true)

  }
  return (
    <div>

    {
      !editFlag &&
        <>
         <input type='text' placeholder="enter title" onChange={(event) => { setNewBook({ ...newBook, title: event.target.value }) }} /><br />
        <input type='text' placeholder="enter author" onChange={(event) => { setNewBook({ ...newBook, views: event.target.value }) }} /><br />
        <button onClick={() => { addBook() }}>Add</button><br/>
      </>
    }

{
      editFlag &&
        <>
         <input type='text' placeholder="enter title" value={selectedBook.title} onChange={(event) => { setSelectedBook({ ...selectedBook, title: event.target.value }) }} /><br />
        <input type='text' placeholder="enter views" value={selectedBook.views} onChange={(event) => { setSelectedBook({ ...selectedBook, views: event.target.value }) }} /><br />
        <button onClick={() => { updateBook() }}>update</button><br/>
      </>
    }

      <ul className='main'>
        {
          books.length > 0 && books.map((book, i) => {
            return (
              <li id='books' key={i}>
                <h1>{book.title}</h1>
                <h3>{book.views}</h3>
                <button onClick={() => { deleteBook(book.id) }}>Delete</button>
                <button onClick={() => { editBook(book) }}>Edit</button>

              </li>

            )
          })
        }
      </ul>
    </div>
  )
}

export default Books
