import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Profile() {

  const [edit, setEdit] = useState(false);


  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "Chennai, India"
  });


  const [formData,setFormData] = useState(user);



  function handleChange(e){

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }



  function saveProfile(){

    setUser(formData);
    setEdit(false);

  }



  return (

<DashboardLayout>

<div className="space-y-8 ">


{/* Title */}

<div>

<h1 className="text-3xl font-bold text-gray-800 dark:text-white ">
My Profile
</h1>


<p className="text-gray-500 dark:text-gray-300 mt-2">
Manage your profile information.
</p>

</div>



{/* Stats */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
<h3 className="text-gray-500 dark:text-gray-300">
Questions Solved
</h3>

<p className="text-3xl font-bold text-blue-600 mt-2">
120
</p>

</div>



<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">

<h3 className="text-gray-500 dark:text-gray-300">
Bookmarks
</h3>

<p className="text-3xl font-bold text-green-600 mt-2">
35
</p>

</div>



<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">

<h3 className="text-gray-500 dark:text-gray-300">
Mock Tests
</h3>

<p className="text-3xl font-bold text-orange-500 mt-2">
10
</p>

</div>



<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">

<h3 className="text-gray-500 dark:text-gray-300">
Achievements
</h3>

<p className="text-3xl font-bold text-purple-600 mt-2">
8
</p>

</div>


</div>





{/* Profile Card */}

<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">


<div className="flex flex-col md:flex-row items-center gap-8">


{/* Avatar */}

<div className="text-blue-600">

<FaUserCircle size={120}/>

</div>




<div className="flex-1 space-y-4">


{
edit ? (

<div className="space-y-4">


<input
name="name"
value={formData.name}
onChange={handleChange}
className="border p-3 rounded-lg w-full"
placeholder="Name"
/>


<input
name="email"
value={formData.email}
onChange={handleChange}
className="border p-3 rounded-lg w-full"
placeholder="Email"
/>



<input
name="phone"
value={formData.phone}
onChange={handleChange}
className="border p-3 rounded-lg w-full"
placeholder="Phone"
/>



<input
name="location"
value={formData.location}
onChange={handleChange}
className="border p-3 rounded-lg w-full"
placeholder="Location"
/>



<button
onClick={saveProfile}
className="bg-green-600 text-white px-6 py-3 rounded-lg"
>

Save Changes

</button>


</div>


)

:(


<>


<h2 className="text-2xl font-bold dark:text-white">
{user.name}
</h2>



<div className="space-y-3 text-gray-600 dark:text-gray-300">


<div className="flex gap-3 items-center">
<FaEnvelope/>
<span>{user.email}</span>
</div>


<div className="flex gap-3 items-center">
<FaPhone/>
<span>{user.phone}</span>
</div>



<div className="flex gap-3 items-center">
<FaMapMarkerAlt/>
<span>{user.location}</span>
</div>


</div>



<button

onClick={()=>setEdit(true)}

className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"

>

Edit Profile

</button>


</>


)

}



</div>


</div>


</div>



</div>


</DashboardLayout>

  );

}


export default Profile;