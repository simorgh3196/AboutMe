import { ContentWrapper } from "@src/components/ContentWrapper";
import { config } from "@site.config";

export const SiteFooter = () => (
  <footer className="site-footer">
    <ContentWrapper>
      <p>© {config.siteMeta.teamName}</p>
    </ContentWrapper>
  </footer>
);
