export default function reducer(state = {
    restaurants: [
        { id: '1111111' }, 
        { id: '2222222' }, 
        { id: '3333333' }, 
        { id: '4444444' }, 
        { id: '5555555' }, 
    ] 
}, action) {
    switch (action.type){
        case 'SET_SIGNUP_FLASH': 
            return {...state, signupFlash: action.payload }
        default: 
            return state
    
    }
}
