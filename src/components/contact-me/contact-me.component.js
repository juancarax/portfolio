import React, { useState } from "react"
import "./contact-me.styles.scss"

import ContactMeIllustration from "../../assets/contactme.svg"
import axios from "axios"

const ContactMeForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const [formState, setFormState] = useState({
    email: "",
    name: "",
    message: "",
  })
  const handleChange = e =>
    setFormState({ ...formState, [e.target.name]: e.target.value })
  const { email, name, message } = formState
  console.log(email)
  console.log(name)
  console.log(message)
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios
      .post(
        "https://getform.io/f/f89e5d4f-2bf4-41e1-9c8c-423b22a06ae6",
        formState,
        { headers: { Accept: "application" } }
      )
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
  }

  return (
    <section className="contactme">
      <ContactMeIllustration className="contactme__illustration" />

      <form onSubmit={handleOnSubmit} className="form">
        <h3>CONTACT ME!</h3>
        <div className="form__group">
          <input
            type="email"
            name="email"
            id="inputEmail"
            describedby="emailHelp"
            onChange={handleChange}
            value={email}
            className="form__input"
            size="50"
          />
          <label
            htmlFor="inputEmail"
            className={`form__label ${email?.length && "form__label--shrink"}`}
          >
            Email Address
          </label>
        </div>
        <div className="form__group">
          <input
            type="text"
            name="name"
            id="inputName"
            required="required"
            onChange={handleChange}
            className="form__input"
            size="50"
          />
          <label
            htmlFor="inputName"
            className={`form__label ${name?.length && "form__label--shrink"}`}
          >
            Name
          </label>
        </div>
        <div className="form__group">
          <textarea
            cols="53"
            rows="5"
            type="text"
            name="message"
            id="inputMessage"
            value={message}
            required
            onChange={handleChange}
            className="form__input"
          ></textarea>
          <label
            htmlFor="inputMessage"
            className={`form__label ${
              message?.length && "form__label--shrink"
            }`}
          >
            Message
          </label>
        </div>
        <button type="submit" className="form__button">
          Send a message!
        </button>
      </form>
    </section>
  )
}

export default ContactMeForm
