import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { db } from "../firebase/config.js";


const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [allUsers, setAllUsers] = useState([]);
  // const getUsers = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   const usersData = querySnapshot.docs.map((doc) => {
  //     return { id: doc.id, ...doc.data() };
  //   });
  //   setAllUsers(usersData);
  // }
  // useEffect(() => {
  //   getUsers();
  // }, []);



  const getCurrentUser = async (currentUser) => {
    try {
      setLoading(true);
      const q = query(
        collection(db, "users"),
        where("email", "==", currentUser.email)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();

        console.log("Firestore User:", userData);

        setUser(userData);
      }
    } catch (error) {
      console.log("Error:", error);
    }finally {
    setLoading(false);
  }
  };

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        getCurrentUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {loading ? (
        <div className="profile-loading">
          <div className="profile-spinner"></div>
        </div>
      ) : (
        <div className="profile-container">
          <div className="profile-container">
            <div className="profile-header-section">
              <div className="profile-avatar-circle">
                {user?.username?.charAt(0).toUpperCase()}
              </div>

              <div className="profile-meta-text">
                <h1 className="profile-main-title">{user?.username?.toUpperCase()}</h1>
                <p className="profile-sub-title">Manage your personal information</p>
              </div>
            </div>

            <div className="profile-details-list">
              <div className="profile-details-row">
                <span className="details-label">Email:</span>
                <span className="details-value">{user?.email}</span>
              </div>

              <div className="profile-details-row">
                <span className="details-label">Age:</span>
                <span className="details-value">{user?.age} years old</span>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  )


};

export default Profile;