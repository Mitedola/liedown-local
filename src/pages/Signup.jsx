import React, { useState } from 'react';
import { signup } from '../auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      alert('Signup successful!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 mr-2" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 mr-2" required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">Sign Up</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
