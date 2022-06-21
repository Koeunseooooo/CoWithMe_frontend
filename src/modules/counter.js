const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

export const plus = (number) => ({
    type: PLUS,
    number
});

export const minus = (number) => ({
    type: MINUS,
    number
});

const initialState = {
    number: 0
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case PLUS:
            return { number: state.number + action.number };
        case MINUS:
            return { number: state.number - action.number };
        default:
            return state;
    }
}