import { SET_TEXT } from './types';

export default {
    setText(payload) {
        return { type: SET_TEXT , payload: payload }
    }
}