
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
   if (action.type === "INCREMENT") {
       return {
           count: state.count + 1
       }
   }
    
   }
    return state;
}

export default CounterReducer;