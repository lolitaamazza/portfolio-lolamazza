import https from 'https';
import fs from 'fs';

https.get('https://www.behance.net/lolamazzaoliver', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('profile.html', data);
    console.log('Saved to profile.html');
    
    // Try to extract covers
    const p4_match = data.match(/"id":231720993.*?"covers":\{([^}]+)\}/);
    if (p4_match) console.log('P4 covers:', p4_match[1]);
    
    const p5_match = data.match(/"id":223685651.*?"covers":\{([^}]+)\}/);
    if (p5_match) console.log('P5 covers:', p5_match[1]);
  });
});