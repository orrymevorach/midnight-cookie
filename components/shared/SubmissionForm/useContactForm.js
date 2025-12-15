'use client';
import { useReducer } from 'react';

const actions = {
  SET_STAGE: 'SET_STAGE',
  SET_FIELD: 'SET_FIELD',
};

const stages = {
  FILL_OUT_FORM: 'FILL_OUT_FORM',
  CONFIRMATION: 'CONFIRMATION',
};

const defaultInitialState = {
  contactName: '',
  contactEmail: '',
  message: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_STAGE:
      return { ...state, stage: action.stage };

    case actions.SET_FIELD:
      return { ...state, [action.field]: action.value };

    default:
      return state;
  }
};

export default function useContactFormReducer({
  initialState: customInitialState,
} = {}) {
  const initialState = {
    ...customInitialState,
    stage: stages.FILL_OUT_FORM,
  } || { ...defaultInitialState, stage: stages.FILL_OUT_FORM };
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
    actions,
    stages,
    dispatch,
  };
}
