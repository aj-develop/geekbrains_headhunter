export function descendingTimeCompare(a, b) {
    return (b.published_at < a.published_at) ? -1 : ((b.published_at > a.published_at) ? 1 : 0);
}
