
export const INCREMENT = () => {
    return {
        type: "INCREMENT"
    }
}

export const DECREMENT = () => {
    return {
        type: "DECREMENT"
    }
}

const details={
    count:0
}

const CounterReducer = (state = details, action: any) => {
    
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count:state.count+1
            }
        case "DECREMENT":
            
    
   
}

export default CounterReducer;