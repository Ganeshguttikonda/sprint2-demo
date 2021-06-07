import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserAction } from "../redux/UserReducer";

export function Registration() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobile = (e) => setMobile(e.target.value);

  const registration = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, password, email, mobile);

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createUserAction({
        firstName,
        lastName,
        email,
        password,
        mobile,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // reset the form
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
    setMobile("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">Registration</h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Registration Successful</div>
        )}

        <div className="mb-1">
          <input
            type="text"
            value={firstName}
            onChange={(e) => updateFirstName(e)}
            className="form-control"
            placeholder="Enter First name"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={lastName}
            onChange={(e) => updateLastName(e)}
            className="form-control"
            placeholder="Enter Lastname"
          />
        </div>

        <div className="mb-1">
          <input
            type="password"
            value={password}
            onChange={(e) => updatePassword(e)}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={email}
            onChange={(e) => updateEmail(e)}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={mobile}
            onChange={(e) => updateMobile(e)}
            className="form-control"
            placeholder="Enter Mobile"
          />
        </div>

        <div className="mb-1">
          <input
            type="button"
            className="btn btn-secondary w-100"
            value=" Click to Register"
            onClick={(e) => registration(e)}
          />
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
