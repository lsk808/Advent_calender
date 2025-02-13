import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Register.css";
import Title from "../img/title.png";

function Register() {
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
    password2: "",
    receiver: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/users/signup", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Handle successful registration
        console.log("User registered successfully");
      } else {
        // Handle registration failure
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <div className="start-page">
      <div className="page-bg">
        <div className="center">
          <div className="register-content">
            <div className="register-title">
              <img src={Title} />
            </div>
            <div className="nickname">
              <p>닉네임</p>
              <input className="r-blank" type="text" name="nickname" onChange={handleInputChange} placeholder="닉네임" />
            </div>
            <div className="password">
              <p>비밀번호</p>
              <input className="r-blank" type="password" name="password" onChange={handleInputChange} placeholder="비밀번호" />
            </div>
            <div className="check">
              <p>비밀번호 확인</p>
              <input className="r-blank" type="password" name="password2" onChange={handleInputChange} placeholder="비밀번호 재입력" />
            </div>
            <div className="tosend">
              <p>누구에게 트리를 보낼까요?</p>
              <input className="r-blank" type="text" name="receiver" onChange={handleInputChange} placeholder="받는 사람" />
            </div>
            <div className="register-submit" onClick={handleSignUp}>
              <Link to="/">
                <p>회원가입</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
