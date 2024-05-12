// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/epankaj/v.0/users/save', formData);
//       console.log(response.data);
   
//     } catch (error) {
//       console.error(error);
      
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn">Sign Up</button>
        

//       </form>
//     </div>
//   );
// };

// export default SignUp;
// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const [signUpSuccess, setSignUpSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/epankaj/v.0/users/save', formData);
//       console.log(response.data);
//       setSignUpSuccess(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h1>Sign Up</h1>
//       {signUpSuccess ? (
//         <div>
//           <h1>Sign up successful!</h1>
//           <button className="btn">Login</button>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="signup-form">
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn">
//             Sign Up
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SignUp;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Signup.css';
// import { Link } from 'react-router-dom';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const [signUpSuccess, setSignUpSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/epankaj/v.0/users/save', formData);
//       console.log(response.data);
//       setSignUpSuccess(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h1>Sign Up</h1>
//       {signUpSuccess ? (
//         <div>
//           <p>Sign up successful!</p>
//           <Link to="/login" className="btn">
//             Login
//           </Link>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="signup-form">
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn">
//             Sign Up
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/epankaj/v.0/users/save', formData);
      console.log(response.data);
      setSignUpSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      {signUpSuccess ? (
        <div>
          <p>Sign up successful!</p>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn">
              Sign Up
            </button>
            <h1>Already have a Account ?</h1>
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUp;