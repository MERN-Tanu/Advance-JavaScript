import { useEffect, useRef, useState } from "react";
import "./Form.css";
import validatePassword from "../../helper/passwordValidator";
import validateEmail from "../../helper/emailValidator";

// onBlurr : toUpper case when out of input box
// onFocus : change bg-color

function Form() {
  const exampleRef = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(exampleRef);
  }, [count]);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleValidatePassword = () => {
    const password = formValues.password;
    if (!validatePassword(password)) {
      // something
      console.log("password does not contain required parameters");
    }
  };

  const handleValidateEmail = () => {
    const email = formValues.email;
    if (!validateEmail(email)) {
      console.log("email does not contain required parameters");
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formValues.email);
    console.log(formValues.password);
    // document.getElementById("email-input").focus();

    handleValidatePassword();
    handleValidateEmail();
  };

  return (
    <div>
      New Form
      <br />
      Count: {count}
      <br />
      Exampleref: {exampleRef.current}
      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => exampleRef.current++}>update ref</button>
      <form onSubmit={handleFormSubmit}>
        <div className="wrapper email-input-wrapper">
          <input
            id="email-input"
            type="email"
            value={formValues.email}
            onChange={(event) =>
              setFormValues({ ...formValues, email: event.target.value })
            }
          />
        </div>

        <div className="wrapper password-input-wrapper">
          <input
            id="password-input"
            type="password"
            value={formValues.password}
            onChange={(event) =>
              setFormValues({ ...formValues, password: event.target.value })
            }
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
