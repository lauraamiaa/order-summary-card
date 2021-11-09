import "./App.scss";
import "./App.css";

import PatternBackground from "../src/images/pattern-background-desktop.svg";

function App() {
  return (
    <div>
      <img className="patternBackground" src={PatternBackground} alt="" />
      <div>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <div>
        <h4>Annual Plan</h4>
        <p>$59.99/year</p>
        <a>Change</a>
      </div>
      <button>Proceed to Payment</button>
      <a>Cancel Order</a>
    </div>
  );
}

export default App;
