export function setRestaurants(restaurants) {
    console.log('in setRestaurants')
    return {
        type: 'SET_RESTAURANTS',
        payload: fetch('/getListings') 
            .then(resp => {
                return resp.text() })
            .then(response => {
                console.log('response', response)
                return response
            })
            .catch(err => console.err(err))
    }
}
