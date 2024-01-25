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
        { id: 2, text: "Is Parkname actually free?", isOpen: false },
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
            <div className="title-container">
              {topic.title === "About Us" && (
                <CgProfile className="profile-icon" />
              )}
              <p>{topic.title}</p>
            </div>
            <br />
            <p className="text">{topic.text}</p>

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
                <div
                  key={article.id}
                  className="article-item"
                  onClick={() => toggleArticle(topic.id, article.id)}
                >
                  <div className="arrow-icon">
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
                      investment, you want the most efficient, easy way to make
                      sure your property is going to be profitable. Do you own
                      more than 1,000 domains? As a professional domainer, you
                      will find everything you need through Parkname to generate
                      maximum profits from your domain portfolio
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
