function gotoGatyaHTML(){
    location.href = './gatya.html';
}

function playGatya() {
    let wait_5sec = setTimeout(gotoGatyaHTML, 3000);
}

const se = document.getElementById("gatyaSe");

function playSE() {
  se.play();
  se.onended = function() {
    window.location.href = "./gatya.html";
  };
}

function stopBGM() {
  const bgm = document.getElementById("bgm");
  bgm.pause(); // BGMの再生を停止
  bgm.currentTime = 0; // 再生位置を初期化
}