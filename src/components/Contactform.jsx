import styling from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.ContentWrapper}>
          <div className={styling.Container}>
            <span>Contact with us</span>
            <h2>
              Feel free to write us <br />
              anytime
            </h2>

            <form>
              <div className={styling["form-row"]}>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                />
              </div>
              <div className={styling["form-row"]}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
              <div className={styling["form-row"]}>
                <textarea
                  placeholder="Write a  Message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className={styling["button-container"]}>
                <button type="submit" className={styling.button}>
                  SEND A MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
