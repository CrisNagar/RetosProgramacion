const gcd = (a, b) => {
    if (b === 0) return a;

    return gcd(b, Math.floor(a % b));
};

const aspectRatio = (anchura, altura) => {
    const divisor = gcd(anchura, altura);
    
    return `${anchura/divisor}:${altura/divisor}`;
}

const img = document.createElement('img');
img.src = 'https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png';

console.log(`La imagen tiene un aspect ratio de: ${aspectRatio(img.naturalWidth, img.naturalHeight)}` );