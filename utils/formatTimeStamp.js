function formatTimeStamp (time) {
    const date = new Date(time);
    return `${date.toLocaleString("en-US", { month: "short" })} ${date.getDate()}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
}

module.exports = formatTimeStamp;