export const initialState = {
	user : {} || null,
	token: '' ,
	loading: false,
	isLoggedIn: false,
};


export const AuthReducer = (initialState, action) => {
	switch (action.type) {
	
		case 'REQUEST_LOGIN':
			return {
				...initialState,
				loading: true,
			};
		case 'LOGIN_SUCCESS':
			return {
				...initialState,
				user: action.payload,
				isLoggedIn: true,
				loading: false,
			};
		case 'LOGOUT':
			return {
				...initialState,
				user: '',
				token: '',
				isLoggedIn:false,
			};

		case 'LOGIN_ERROR':
			return {
				...initialState,
				loading: false,
				errorMessage: action.error,
			};
			

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};