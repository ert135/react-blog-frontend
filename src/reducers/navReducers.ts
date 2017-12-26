export default (state: any = [], action: any) => {
    switch (action.type) {
        case 'TOGGLE_NAV':
            return !state.navOpen
            default:
                return state;
    }
};
