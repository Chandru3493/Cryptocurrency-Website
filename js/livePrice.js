//BITCOIN
let btcusd = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let btc = document.getElementById("bitcoin");
let lastbtc = 0.0;

btcusd.onmessage = (event) => {
  let btcObj = JSON.parse(event.data);
  let curbtc = parseFloat(btcObj.p).toFixed(0);
  btc.innerHTML = lastbtc < curbtc ? "▲ " + curbtc : "▼ " + curbtc;
  btc.style.color = lastbtc < curbtc ? "#33cf25" : "red";
  lastbtc = curbtc;
};

//ETHERIUM
let ethusd = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");
let eth = document.getElementById("ethereum");
let lasteth = 0.0;

ethusd.onmessage = (event) => {
  let ethObj = JSON.parse(event.data);
  let cureth = parseFloat(ethObj.p).toFixed(1);
  eth.innerHTML = lasteth <= cureth ? "▲ " + cureth : "▼ " + cureth;
  eth.style.color = lasteth <= cureth ? "#33cf25" : "red";
  lasteth = cureth;
};

//TETHER
let usdtusd = new WebSocket("wss://stream.binance.com:9443/ws/busdusdt@trade");
let usdt = document.getElementById("tether");
let lastusdt = 0.0;

usdtusd.onmessage = (event) => {
  let usdtObj = JSON.parse(event.data);
  let curusdt = parseFloat(usdtObj.p).toFixed(2);
  usdt.innerHTML = lastusdt <= curusdt ? "▲ " + curusdt : "▼ " + curusdt;
  usdt.style.color = curusdt <= lastusdt ? "#33cf25" : "red";
  lastusdt = curusdt;
};

//BINANCE
let bnbusd = new WebSocket("wss://stream.binance.com:9443/ws/bnbusdt@trade");
let bnb = document.getElementById("binance");
let lastbnb = 0.0;

bnbusd.onmessage = (event) => {
  let bnbObj = JSON.parse(event.data);
  let curbnb = parseFloat(bnbObj.p).toFixed(2);
  bnb.innerHTML = lastbnb <= curbnb ? "▲ " + curbnb : "▼ " + curbnb;
  bnb.style.color = lastbnb <= curbnb ? "#33cf25" : "red";
  lastbnb = curbnb;
};

//RIPPLE
let xrpusd = new WebSocket("wss://stream.binance.com:9443/ws/xrpusdt@trade");
let xrp = document.getElementById("ripple");
let lastxrp = 0.0;

xrpusd.onmessage = (event) => {
  let xrpObj = JSON.parse(event.data);
  let curxrp = parseFloat(xrpObj.p).toFixed(4);
  xrp.innerHTML = lastxrp <= curxrp ? "▲ " + curxrp : "▼ " + curxrp;
  xrp.style.color = lastxrp <= curxrp ? "#33cf25" : "red";
  lastxrp = curxrp;
};

//DOGECOIN
let dogeusd = new WebSocket("wss://stream.binance.com:9443/ws/dogeusdt@trade");
let doge = document.getElementById("dogecoin");
let lastdoge = 0.0;

dogeusd.onmessage = (event) => {
  let dogeObj = JSON.parse(event.data);
  let curdoge = parseFloat(dogeObj.p).toFixed(4);
  doge.innerHTML = lastdoge <= curdoge ? "▲ " + curdoge : "▼ " + curdoge;
  doge.style.color = lastdoge <= curdoge ? "#33cf25" : "red";
  lastdoge = curdoge;
};

//CARDANO
let adausd = new WebSocket("wss://stream.binance.com:9443/ws/adausdt@trade");
let ada = document.getElementById("cardano");
let lastada = 0.0;

adausd.onmessage = (event) => {
  let adaObj = JSON.parse(event.data);
  let curada = parseFloat(adaObj.p).toFixed(4);
  ada.innerHTML = lastada <= curada ? "▲ " + curada : "▼ " + curada;
  ada.style.color = lastada <= curada ? "#33cf25" : "red";
  lastada = curada;
};

//POLYGON
let maticusd = new WebSocket(
  "wss://stream.binance.com:9443/ws/maticusdt@trade"
);
let matic = document.getElementById("polygon");
let lastmatic = 0.0;

maticusd.onmessage = (event) => {
  let maticObj = JSON.parse(event.data);
  let curmatic = parseFloat(maticObj.p).toFixed(4);
  matic.innerHTML = lastmatic <= curmatic ? "▲ " + curmatic : "▼ " + curmatic;
  matic.style.color = lastmatic <= curmatic ? "#33cf25" : "red";
  lastmatic = curmatic;
};

//POLKADOT
let dotusd = new WebSocket("wss://stream.binance.com:9443/ws/dotusdt@trade");
let dot = document.getElementById("polkadot");
let lastdot = 0.0;

dotusd.onmessage = (event) => {
  let dotObj = JSON.parse(event.data);
  let curdot = parseFloat(dotObj.p).toFixed(3);
  dot.innerHTML = lastdot <= curdot ? "▲ " + curdot : "▼ " + curdot;
  dot.style.color = lastdot <= curdot ? "#33cf25" : "red";
  lastdot = curdot;
};

//LITECOIN
let ltcusd = new WebSocket("wss://stream.binance.com:9443/ws/ltcusdt@trade");
let ltc = document.getElementById("litecoin");
let lastltc = 0.0;

ltcusd.onmessage = (event) => {
  let ltcObj = JSON.parse(event.data);
  let curltc = parseFloat(ltcObj.p).toFixed(3);
  ltc.innerHTML = lastltc <= curltc ? "▲ " + curltc : "▼ " + curltc;
  ltc.style.color = lastltc <= curltc ? "#33cf25" : "red";
  lastltc = curltc;
};

//TRON
let tronusd = new WebSocket("wss://stream.binance.com:9443/ws/trxusdt@trade");
let tron = document.getElementById("tron");
let lasttron = 0.0;

tronusd.onmessage = (event) => {
  let tronObj = JSON.parse(event.data);
  ava;
  let curtron = parseFloat(tronObj.p).toFixed(4);
  tron.innerHTML = lasttron <= curtron ? "▲ " + curtron : "▼ " + curtron;
  tron.style.color = lasttron <= curtron ? "#33cf25" : "red";
  lasttron = curtron;
};

//SOLONA
let solusd = new WebSocket("wss://stream.binance.com:9443/ws/solusdt@trade");
let sol = document.getElementById("solona");
let lastsol = 0.0;

solusd.onmessage = (event) => {
  let solObj = JSON.parse(event.data);
  let cursol = parseFloat(solObj.p).toFixed(3);
  sol.innerHTML = lastsol <= cursol ? "▲ " + cursol : "▼ " + cursol;
  sol.style.color = lastsol <= cursol ? "#33cf25" : "red";
  lastsol = cursol;
};

//AVALANCHE
let avausd = new WebSocket("wss://stream.binance.com:9443/ws/avaxusdt@trade");
let ava = document.getElementById("avalanche");
let lastava = 0.0;

avausd.onmessage = (event) => {
  let avaObj = JSON.parse(event.data);
  let curava = parseFloat(avaObj.p).toFixed(3);
  ava.innerHTML = lastava <= curava ? "▲ " + curava : "▼ " + curava;
  ava.style.color = lastava <= curava ? "#33cf25" : "red";
  lastava = curava;
};

//CHAINLINK
let linkusd = new WebSocket("wss://stream.binance.com:9443/ws/linkusdt@trade");
let link = document.getElementById("chainlink");
let lastlink = 0.0;

linkusd.onmessage = (event) => {
  let linkObj = JSON.parse(event.data);
  let curlink = parseFloat(linkObj.p).toFixed(3);
  link.innerHTML = lastlink <= curlink ? "▲ " + curlink : "▼ " + curlink;
  link.style.color = lastlink <= curlink ? "#33cf25" : "red";
  lastlink = curlink;
};

//COSMOS
let atomusd = new WebSocket("wss://stream.binance.com:9443/ws/atomusdt@trade");
let atom = document.getElementById("cosmos");
let lastatom = 0.0;

atomusd.onmessage = (event) => {
  let atomObj = JSON.parse(event.data);
  let curatom = parseFloat(atomObj.p).toFixed(3);
  atom.innerHTML = lastatom <= curatom ? "▲ " + curatom : "▼ " + curatom;
  atom.style.color = lastatom <= curatom ? "#33cf25" : "red";
  lastatom = curatom;
};

//FLOW
let flowusd = new WebSocket("wss://stream.binance.com:9443/ws/flowusdt@trade");
let flow = document.getElementById("flow");
let lastflow = 0.0;

flowusd.onmessage = (event) => {
  let flowObj = JSON.parse(event.data);
  console.log(flowObj);
  let curflow = parseFloat(flowObj.p).toFixed(4);
  flow.innerHTML = lastflow <= curflow ? "▲ " + curflow : "▼ " + curflow;
  flow.style.color = lastflow <= curflow ? "#33cf25" : "red";
  lastflow = curflow;
};
