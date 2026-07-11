import ProgressBar from "../components/ProgressBar";

function Progress(){

return(
<div>

<h1>Progress Overview</h1>

<ProgressBar 
title="DSA Progress"
value="75"
/>

<ProgressBar
title="Aptitude Progress"
value="60"
/>

<ProgressBar
title="Mock Interview"
value="45"
/>

<ProgressBar
title="HR Questions"
value="80"
/>

</div>
)

}

export default Progress;