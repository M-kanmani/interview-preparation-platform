import ProgressBar from  "../components/ProgressBar";


function Progress() {
  return (
    
<div>
  <h2 className="text-2xl font-bold text-gray-800 mb-5">
    Progress Overview
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <ProgressBar
      title="DSA Progress"
      percentage={75}
    />

    <ProgressBar
      title="Aptitude Progress"
      percentage={60}
    />

    <ProgressBar
      title="Mock Interview"
      percentage={45}
    />

    <ProgressBar
      title="HR Questions"
      percentage={80}
    />

  </div>
</div>
  )}

export default Progress;