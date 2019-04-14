export const createComment = comment => {
    return $.ajax({
        method: 'post',
        url: `api/comments`,
        data: comment
    });
};