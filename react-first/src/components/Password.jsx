const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

export const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};
