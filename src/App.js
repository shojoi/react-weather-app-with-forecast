import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Weather.css";
import "./Footer.css";
import "./Forecast.css";

import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="myContainer">
        <Weather />
      </div>
      <Footer />
    </div>
  );
}
