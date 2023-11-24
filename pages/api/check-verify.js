const twilio = require("twilio");

export default function checkVerify(req, res) {
  const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
  const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
  const verifySid = process.env.NEXT_PUBLIC_TWILIO_VERIFY_SERVICE_SID;
  const client = twilio(accountSid, authToken);

  const { phone, code } = req.body;

  client.verify.v2
    .services(verifySid)
    .verificationChecks.create({ to: phone, code: code })
    .then((verification_check) => {
      console.log(verification_check.status);
      res.status(200).json({ status: verification_check.status });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
}
