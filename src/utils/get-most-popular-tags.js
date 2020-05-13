import { useTagsList } from '../hooks';

function getSlug (topic) {
    const cleanTopic = topic.toLowerCase().replace(/\s/g, '-');
    return `/tag/${cleanTopic}`;
}

export default function getMostPopularTags(count) {
    const tagList = useTagsList();
    let tags = tagList.sort((a, b) => (a.totalCount < b.totalCount) ? 1 : -1);
    tags = tags.slice(0, count);
    tags.forEach(element => {
        element.url = getSlug(element.fieldValue);
    });
    return tags;
}