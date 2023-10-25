import { useState, useEffect } from "react";
import React from "react";
import jwt_decode from "jwt-decode";
// import jwt_decode from "jwt-decode";
// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {  GoogleLogin, GoogleLogout } from "react-google-login";

export default function Google() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }
  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "712618266757-euc8qdn4tkvu3flkq3bggrbll2vfil7f.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <>
      <div id="signInDiv" class="sign"></div>
      {Object.keys(user).length !== 0 && (
        <button className="signout" onClick={(e) => handleSignOut(e)}>
          Sign Out
        </button>
      )}
      {user && navigate("/navbar")}
    </>
  );
}
