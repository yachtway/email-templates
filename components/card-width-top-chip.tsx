import React from "react";
import { Column, Container, Img, Row, Text } from "@react-email/components";
import { dealerStatsBaseUrl } from "../constants";

const CardWithTopChip: React.FC<{
  title: string;
  description: React.ReactNode;
  descriptionLine2?: React.ReactNode;
  type: "gold" | "silver";
  image: string;
}> = ({ title, description, type, image }) => {
  const chipStyle = {
    color: type === "gold" ? "#ab8413" : "#858484",
    backgroundColor: type === "gold" ? "#fcf8e8" : "#f9fafb",
  };

  const descriptionStyle: React.CSSProperties = {
    color: "#22222D",
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "26px",
    marginTop: "16px",
    marginBottom: "12px",
    wordBreak: "break-word",
  };

  return (
    <Container className="bg-white pt-5 rounded-[8px]">
      <Container className="px-3">
        <Row align="center">
          <Column>
            <Row align="center" width="auto" style={chipStyle} className="px-3 py-[10px] rounded-[29px]">
              <Column>
                <Img
                  width={12}
                  height={25}
                  src={`${dealerStatsBaseUrl}/${type === "gold" ? "gold_left" : "gray_left"}.png`}
                  alt=""
                />
              </Column>
              <Column className="px-[6px] pb-[2px]">{title}</Column>
              <Column>
                <Img
                  width={12}
                  height={25}
                  src={`${dealerStatsBaseUrl}/${type === "gold" ? "gold_right" : "gray_right"}.png`}
                  alt=""
                />
              </Column>
            </Row>
          </Column>
        </Row>
        <Text style={descriptionStyle}>{description}</Text>
      </Container>
      <Img src={image} alt="" width="100%" height={250} className="rounded-b-[8px] object-cover" />
    </Container>
  );
};

export default CardWithTopChip;
