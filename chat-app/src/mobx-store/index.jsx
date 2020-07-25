import { observable, computed, action } from 'mobx'

const messageModel = {
    author: '',
    text: '',
    time: ''
}

class GlobalStore {
    @observable messages = []

    @observable search = ''

    @computed get countMessages() {
        return this.messages.length
    }

    @computed get filteredMessages() {
        const _search = this.search.toLowerCase()
        return this.messages
                    .filter(message =>
                    !!~message.author.toLowerCase().indexOf(_search)
                    || !!~message.text.toLowerCase().indexOf(_search))
    }

    @action.bound addMessage(messageModel) {
        this.messages.push(messageModel)
    }

    @action.bound changeSearch(value) {
        this.search = value
    }
}

const store = new GlobalStore()
export default store