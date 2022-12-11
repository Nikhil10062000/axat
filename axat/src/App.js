import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login/Login";
import Header from "./components/Header";
import UpdateModal from "./Header/UpdateModal";
import Create from "./Create/Create";

export const UserData = createContext();

function App() {
  const [data, setData] = useState([]);
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(false);
  const [userA, setAcess] = useState();
  const [userP, setPass] = useState();

  const loginApi = async () => {
    const url = "https://dummyjson.com/users";
    const response = await fetch(url);
    const resData = await response.json();
    setData(resData.users);
  };

  console.log(data);
  const loginV = data.find((candid) => candid.username === userA);
  console.log(loginV);
  useEffect(() => {
    loginApi();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-yellow-300 ">AXAT Ecomm</h1>
        <div className="flex flex-row gap-x-11">
          <Link to="/login">
            {login ? (
              <div className="text-amber-200">Login</div>
            ) : (
              <div>
                <h4 className="text-amber-600 no-underline" onClick={handleShow}>{loginV?.firstName}</h4>
              </div>
            )}
          </Link>
          <Link className="text-amber-600 no-underline" to="/create">Create</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/login"
          element={
            <Login
              user={user}
              setUser={setUser}
              setAcess={setAcess}
              setPass={setPass}
              loginV={loginV}
              setLogin={setLogin}
              userA={userA}
              userP={userP}
            />
          }
        />
        <Route path="/create" element={<Create />} />
      </Routes>

      <UpdateModal show={show} setShow={setShow} loginV={loginV} />
    </>
  );
}

export default App;
