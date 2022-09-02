import { requestPost } from "./request";

export function loginByPhonePass(phone, password) {
  return requestPost({
    url: "/login/cellphone",
    params: {
      phone,
      password,
    },
  });
}

export function sendAuthCode(phone) {
  return requestPost({
    url: "/captcha/sent",
    params: {
      phone,
    },
  });
}

export function verifyAuthCode(phone, captcha) {
  return requestPost({
    url: "/captcha/verify",
    params: {
      phone,
      captcha,
    },
  });
}
