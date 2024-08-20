import { createContext, useState } from "react";
import { createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);
import app from "../../Firebase/firebase.config"

const auth = getAuth(app);

const AuthProvider = ({children}) => {
	const [user,setUser] = useState(null);
	const createUser = (email,password) => {
	    return createUserWithEmailAndPassword(auth,email,password);
	}

	const signInUser = (email,password) => {
		//setLoading(true);
		return signInWithEmailAndPassword(auth,email,password);
	}

	const authInfo = {
		user,
		createUser,
		signInUser
	}
	return (
		<AuthContext.Provider value={authInfo}>
              {children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;