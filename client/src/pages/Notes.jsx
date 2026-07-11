import {useState} from "react";


function Notes(){

const [note,setNote]=useState("");
const [notes,setNotes]=useState([]);


function addNote(){

if(note){
setNotes([...notes,note]);
setNote("");
}

}


return(
<div>

<h1>My Notes</h1>


<textarea
placeholder="Write your interview notes..."
value={note}
onChange={(e)=>setNote(e.target.value)}
/>


<br/>


<button onClick={addNote}>
Add Note
</button>


{
notes.map((n,index)=>(

<div key={index}>
<p>{n}</p>
</div>

))
}


</div>
)

}

export default Notes;