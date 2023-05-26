# ```NextJS``` Email Demo

## Dependencias 🗃️
```Bash
npm i nodemailer
npm i react-email @react-email/components -E
```

## ```.env.development``` 
```
NEXT_PUBLIC_SMTP_HOST=...
NEXT_PUBLIC_SMTP_PORT=...
NEXT_PUBLIC_SMTP_USER=...
NEXT_PUBLIC_SMTP_PASSWORD=...
NEXT_PUBLIC_SMTP_FROM_EMAIL=...
```

## ```/helpers/mail.js``` 
```js
const smtpOptions = {
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
}
```

```js
export default async function sendEmail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL,
    ...{ to, subject, html },
  })
};
```
## Template
```js
const logoUrl = `${process.env.NEXT_PUBLIC_API_URL}/static/imgs/nasa.png`;
```

```js
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
```

## API endpoint ```/api/send-mail```
```js
export default async function handler(req, res) {
  /**
   * body params
   */
  const emails = ['ponchoceniceros@outlook.com'];
  const ticketCode = 'tt226-5398x';

  // instanciar template
  const ticketTemplate = TicketNotificationTemplate({ ticketCode });
  // mandar email
  await sendEmail({
    to: emails,
    subject: `Ticket ${ticketCode}`,
    html: render(ticketTemplate),
  });

  const result = {
    isOk: true,
    mssg: 'Email sent successfully'
  }

  return res.status(200).json(result);
}
```
