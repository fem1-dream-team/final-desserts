import axios from 'axios'
import { call, put, takeEvery} from 'redux-saga/effects'
import { GET_ERRORS, POST_NEW_USER } from './types'
import { showSagaLogin } from './sagaAuthForm'

export const registerUser = (userData) => {
	return {
		type: POST_NEW_USER,
		payload: userData
	}
}

const registerFailed = (err) => {
	return {
		type: GET_ERRORS,
		payload: err
	}
}

function * createNewUser (action) {
	try {
		yield call(() => axios.post('http://localhost:3001/api/register', action.payload));
		yield put(showSagaLogin())
	} catch (err) {
		console.error(err.response.data)
		yield put(registerFailed(err.response.data))
	}
}

export function * postNewUserSaga () {
	yield takeEvery(POST_NEW_USER, createNewUser)
}
