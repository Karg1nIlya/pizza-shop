export default function(state, action) {
    switch (action.type) {
        case 'add': {
            return {count: state.count + action.count.payload, sumCart: action.sumCart.payload}
        }
        case 'remove': {
            return {count: state.count - action.count.payload, sumCart: action.sumCart.payload}
        }
            
            
        default:
            return state
    }
}