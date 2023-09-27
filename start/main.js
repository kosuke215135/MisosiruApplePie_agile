// 19枚の画像URLのリスト（実際のURLに置き換えてください）
const imageUrls = [
    "./image/animeimage/1.png",
    "./image/animeimage/2.png",
    "./image/animeimage/3.png",
    "./image/animeimage/4.png",
    "./image/animeimage/5.png",
    "./image/animeimage/6.png",
    "./image/animeimage/7.png",
    "./image/animeimage/8.png",
    "./image/animeimage/9.png",
    "./image/animeimage/10.png"
];

function getRandomImages() {
    // ランダムに3つの画像を選択
    const randomImages = [];
    while (randomImages.length < 3) {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        if (!randomImages.includes(randomIndex)) {
            randomImages.push(randomIndex);
        }
    }
    return randomImages.map(index => imageUrls[index]);
}

function loadRandomImages() {
    const imageContainer = document.getElementById("imageContainer");

    // 以前の画像をクリアする
    imageContainer.innerHTML = '';

    // ランダムな3つの画像を取得
    const randomImageUrls = getRandomImages();

    // ランダムな画像をHTMLに追加
    randomImageUrls.forEach(imageUrl => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = "animeimage";
        imageContainer.appendChild(imgElement);
    });
}

// ページ読み込み時に最初のランダムな画像を表示
window.onload = loadRandomImages;