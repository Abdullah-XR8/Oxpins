import styling from "./Info.module.css";

const InfoSection = () => {
  const data = [
    { value: "70m", label: "Total donation" },
    { value: "48k", label: "Projects funded" },
    { value: "38%", label: "Kids need help" },
    { value: "203", label: "Our volunteers" },
  ];

  return (
    <>
      <div className={styling.Main}>
        <div className={styling.ContentWrapper}>
          <div className={styling.Container}>
            {data.map((item, index) => (
              <div key={index} className={styling.ul}>
                <span>{item.value}</span>
                <ul>
                  <li>{item.label}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
