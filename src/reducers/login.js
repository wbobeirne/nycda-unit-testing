const INITIAL_STATE = {
	user: null,
	isLoading: false,
	error: null,
};

export default function loginReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'LOGIN_START':
			return {
				...state,
				isLoading: true,
			};

		case 'LOGIN_SUCCESS':
			return {
				...state,
				user: action.user,
				isLoading: false,
			};

		case 'LOGIN_FAILURE':
			return {
				...state,
				error: action.error,
			};

		default:
			return state;
	}
}
