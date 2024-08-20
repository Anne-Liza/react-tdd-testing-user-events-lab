import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState({
    interest1: false,
    interest2: false,
    interest3: false
  });
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setInterests((prevInterests) => ({ ...prevInterests, [name]: checked }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Form submitted');
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="interest1"
              checked={interests.interest1}
              onChange={handleCheckboxChange}
            />
            Interest 1
          </label>
          <label>
            <input
              type="checkbox"
              name="interest2"
              checked={interests.interest2}
              onChange={handleCheckboxChange}
            />
            Interest 2
          </label>
          <label>
            <input
              type="checkbox"
              name="interest3"
              checked={interests.interest3}
              onChange={handleCheckboxChange}
            />
            Interest 3
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}

export default App;