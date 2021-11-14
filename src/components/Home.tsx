import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err, setErr] = React.useState("");

  const navigate = useNavigate();

  return (
    <>
      {err && (
        <>
          <h3 style={{ backgroundColor: "#f00", color: "#fff" }}>{err}</h3>
        </>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (username === "") {
            setErr("please Enter username");
          } else if (password === "") {
            setErr("please Enter password");
          } else {
            navigate("/profile", { replace: true });
          }
        }}
      >
        <h1>log in</h1>
        <input
          type="text"
          placeholder="Enter your username"
          title="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          title="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <input type="submit" value="log in" />
      </form>
    </>
  );
};

export default Home;
