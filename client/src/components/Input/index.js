import React from "react";

function Input(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="form-row justify-content-center">
          <input
            className="form-control"
            onChange={props.onChange}
            type="text"
          />
          <br />

          <button className="btn btn-lg" type="submit" style={{marginTop:"20px", textAlign:"center"}}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;


