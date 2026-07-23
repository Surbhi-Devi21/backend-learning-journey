import { useState } from 'react'
import axios from 'axios'


function App() {
 const [notes , setNotes] = useState([
   {
     title: "test title 1",
     description: "test description 1"
   },
   {
     title: "test title 2",
     description: "test description 2"
   },
   {
     title: "test title 3",
     description: "test description 3"
   },
   {
     title: "test title 4",
     description: "test description 4"
   }
 ])

axios.get("http://localhost:3000/api/notes")
.then(resp =>{
  setNotes(resp.data.notes)
},[])

  return (
   <> 
   <div className = "notes">
     {notes.map((note) => (  //write this automtic return through () in your notebook 
       <div className = "note">
         <h2>{note.title}</h2>
         <p>{note.description}</p>
       </div>
     ))}
   </div>
   </>
  )
}

export default App
