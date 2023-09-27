// CSVファイルを取得
let csv = new XMLHttpRequest();
 
// CSVファイルへのパス
csv.open("GET", "../anime_data/title.csv", false);
 
// csvファイル読み込み失敗時のエラー対応
try {
  csv.send(null);
} catch (err) {
  console.log(err);
}
 
// 配列を定義
let csvArray = [];
 
// 改行ごとに配列化
let lines = csv.responseText.split(/\r\n|\n/);
 
// 1行ごとに処理
for (let i = 0; i < lines.length; ++i) {
  let cells = lines[i].split(",");
  if (cells.length != 1) {
    csvArray.push(cells);
  }
}
 
// コンソールに配列を出力
console.log(csvArray);

// 19枚の画像URLのリスト（実際のURLに置き換えてください）
const imageUrlsNum = csvArray.length;

function getRandomImages() {
    // ランダムに3つの画像を選択
    const randomImages = [];
    while (randomImages.length < 3) {
        const randomIndex = Math.floor(Math.random() * imageUrlsNum);
        if (!randomImages.includes(randomIndex)) {
            randomImages.push(randomIndex);
        }
    }
    return randomImages.map(index => '../anime_data/animeimage/' + index + '.png');
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