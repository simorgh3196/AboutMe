import dayjs from "dayjs";

import { config } from "@site.config";
import { PostItem } from "@src/types";
import { getPostsFromQiitaForUserId } from "@src/lib/api/qiita";
import { getPostsFromZennForUserId } from "@src/lib/api/zenn";

export async function getPosts(): Promise<PostItem[]> {
  const posts = Promise.all([
    getPostsFromQiitaForUserId(config.user.qiita),
    getPostsFromZennForUserId(config.user.zenn),
  ]).then((articles) => {
    return articles
      .flat()
      .sort((a, b) => (dayjs(a.isoDate).isBefore(b.isoDate) ? 1 : -1)); // 新しい順
  });

  return await posts;
}
