import { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>Registration Form</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" value={username} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;