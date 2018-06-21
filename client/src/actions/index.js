import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
/**
 * That variable name doesn't really reflec its value.
 * If you'd want to use it elsewhere (e.g. in header) - you'd have problems.
 * I'd just leave the key itself as value and add `?key=` to the url below
 */
const API_KEY = '?key=STAPLER1234';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}