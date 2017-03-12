export default function reducer(state = {
    restaurants: [
        { id: '1111111' }, 
        { id: '2222222' }, 
        { id: '3333333' }, 
        { id: '4444444' }, 
        { id: '5555555' }, 
        { id: '66666' }, 
    ] 
}, action) {
    console.log('action', action)
    let temp = {...state, restaurants: action.payload}
    console.log('temp', temp)
    switch (action.type){
        case 'SET_RESTAURANTS': 
            return temp
        default: 
            return state
    }
}
