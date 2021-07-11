import Image from "next/image";
import Link from "next/link";
import { config } from "@site.config";

import { ContentWrapper } from "@src/components/ContentWrapper";

export const SiteHeader = () => (
  <header className="site-header">
    <ContentWrapper>
      <div className="site-header__inner">
        <Link href="/" passHref>
          <a className="site-header__logo-link">
            <Image
              src="/sim.png"
              alt={config.siteMeta.title}
              width={35}
              height={35}
              className="site-header__logo-img"
            />
          </a>
        </Link>
        <div className="site-header__links">
          {config.headerLinks.map((link, i) => {
            const key = `header-link-${i}`;
            if (link.href.startsWith("/")) {
              return (
                <Link key={key} href={link.href} passHref>
                  <a className="site-header__link">{link.title}</a>
                </Link>
              );
            }
            return (
              <a
                key={key}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="site-header__link"
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  </header>
);
