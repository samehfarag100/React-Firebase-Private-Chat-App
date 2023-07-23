import React, { useState } from "react";
import "../style.scss";
import addImage from "../img/addAvatar.png";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const [error, setError] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');
  const navigate = useNavigate();

  
  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadUrl,
            });
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadUrl,
            });

            await setDoc(doc(db, "userChats", response.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="form_container">
      <div className="form_wrapper">
        <span className="register_logo">Chat App</span>
        <span className="register_title">Register</span>
        <form onSubmit={handelSubmit}>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            type="text"
            placeholder="User Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
            type="file"
            id="file"
          />
          <label htmlFor="file">
            <img src={addImage} />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p className="register_askQuestion">
          You do have an account?<Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
