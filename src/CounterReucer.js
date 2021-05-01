const CounterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state + 1;
    }
}

export default CounterReducer;