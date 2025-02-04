import { useGoogleLogin, googleLogout } from '@react-oauth/google';

const Navbar = ({ user, onLogin, onLogout }) => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => onLogin(tokenResponse),
  });

  const handleLogout = () => {
    googleLogout(); 
    onLogout(); 
  };

  return ( <>


<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Ecommerce App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <a class="nav-link active" href="/">Home</a>
      <div class="navbar-nav ms-auto"  >
        {user ? (
            <button type="button" class="btn btn-dark btn-sm p-1" onClick={handleLogout}>Logout</button>
        ) : (
            <button type="button" class="btn btn-success btn-sm p-1" onClick={login}>Login with  <i class="bi bi-google" ></i>oogle   </button>
        )}
      </div>
    </div>
  </div>
</nav>
  </>
  );
};

export default Navbar;