export const UserStatus = (props) => {
  if (props.isLoggedIn && props.isAdmin) {
    return <div>Welcome Admin</div>;
  } else {
    return <h1>Welcome User</h1>;
  }
};
