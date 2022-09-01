import { request } from "./request";

export function getDefaultKeyWord() {
  return request({
    url: "/search/default",
  });
}
export function getHotSearch() {
  return request({
    url: "/search/hot/detail",
  });
}
export function getSearchSongs(keywords) {
  return request({
    url: "/cloudsearch",
    params: {
      keywords,
    },
  });
}
