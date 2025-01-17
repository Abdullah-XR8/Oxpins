import styling from "./Location.module.css";

const Location = () => {
  return (
    <>
      <div className={styling.container}>
        <div className={styling.EmbedLocation}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.5025410652725!2d-85.94776492518132!3d37.848530207909675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8868df3a3b003a6b%3A0xe60b87b05dfa3c58!2sKaltech%20Consultancy!5e0!3m2!1sen!2s!4v1736524869873!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
            title="Kaltech Consultancy Location"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Location;
