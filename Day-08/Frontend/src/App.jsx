import { useState , useEffect } from 'react'
import axios from 'axios'


function App() {
 const [notes , setNotes] = useState([
   
 ])

function getNotes() {
  axios.get("https://first-integrated-frontend.onrender.com/api/notes")
  .then(res => {
    setNotes(res.data.notes)
  })
}

useEffect( () => {
 getNotes();
},[])

function formhandling(e) {
  e.preventDefault();

  const{title , description } = e.target.elements 
  console.log(title.value , description.value)

  axios.post("https://first-integrated-frontend.onrender.com/api/notes" , {
    title : title.value ,
    description : description.value
  })
  
  .then((res) => {
    console.log( res.data );

    getNotes();
  })
}

 function handleDelete(notes_id) {
  axios.delete("https://first-integrated-frontend.onrender.com/api/notes/"+notes_id)
  .then( res => {
    console.log(res.data)

    getNotes()
  })
 }

  return (
   <> 
   <form className = "notes-form" onSubmit = {formhandling}> 
   <input name = "title" type = "text" placeholder = "Enter title" />
   <input name = "description" type = "text"placeholder = "Enter description" />
   <button> Click me</button>

   </form>

   <div className = "notes">
     {notes.map((note) => (  //write this automtic return through () in your notebook 
       <div className = "note">
         <h2>{note.title}</h2>
         <p>{note.description}</p>
         <button onClick = { () => {handleDelete(note._id)} }>Delete </button>
       </div>
     ))}
   </div>
   </>
  )
}



export default App
