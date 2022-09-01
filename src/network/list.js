import { request } from "./request";

export function getList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
}

export class playlist {
  constructor(Info) {
    this.imgUrl = Info.coverImgUrl;
    this.name = Info.name;
    this.description = Info.description;
    this.author = Info.creator.nickname;
    this.authorimg = Info.creator.avatarUrl;
    this.commentCount = Info.commentCount;
    this.playCount = Info.playCount;
    this.shareCount = Info.shareCount;
  }
}
export class listdetail {
  constructor(Info) {
    this.subsCount = Info.subscribedCount;
    this.total = Info.tracks.length;
    this.tracks = Info.tracks;
    this.tags = Info.tags;
  }
}
