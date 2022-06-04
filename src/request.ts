async function translate(word: string): Promise<string> {
  if (!word.length) {
    return Promise.reject(new Error('Zero-length word'));
  }
  const res = await fetch(`https://www.spanishdict.com/translate/${word}`, { mode: 'no-cors' });
  return await res.text();
}

async function conjugate(verb: string): Promise<string> {
  if (!verb.length) {
    return Promise.reject(new Error('Zero-length word'));
  }
  const res = await fetch(`https://www.spanishdict.com/conjugate/${verb}`, { mode: 'no-cors' });
  return await res.text();
}


export default {
  translate,
  conjugate
};
