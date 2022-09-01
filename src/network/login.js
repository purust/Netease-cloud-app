import { request } from "./request";

export function LoginByPhone(phone, password) {
  return request({
    url: "/login/cellphone",
    params: {
      phone,
      password,
    },
  });
}
