const normalizeSiteUrl = (value: string | undefined) => {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  return trimmed.startsWith("http://") || trimmed.startsWith("https://")
    ? trimmed
    : `https://${trimmed}`;
};

const configuredSiteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL,
);

export const siteMetadataBase = configuredSiteUrl
  ? new URL(configuredSiteUrl)
  : null;

export const getAbsoluteSiteUrl = (pathname: string) => {
  if (!siteMetadataBase) {
    return null;
  }

  return new URL(pathname, siteMetadataBase).toString();
};
