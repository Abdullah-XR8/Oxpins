import styling from "./OxpinOrganization.module.css";
import { HiOutlineArrowRight } from "react-icons/hi";

const OxpinOrganization = () => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.Contentwrapper}>
          <div className={styling.container}>
            <div className={styling.image}>
              <img
                src="/images/38e8f8ad-7410-4192-a92e-d4cc0d18ea6a.png"
                alt=""
              />
            </div>

            <div className={styling.TextSection}>
              <span>About oxpins</span>
              <h2>Get to know about our oxpins organization</h2>
              <p>
                Nam ultrices odio a felis lobortis convallis. In ex nunc, ornare
                non condimentum et, egestas vel massa. Nullam hendrerit felis
                quis pellentesque porttitor. Aenean lobortis bibendum turpis et
                auctor. Nam iaculis, lectus vulputate cursus interdum.
              </p>

              <div className={styling.para}>
                <div className={styling.line}>
                  {" "}
                  <HiOutlineArrowRight className={styling.Icon} />{" "}
                  <p>Proin sed magna vel mi suscipit commodo.</p>{" "}
                </div>
                <div className={styling.line}>
                  {" "}
                  <HiOutlineArrowRight className={styling.Icon} />{" "}
                  <p>Cras aliquet nulla ut varius blandit.</p>{" "}
                </div>
                <div className={styling.line}>
                  {" "}
                  <HiOutlineArrowRight className={styling.Icon} />{" "}
                  <p>Nulla auctor ipsum sed nisi lis porttitor.</p>{" "}
                </div>
              </div>


              <button className={styling.button}>DISCOVER MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OxpinOrganization;
