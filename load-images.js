export function loadImages(urls) {
  async function load(url) {
    const image = new Image();
    image.setAttribute('src', url);
    await image.decode();
    return image;
  }
  return Promise.all(urls.map(url => load(url)));
}
