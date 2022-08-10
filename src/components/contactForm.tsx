import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const ContactForm = () => {
  return (
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="field">
        <label
          htmlFor="Name"
          className="label"
          style={{ color: "var(--text)" }}
        >
          Name
        </label>
        <div className="control">
          <input className="input" type="text" placeholder="Name" name="Name" />
        </div>
      </div>
      <div className="field">
        <label
          htmlFor="Email"
          className="label"
          style={{ color: "var(--text)" }}
        >
          Email
        </label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-danger"
            name="Email"
            type="email"
            placeholder="Email input"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
      </div>
      <div className="field">
        <label
          htmlFor="Message"
          className="label"
          style={{ color: "var(--text)" }}
        >
          Message
        </label>
        <div className="control">
          <textarea
            name="Message"
            className="textarea"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button
            style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
            className="button is-link"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
