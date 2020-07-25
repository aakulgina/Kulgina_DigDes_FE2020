import { observable, computed } from 'mobx'

class GlobalStore {
    @observable messages = []

    @computed get countMessages() {
        return this.messages.length
    }

    addMessage(messageModel) {
        this.messages.push(messageModel)
    }
}

const store = new GlobalStore()
export default store