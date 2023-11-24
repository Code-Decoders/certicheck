import twilio from "twilio";

export default function sendMessage(req, res) {
  const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
  const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
  const verifySid = process.env.NEXT_PUBLIC_TWILIO_VERIFY_SERVICE_SID;
  const client = twilio(accountSid, authToken);

  const { phone } = req.body;

  client.verify.v2
    .services(verifySid)
    .verifications.create({ to: phone, channel: "sms" })
    .then((verification) => {
      console.log(verification.status);
      res.status(200).json({ status: verification.status });
    });
}
