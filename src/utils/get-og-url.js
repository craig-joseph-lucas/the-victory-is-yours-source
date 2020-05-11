export default function getOgUrl(url, slug) {
    const sitePath = url.replace(/\/$/, "");
    const ogUrl = `${sitePath}${slug}`;
    return ogUrl;
}