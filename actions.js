export const PRESS_NUM = 'PRESS_NUM';
export const CLEAR = 'CLEAR';
export const SWAP = 'SWAP';
export const ENTER = 'ENTER';
export const OPERATION = 'OPERATION';

// action
export const pressNum = payload => ({
  type: PRESS_NUM,
  payload,
});

export const enter = () => ({
  type: ENTER,
});
export const swap = () => ({
  type: SWAP,
});

export const clear = () => ({
  type: CLEAR,
});
export const operation = payload => ({
  type: OPERATION,
  payload,
});
