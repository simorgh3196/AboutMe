import { useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { PostItem } from "@src/types";
import { getHostFromURL, getFaviconSrcFromHostname } from "@src/lib/helper";

dayjs.extend(relativeTime);

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { title, isoDate, link } = props.item;
  const hostname = getHostFromURL(link);

  return (
    <article className="post-link">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="post-link__main-link"
      >
        <h2 className="post-link__title">{title}</h2>
        <time dateTime={isoDate} className="post-link__date">
          {dayjs(isoDate).fromNow()}
        </time>
        {hostname && (
          <div className="post-link__site">
            <Image
              src={getFaviconSrcFromHostname(hostname)}
              alt="Favicon of posted service"
              width={14}
              height={14}
              className="post-link__site-favicon"
            />
            <p className="post-link__site-hostname">{hostname}</p>
          </div>
        )}
      </a>
    </article>
  );
};

export const PostList: React.FC<{ items: PostItem[] }> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(8);
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  if (!totalItemsCount) {
    return <div className="post-list-empty">No posts yet</div>;
  }

  return (
    <>
      <div className="post-list">
        {props.items.slice(0, displayItemsCount).map((item, i) => (
          <PostLink key={`post-item-${i}`} item={item} />
        ))}
      </div>
      {canLoadMore && (
        <div className="post-list-load">
          <button
            onClick={() => setDisplayItemsCount(displayItemsCount + 8)}
            className="post-list-load__button"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </>
  );
};
