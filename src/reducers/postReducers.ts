export default (state: any = [], action: any) => {
    switch (action.type) {
        // Check if action dispatched is
        // CREATE_BOOK and act on that
        case 'CREATE_POST':
            return [
                ...state.posts,
                Object.assign({}, action.post)
            ];
            default:
                return state;
    }
};