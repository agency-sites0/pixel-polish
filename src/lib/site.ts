export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://pixelpolish.co").replace(
  /\/$/,
  "",
);
export const OG_IMAGE_URL = `${SITE_URL}/og-image.svg`;
