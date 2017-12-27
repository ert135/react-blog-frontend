export default (state: any = [], action: any) => {
    switch (action.type) {
        case 'CREATE_POST':
            return [
                ...state.posts,
                (<any>Object).assign({}, action.post)
            ];
        case 'REQUEST_POSTS':
            return (<any>Object).assign({}, state, {
                isFetching: true,
                hasError: false
            });
        case 'RECEIVE_POSTS':
            return (<any>Object).assign({}, state, {
                isFetching: false,
                hasError: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
};
