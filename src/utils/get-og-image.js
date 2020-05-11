export default function getOgImage(url, path) {
    const sitePath = url.replace(/\/$/, "");
    const ogImage = `${sitePath}${path}`;
    return ogImage;
}