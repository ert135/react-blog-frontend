export default (state: any = [], action: any) => {
    switch (action.type) {
        case 'CREATE_POST':
            return [
                ...state.posts,
                (<any>Object).assign({}, action.post)
            ];
            default:
                return state;
    }
};
