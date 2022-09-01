import { request } from "./request";

// eslint-disable-next-line prettier/prettier
// 轮播图图片
export function getSwiperImage(type) {
  return request({
    url: "/banner",
    params: {
      type,
    },
  });
}
// 推荐歌单
export function getMusicList() {
  return request({
    url: "/personalized",
  });
}
