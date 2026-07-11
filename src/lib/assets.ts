const LOVABLE_ASSET_ORIGIN = "https://id-preview--d78e7097-5870-4eff-993c-4b8121746960.lovable.app";

export function assetUrl(url: string) {
  if (!url.startsWith("/__l5e/")) return url;
  return `${LOVABLE_ASSET_ORIGIN}${url}`;
}