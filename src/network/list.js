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
// 歌单的介绍信息
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
// 歌曲的详细信息
export class musicdetail {
  constructor(Info) {
    this.name = Info.al.name;
    this.imgUrl = Info.al.picUrl;
    this.singer = Info.ar[0].name;
    this.id = Info.id;
  }
}
// 歌单的所有歌曲信息
export class listdetail {
  constructor(Info) {
    this.subsCount = Info.subscribedCount;
    this.total = Info.tracks.length;
    this.tracks = Info.tracks.map((x) => new musicdetail(x));
    this.tags = Info.tags;
  }
}
