import React from "react";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import useAuthInitializer from "./hooks/useAuthInitializer";


function App() {

  useAuthInitializer()

  return <AppRouter />;
}

export default App;