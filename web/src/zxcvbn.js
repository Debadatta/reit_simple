export function zxcvbn(password) {
  if(window.zxcvbn) {
    const data = window.zxcvbn(password);
    return { score: data.score, passwordSuggestions: data.feedback.suggestions};
  }

  return { score: null, passwordSuggestions: []};
}
