import {useState} from "react";
import questions from "../data/questions";


function Questions(){

const [selected,setSelected]=useState(null);

const [solved,setSolved]=useState([]);


function markSolved(id){

setSolved([...solved,id]);

}



return(

<div>

<h1>Interview Questions</h1>


<div className="grid">


{
questions.map((q)=>(


<div className="card" key={q.id}>


<h3>{q.question}</h3>


<span>
{q.category}
</span>


<p>
Difficulty : {q.difficulty}
</p>


<button
onClick={()=>setSelected(q)}
>
Solve
</button>



{
solved.includes(q.id)&&
<p>✅ Solved</p>
}



<button
onClick={()=>markSolved(q.id)}
>
Mark Solved
</button>



</div>


))

}


</div>



{
selected &&

<div className="modal">


<h2>{selected.question}</h2>

<p>{selected.answer}</p>


<button
onClick={()=>setSelected(null)}
>
Close
</button>


</div>

}



</div>

)

}

export default Questions;