import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, ToastAndroid } from "react-native";

const ROOT_URL = 'https://obiex-cex-api.herokuapp.com/v1';

export async function loginUser(dispatch, loginPayload) {
	
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginPayload) 
	};

	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		const response = await fetch(`${ROOT_URL}/auth/login`, requestOptions);
		const data = await response.json();

		if (data) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			AsyncStorage.setItem('@userData', JSON.stringify(data));
			 console.log(data);
            return data;
		}
		if(!data) {
			dispatch({ type: 'LOGIN_ERROR', error: data.errors[0]});
			// const errorMsg = data.errors[0].message; 
			// ToastAndroid.showWithGravity(
			// 	errorMsg,
			// 	ToastAndroid.LONG,
			// 	ToastAndroid.TOP,
			// )
			console.log(data);
		}
		return;
	} catch (error) {
		console.log('us',error.message);
		const errorMessage = error.message;
		ToastAndroid.showWithGravity(
			errorMessage,
			ToastAndroid.LONG,
			ToastAndroid.TOP,
		)

	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
		try {
		  await AsyncStorage.removeItem('@currentUser');
		NavigationService.navigate('Login')
		  
		} catch(e) {
		  // remove error
		}
		console.log('Done.');
	
}
