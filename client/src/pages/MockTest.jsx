import "../App.css";


function MockTest(){


const tests=[

{
title:"Frontend Developer Test",
questions:30,
time:"30 min"
},

{
title:"MERN Stack Test",
questions:50,
time:"45 min"
},

{
title:"JavaScript Test",
questions:25,
time:"20 min"
}

];


return(

<div className="page">


<h1>Mock Tests</h1>

<p className="subtitle">
Test your interview preparation
</p>



<div className="card-grid">


{
tests.map((test,index)=>(


<div className="test-card">


<h2>
{test.title}
</h2>


<p>
Questions : {test.questions}
</p>


<p>
Duration : {test.time}
</p>


<button>
Start Test
</button>



</div>


))
}


</div>


</div>

)


}


export default MockTest;