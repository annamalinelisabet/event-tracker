import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'


export const ProtectedRoute = (props) => {

    const isLoggedIn = useSelector(state => state.user.token)
    const location = useLocation()

    return isLoggedIn
    ? props.children
    : <Navigate to='/' replace state={{ from: location.pathname }} />
}
