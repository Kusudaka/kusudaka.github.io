// 全キャラクター一覧（増えたらここに追加するだけ）
const characters = [
  "alseda",
  "chear",
  "codo",
  "cofe",
  "dec",
  "dia",
  "ereth",
  "fade",
  "hyou",
  "jena",
  "laim",
  "lipuil",
  "lucy",
  "makino",
  "mimi",
  "nelly",
  "niji",
  "nishe",
  "otamo",
  "parsh",
  "petna",
  "rio",
  "roco",
  "rotte",
  "ruca",
  "saika",
  "shara",
  "shiraco",
  "solt",
  "tetra",
  "toto",
  "wilo",
  "yonire"
];

// 表示人数
const DISPLAY_COUNT = 4;

// シャッフル関数（Fisher–Yates）
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const area = document.getElementById("randomCharaArea");

// ランダムに4人選ぶ
const selected = shuffle(characters).slice(0, DISPLAY_COUNT);

// HTML生成
selected.forEach(name => {
  const a = document.createElement("a");
  a.href = `chara-${name}.html`;

  const img = document.createElement("img");
  img.src = `icon-${name}.png`;
  img.alt = name;

  a.appendChild(img);
  area.appendChild(a);
});