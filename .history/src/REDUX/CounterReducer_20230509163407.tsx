
export const INCREMENT = () => {
    return {
        type: "INCREMENT"
    }
}

const details={
    count:0
}

const CounterReducer = (state = details, action: any) => {

    return state;
}

export default CounterReducer;