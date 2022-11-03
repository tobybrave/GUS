import {
  Box, Heading, ListItem, OrderedList, Text, UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

function TOS() {
  return (
    <Box m={5}>
      <Heading textAlign="center" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
        <Text
          as="span"
          position="relative"
          _after={{
            content: "''",
            width: 'full',
            height: '20%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'blue.400',
            zIndex: -1,
          }}
        >
          Terms of service
        </Text>
      </Heading>
      <section>
        <Text fontWeight="semibold">Welcome to growursocials!</Text>
        <Text>
          These terms of service outline the rules and regulations
          for the use of growursocials Website, located at
          www.growursocials.com
        </Text>
        <Text>
          The following terminology applies to these Terms and
          Conditions, Privacy Statement and Disclaimer Notice and
          all Agreements: “Client”, “You” and “Your” refers to
          you, the person log on this website and compliant to the
          Company’s terms and conditions. “The Company”,
          “Ourselves”, “We”, “Our” and “Us”, refers to our
          Company. “Party”, “Parties”, or “Us”, refers to both the
          Client and ourselves. All terms refer to the offer,
          acceptance and consideration of payment necessary to
          undertake the process of our assistance to the Client in
          the most appropriate manner for the express purpose of
          meeting the Client’s needs in respect of provision of
          the Company’s stated services, in accordance with and
          subject to, prevailing law of Nigeria. Any use of
          the above terminology or other words in the singular,
          plural, capitalization and/or he/she or they, are taken
          as interchangeable and therefore as referring to same.
        </Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">Data</Heading>
        <Text>
          We shall not be responsible for misuse of data
          transferred. We shall not be responsible for Fraud or
          harm caused resulting from data transferred. We shall
          not be responsible for any activity with the transferred
          data outside our website.
        </Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">Cookies</Heading>
        <Text>
          We employ the use of cookies. By accessing a, you agreed
          to use cookies in agreement with the growursocials’s
          Privacy Policy.
        </Text>
        <Text>
          Most interactive websites use cookies to let us retrieve
          the user’s details for each visit. Cookies are used by
          our website to enable the functionality of certain areas
          to make it easier for people visiting our website. Some
          of our affiliate/advertising partners may also use
          cookies.
        </Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">License</Heading>
        <Text>
          Unless otherwise stated, growursocials and/or its
          licensors own the intellectual property rights for all
          material on a. All intellectual property rights are
          reserved. You may access this from a for your own
          personal use subjected to restrictions set in these
          terms and conditions.
        </Text>
        <Text>You must not:</Text>
        <UnorderedList>
          <ListItem>Republish material from a</ListItem>
          <ListItem>Sell, rent or sub-license material from a</ListItem>
          <ListItem>Reproduce, duplicate or copy material from a</ListItem>
          <ListItem>Redistribute content from a</ListItem>
        </UnorderedList>
        <Text>This Agreement shall begin on the date hereof.</Text>
        <Text>
          Parts of this website offer an opportunity for users to
          post and exchange opinions and information in certain
          areas of the website. Growursocials does not filter,
          edit, publish or review Comments prior to their presence
          on the website. Comments do not reflect the views and
          opinions of growursocials,its agents and/or affiliates.
          Comments reflect the views and opinions of the person
          who post their views and opinions. To the extent
          permitted by applicable laws, growursocials shall not be
          liable for the Comments or for any liability, damages or
          expenses caused and/or suffered as a result of any use
          of and/or posting of and/or appearance of the Comments
          on this website.
        </Text>
        <Text>
          growursocials reserves the right to monitor all Comments
          and to remove any Comments which can be considered
          inappropriate, offensive or causes breach of these Terms
          and Conditions.
        </Text>
        <Text>You warrant and represent that:</Text>
        <UnorderedList>
          <ListItem>
            You are entitled to post the Comments on our website
            and have all necessary licenses and consents to do
            so;
          </ListItem>
          <ListItem>
            The Comments do not invade any intellectual property
            right, including without limitation copyright,
            patent or trademark of any third party;
          </ListItem>
          <ListItem>
            The Comments do not contain any defamatory,
            libelous, offensive, indecent or otherwise unlawful
            material which is an invasion of privacy
          </ListItem>
          <ListItem>
            The Comments will not be used to solicit or promote
            business or custom or present commercial activities
            or unlawful activity.
          </ListItem>
        </UnorderedList>
        <Text>
          You hereby grant growursocials a non-exclusive license
          to use, reproduce, edit and authorize others to use,
          reproduce and edit any of your Comments in any and all
          forms, formats or media.
        </Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">Hyperlinking to our Content</Heading>
        <Text>
          The following organizations may link to our Website
          without prior written approval:
        </Text>
        <UnorderedList>
          <ListItem>Government agencies;</ListItem>
          <ListItem>Search engines;</ListItem>
          <ListItem>News organizations;</ListItem>
          <ListItem>
            Online directory distributors may link to our
            Website in the same manner as they hyperlink to the
            Websites of other listed businesses; and
          </ListItem>
          <ListItem>
            System wide Accredited Businesses except soliciting
            non-profit organizations, charity shopping malls,
            and charity fundraising groups which may not
            hyperlink to our Web site.
          </ListItem>
        </UnorderedList>
        <Text>
          These organizations may link to our home page, to
          publications or to other Website information so long as
          the link: (a) is not in any way deceptive; (b) does not
          falsely imply sponsorship, endorsement or approval of
          the linking party and its products and/or services; and
          (c) fits within the context of the linking party’s site.
        </Text>
        <Text>
          We may consider and approve other link requests from the
          following types of organizations:
        </Text>
        <UnorderedList>
          <ListItem>
            commonly-known consumer and/or business information
            sources;
          </ListItem>
          <ListItem>dot.com community sites</ListItem>
          <ListItem>
            associations or other groups representing charities;
          </ListItem>
          <ListItem>online directory distributors</ListItem>
          <ListItem>internet portals;</ListItem>
          <ListItem>accounting, law and consulting firms; and</ListItem>
          <ListItem>
            educational institutions and trade associations.
          </ListItem>
        </UnorderedList>
        <Text>
          We will approve link requests from these organizations
          if we decide that: (a) the link would not make us look
          unfavorably to ourselves or to our accredited
          businesses; (b) the organization does not have any
          negative records with us; (c) the benefit to us from the
          visibility of the hyperlink compensates the absence of
          growursocials; and (d) the link is in the context of
          general resource information.
        </Text>
        <Text>
          These organizations may link to our home page so long as
          the link: (a) is not in any way deceptive; (b) does not
          falsely imply sponsorship, endorsement or approval of
          the linking party and its products or services; and (c)
          fits within the context of the linking party’s site.
        </Text>
        <Text>
          If you are one of the organizations listed in paragraph
          2 above and are interested in linking to our website,
          you must inform us by sending an e-mail to
          growursocials. Please include your name, your
          organization name, contact information as well as the
          URL of your site, a list of any URLs from which you
          intend to link to our Website, and a list of the URLs on
          our site to which you would like to link. Wait 2-3 weeks
          for a response.
        </Text>
        <Text>
          Approved organizations may hyperlink to our Website as
          follows:
        </Text>
        <UnorderedList>
          <ListItem>By use of our corporate name; or</ListItem>
          <ListItem>
            By use of the uniform resource locator being linked
            to; or
          </ListItem>
          <ListItem>
            By use of any other description of our Website being
            linked to that makes sense within the context and
            format of content on the linking party’s site.
          </ListItem>
        </UnorderedList>
        <Text>
          No use of growursocials’s logo or other artwork will be
          allowed for linking absent a trademark license
          agreement.
        </Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">iFrames</Heading>
        <Text>
          Without prior approval and written permission, you may
          not create frames around our Webpages that alter in any
          way the visual presentation or appearance of our
          Website.
        </Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">Content Liability</Heading>
        <Text>
          We shall not be hold responsible for any content that
          appears on your Website. You agree to protect and defend
          us against all claims that is rising on your Website. No
          link(s) should appear on any Website that may be
          interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the
          infringement or other violation of, any third party
          rights.
        </Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">Your Privacy</Heading>
        <Text>Please read Privacy Policy</Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">Reservation of Rights</Heading>
        <Text>
          We reserve the right to request that you remove all
          links or any particular link to our Website. You approve
          to immediately remove all links to our Website upon
          request. We also reserve the right to amen these terms
          and conditions and it’s linking policy at any time. By
          continuously linking to our Website, you agree to be
          bound to and follow these linking terms and conditions.
        </Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">Removal of links from our website</Heading>
        <Text>
          If you find any link on our Website that is offensive
          for any reason, you are free to contact and inform us
          any moment. We will consider requests to remove links
          but we are not obligated to or so or to respond to you
          directly.
        </Text>
        <Text>
          We do not ensure that the information on this website is
          correct, we do not warrant its completeness or accuracy;
          nor do we promise to ensure that the website remains
          available or that the material on the website is kept up
          to date.
        </Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">Refunds</Heading>
        <Text>
          Customers who are not completely satisfied with our
          services may request a full refund within the first 30
          days of their purchase. Refunds will be processed
          through our customer support agents. Refunds are not
          applicable to free credits or services. growursocials
          reserves the right to meet customer satisfaction and all
          refunds must be processed in due diligence and due
          process.
        </Text>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">Service</Heading>
        <OrderedList>
          <ListItem>
            Growursocials is not affiliated with WhatsApp,
            Facebook or any WhatsApp third-party partners in any
            way.
          </ListItem>
          <ListItem>
            It is your sole responsibility to comply with
            WhatsApp rules and any legislation that you are
            subject to. You use growursocials at your own risk.
          </ListItem>
          <ListItem>
            We are not responsible for your actions and their
            consequences. We are not to blame if your WhatsApp
            account is banned for any reason.
          </ListItem>
          <ListItem>
            We require your WhatsApp Number to Compile. We do
            not store, give away, or otherwise distribute your
            username to any other third parties.
          </ListItem>
          <ListItem>
            The expected number of Contacts and views is not
            guaranteed to you in any way.
          </ListItem>
          <ListItem>
            We can’t guarantee the continuous, uninterrupted or
            error-free operability of the services.
          </ListItem>
          <ListItem>
            You agree that upon purchasing our service, that you
            clearly understand and agree on what you are
            purchasing and will not file a fraudulent dispute
            via the payment processor.
          </ListItem>
          <ListItem>
            We reserve the right to modify, suspend or withdraw
            the whole or any part of our service or any of its
            content at any time without notice and without
            incurring any liability.
          </ListItem>
          <ListItem>
            It is your sole responsibility to check whether the
            Terms have changed.
          </ListItem>
        </OrderedList>
      </section>
      <section>
        <Heading as="h3" fontSize="lg">Disclaimer</Heading>
        <Text>
          To the maximum extent permitted by applicable law, we
          exclude all representations, warranties and conditions
          relating to our website and the use of this website.
          Nothing in this disclaimer will:
        </Text>
        <UnorderedList>
          <ListItem>
            limit or exclude our or your liability for death or
            personal injury;
          </ListItem>
          <ListItem>
            limit or exclude our or your liability for fraud or
            fraudulent misrepresentation;
          </ListItem>
          <ListItem>
            limit any of our or your liabilities in any way that
            is not permitted under applicable law; or
          </ListItem>
          <ListItem>
            exclude any of our or your liabilities that may not
            be excluded under applicable law.
          </ListItem>
        </UnorderedList>
        <Text>
          The limitations and prohibitions of liability set in
          this Section and elsewhere in this disclaimer: (a) are
          subject to the preceding paragraph; and (b) govern all
          liabilities arising under the disclaimer, including
          liabilities arising in contract, in tort and for breach
          of statutory duty.
        </Text>
        <Text>
          As long as the website and the information and services
          on the website are provided For Almost free of charge,
          we will not be liable for any loss or damage of any
          nature.
        </Text>
      </section>
    </Box>
  );
}

export default TOS;
