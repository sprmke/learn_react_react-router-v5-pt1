import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      {/* <Route path='new-user'> Relative path */}
      {/* <Route path='/test/new-user'> This will not render */}
      {/* Absolute path */}
      <Route path='/welcome/new-user'>
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
