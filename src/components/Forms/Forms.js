import React from "react";
import "./Forms.css";
import Modal from "react-modal";
import { useState } from "react";

export default function Forms() {
  const religion = [
    "Islam",
    "Christianity",
    "Hinduism",
    "Buddhism",
    "Sikhism",
    "Athiest",
    "Other",
  ];

  const languages = ["Javascript", "React", "Node JS", "Python", "C/C++"];

  let form = {
    firstName: "",
    lastName: "",
    CnicIssuance: "",
    email: "",
    ProvinceOrState: "",
    Games: "",
    higherEducation: "",
    dateOfBirth: "",
    desc: "",
    mobile: "",
    cnic: "",
    confirmPassword: "",
    password: "",
    favLang: [],
    gender: "",
    religion: "",
  };

  const errors = {
    firstName: "Please enter first name",
    lastName: "Please enter last name",
    CnicIssuance: "Please enter CNIC issuance",
    email: { status: false, message: "Please enter the email" },
    image: "Please upload an image",
    ProvinceOrState: "Please select province or state",
    Games: "Please select games",
    higherEducation: "Please enter highest education",
    dateOfBirth: "Please enter DOB",
    desc: "Please enter description",
    mobile: { status: false, message: "Please enter mobile" },
    cnic: { status: false, message: "Please enter CNIC" },
    confirmPassword: "Please re-enter your password",
    password: { status: false, message: "Please enter password" },
    favLang: "Please select languages",
    gender: "Please select your gender",
    religion: "Please select your religion",
  };
  const [FormData, setFormData] = useState(form);
  const [errorState, setErrorState] = useState(errors);
  const [choice, setChoice] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onChangeHandler = (event) => {
    const value = event.target.value;

    if (event.target.name === "password") {
      settingState(event, value);
      settingErrors(event, passwordValidation(value));
    }

    if (event.target.name === "email") {
      settingState(event, value);
      settingErrors(event, emailValidation(value));
    }

    else if (event.target.name === "cnic") {
      settingState(event, value);
      settingErrors(event, cnicValidation(value));
    }

    else if (event.target.name === "mobile") {
      settingState(event, value);
      settingErrors(event, mobileValidation(value));
    }

    else if (event.target.name === "favLang") {
      let temp = FormData.favLang;
      if (event.target.checked) {
        temp = [...temp,event.target.value]
        // console.log(FormData);
      } else {

        temp = temp.replace(event.target.value, "");
      }
      settingState(event, temp);
    }

    else {
      settingState(event, value);
    }
  };

  const settingState = (event, value) => {
    setFormData({
      ...FormData,
      [event.target.name]: value,
    });
  };
  // setFormData(form);

  const settingErrors = (event, status) => {
    const name = event.target.name;
    // console.log(statusTemp, "error name");
    setErrorState({
      ...errorState,
      [name]: {
        ...errorState[name],
        status: status,
      },
    });
  };

  const passwordValidation = (value) => {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value))
      return true;
    else return false;
  };

  const mobileValidation = (value) => {
    if (/^[0-9]{5}[0-9]{7}-[0-9]{7}$/.test(value)) return true;
    else return false;
  };

  const emailValidation = (value) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) return true;
    else return true;
  };

  const cnicValidation = (value) => {
    if (/^[3]{1}[0-4]{4}-[0-9]{7}-[0-9]{1}$/.test(value)) return true;
    else return false;
  };

  const [fileSrc, setFileSrc] = useState(null);
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFileSrc(reader.result);
      }
    };
    try {
      reader.readAsDataURL(e.target.files[0]);
    } catch {
      return 0;
    }
  };

  const formSubmitted = (e) => {
    let forAlert = false;
    if (FormData.password !== FormData.confirmPassword) {
      return alert("Password Didn't Match");
    }
    for (let obj in FormData) {
      if (FormData[obj] === "") {
        forAlert = true;
      }
    }
    if (forAlert === true) {
      alert("Fill the form first");
    }
    setChoice(true);

    if (
      forAlert === false &&
      FormData.password === FormData.confirmPassword
    ) {
      setModalIsOpen(true);

    }
    // forAlert = false
    console.log(FormData);
    // console.log("error obj", errorState);
    // document.getElementById('clearform').value = ''
  };

  return (
    <div className="Background">
      <form>
        <div className="introAndFile">
          <div className="intro">
            <label>First Name</label> <br />
            <input
              id="clearform"
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              onChange={onChangeHandler}
            />
            <span
              style={
                FormData.firstName === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
              {errorState.firstName}
            </span>
            <br />
            <label>Last Name</label> <br />
            <input
              id="clearform"
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              onChange={onChangeHandler}
            />
            <span
              style={
                FormData.lastName === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
              {errorState.lastName}
            </span>
            <br />
            <label>CNIC</label> <br />
            <input
              id="clearform"
              type="text"
              placeholder="XXXXX-XXXXXXX-X"
              name="cnic"
              onChange={onChangeHandler}
              style={
                errorState.cnic.status === true
                  ? { border: "4px solid green" }
                  : { border: "none" }
              }
            />
            <span
              style={
                FormData.cnic === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }>
            <span
              style={
                FormData.CnicIssuance === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
            </span>
              {errorState.CnicIssuance}
            </span>
          </div>
          <div className="File">
            <input

              type="file"
              id="fileInput"
              name="image-upload"
              onChange={imageHandler}
              accept="image/*"
            />
            <label
              for="fileInput"
              className="File"
              style={
                fileSrc !== null
                  ? { display: "none", border: "3px solid green" }
                  : { display: "block" }
              }
            >
              Choose a photo
            </label>
            <imgUsman Saif
              style={
                fileSrc === null ? { display: "none" } : { display: "block" }
              }
            />

          </div>
        </div>
        <br />
        <div className="MobileAndEmail">
          <br />
          <div className="mobile">
            <label>Mobile</label>
            <br />
            <input
              id="clearform"
              type="text"
              placeholder="03XX-XXXXXXX"
              onChange={onChangeHandler}
              name="mobile"

              style={
                errorState.mobile.status === true
                  ? { border: "4px solid green" }
                  : { border: "none" }
              }
            />
            <span
              style={
                FormData.mobile === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
              {errorState.mobile.message}
            </span>
          </div>
          <div className="email">
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              onChange={onChangeHandler}
              placeholder="Enter Your Email"

              style={
                errorState.email.status === true
                  ? { border: "4px solid green" }
                  : { border: "none" }
              }
            />
            <span
              style={
                FormData.email === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
              {errorState.email.message}
            </span>
          </div>
        </div>


        <div className="ProvinceAndGames">
          <br />
          <div className="province">
            <label>Enter Your Province or State</label> <br />
            <br />
            <select
              name="ProvinceOrState"
              onChange={onChangeHandler}

            >
              <option>Select Your Province</option>
              <option value="AJK">AJK</option>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="Balochistan">Balochistan</option>
              <option value="KPK">KPK</option>
              <option value="GilgitBalististan">Gilgit Balististan</option>
            </select>
            <span
              style={
                FormData.ProvinceOrState === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
              {errorState.ProvinceOrState}
            </span>
          </div>

          <div className="games">
            <label>Select Your Favorite Games</label> <br />
            <br />
            <select
              name="Games"
              onChange={onChangeHandler}

            >
              <option>Please Select Game</option>
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
              <option value="Bedminton">Bedminton</option>
              <option value="Table Tenis">Table Tenis</option>
            </select>
            <span
              style={
                FormData.Games === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >

              {errorState.Games}
            </span>
          </div>
        </div>


        <div className="religionDiv">
          <label>Religion:</label> <br />
          <br />
          <div className="religion" onChange={onChangeHandler} name="religion">
            {religion.map((rel) => (
              <div>
                <input
                  type="radio"
                  value={rel}
                  name="religion"

                />
                <label for={rel}>{rel}</label>
              </div>
            ))}
          </div>
          <span
            style={
              FormData.religion === "" && choice === true
                ? { display: "block", marginTop: "10px", color: "red" }
                : { display: "none" }
            }
          >
            {errorState.religion}
          </span>
        </div>
        <br />
        <div className="QualAndDOB">
          <br />
          <div className="highestQual">
            <label>Enter Your Highest Qualification</label> <br />
            <br />
            <input
              type="text"
              onChange={onChangeHandler}
              name="higherEducation"
              placeholder="Highest Qualification"

            />
            <span
              style={
                FormData.higherEducation === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
              {errorState.higherEducation}
            </span>
          </div>
          <div className="dob">
            <label>Choose Your DOB</label> <br />
            <br />
            <input
              type="date"
              onChange={onChangeHandler}
              name="dateOfBirth"
              placeholder="Enter Your Date Of Birth"

            />
            <span
              style={
                FormData.dateOfBirth === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
              {errorState.dateOfBirth}
            </span>
          </div>
        </div>

        <div className="favLanguages">
          <div>
            <label>Favourite Languages:</label> <br />
            <br />
            <div className="lang" name="favLang" onChange={onChangeHandler}>
              {languages.map((lang) => (
                <div>
                  <input
                    type="checkbox"
                    value={lang}
                    name="favLang"

                  />
                  <label for={lang}>{lang}</label>
                </div>
              ))}
            </div>
            <span
              style={
                FormData.favLang === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
              {errorState.favLang}
            </span>
          </div>
        </div>


        <div className="description">
          <label for="description">Description</label>
          <br />
          <textarea
            onChange={onChangeHandler}
            name="desc"

          ></textarea>
          <span
            style={
              FormData.desc === "" && choice === true
                ? { display: "block", marginTop: "10px", color: "red" }
                : { display: "none" }
            }
          >
            {errorState.desc}
          </span>
        </div>
        <br />
        <div className="PasswordAndConfirm">
          <br />
          <div className="password">
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={onChangeHandler}
              name="password"

              style={
                errorState.password.status === true
                  ? { border: "4px solid green" }
                  : { border: "none" }
              }
            />
            <span
              style={
                FormData.password === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
              {errorState.password.message}
            </span>
          </div>
          <div className="confirmPassword">
            <label>Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder="Confirm Your Password"
              onChange={onChangeHandler}
              name="confirmPassword"

              style={
                errorState.password.status === true &&
                  FormData.password === FormData.confirmPassword
                  ? { border: "4px solid green" }
                  : { border: "none" }
              }
            />
            <span
              style={
                FormData.confirmPassword === "" && choice === true
                  ? { display: "block", marginTop: "10px", color: "red" }
                  : { display: "none" }
              }
            >
              {errorState.confirmPassword}
            </span>
          </div>
        </div>


        <div className="genderDiv">
          <div className="gender" onChange={onChangeHandler} name="gender">
            <label>Gender:</label> <br />
            <br />
            <input
              type="radio"
              id="Male"
              name="gender"
              value="Male"

            />
            <label for="Male">Male</label>
            <input
              type="radio"
              id="Female"
              name="gender"
              value="Female"

            />
            <label for="Female">Female</label>
            <input
              type="radio"
              id="Other"
              name="gender"
              value="Other"

            />
            <label for="Other">other</label>
          </div>
          <span
            style={
              FormData.gender === "" && choice === true
                ? { display: "block", marginTop: "10px", color: "red" }
                : { display: "none" }
            }
          >
            {errorState.gender}
          </span>
        </div>


        <div className="submitData">
          <button
            type="button"
            className="submit-btn"
            onClick={() => {
              formSubmitted();
            }}
          >
            SUBMIT DATA
          </button>
        </div>


        <Modal
          isOpen={modalIsOpen}
          style={{
            overlay: {
              position: "fixed",
              backgroundColor: "rgba(255, 255, 255, 0.75)",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            content: {
              position: "absolute",
              top: "40px",
              left: "40px",
              right: "40px",
              bottom: "40px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
              textAlign: "center",
            },
          }}
        >
          <h1>Form Submission</h1>
          <br />
          {
            <div className="display">
            <div>
            <img className="imgshow" src={fileSrc} alt="Picture"/>
            </div>
              {Object.keys(FormData).map(function (keyName, keyIndex) {
                return (
                  <div className="rowData"> 
                    <div className="keys">
                   
                      {keyName
                        .replace(/([A-Z])/g, " $1")
                        .trim()
                        .toUpperCase()}
                      :
                    </div>
                    <div className="values">{FormData[keyName]}</div>
                  </div>
                );
              })}
            </div>
          }
          <br />
          <button onClick={() => { setModalIsOpen(false) }}>Confirm</button>
        </Modal>
      </form>
    </div>
  );
}