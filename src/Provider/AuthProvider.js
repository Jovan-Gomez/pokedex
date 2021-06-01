import {createContext, useContext, useState} from 'react';

const authContext = createContext();

const fakeAuthService = {
    login: (cb)=>{
        setTimeout(cb, 500);
    },
    logout: (cb)=>{
        setTimeout(cb, 500);
    }
}

const useProviderAuth = ()=>{
    const [user, setUser]  = useState(null);

    const signIn = (cb, userName)=>{
        fakeAuthService.login(()=>{
            setUser(userName);
            cb();
        });
    }
    const signOut = (cb)=>{
        fakeAuthService.logout(()=>{
            setUser(null);
            cb();
        });
    }

    return{
        user,
        signIn,
        signOut
    }
}

export const ProviderAuth  = ({children})=>{
    const auth = useProviderAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = ()=> useContext(authContext);