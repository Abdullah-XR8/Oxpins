import ContactDetails from "./ContactDetails";
import ContactForm from "./Contactform";
import Location from "./Location";
import RemainingHeader from "./RemainingHeader";

const Contact = () => {
  return (
    <>
      {" "}
      <RemainingHeader Heading="Contact us" Selected="Contact us" />
      <ContactForm />
      <ContactDetails />
      <Location />{" "}
    </>
  );
};

export default Contact;
