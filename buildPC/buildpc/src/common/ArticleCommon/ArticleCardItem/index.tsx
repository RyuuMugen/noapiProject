import React from "react";
import parse, { domToReact } from "html-react-parser";
import Card from "./Card";
import style from "./Html.module.scss";

const HtmlParserComponent = ({ htmlContent }: { htmlContent: string }) => {
  const regex = /\[Products:\s*([^\]]+)\]/;
  const parts = htmlContent.split(regex);
  // Extract product IDs from the matched part
  const productIdsPart = htmlContent.match(regex);
  const productIds = productIdsPart
    ? productIdsPart[1].split(",").map((id) => id.trim())
    : [];
  const uuids = productIds
    .map((str) =>
      str.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g)
    )
    .flat();
  const uuidsWithoutNull = uuids.filter((uuid) => uuid !== null);

  // Create an array of React nodes, inserting <Card /> components where needed
  const nodes = parts.reduce<React.ReactNode[]>((acc, part, index) => {
    if (index % 2 === 0) {
      // Non-matched part (normal HTML content)
      acc.push(parse(part));
    } else {
      // Matched part (product IDs)
      const cards = (
        <div className={style.flexBox}>
          {uuidsWithoutNull.map((id) => (
            <Card key={id} productId={id} />
          ))}
        </div>
      );
      acc.push(cards);
    }
    return acc;
  }, []);

  return <div className={style.textContainer}>{nodes}</div>;
};

export default HtmlParserComponent;
