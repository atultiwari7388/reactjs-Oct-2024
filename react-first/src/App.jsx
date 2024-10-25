// import { useState } from "react";
// import IncDec from "./components/IncDec";
// import { FormComponent } from "./components/Form";

// export default function App() {
//   const [user, setUser] = useState("Darling");

//   const changeUserBtn = () => {
//     console.log("Change");
//     setUser("Kalua");
//   };

//   return (
//     <div>
//       <h1>Hello my name is {user}</h1>
//       <button
//         className="rounded-md bg-red-600 py-2 px-2 mt-2 text-whi"
//         onClick={changeUserBtn}
//       >
//         Change User
//       </button>
//       <IncDec />
//       <FormComponent />
//     </div>
//   );
// }

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { useContext } from "react";
import { DataContext } from "./context/UserContext";

export default function App() {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
