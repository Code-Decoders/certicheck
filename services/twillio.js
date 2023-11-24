export const E164_REGEX = /^\+[1-9][0-9]{1,14}$/;

export function validatePhoneNumber(phoneNumber) {
  if (E164_REGEX.test(phoneNumber)) {
    return true;
  }
  return false;
}

export async function sendSmsVerificationToken(phoneNumber) {
  try {
    if (!validatePhoneNumber(phoneNumber)) {
      throw "Attempting to hash a non-e164 number: " + phoneNumber;
    }

    const data = JSON.stringify({
      phone: phoneNumber,
    });

    const response = await fetch("/api/start-verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    console.log("Verification request response:", response);
  } catch (error) {
    throw `Failed SMS verification: ${error}`;
  }
}

export async function verifyToken(phoneNumber, receivedCode) {
  try {
    const data = JSON.stringify({
      phone: phoneNumber,
      code: receivedCode,
    });

    const response = await fetch("/api/check-verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    const json = await response.json();
    console.log("verification response", json.status);
    return json.status;
  } catch (error) {
    console.error(error);
    return false;
  }
}
