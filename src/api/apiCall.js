import axios from "axios"

export const createRoom = async()=>{
    try {
        const response = await axios.post(`http://192.168.1.2:3000/create-room`)
        console.log('roomId', response?.data?.roomId)
        return response?.data?.roomId;
    } catch (e) {
        console.log(e)
        return e.message
    }
}