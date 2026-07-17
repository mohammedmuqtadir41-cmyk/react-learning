import { createContext, useContext } from "react";

const UserContext = createContext({
    name: "Mohammed Muqthadir Ahmed",
    emial: "ahmedmuqtadir097@gmail.com",
});

export default UserContext;