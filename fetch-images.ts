import https from 'https';

function fetchOgImage(url: string) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      const match = data.match(/<meta property="og:image" content="([^"]+)"/);
      if (match) {
        console.log(url + ' -> ' + match[1]);
      } else {
        console.log(url + ' -> Not found');
      }
    });
  }).on('error', (err) => {
    console.error('Error: ' + err.message);
  });
}

fetchOgImage('https://www.behance.net/gallery/233407769/UXUI-Case-Study-University-Totem-for-Campus');
fetchOgImage('https://www.behance.net/gallery/231720993/Modern-Furniture-Minimalist-E-commerce-Web-Design');
fetchOgImage('https://www.behance.net/gallery/223685651/Natura-Redesign');
fetchOgImage('https://www.behance.net/gallery/245150941/Umami-Brand-Identity-A-Sustainable-Fast-Food-Concept');
