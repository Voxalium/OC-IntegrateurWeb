import { useState } from "react";
import { Tag } from "../Tag/Tag";
export const CardFlip = ({ cover, link, content, tag }) => {
  const cardStyle = {
    backgroundImage: `url(${cover}) `,
    backgroundSize: "cover",
  };
  const rotate = {
    transform: "rotateY(180deg)",
    transition: "transform 0.8s",
  };
  const [isFlipped, setIsFlip] = useState(false);
  const onFlip = () => {
    return !isFlipped;
  };

  return (
    <div className="flip-card" onClick={() => setIsFlip(onFlip)}>
      <div className="flip-card-inner" style={isFlipped ? rotate : null}>
        <div className="flip-card-front" style={cardStyle}></div>
        <div className="flip-card-back">
          <p className="content">{content}</p>
          {link ? (
            <a target="_blank" rel="noreferrer" href={link}>
              Lien Github
            </a>
          ) : null}

          <div className="tags">
            {tag.map((i, idx) => (
              <Tag key={`Tag-${idx}`} name={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
