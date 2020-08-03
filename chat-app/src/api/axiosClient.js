import axios from 'axios'

class API {
    client = null

    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:3003/',
            withCredentials: true
        })

        this.client.interceptors.request.use(
            function (config) {
                console.log(config)
                return config
            },
            function (error) {
                return Promise.reject(error)
            }
        )
    }

    getChats() {
        return this.client.get('/chats')
    }

    getUsers() {
        return this.client.get('/users')
    }

    // newChat(id) {
    //     return (
    //         // this.client.post('/chats', { id: id, opened: false, starred: false }),
    //         this.client.post("/data")
    //     )
    // }

    // updateMessages(chatName, data) {
    //     return this.client.put(`/chats/${chatName}/messages/${index}`, data)
    // }

    updateChat(chatName, data) {
        return this.client.put(`/chats/${chatName}`, data)
    }

    getMessages(chatName) {
        return this.client.get(`/chats/${chatName}/messages`)
    }

    sendMessage(chat, message) {
        return this.client.post(`/chats/${chat}/messages`, message)
    }

    deleteMessage(index, chat) {
        return this.client.delete(`/chats/${chat}/messages/${index}`)
    }

    deleteChat(chatName) {
        return ( this.client.delete(`/${chatName}`),
                this.client.delete(`/chats/${chatName}`) )
    }
}

const api = new API()
export default api