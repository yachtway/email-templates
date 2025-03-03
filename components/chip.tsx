import { Column, Container, Row } from "@react-email/components";
import React from "react";

// border-radius: 53px;
// border: 1px solid var(--White-20, rgba(255, 255, 255, 0.20));
const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Row width='auto' align='left'>
      <Column className="rounded-[53px] px-4 border border-solid border-[#755688] width-auto">{children}</Column>
    </Row>
);

export default Chip;
