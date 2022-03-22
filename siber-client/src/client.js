import { io } from "socket.io-client";


let socket = null
const useSocket = () => {
    socket = socket || io('http://192.168.1.104:3003')
    return socket
}


export default useSocket