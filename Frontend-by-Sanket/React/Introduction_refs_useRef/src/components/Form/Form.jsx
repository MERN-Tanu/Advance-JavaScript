// import { useRef, useState } from "react";
import "./Form.css";
// import validatePassword from "../../helper/passwordValidator";
// import validateEmail from "../../helper/emailValidator";
import Input from "../Input/Input";
import { useContext } from "react";
import { FormContext } from "../../providers/FormContext";
// onBlurr : toUpper case when out of input box
// onFocus : change bg-color

function Form() {
  const { formInput } = useContext(FormContext);

  // const emailRef = useRef(null);
  // const exampleRef = useRef(0);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(exampleRef);
  // }, [count]);

  // const [formValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleValidatePassword = () => {
  //   const password = formValues.password;
  //   if (!validatePassword(password)) {
  //     // something
  //     console.log("password does not contain required parameters");
  //   }
  // };

  // const handleValidateEmail = () => {
  //   const email = formValues.email;
  //   if (!validateEmail(email)) {
  //     emailRef.current.focus();
  //     emailRef.current.value;
  //     console.log("email does not contain required parameters");
  //   }
  // };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formInput);
    // console.log(formValues.email);
    // console.log(formValues.password);
    // // document.getElementById("email-input").focus();

    // handleValidatePassword();
    // handleValidateEmail();
  };

  return (
    <div>
      New Form
      {/* Exampleref: {exampleRef.current} */}
      {/* <button onClick={() => setCount(count + 1)}>update count</button> */}
      {/* <button onClick={() => exampleRef.current++}>update ref</button> */}
      <form onSubmit={handleFormSubmit}>
        <div className="wrapper email-input-wrapper">
          {/* <input
            id="email-input"
            type="email"
            ref={emailRef}
            value={formValues.email}
            onChange={(event) =>
              setFormValues({ ...formValues, email: event.target.value })
            }
          /> */}
          <Input id="email-input" type="text" label="email" />
        </div>

        <div className="wrapper password-input-wrapper">
          {/* <input
            id="password-input"
            type="password"
            value={formValues.password}
            onChange={(event) =>
              setFormValues({ ...formValues, password: event.target.value })
            }
          /> */}
          <Input id="password-input" type="password" label="password" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
