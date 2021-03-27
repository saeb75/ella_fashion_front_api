import React from "react";

export default function ErrorMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p className="error_msg">This is required</p>;
      case "minLength":
        return (
          <p className="error_msg">Your last name need minmium 2 charcaters</p>
        );
      case "pattern":
        return <p className="error_msg">Enter a valid email address</p>;
      case "min":
        return <p className="error_msg">Minmium age is 18</p>;
      case "validate":
        return <p className="error_msg">Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
}
