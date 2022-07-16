function rot13(message: string): string {
  return [...message]
    .map(letter => {
      let code = letter.charCodeAt(0);

      if (code > 96 && code < 123)
        return String.fromCharCode(code - 13 <= 96 ? code + 13 : code - 13);
      else if (code > 64 && code < 91)
        return String.fromCharCode(code - 13 <= 64 ? code + 13 : code - 13);
      else return letter;
    })
    .join('');
}
