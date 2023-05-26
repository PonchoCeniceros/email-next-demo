import TicketNotificationTemplate from "../../templates/ticketNotification";
import { render } from "@react-email/render";
import sendEmail from "../../helpers/mail";

export default async function handler(req, res) {
  /**
   * body params
   */
  const emails = ['gio.icc.uach@gmail.com', 'ponchoceniceros@outlook.com'];
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
