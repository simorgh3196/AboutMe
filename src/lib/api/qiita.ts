import { PostItem } from "@src/types";

type QiitaItem = {
  id: string;
  url: string;
  title: string;
  body: string;
  tags: any[];
  created_at: string;
  private: boolean;
};

export async function getPostsFromQiitaForUserId(
  userId: string
): Promise<PostItem[]> {
  const response = await fetch(
    `https://qiita.com/api/v2/users/${userId}/items`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const items: QiitaItem[] = await response.json();

  const posts: PostItem[] = items
    .filter((item) => item.private === false) // 公開済みのみに絞る
    .map((item) => {
      return {
        title: item.title,
        link: item.url,
        tags: item.tags.filter((tag) => tag.name),
        isoDate: item.created_at,
      };
    });

  return posts;
}
