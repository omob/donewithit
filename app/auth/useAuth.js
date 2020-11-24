import jwtDecode from "jwt-decode";
import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (token) => {
    const user = jwtDecode(token);
    setUser(user);
    authStorage.storeToken(token);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut, setUser };
};
