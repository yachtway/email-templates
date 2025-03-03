import React from "react";

import { Column, Container, Img, Row, Text } from "@react-email/components";
import { dealerStatsBaseUrl } from "../constants";

const textStyle = {
  color: "#22222D",
  fontSize: "23.253px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "30px",
  letterSpacing: "-0.93px",
  margin: 0,
  marginBottom: "12px",
};

const viewsStyle = {
  fontSize: "22.6px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "33.9px",
  letterSpacing: "-0.904px",
  margin: 0,
};

const ListingViewCard: React.FC<{
  image: string;
  title: React.ReactNode;
  views: React.ReactNode;
}> = ({ image, title, views }) => {
  return (
    <Container className="mb-5 bg-white p-3 rounded-[8px]" data-id="listing-view-card">
      <Row width="auto" align="left">
        <Column>
          <Img src={image} alt="" width={138} height={113} className="rounded-[4px]" />
        </Column>
        <Column className="pl-5">
          <Text style={textStyle}>{title}</Text>
          <Row width="auto" align="left">
            <Column>
              <Img src={`${dealerStatsBaseUrl}/eye.png`} alt="eye" className="mb-[2px]" width={25} height={25} />
            </Column>
            <Column>
              <Text style={viewsStyle} className="pl-[5px] text-[#5111ac]">
                {views}
              </Text>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  );
};

export default ListingViewCard;
