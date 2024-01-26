import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "../stylesheets/AboutUs.css";

const AboutUs = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "About Us",
      text: "4 articles in this Topic",
      isOpen: false,
      articles: [
        {
          id: 1,
          text: "How does Parkname separate itself from other domain name parking companies?",
          isOpen: false,
        },
        { id: 2, text: "Is Parkname Parking actually free?", isOpen: false },
        { id: 3, text: "What you do?", isOpen: false },
        { id: 4, text: "When was Parkname first founded?", isOpen: false },
      ],
    },
  ]);

  const toggleTopic = (topicId) => {
    setArticles((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === topicId ? { ...topic, isOpen: !topic.isOpen } : topic
      )
    );
  };

  const toggleArticle = (topicId, articleId) => {
    setArticles((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === topicId
          ? {
              ...topic,
              articles: topic.articles.map((article) =>
                article.id === articleId
                  ? { ...article, isOpen: !article.isOpen }
                  : article
              ),
            }
          : topic
      )
    );
  };

  return (
    <div className="about-us-container">
      {articles.map((topic) => (
        <div key={topic.id} className="topic-container">
          <div
            className="title-container"
            onClick={() => toggleTopic(topic.id)}
          >
            <CgProfile className="profile-icon" />
            <div className="title-content">
              <p className="topic-title">{topic.title}</p>
              <p className="text">{topic.text}</p>
            </div>
            <div className="arrow-icon">
              {topic.isOpen ? (
                <MdKeyboardArrowDown />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </div>
          </div>

          {topic.isOpen && (
            <div className="article-container">
              {topic.articles.map((article) => (
                <React.Fragment key={article.id}>
                  <hr className="separator" />
                  <div
                    className="article-item"
                    onClick={() => toggleArticle(topic.id, article.id)}
                  >
                    <div className="arrow-toggle">
                      {article.isOpen ? (
                        <MdKeyboardArrowDown />
                      ) : (
                        <MdKeyboardArrowRight />
                      )}
                    </div>

                    <span className="article-text">{article.text}</span>
                    {article.isOpen && (
                      <div className="article-content">
                        Your domains are a valuable online property. As in any
                        investment, you want the most efficient, easy way to
                        make sure your <br /> property is going to be profitable. Do
                        you own more than 1,000 domains? As a professional
                        domainer, you will find <br /> everything you need through
                        Parkname to generate maximum profits from your domain
                        portfolio.
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;