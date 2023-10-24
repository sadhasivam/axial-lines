import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://recallint.org" target="_blank" rel="noopener noreferrer">
          recall int
        </a>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </header>
    </div>
  );
}

export default App;
