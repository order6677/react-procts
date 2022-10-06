import React from "react";
import{faBars,faTimes} from "react-icons/fa";
function navbar() {
  return (
    <nav>
      <a href="/#">HOME</a>
      <a href="/#">ADD RECIPE</a>
      <a href="/#">SIGN UP</a>
      <button>
        <faTimes />
      </button>
      <faBars />
      <button>

      </button>
    </nav>
  );
}
export default navbar;
