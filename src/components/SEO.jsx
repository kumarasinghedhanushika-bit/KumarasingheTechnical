import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site";

const DEFAULT_DESC =
  "Kumarasinghe Technical provides CCTV installation, networking & server installation, laptop & desktop repair, off-grid solar and electrical services. Get a free quote on WhatsApp.";

export default function SEO({ title, description = DEFAULT_DESC, path = "/", image = "/og-image.jpg", schema }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`;
  const url = `${SITE.url}${path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE.url}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}