import resources from "../data/resource";
import "../index.css";


function Resources(){

return(

<div className="page">

<h1>Resources</h1>


<div className="grid">

{
resources.map((item)=>(

<div className="card" key={item.id}>

<h2>{item.title}</h2>

<p>{item.description}</p>


<button
onClick={()=>window.open(item.link,"_blank")}
>
Open
</button>


</div>

))
}


</div>


</div>

)

}

export default Resources;