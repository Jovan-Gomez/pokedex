import { Redirect, Route } from "react-router";
import { useAuth } from "../Provider/AuthProvider";
const ProtectedRoute = ({children, ...props})=>{
    let {user} = useAuth();
    return(
        <Route 
            {...props}
            render={({location})=>{
                return user ? (
                    children
                ) : (
                    <Redirect 
                        to={{
                            pathname: "/",
                            state: {from: location},
                        }}
                    />
                )
            }}
        />
    );
}

export default ProtectedRoute;