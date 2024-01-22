//  How will you implement React Icons in your App?

//  https://www.npmjs.com/package/react-icons

//   npm install react-icons
// import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

function Icon({ name }) {
  if (name === "circle") {
    return <FaRegCircle />;
  } else if (name === "cross") {
    return <FaTimes />;
  } else {
    return <FaPen />;
  }
}

export default Icon;
