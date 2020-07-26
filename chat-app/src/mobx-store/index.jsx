import { observable, computed, action } from 'mobx'

// const messageModel = {
//     author: '',
//     text: '',
//     time: ''
// }

const chatModel = {
    name: '',
    messages: {
        author: '',
        text: '',
        time: ''
    }
}

let now = new Date()
let time = ''
if (now.getMinutes() < 10) {
    time = `${now.getHours()}:0${now.getMinutes()}`
    } else {
    time = `${now.getHours()}:${now.getMinutes()}`
}

class GlobalStore {
    
    @observable chats = {'Help_Desk': {messages: [{author: 'Chat Bot',
        text: `Добро пожаловать!
        Чтобы начать общаться, создайте свой чат или примите приглашение от друга.
        Я пока не умею разговаривать, но в дальнейшем вы сможете получить от меня помощь по любому вопросу!`,
        time: `${time}`}]}}

    @observable search = ''

    @observable currentChat = 'Help_Desk'

    @computed get countMessages() {
        return this.chats[this.currentChat].messages.length
    }

    @computed get countChats() {
        return Object.keys(this.chats).length
    }

    @computed get filteredMessages() {
        const _search = this.search.toLowerCase()
        return this.chats[this.currentChat].messages
                    .filter(message =>
                    !!~message.author.toLowerCase().indexOf(_search)
                    || !!~message.text.toLowerCase().indexOf(_search))
    }

    @action.bound addMessage(messageModel) {
        this.chats[this.currentChat].messages.push(messageModel)
    }

    @action.bound changeSearch(value) {
        this.search = value
    }

    @action.bound addChat(newChatName) {
        this.chats[newChatName] = {messages: []}
    }
}

const store = new GlobalStore()
export default store