import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
	switch (action.type) {
	case FETCH_POSTS:
		return _.mapKeys(action.payload.data, 'id');

	/**
	 * This console.log will never execute. Why is it here? 🤔
	 */
	console.log(action.payload.data);
		default:
			return state;
	}
}