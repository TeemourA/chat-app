import { useState } from 'react';
import axios from 'axios';
import { userName } from '../constants';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            className="input"
            placeholder="Username"
          />
          <input
            type="text"
            value={password}
            onChange={event => setPassword(event.target.value)}
            className="input"
            placeholder="Password"
          />
        </form>
      </div>
    </div>
  );
};
