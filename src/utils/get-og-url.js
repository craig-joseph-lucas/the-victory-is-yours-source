export default function getOgUrl(url, slug) {
    const ogUrl = `${url}${slug}`;
    return ogUrl.replace(/\/+/g, '/');
}