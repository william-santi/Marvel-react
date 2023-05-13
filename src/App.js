import { BrowserRouter, Routes ,Route, Navigate} from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Home } from "./pages/home";
import { Comics } from "./pages/comics";
import { Series } from "./pages/series";
import { Error404 } from "./pages/error404";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/series" element={<Series />} />
        <Route path="/error" element={<Error404 />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
