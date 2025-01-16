import React, {createContext, useContext, useEffect, useState, ReactNode} from "react";
import {onAuthStateChanged, User} from "firebase/auth";
import {auth} from "../firebase/firebase.config.ts";


interface IAuthContextProps {
  currentUser: User | null
}

interface IAuthProviderProps {
  children: ReactNode
}


const AuthContext = createContext<IAuthContextProps | undefined>(undefined);


export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value: IAuthContextProps = { currentUser };
  console.log(value)

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
