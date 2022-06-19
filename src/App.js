import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import { Watched } from "./components/Watched";
import Add from "./components/Add";
import "./lib/font-awesome/css/all.min.css";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import Form from "./components/Form";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/watch" element={<Watchlist />} />

          <Route exact path="/watched" element={<Watched />} />

          <Route exact path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
