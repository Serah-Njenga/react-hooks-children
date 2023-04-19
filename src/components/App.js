import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="TURTLEs" direction="horizontal">
        <div>Hello am Dorithy</div>
        <div>Hello am Dora</div>
        <div>Hello am Sam</div>
        <div>Hello  am Wanda</div>
        <div> Hello am Jeon</div>
        <div>Hello am Bubbles</div>
        <div>Hello am Prime</div>
      </Container>
      <Container header="TURTlEs" textPosition="center">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
}

export default App;
