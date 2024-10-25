import { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  const user = "Darling";
  return (
    <div>
      <DataContext.Provider value={user}>{children}</DataContext.Provider>
    </div>
  );
};
export default UserContext;
