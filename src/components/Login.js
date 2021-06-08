import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createloginAction } from "../redux/UserReducer";

export function login() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  const login = (e) => {
    e.preventDefault();
    console.log(email, password);

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createloginAction({
        email,
        password,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // reset the form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">Login</h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Login Successful</div>
        )}

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
            type="password"
            value={password}
            onChange={(e) => updatePassword(e)}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <div className="mb-1">
          <input
            type="button"
            className="btn btn-secondary w-100"
            value=" Click to Login"
            onClick={(e) => login(e)}
          />
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
