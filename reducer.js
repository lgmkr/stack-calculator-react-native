import {
  CLEAR, PRESS_NUM, ENTER, OPERATION, SWAP,
} from './actions';

const doOperation = (x, y, op) => {
  const a = parseFloat(x);
  const b = parseFloat(y);

  if (op === 'pow') {
    return `${b ** a}`;
  }
  if (op === '+') {
    return `${b + a}`;
  }
  if (op === '-') {
    return `${b - a}`;
  }
  if (op === 'x') {
    return `${b * a}`;
  }
  if (op === '/') {
    return `${b / a}`;
  }
};

// inputState - replace | append | push
const initialState = { stack: [], inputState: 'replace' };
export default (state = initialState, action) => {
  switch (action.type) {
    case SWAP:
      return {
        stack: [state.stack[1], state.stack[0], ...state.stack.slice(2)],
        inputState: 'push',
      };
    case CLEAR:
      return initialState;
    case OPERATION:
      return {
        stack: [
          doOperation(state.stack[0], state.stack[1], action.payload),
          ...state.stack.slice(2),
        ],
        inputState: 'push',
      };
    case ENTER:
      return {
        stack: [state.stack[0] || '0', ...state.stack],
        inputState: 'replace',
      };
    case PRESS_NUM:
      if (state.inputState === 'append') {
        return {
          stack: [(state.stack[0] || 0) + action.payload, ...state.stack.slice(1)],
          inputState: 'append',
        };
      }
      if (state.inputState === 'replace') {
        return {
          stack: [action.payload, ...state.stack.slice(1)],
          inputState: 'append',
        };
      }
      if (state.inputState === 'push') {
        return {
          stack: [action.payload, ...state.stack],
          inputState: 'append',
        };
      }

      break;
    default:
      return { ...state };
  }
};
