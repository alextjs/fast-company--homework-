

export const paginise = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}


