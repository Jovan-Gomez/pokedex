import { Redirect, Route } from "react-router";
import { useAuth } from "../Provider/AuthProvider";

const ProtectedRoute = ({children, ...props})=>{
    let auth = useAuth();
    return(
        <Route 
            {...props}
            render={({location})=>{
                auth.user ? (
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

// export default ProtectedRoute;