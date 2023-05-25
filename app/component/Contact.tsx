"use client";
import React, { useRef, useState, useEffect, useReducer } from "react";
import styles from "./Contact.module.css";
import ContactLink from "./ContactLink";

const nameReducer = (state, action) => {
  if (action.type === "NAME_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "NAME_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }
  return { value: "", isValid: false };
};

const emailReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "EMAIL_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const messageReducer = (state, action) => {
  if (action.type === "MESSAGE_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "MESSAGE_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }
};

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  // Responsible for disabling the "SEND" button
  const [formIsValid, setFormIsValid] = useState(false);

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [messageState, dispatchMessage] = useReducer(messageReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: nameIsValid } = nameState;
  const { isValid: emailIsValid } = emailState;
  const { isValid: messageIsValid } = messageState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(nameIsValid && emailIsValid && messageIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [nameIsValid, emailIsValid, messageIsValid, setFormIsValid]);

  //Input
  const nameChangeHandler = (event) => {
    dispatchName({ type: "NAME_INPUT", val: event.target.value });
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_INPUT", val: event.target.value });
  };

  const messageChangeHandler = (event) => {
    dispatchMessage({ type: "MESSAGE_INPUT", val: event.target.value });
  };

  //Validation
  const validateNameHandler = () => {
    dispatchName({ type: "NAME_BLUR" });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "EMAIL_BLUR" });
  };

  const validateMessageHandler = () => {
    dispatchMessage({ type: "MESSAGE_BLUR" });
  };

  //Submit button action
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_left}>
        <h2>You can find me here!</h2>
        <h3>I'd love to hear from you! I'm always here to chat.</h3>
        <article className={styles.contact_left_links}>
          <ContactLink />
        </article>
      </div>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.contact_heading}>
          <h1>Send me a message</h1>
          <h4>
            Reach me anytime via
            <span> roykdemy@gmail.com</span>
          </h4>
        </div>

        <div>
          <input
            type="text"
            className={`${styles.control} ${
              nameState.isValid === false ? styles.invalid : ""
            }`}
            ref={nameRef}
            placeholder="Name"
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
            required
          />
          {nameState.isValid === false && <p>Name is required</p>}
        </div>
        <div>
          <input
            type="email"
            className={`${styles.control} ${
              emailState.isValid === false ? styles.invalid : ""
            }`}
            ref={emailRef}
            placeholder="Email"
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            required
          />
          {emailState.isValid === false && <p>Email is required</p>}
        </div>
        <div>
          <textarea
            className={`${styles.control} ${
              messageState.isValid === false ? styles.invalid : ""
            }`}
            ref={messageRef}
            placeholder="Message"
            onChange={messageChangeHandler}
            onBlur={validateMessageHandler}
            required
          ></textarea>
          {messageState.isValid === false && <p>Message is required</p>}
        </div>
        <button
          type="submit"
          className={!formIsValid ? styles.disable : styles.enable}
          disabled={!formIsValid}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
