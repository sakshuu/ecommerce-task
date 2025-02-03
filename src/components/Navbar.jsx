import { useGoogleLogin, googleLogout } from '@react-oauth/google';

const Navbar = ({ user, onLogin, onLogout }) => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => onLogin(tokenResponse),
  });

  const handleLogout = () => {
    googleLogout(); // Clear Google OAuth session
    onLogout(); // Clear user data in your app
  };

  return (
    <nav>
      <div>Ecommerce App</div>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </nav>
  );
};

export default Navbar;