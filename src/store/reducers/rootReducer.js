const initState = {
    users: [
        { id: 1, name: 'TUng' },
        { id: 2, name: 'TUng2' }
    ],
    name: ''
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            return { ...state, users };
        case 'ADD_USER':
            let userAdd = {
                id: Math.floor(Math.random() * 100),
                name: action.payload
            }
            return { ...state, users: [...state.users, userAdd] };
        case 'ON_CHANGE_ADD_USER':
            let name = action.payload
            return { ...state, name };
        case 'RESET_NAME_USER':
            return { ...state, name: '' };
        default:
            return state;
    }
}

export default rootReducer