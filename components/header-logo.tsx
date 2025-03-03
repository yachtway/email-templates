import React from "react";
import { Column, Container, Img, Row } from "@react-email/components";

const HeaderLogo = () => (
  <Container className="py-2 bg-white">
    <Row>
      <Column align="center">
        <Img
          src={
            "https://ci3.googleusercontent.com/meips/ADKq_NbkIfmDebnHbbyUk2cvWV99h48zNci8F9urWy0-0jk8_U-PAmmsFQv1bX1l8AwXVnadEuvNAJtExesMGr5axS7WSbJXFL5sAuTRsQ=s0-d-e1-ft#https://assets.yachtway.com/email-images/new-logo.png"
          }
          height={36}
          alt="Yachtway"
        />
      </Column>
    </Row>
  </Container>
);

export default HeaderLogo;
