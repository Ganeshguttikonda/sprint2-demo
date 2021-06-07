import { Alert } from "react-bootstrap";

export function Registration() {
  return (
    <div className="w-75">
      <div className="alert alert-primary">
        <h3>Regitration Module</h3>
      </div>

      <div>
        <div className="mb-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Firstname"
            className="form-control"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Lastname"
            className="form-control"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Password"
            className="form-control"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Email"
            className="form-control"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Mobile"
            className="form-control"
          />
        </div>

        <div className="mb-1">
          <input
            type="button"
            value="Register"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </div>
  );
}
