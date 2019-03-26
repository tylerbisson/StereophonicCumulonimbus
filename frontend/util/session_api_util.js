export const signup = user => {
    return $.ajax ({
        method: 'post',
        url: 'api/user',
        data: { user }
    });
};

export const login = user => {
    return $.ajax({
        method: 'post',
        url: 'api/session',
        data: { user }
    });
};

export const logout = user => {
    return $.ajax({
        method: 'delete',
        url: 'api/session'
    });
};