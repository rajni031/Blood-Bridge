/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleRegister, handleLogin } from "../../services/authService";

const Form = ({ formType, formTitle, submitBtn }) => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [role, SetRole] = useState("donar");
  const [user, SetUser] = useState("");
  const [name, SetName] = useState("");
  const [website, SetWebsite] = useState("");
  const [address, SetAddress] = useState("");
  const [phone, SetPhone] = useState("");

  return (
    <div>
      <form onSubmit={(e)=>{
           if (formType === "login")
           return handleLogin(e, email, password, role);
           else if (formType === "register")
           return handleRegister(
             e,
             name,
             role,
             email,
             password,
             phone,
             address,
             website
           );
      }}>
        <h1 className="text-center">{formTitle} </h1>
        <hr></hr>
        {/* who are you? */}
        <div className="d-flex mb-3 ms-4">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => SetRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-4">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => SetRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-4">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="userRadio"
              value={"user"}
              onChange={(e) => SetRole(e.target.value)}
            />
            <label htmlFor="userRadio" className="form-check-label">
              User
            </label>
          </div>
        </div>
        {/* //switch statement */}
        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  <InputType
                    labelText={"Name"}
                    labelFor={"forName"}
                    inputType={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                  />
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                  />
                  <InputType
                    labelText={"Phone No."}
                    labelFor={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => SetPhone(e.target.value)}
                  />
                  <InputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => SetAddress(e.target.value)}
                  />
                  <InputType
                    labelText={"Website"}
                    labelFor={"forWebsite"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => SetWebsite(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex row justify-content-between">
          {formType === "login" ? (
            <p>
                Not registerd yet ? Register
               <Link to="/register"> Here !</Link>
            </p>
          ) : (
            <p>
                ALready Have a Account
               <Link to="/login"> Login !</Link>
            </p>
          )}
          <br/>
          <button className="btn btn-primary auth-button" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
