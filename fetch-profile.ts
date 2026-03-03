import https from 'https';

function fetchProfile(url: string) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      const matches = [...data.matchAll(/href="(https:\/\/www\.behance\.net\/gallery\/[^"]+)"/g)];
      const uniqueLinks = [...new Set(matches.map(m => m[1]))];
      console.log('Found links:');
      uniqueLinks.forEach(link => console.log(link));
    });
  }).on('error', (err) => {
    console.error('Error: ' + err.message);
  });
}

fetchProfile('https://www.behance.net/lolamazzaoliver');
