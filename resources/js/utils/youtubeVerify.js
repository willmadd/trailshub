export const youtube_id = fullUrl =>{
    const regex = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|vi|e(?:mbed)?)\/|\S*?[?&]v=|\S*?[?&]vi=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    const match = fullUrl.match(regex)
    if (match && match[1]){
        return match[1]
    }else {
        return false
    }
}