export const signup = user => {
    return $.ajax ({
        method: 'post',
        url: 'api/users',
        data: user,
        contentType: false,
        processData: false,
    });
};

export const login = user => {
    return $.ajax({
        method: 'post',
        url: 'api/session',
        data: { user }
    });
};

export const logout = () => {
    return $.ajax({
        method: 'delete',
        url: 'api/session'
    });
};

export const fetchCurrentUser = () => {
    return $.ajax({
        method: 'get',
        url: 'api/session'
    });
};