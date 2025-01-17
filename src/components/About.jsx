import MyAccordion from "./Accordion";
import Meetourteam from "./Meetourteam";
import OxpinOrganization from "./OxpinOrganization";
import RemainingHeader from "./RemainingHeader";
import Volunture from "./volenture";

const About = () => {
  return (
    <>
      <RemainingHeader Heading="About Us" Selected="Pages" />
      <OxpinOrganization />

      <Volunture />
      <MyAccordion />
      <Meetourteam />
    </>
  );
};

export default About;
