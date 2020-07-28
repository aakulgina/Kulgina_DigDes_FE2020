import { observable, computed, action } from 'mobx'

// const chatModel = {
//     name: '',
//     messages: {
//         author: '',
//         text: '',
//         time: ''
//     }
// }

let now = new Date()
let time = ''
if (now.getMinutes() < 10) {
    time = `${now.getHours()}:0${now.getMinutes()}`
    } else {
    time = `${now.getHours()}:${now.getMinutes()}`
}

class GlobalStore {
    
    @observable chats = {'Help_Desk': {
        messages: [{author: 'Chat Bot',
            text: `Добро пожаловать!
            Чтобы начать общаться, создайте свой чат или примите приглашение от друга.
            Я пока не умею разговаривать, но в дальнейшем вы сможете получить от меня помощь по любому вопросу!`,
            time: `${time}`}],
        opened: false
    }}

    @observable search = ''

    @observable currentChat = 'Help_Desk'

    // @computed get countMessages() {
    //     return this.chats[this.currentChat].messages.length
    // }

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

    @action.bound addMessage(chat, messageModel) {
        this.chats[chat].messages.push(messageModel)
    }

    @action.bound changeSearch(value) {
        this.search = value
    }

    @action.bound addChat(newChatName) {
        if (newChatName !== null) {
            this.chats[newChatName] = {messages: [], opened: false}
        }
    }

    @action.bound openChat(name) {
        for (var chat in this.chats) {
            if (this.chats[chat] !== name) {
                this.chats[chat].opened = false
            }
        }
        this.chats[name].opened = true
        this.currentChat = name
    }

    @action.bound closeChat(name) {
        this.chats[name].opened = false
    }

    @action.bound deleteChat(name, current='Help_Desk') {
        delete(this.chats[name])
        this.currentChat = current
    }
}

const store = new GlobalStore()
export default store