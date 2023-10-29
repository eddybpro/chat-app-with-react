import "./App.css";
import PhoneCard from "./PhoneCard";

function App() {
  return (
    <main>
      <div className="PhoneCardContainer">
        <PhoneCard />
      </div>
      <div className="TxtContainer">
        <h1 className="TxtContainer-Title">Simple booking</h1>
        <p className="TxtContainer-Para">
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </div>
    </main>
  );
}

export default App;
