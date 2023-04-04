import { useContext } from 'react'
import { Route, Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const PrivateRoute = ({children, ...rest}) => {
    let  isAuthenticated  = useContext(AuthContext)
    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/login' /> 
    )
}

export default PrivateRoute