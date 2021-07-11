import { InferGetStaticPropsType, NextPage } from "next";

import { config } from "@site.config";
import { PostList } from "@src/components/PostList";
import { PageSEO } from "@src/components/PageSEO";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { getPosts } from "@src/lib/posts";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<Props> = (props: Props) => {
  return (
    <>
      <PageSEO
        title={config.siteMeta.title}
        description={config.siteMeta.description}
        path="/"
        removeSiteNameFromTitle={true}
      />

      <section className="home-hero">
        <ContentWrapper>
          <h1 className="home-hero__title">{config.siteMeta.title}</h1>
          {!!config.siteMeta.description && (
            <p className="home-hero__description">
              {config.siteMeta.description}
            </p>
          )}
        </ContentWrapper>
      </section>

      <section className="home-posts">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">Articles</h2>
          </div>

          <div className="home-posts-container">
            <PostList items={props.posts} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60, // Rebuild every 1 hour.
  };
};

export default Page;
