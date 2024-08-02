import React from "react";

const nameStyle: React.CSSProperties = {
  fontFamily: "Roboto",
  fontSize: "36px",
  fontWeight: 700,
  lineHeight: "42px",
  letterSpacing: "0em",
  textAlign: "left",
  margin: "20px 0",
  textTransform: "uppercase",
};

const TopicName = ({ topicName, color }: TopicNameProps) => {
  const styleWithColor = { ...nameStyle, color };
  return (
    <div>
      <p style={styleWithColor}>{topicName}</p>
    </div>
  );
};

export default TopicName;

type TopicNameProps = {
  topicName: string;
  color: string;
};
