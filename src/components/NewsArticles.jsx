

import styling from "./NewsArticles.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

const NewsArticles = () => {
  const cardsData = [
    {
      imgSrc: "/images/new&articles1img.webp",
      altText: "Card-one",
      title: "How does the malnutrition affect children?",
      comments: 2,
    },
    {
      imgSrc: "/images/news&article2image.webp",
      altText: "Card-two",
      title: "The impact of climate change on agriculture",
      comments: 5,
    },
    {
      imgSrc: "/images/news&article3image.webp",
      altText: "Card-three",
      title: "Advancements in renewable energy technologies",
      comments: 3,
    },
  ];

  return (
    <div className={styling.main}>
      <div className={styling.ContentWrapper}>
        <div className={styling.container}>
          <div className={styling.textSection}>
            <span>News & articles</span>
            <h2>
              Directly from the <br /> latest news and articles
            </h2>
          </div>

          <div className={styling.CardContainer}>
            {cardsData.map((card, index) => (
              <div key={index} className={styling.card}>
                <div className={styling.imagecontainer}>
                  <img src={card.imgSrc} alt={card.altText} />
                </div>

                <div className={styling.cardTextsection}>
                  <div className={styling.ulcontainer}>
                    <ul>
                      <li>
                        <BsPersonCircle style={{ color: "#fbd45a" }} /> Admin
                      </li>
                      <li>
                        <FaComments style={{ color: "#fbd45a" }} />{" "}
                        {card.comments} Comments
                      </li>
                    </ul>
                  </div>

                  <h3>
                    <a href="">{card.title}</a>
                  </h3>

                  <div className={styling.ButtomCard}>
                    <p>
                      <a href="">
                        <MdArrowRightAlt style={{ fontSize: "1.8rem" }} /> Read
                        More
                      </a>
                    </p>

                    <div className={styling.Icon}>
                      <FaShareAlt />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticles;
