import MailchimpSubscribe from "react-mailchimp-subscribe";
import { JoinWaitlistForm } from "./home";

export const MailchimpFormContainer = ({ handleClose }) => {
  const postUrl = `https://gmail.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <JoinWaitlistForm
          status={status}
          message={message}
          handleClose={handleClose}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};
