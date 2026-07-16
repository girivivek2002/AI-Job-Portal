
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getToken } from '../utils/tokenManager'
import { loadUser } from '../features/auth/authThunk'

const useAuthInitializer = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const token = getToken();

        if (token) {

            dispatch(loadUser())
        }


    }, [dispatch])
}

export default useAuthInitializer
