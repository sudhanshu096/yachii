import { createContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";


export const socketContext = createContext();

export const SocketProvider = ({children})=>{
    const socket = useRef(io(`http://192.168.1.2:3000`));


    useEffect(() => {
    return () => {
      socket.current.disconnect();
    };
  }, []);

  return (
    <socketContext.Provider value={{ socket: socket.current }}>
      {children}
    </socketContext.Provider>
  );
}