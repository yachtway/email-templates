import React from "react";
import { Column, Container, Img, Row, Text } from "@react-email/components";

const textStyle: React.CSSProperties = {
  color: "rgba(255, 255, 255, 0.80)",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
  letterSpacing: "-0.64px",
  margin: 0,
};

const valueStyle: React.CSSProperties = {
  color: "#FFF",
  fontSize: "36px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "40px",
  letterSpacing: "-1.44px",
  margin: 0,
  marginTop: "16px",
  wordBreak: "break-word",
};

const PurpleStatsCard: React.FC<{
  title: React.ReactNode;
  value: React.ReactNode;
  image: string;
}> = ({ title, value, image }) => {
  return (
    <Container className="p-6 bg-[#410A95] border-4 border-[#d9ceea] border-solid rounded-[8px]">
      <Row>
        <Column
          align="center"
          className="bg-[#3b0f80] rounded-[100%] p-[6px] w-[20px] h-[20px] border-[3px] border-solid border-[#673baa]"
        >
          <Img src={image} alt="icon" width={15} height={15} />
        </Column>
        <Column className="pl-[12px]">
          <Text style={textStyle}>{title}</Text>
        </Column>
      </Row>
      <Text style={valueStyle}>{value}</Text>
    </Container>
  );
};

export default PurpleStatsCard;
