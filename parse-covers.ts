import fs from 'fs';

const data = fs.readFileSync('profile.html', 'utf8');

function getCovers(id: number) {
  const idx = data.indexOf(`"id":${id}`);
  if (idx !== -1) {
    const snippet = data.substring(idx, idx + 4000);
    const coversIdx = snippet.indexOf('"covers":');
    if (coversIdx !== -1) {
      console.log(`P${id} covers snippet:`, snippet.substring(coversIdx, coversIdx + 1500));
    }
  } else {
    console.log(`P${id} not found in profile.html`);
  }
}

getCovers(245147859);
