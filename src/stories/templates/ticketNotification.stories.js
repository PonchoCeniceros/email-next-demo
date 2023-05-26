import TicketNotificationEmail from '../../templates/ticketNotification';

const page = {
 component: TicketNotificationEmail,
 title: 'templates/ticketNotificationEmail'
}

export default page;
export const TicketNotificationEmailComponent = args => <TicketNotificationEmail {...args}/>;

TicketNotificationEmailComponent.args = {
  ticketCode: 'tt226-5398x'
};
