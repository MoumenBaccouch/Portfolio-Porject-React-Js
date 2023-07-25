import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developper in GoMyCode",
          "Freelancer",
          "Valorant Pro Player",
          "Professional PowerLifter Player From Tunisia ❤️",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
