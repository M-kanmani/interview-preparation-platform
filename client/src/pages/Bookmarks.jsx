import {useState} from "react";


function Bookmark(){


const bookmarks=[

{
title:"React Hooks",
difficulty:"Medium",
question:"What is useEffect?",
answer:"useEffect handles side effects in React."
}

];


const [open,setOpen]=useState(null);



return(

<div>

<h1>Bookmarks</h1>


{
bookmarks.map((b,index)=>(


<div className="card">


<h2>{b.title}</h2>

<p>
Difficulty : {b.difficulty}
</p>


<button
onClick={()=>setOpen(b)}
>
Open
</button>


<button>
Remove
</button>


</div>


))
}



{
open &&

<div className="modal">

<h2>{open.question}</h2>

<p>
{open.answer}
</p>


<button onClick={()=>setOpen(null)}>
Close
</button>


</div>

}



</div>

)


}


export default Bookmark;