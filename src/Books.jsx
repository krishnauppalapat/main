import React, { useEffect } from 'react';
import axios from 'axios';

function Books() {
    const[books,setBooks]=React.useState([]);
    const [newBook,setBook]=React.useState({
        title:'',
        views:''

    })
    const[editFlag,setEditFlag]=React.useState(false);
    var[selectedBook,setSelectedBook]=React.useState(null)
    useEffect(function(){
         getBooks()
    },[])
    function addBook(){
        axios.post('http://localhost:4000/books',newBook).then((res)=>{
            // console.log('after post',res);
            getBooks();
        })
    }
    function getBooks(){
        axios.get('http://localhost:4000/books').then((res)=>{
            setBooks([...res.data])

        }).catch(()=>{})
    }
    function deleteBook(id){
        axios.delete('http://localhost:4000/books/'+id).then(()=>{
            alert('deleted...');
            getBooks()

        })
        
    }
    function editBook(book){
        setSelectedBook({...book});
        setEditFlag('true')
    }
  return (
    <div>
        
        <h1>BOOKS</h1>
        {!editFlag &&
        <div>
        <input type='text' placeholder='enter title' onChange={(e)=>{setBook({...newBook,title:e.target.value})}}/><br/>
        <input type='text' placeholder='enter view' onChange={(e)=>{setBook({...newBook,views:e.target.value})}}/><br/>
        <button onClick={()=>{addBook()}}>Add Book</button>
        </div>
}
{ editFlag &&
        <div>
        <input type='text' placeholder='enter title' onChange={(e)=>{setBook({...newBook,title:e.target.value})}}/><br/>
        <input type='text' placeholder='enter view' onChange={(e)=>{setBook({...newBook,views:e.target.value})}}/><br/>
        <button >Update Book</button>
        </div>
}
     <div className='mainBox'>
        {
            books.length>0 && books.map((book,i)=>{
                return(
                    <div key={i} className='myBox'>
                       <h1><span>{book.id}.</span>{book.title}</h1>
                       <h3>{book.views}</h3>
                       <button onClick={()=>{deleteBook(book.id)}}>delete</button>
                       <button onClick={()=>{editBook(book.id,book)}}>Edit</button>

                        </div>
                )
            })
        }
      
    </div>
    </div>
  )
}

export default Books
