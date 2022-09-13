import { request } from "./request";

// 轮播图
export function getSwiperImage(type) {
  return request({
    url: "/banner",
    params: {
      type,
    },
  });
}
// 图标列表
export function getIconList() {
  return request({
    url: "/homepage/dragon/ball",
  });
}
// 推荐歌单
export function getRecList() {
  return request({
    url: "/personalized",
  });
}
// 首页所有数据
export function getHome() {
  return request({
    url: "/homepage/block/page",
  });
}
// 推荐歌曲的展示信息
export class recSongItem {
  constructor(info) {
    this.imageUrl = info.uiElement.image.imageUrl;
    this.title = info.uiElement.mainTitle.title;
    // info.resourceExtInfo.songData.artists[0].name
    this.singer =
      info.resourceExtInfo.artists === undefined
        ? null
        : info.resourceExtInfo.artists[0].name;
    this.subtitle =
      info.uiElement.subTitle === undefined
        ? null
        : info.uiElement.subTitle.title;
  }
}
