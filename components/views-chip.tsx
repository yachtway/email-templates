import React from "react";

import { Column, Container, Img, Row, Text } from "@react-email/components";
import { dealerStatsBaseUrl } from "../constants";

const textStyle = {
  fontSize: "16.555px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "24.832px",
  letterSpacing: "-0.662px",
  margin: 0,
};

const ViewsChip: React.FC<{ views: React.ReactNode }> = ({ views }) => {
  return (
    <Row align='center' className="bg-[#f1eff7] border border-solid border-[#eae6f4] rounded-[31px] py-2 mt-3">
      <Column align="center">
          <Row style={textStyle} width="auto">
            <Column>
              <Img src={`${dealerStatsBaseUrl}/eye.png`} alt="eye" className='mb-[2px]' width={20} height={20} />
            </Column>
            <Column className="pr-2 pl-1">
              <Text style={textStyle}>Views: </Text>
            </Column>
            <Column>
              <Text style={textStyle} className='text-[#4f10a9]'>
                <strong>{views}</strong>
              </Text>
            </Column>
          </Row>
      </Column>
    </Row>
  );
};

export default ViewsChip;
