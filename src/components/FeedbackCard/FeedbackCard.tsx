import React from "react";
import styles from "./FeedbackCard.module.scss";
import Image from "next/image";
import { FeedbackCardType, QuotesIcon, RatingType } from "@/config";
import { IoIosStar } from "react-icons/io";

export const FeedbackCard: React.FC<FeedbackCardType> = ({
  title,
  image,
  company,
  feedback,
  rating,
  bgColor,
  textColor,
  feedbackTextColor,
}) => {
  return (
    <div
      className={styles.feedbackCard}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className={styles.feedbackCard__content}>
        <Image width={90} height={90} src={image} alt={title} />
        <div className={styles.feedbackCard__title}>
          <h5>{title}</h5>
          <p>{company}</p>
        </div>
        <QuotesIcon />
      </div>
      <p style={{ color: feedbackTextColor }}>{feedback}</p>
      <div>
        <Rating stars={rating} />
      </div>
    </div>
  );
};

const Rating:React.FC<RatingType> = ({ stars }) => {
    const starArray = [];
    for (let i = 0; i < stars; i++) {
      starArray.push(<IoIosStar key={i} size={34} />);
    }
    return (
      <>
        {starArray}
      </>
    );
  };
  
