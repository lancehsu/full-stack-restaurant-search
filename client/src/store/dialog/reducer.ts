import { OPEN_DIALOG, CLOSE_DIALOG, DialogIsOpenAction } from './types';
import { initialState } from '../rootReducer';

const dialogIsOpenReducer = (state = initialState.dialogIsOpen, action: DialogIsOpenAction): boolean => {
  switch (action.type) {
    case OPEN_DIALOG:
      return true;
    case CLOSE_DIALOG:
      return false;
    default:
      return state;
  }
};

export default dialogIsOpenReducer;
