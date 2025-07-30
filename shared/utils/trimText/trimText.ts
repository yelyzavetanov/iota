const trimText = (text: string, maxLength: number) => {
    return text.length > maxLength
        ? text.slice(0, maxLength) + '…'
        : text;
}

export default trimText;