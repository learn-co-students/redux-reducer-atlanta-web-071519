let numberOfPresents = 0; 

export function managePresents(state = numberOfPresents, action){
    switch(action.type){
        case 'INCREASE': {
            return { numberOfPresents: state.numberOfPresents + 1}; 
        }
        default: {
            return state; 
        }
    }
}
