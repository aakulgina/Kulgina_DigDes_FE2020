import { observable, computed, action } from 'mobx'
import api from '../api'
import axios from "axios"

let now = new Date()
let time = ''
if (now.getMinutes() < 10) {
    time = `${now.getHours()}:0${now.getMinutes()}`
    } else {
    time = `${now.getHours()}:${now.getMinutes()}`
}

const chatModel = {
    id: '',
    opened: false,
    starred: false
}

const messageModel = {
    id: Number,
    author: "QQQQQ",
    text: "",
    time: "",
    selected: false
}

const userModel = {
    id: "",
    name: "",
    online: false
}

class GlobalStore {

    @observable chats = []

    @observable messages = []

    @observable users = []
    
    constructor() {
        axios.all([api.getChats()
        .then(({data}) => {
            this.chats = data.map(chat => ({...chatModel, ...chat}))
        }),
        api.getMessages(this.currentChat)
        .then(({data}) => {
            this.messages = data.map(message => ({...messageModel, ...message}))
        }),
        api.getUsers()
        .then(({data}) => {
            this.users = data.map(user => ({...userModel, ...user}))
        })
    ])
    }

    @observable search = ''

    @observable currentChat = window.location.href.split('/')[3]

    @observable selectedMessages = 0

    @computed get countChats() {
        return this.chats.length
    }

    @computed get countFriends() {
        return this.users.length
    }

    @computed get filteredMessages() {
        const _search = this.search.toLowerCase()
        
        return this.messages
                    .filter(message =>
                    !!~message.author.toLowerCase().indexOf(_search)
                    || !!~message.text.toLowerCase().indexOf(_search))
    }

    @action.bound addMessage(message, chatName) {
        this.messages.push(message)
        api.sendMessage(chatName, message)
    }

    @action.bound changeSearch(value) {
        this.search = value
    }

    // @action.bound addChat(newChatName) {
    //     if (newChatName !== null) {
    //         this.chats.push({name: newChatName, opened: false, starred: false})
    //         api.newChat(newChatName)
    //     }
    // }

    @action.bound openChat(name) {
        this.unselectAll()
        this.currentChat = name
        api.getMessages(this.currentChat)
            .then(({data}) => {
                this.messages = data.map(message => ({...messageModel, ...message}))
        })
        for (let i = 0; i < this.countChats; i++) {
            if (this.chats[i].id !== name) {
                this.chats[i].opened = false
            } else {
                this.chats[i].opened = true
            }
            api.updateChat(this.chats[i].id, this.chats[i])
        }
    }

    @action.bound closeChat(name) {
        for (let i = 0; i < this.countChats; i++) {
            if(this.chats[i].id === name) {
                console.log(this.chats[i])
                this.chats[i].opened = false
                api.updateChat(this.chats[i].id, this.chats[i])
            }
        }
    }

    @action.bound deleteChat(name, current='Help_Desk') {
        // this.chats = this.chats.filter(chat => chat.id!=name)
        // console.log(this.chats)
        // api.deleteChat(name)
        this.currentChat = current
        console.log(`Удаляем ${name}, редайректимся в ${this.currentChat}`)
    }

    @action.bound setSelected(index) {
        this.messages[index].selected = !this.messages[index].selected
        this.countSelectedMessages()
    }

    @action.bound countSelectedMessages() {
        let count = 0
        for (let i=0; i < this.messages.length; i++) {
            if (this.messages[i].selected === true) {
                count += 1
            }
        }
        this.selectedMessages = count
    }

    @action.bound unselectAll() {
        for (let i = 0; i < this.messages.length; i++) {
            this.messages[i].selected = false
        }
        this.selectedMessages = 0
    }

    @action.bound deleteSelectedMessages() {
        for (let i=this.messages.length-1; i >= 0; i--) {
            if (this.messages[i].selected) {
                console.log(this.messages[i].id)
                api.deleteMessage(this.messages[i].id, this.currentChat)
            }
        }
        this.messages = this.messages.filter(item => !item.selected)
        this.selectedMessages = 0
        
        // for (let i = 1; i < this.messages.length; i++) {
        //     this.messages[i].id = i+1
        // }
        // api.updateMessages(this.currentChat, this.messages)
    }

    @action.bound cleanSearch() {
        this.search = ''
    }

    @action.bound starChat(chat) {
        for (let i = 0; i < this.countChats; i++) {
            if(this.chats[i].id === chat) {
                this.chats[i].starred = !this.chats[i].starred
                api.updateChat(chat, this.chats[i])
            }
        }
    }

    @computed get sortStarred() {
        return this.chats.slice().reverse().sort((a, b) => a.starred < b.starred ? 1 : -1)
    }
}

const store = new GlobalStore()
export default store