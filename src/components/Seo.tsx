import { PROJECT_NAME, PROJECT_URL } from "@/constants/common";
import Head from "next/head";
import React from "react";

interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const Seo: React.FC<Props> = ({
  title: tmpTitle = "Domov",
  description,
  url = PROJECT_URL,
  image = "/assets/ogimage.png",
}) => {
  const title = [...(tmpTitle ? [tmpTitle] : []), PROJECT_NAME].join(" | ");

  return (
    <Head>
      <meta charSet="utf-8" className="next-head" />

      {/* Schema.org markup for Google+ */}
      <meta itemProp="name" content={title} key="schema:title" />
      <meta
        itemProp="description"
        content={description}
        key="schema:description"
      />

      {/* Twitter Card data */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />

      {/* Open Graph data */}
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:image" content={image} key="og:image" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />

      <title key="title">{title}</title>
      <link rel="icon" type="image/png" sizes="32x32" href={image} />
      <meta
        name="keywords"
        content="software, mobilné a webové aplikácie, dizajn"
      />
      <meta itemProp="name" content={title} />
      <meta name="author" content="AOkno" className="next-head" />
      <meta property="og:site_name" content={title} className="next-head" />
      <meta name="googlebot" content="follow" className="next-head" />
      <meta property="og:url" content={url} className="next-head" />
      <meta name="description" content={description} className="next-head" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        key="viewport"
      />
    </Head>
  );
};
