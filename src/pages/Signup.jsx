import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app, { db } from "../firebase/config.js";
import { ToastContainer, toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { uploadImageToCloudinary } from "../Cloudinary/cloud.js";


const auth = getAuth(app);
const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [userImage, setUserImage] = useState(null);
  // const navigate = useNavigate();

  
  const signupHandler = async () => {
     if (!username.trim() || !age || !email.trim() || !password.trim() || !userImage) {
    return toast.error("Please fill all fields");
  }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (user) {
      let imgUrl = await  uploadImageToCloudinary(userImage)
      console.log(imgUrl)
        try {
          const docRef = await addDoc(collection(db, "users"), {
            // uid: user.uid,
            email,
            password,
            username,
            age,
            userImage: imgUrl
          });
          console.log("Document written with ID: ", docRef.id);
    setEmail("");
    setPassword("");
    setUsername("");
    setAge("");
    setUserImage(null);
     
          toast.success("Account created successfully!");
          setTimeout(() => {
          navigate("/login");
        }, 2000);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }

    } catch (error) {
      if (error.code === "auth/email-already-in-use") { toast.error("This email is already registered"); } else if (error.code === "auth/invalid-email") { toast.error("Please enter a valid email"); } else if (error.code === "auth/weak-password") { toast.error("Password is too weak"); } else { toast.error(" Please fill all fields correctly"); }

    }


    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed up 
    //     const user = userCredential.user;
    //     toast.success("Account created successfully!");
    //     setTimeout(() => {
    //       navigate("/login");
    //     }, 2000);
    
    //   })
    //   .catch((error) => {

    //     
    //   });
  };

  return (
    <main className="page">
      <ToastContainer />
      <h1>Signup Page</h1>

      <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username" />
      <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Enter Age" />
 <input  onChange={(e) => setUserImage(e.target.files[0])} type="file" placeholder="Upload Image" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Create Password" />

      <button className="button" onClick={signupHandler}>Signup</button>

      <p>Already have an account?</p>
      <button className="Already-button">
        <Link to="/login">Login</Link>
      </button>
    </main>
  );
};

export default Signup;