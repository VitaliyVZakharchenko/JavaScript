export const addImage = (imgSrc) => {
    const p = new Promise((resolve, reject) => {
        const imgElem = document.createElement("img");
        imgElem.setAttribute("alt", "My photo");
        imgElem.src = imgSrc;
        const containerElement = document.querySelector(".page");
        containerElement.append(imgElem);

        const onImageLoaded = () => {
            const { width, height } = imgElem;
            resolve({ width, height });
        };

        imgElem.addEventListener("load", onImageLoaded);
        imgElem.addEventListener('error', () => reject(new Error(('Image load failed'))))
    })
    return p;
}
const imgSrc = 'https://server.com/image.png';
const result = addImage(imgSrc);