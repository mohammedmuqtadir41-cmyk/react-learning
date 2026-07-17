import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Top from "../components/Top";
import { useState, useEffect, useContext } from "react";
import UserContext from "../Utils/UserContext";

const App = () => {
  console.log("App rendered");

  // const [searchText, setSearchText] = useState("");
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  // const data = useContext(UserContext);

  useEffect(() => {
    const randomTrue = Math.random() < 0.1;
    console.log("Random:", randomTrue);

    if (!randomTrue) {
      console.log("Guest");
      setUserName("Guest");
      setEmail("xy@gmail.com");
      return;
    }

    const LogginedUser = {
      userName: "Muqthadir Ahmed",
      email: "ahmedmuqtadir097@gmail.com",
    };

    setUserName(LogginedUser.userName);
    setEmail(LogginedUser.email);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ name: userName, email: email }}>
        <Header />
        {/* <Top /> */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
