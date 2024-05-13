
// import React, { useState } from 'react';
// import axios from 'axios';
// import './ResetPasswordForm.css';

// const ResetPasswordForm = ({ token }) => {
//     console.log("token is"+token);
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setMessage('Passwords do not match.');
//       return;
//     }

//     try {
//       const resetPasswordData = {
//         token,
//         newPassword,
//       };

//       await axios.post('http://localhost:8080/epankaj/v.0/users/resetpassword', resetPasswordData);
//       setMessage('Password reset successfully.');
//     } catch (error) {
//       setMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="reset-password-container">
//       <h2>Reset Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           placeholder="Enter new password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Confirm new password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Reset Password</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ResetPasswordForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ResetPasswordForm.css';

const ResetPasswordForm = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const resetPasswordData = {
        token,
        newPassword,
      };

      await axios.post('http://3.111.37.163:8080/epankaj/v.0/users/resetpassword', resetPasswordData);
      setMessage('Password reset successfully.');
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPasswordForm;