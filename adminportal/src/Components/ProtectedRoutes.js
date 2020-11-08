import React, { Component } from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/counter/userSlice'




 const ProtectedRoutes = ({component:Component, ...rest}) => {
    const user = useSelector(selectUser)

    return (
        <Route
            {...rest}
            render={props => {
                if(user) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                            />
                    )
                }
            
            }}
            />
            

        
    )
}

 
export default ProtectedRoutes