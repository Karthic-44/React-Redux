export const fetchPostRequest = () => ({
    type:"FETCH_POSTS_REQUEST",
});

export const fetchPostSuccess = (posts) => ({
    type:"FETCH_POSTS_SUCCESS",
    payload: posts,
});

export const fetchPostFailure = (error) => ({
    type:"FETCH_POSTS_FAILURE",
    payload: error,
});

