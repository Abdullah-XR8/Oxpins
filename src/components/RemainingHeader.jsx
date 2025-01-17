import styling from "./RemainingHeader.module.css";
import PropTypes from "prop-types";

const RemainingHeader = ({ Heading, Selected }) => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.Contentwrapper}>
          <div className={styling.container}>
            <div className={styling.textsection}>
              <ul className={styling.ulcontainer}>
                <li>
                  <a href="">Home</a>
                </li>

                <span> / </span>

                <li>
                  <a href="">{Selected}</a>
                </li>
              </ul>
              <h2>{Heading}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

RemainingHeader.propTypes = {
  Heading: PropTypes.string.isRequired,
  Selected: PropTypes.string.isRequired,
};

export default RemainingHeader;
