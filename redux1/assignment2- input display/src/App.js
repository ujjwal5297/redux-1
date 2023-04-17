import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import { setFirstName, setLastName } from "./userSlice";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [firstName, setFirstNameValue] = useState("");
  const [lastName, setLastNameValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFirstName(firstName));
    dispatch(setLastName(lastName));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstNameValue(e.target.value)}
          placeholder="Enter your first name.."
        />
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastNameValue(e.target.value)}
          placeholder="Enter your last name.."
        />
        <div>
        <button type="submit">Display Name</button></div>
      </form>
      {<h1>First Name: {user.firstName}</h1>} <br></br>
      {<h1>Last Name: {user.lastName}</h1>}
    </div>
  );
}

export default App;
