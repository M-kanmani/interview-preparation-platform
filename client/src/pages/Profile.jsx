import { useEffect, useState } from "react";
import {
  getProfile,
  updateProfile,
} from "../services/userService";

function Profile() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();
      setUser(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch profile");
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await updateProfile({
        fullName: user.fullName,
      });

      alert("Profile Updated Successfully");

      fetchProfile();
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h2>My Profile</h2>

      <label>Full Name</label>
      <br />
      <input
        type="text"
        name="fullName"
        value={user.fullName}
        onChange={handleChange}
      />

      <br />
      <br />

      <label>Email</label>
      <br />
      <input
        type="email"
        value={user.email}
        disabled
      />

      <br />
      <br />

      <label>Role</label>
      <br />
      <input
        type="text"
        value={user.role}
        disabled
      />

      <br />
      <br />

      <button onClick={handleUpdate}>
        Update Profile
      </button>
    </div>
  );
}

export default Profile;