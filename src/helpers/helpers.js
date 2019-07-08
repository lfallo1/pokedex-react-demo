function padText(text, length){
    while(text.length < length){
        text = '0' + text;
    }
    return text;
}

export { padText };