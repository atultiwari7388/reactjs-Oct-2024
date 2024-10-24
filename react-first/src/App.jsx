// import { useState } from "react";
// import IncDec from "./components/IncDec";
// import { FormComponent } from "./components/Form";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import axios from "./../node_modules/axios/lib/axios";
import { useState } from "react";

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

export default function App() {
  const [data, setData] = useState([]);

  /** Dummy data  */

  const users = [
    {
      userName: "Aarav Patel",
      city: "Mumbai",
      age: 28,
      profession: "Software Engineer",
      profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      userName: "Riya Sharma",
      city: "Delhi",
      age: 24,
      profession: "Product Manager",
      profilePhoto: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      userName: "Vihaan Gupta",
      city: "Bangalore",
      age: 32,
      profession: "Graphic Designer",
      profilePhoto: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      userName: "Ishita Mehta",
      city: "Ahmedabad",
      age: 29,
      profession: "Marketing Specialist",
      profilePhoto: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      userName: "Arjun Rao",
      city: "Hyderabad",
      age: 35,
      profession: "UX/UI Designer",
      profilePhoto: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  ];

  //fetch data
  const getApiData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    console.log("data", data);
  };

  return (
    <>
      <Header />
      {/** Dummy data  */}
      <div className="flex overflow-x-auto space-x-4 p-4">
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>

      <div className="py-6 px-5">
        <button
          onClick={getApiData}
          className="bg-cyan-900 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-95"
        >
          Get List
        </button>
        <div className="p-5 bg-gray-950">
          {data.map(function (elem, index) {
            return (
              <div
                key={index}
                className="bg-gray-50 text-black flex items-center justify-between w-full px-6 py-6 rounded mb-0"
              >
                <h1>{elem.author}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
