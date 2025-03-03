import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import HeaderLogo from "../components/header-logo";
import Chip from "../components/chip";
import Variable from "../components/variable";
import PurpleStatsCard from "../components/purple-stats-card";
import CardWithTopChip from "../components/card-width-top-chip";
import ViewsChip from "../components/views-chip";
import ListingViewCard from "../components/listing-view-card";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

if (!process.env.BUCKET_URL) throw new Error("BUCKET_URL is required");

const baseUrl = `${process.env.BUCKET_URL}/dealer-stats-email`;

const blockBg = `${baseUrl}/bg-email.png`;

const heroStyle = {
  background: `url(${blockBg})`,
  backgroundColor: 'white',
  backgroundSize: "cover",
};

const chipTextStyle: React.CSSProperties = {
  color: "rgba(255, 255, 255, 0.80)",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "36px",
  letterSpacing: "-0.56px",
  margin: "0",
};

const headingStyle = {
  color: "#FFF",
  fontSize: "41px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "48px",
  letterSpacing: "-1.64px",
};

const welcomeStyle: React.CSSProperties = {
  color: "#22222D",
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "24px",
  letterSpacing: "-0.64px",
  margin: 0,
};

const heading2Style: React.CSSProperties = {
  color: "#22222D",
  textAlign: "center",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "48px",
  letterSpacing: "-1.28px",
  marginTop: "28px",
  marginBottom: "16px",
};

const buttonStyle: React.CSSProperties = {
  color: "#FFF",
  textAlign: "center",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "-0.64px",
};

const emailStyle = {
  fontFamily: "Helvetica, Arial, sans-serif",
};

export const VercelInviteUserEmail = () => {
  const previewText = `Your monthly performance report is here!`;

  return (
    <Html>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Head />
        <Body style={emailStyle} className="bg-[#F8F8FA] my-auto mx-auto px-2">
          <Container className="max-w-[600px] w-full">
            <Container className="bg-[#F8F8FA]">
              <HeaderLogo />
              <Section style={heroStyle} className="p-[30px]">
                <Chip>
                  <Text style={chipTextStyle}>
                    <Variable>month</Variable>
                  </Text>
                </Chip>
                <Row>
                  <Column>
                    <Heading style={headingStyle} className="my-0 mt-3">
                      Your Monthly &nbsp;
                      <br />
                      Performance Report
                    </Heading>
                  </Column>
                </Row>
              </Section>
            </Container>

            <Container className="bg-white px-8">
              <Section className="py-5">
                <Row>
                  <Column>
                    <Text style={welcomeStyle}>
                      <strong>
                        Hi <Variable>dealer_name</Variable>,
                      </strong>
                    </Text>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <Text style={welcomeStyle}>Here’s your monthly YachtWay performance report views.</Text>
                  </Column>
                </Row>
              </Section>
            </Container>

            <Container className="bg-white px-6 pb-9">
              <Section>
                <Row cellSpacing={8} className="max-[600px]:hidden">
                  <Column width="50%">
                    <PurpleStatsCard
                      title="Number of Phone Calls"
                      value={<Variable>phone_calls</Variable>}
                      image={`${baseUrl}/phone.png`}
                    />
                  </Column>
                  <Column width="50%">
                    <PurpleStatsCard
                      title="Number of Messages"
                      value={<Variable>messages</Variable>}
                      image={`${baseUrl}/letter.png`}
                    />
                  </Column>
                </Row>

                <Row className="hidden max-[600px]:table" data-testid="mobile-listings" width="100%" align="center">
                  <Column align="center">
                    <div className="mb-4">
                      <PurpleStatsCard
                        title="Number of Phone Calls"
                        value={<Variable>phone_calls</Variable>}
                        image={`${baseUrl}/phone.png`}
                      />
                    </div>
                    <PurpleStatsCard
                      title="Number of Messages"
                      value={<Variable>messages</Variable>}
                      image={`${baseUrl}/letter.png`}
                    />
                  </Column>
                </Row>
              </Section>
            </Container>

            <Container className="px-6">
              <Row>
                <Column align="center">
                  <Heading style={heading2Style}>Most Viewed Listings</Heading>
                </Column>
              </Row>
              <Row cellSpacing={8} className="max-[600px]:hidden">
                <Column align="center" width="50%">
                  <CardWithTopChip
                    title="Most Popular Listing"
                    type="gold"
                    description={<Variable>most_popular_listing_description</Variable>}
                    image={"{{most_popular_listing_image}}"}
                  />
                  <ViewsChip views={<Variable>1_views</Variable>} />
                </Column>
                <Column align="center" width="50%">
                  <CardWithTopChip
                    title="Runner Up Listing"
                    type="silver"
                    description={<Variable>runner_up_listing_description</Variable>}
                    image={"{{runner_up_listing_image}}"}
                  />
                  <ViewsChip views={<Variable>2_views</Variable>} />
                </Column>
              </Row>

              <Row className="hidden max-[600px]:table" data-testid="mobile-listings" width="auto" align="center">
                <Column align="center">
                  <div className="mb-4">
                    <CardWithTopChip
                      title="Most Popular Listing"
                      type="gold"
                      description={<Variable>most_popular_listing_description</Variable>}
                      image={"{{most_popular_listing_image}}"}
                    />
                  </div>
                  <CardWithTopChip
                    title="Runner Up Listing"
                    type="silver"
                    description={<Variable>runner_up_listing_description</Variable>}
                    image={"{{runner_up_listing_image}}"}
                  />
                </Column>
              </Row>
            </Container>

            <Container className="mt-6 h-11 bg-white" />

            <Section className="px-8">
              <Heading style={heading2Style}>Views Per Listing</Heading>

              <ListingViewCard
                title={<Variable>listing_title</Variable>}
                views={<Variable>listing_views</Variable>}
                image={"{{listing_image}}"}
              />

              <Button
                href="{{analytics_href}}"
                className="mb-10 w-full text-center pt-3 pb-2 bg-black"
                style={buttonStyle}
              >
                <Row align="center">
                  <Column align="center">View All Analytics</Column>
                </Row>
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;
