export function getMessagesByChatId(chatId) {
    return (state) => state.messages.filter(el => el.chatId === +chatId)
}