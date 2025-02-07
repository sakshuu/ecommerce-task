// import { useGoogleLogin, googleLogout } from '@react-oauth/google';

// const Navbar = ({ user, onLogin, onLogout }) => {
//   const login = useGoogleLogin({
//     onSuccess: (tokenResponse) => onLogin(tokenResponse),
//   });

//   const handleLogout = () => {
//     googleLogout(); 
//     onLogout(); 
//   };

//   return ( <>


// <nav class="navbar navbar-expand-lg bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="/">Ecommerce App</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <a class="nav-link active" href="/">Home</a>
//       <div class="navbar-nav ms-auto"  >
//         {user ? (
//             <button type="button" class="btn btn-dark btn-sm p-1" onClick={handleLogout}>Logout</button>
//         ) : (
//             <button type="button" class="btn btn-success btn-sm p-1" onClick={login}>Login with  <i class="bi bi-google" ></i>oogle   </button>
//         )}
//       </div>
//     </div>
//   </div>
// </nav>
//   </>
//   );
// };

// export default Navbar;

import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { useState } from 'react';

const Navbar = ({ user, onLogin, onLogout }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => onLogin(tokenResponse),
  });

  const handleLogout = () => {
    googleLogout();
    onLogout();
  };

  return (
    // <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Ecommerce App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <a className="nav-link active" href="/">Home</a>
          <div className="navbar-nav ms-auto">
           
            {user ? (
              <button type="button" className="btn btn-dark btn-sm p-1" onClick={handleLogout}>Logout</button>
            ) : (
              <button type="button" className="btn btn-success btn-sm p-1" onClick={login}>Login with <i className="bi bi-google"></i>oogle</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;