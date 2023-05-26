import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
  Img,
} from '@react-email/components';
import React from 'react';

export default function TicketNotificationTemplate({ticketCode = ''}) {
  const logoUrl = 'http://54.167.226.54/logo.png';

  return (
    <Html>
      <Head />
      <Preview>Tu ticket ha sido recibido</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img style={img} src={logoUrl} width='45' height='45' alt='logo'/>
          <Heading style={heading}>Tu ticket ha sido recibido</Heading>
          <Text style={paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dignissim orci.
            Duis porta aliquam lobortis. Vestibulum feugiat, nunc nec tempor ultrices, est dui semper
            ipsum, a bibendum dolor neque non justo.
          </Text>
          <code style={code}>{ticketCode}</code>
          <Hr style={hr} />
        </Container>
      </Body>
    </Html>
  );
}

/**
 * Styles for the email template
 *
 */
const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '560px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '0 0 10px',
};

const paragraph = {
  margin: '0 0 15px',
  fontSize: '15px',
  lineHeight: '1.4',
  color: '#3c4149',
};

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px',
};

const code = {
  display: 'inline-block',
  padding: '2px 2%',
  width: '92%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};

const img = {
  paddingBottom: '20px'
}
