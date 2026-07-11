import {useState} from "react";
import companies from "../data/companies";


function Companies(){

const [company,setCompany]=useState(null);


return(

<div>

<h1>Companies</h1>


<div className="grid">

{
companies.map((c)=>(

<div className="card" key={c.id}>


<h2>{c.name}</h2>

<p>{c.role}</p>

<p>
Difficulty : {c.difficulty}
</p>

<p>
Questions : {c.count}
</p>


<button
onClick={()=>setCompany(c)}
>
View Questions
</button>


</div>

))

}

</div>



{
company &&

<div className="modal">

<h2>
{company.name} Interview Questions
</h2>


<ul>

{
company.questions.map((q,index)=>(

<li key={index}>
{index+1}. {q}
</li>

))

}

</ul>


<button
onClick={()=>setCompany(null)}
>
Close
</button>


</div>

}



</div>

)

}


export default Companies;