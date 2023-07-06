import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Notes from './Components/Notes';
import { useState } from 'react';

function App() {
  const [addItem,setAddItem]=useState([]);

  const addNote = (note) => {
    if (note.title.trim() !== "" || note.content.trim() !== "") {
      setAddItem((prevData) => {
        return [...prevData, note];
      });
      console.log(note);
    }
  };
  
  const onDelete=(id)=>{
    setAddItem((oldData)=>{
      return oldData.filter((currData,index)=>{
        return index!==id;

    })
    })

  }
  const updateItem = (id, updatedNote) => {
    setAddItem((prevData) => {
      return prevData.map((note, index) => {
        if (index === id) {
          return { ...note, ...updatedNote };
        }
        return note;
      });
    });
  };

  return (
    <div className="App">
      <Header/>
      <CreateNote passNote={addNote}/>

      {addItem.map((val,index)=>{
        return <Notes key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}  updateItem={updateItem}/>
      })};
      <Footer/>
    </div>
  );
    }
export default App;

