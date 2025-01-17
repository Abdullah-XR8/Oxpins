import styling from "./Meetourteam.module.css";

const Meetourteam = () => {
  const teamMembers = [
    {
      image: "/images/team-1-1.webp",
      name: "Sarah albert",
      description: "Lead Developer",
    },
    {
      image: "/images/team-1-2.webp",
      name: "Kevin martin",
      description: "Project Manager",
    },
    {
      image: "/images/team-1-3.webp",
      name: "Aleesha eve",
      description: "UX Designer",
    },
    {
      image: "/images/team-1-4.webp",
      name: "David cooper",
      description: "QA Engineer",
    },
  ];

  return (
    <>
      <div className={styling.main}>
        <div className={styling.Contentwrapper}>
          <div className={styling.Container}>
            <div className={styling.textSection}>
              <span>Our expert team</span>
              <h2>
                Meet the team behind <br />
                their success story
              </h2>
            </div>

            <div className={styling.CardSection}>
              {teamMembers.map((member, index) => (
                <div key={index} className={styling.Card}>
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meetourteam;
