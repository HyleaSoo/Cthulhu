// +---------------------------------------------------------------------------------------+
// | Hylea Soo's from past to present 在りし日のふたり Void Chaos False Philosophy code.     |
// +---------------------------------------------------------------------------------------+
// | Elysium, in the Blue Sky. ファンタジーアドベンチャー。 ぼくらは同じ空を見上げている。        |
// +---------------------------------------------------------------------------------------+
// | Hermaeus Mora's Oghma Infinium. _wabbajack Zeno Human Requests.                 2019  |
// +---------------------------------------------------------------------------------------+
// |                                                             —————— 龍が如く Hylea Soo  |
// +---------------------------------------------------------------------------------------+
//const _Simulator = "63067#1.2.3.";

const ERCode = ((b = 16) => {
    const f = b>10 ? b-10 : 0;
    const rc = _ => String.fromCharCode(96 + f + Math.ceil(Math.random() * (26 - f)));
    const TCode = s => [...s].map((x, y) => (y>0 && rc() || '') + x.charCodeAt().toString(b)).join('');
    const FCode = s => [...s].map((x, y) => (x.charCodeAt() > 96 + f) ? ' ' : s[y]).join('').split(' ').map(e => String.fromCharCode(parseInt(e, b))).join('');
    const SCode = s => [...s].map((x, y) => (x.charCodeAt() > 96 + f) ? ' ' : s[y]);
    const SFCode = s => SCode(s).join('').split(' ').map(e => String.fromCharCode(parseInt(e, b))).join('');

    return {rc, TCode, FCode, SCode, SFCode};
})();

const TCode16 = s => [...s].map((e, i) => (i>0 && ' ' || '') + e.charCodeAt().toString(16)).join('');
const FCode16 = s => s.split(' ').map(e => String.fromCharCode(parseInt(e, 16))).join('');


function toCode(str){
    var result = [];
    var list = str.split("");
    for(var i=0;i<list.length;i++){
        if(i != 0){
            result.push(" ");
        }
        var item = list[i];
        var binaryStr = item.charCodeAt().toString(2);
        result.push(binaryStr);
    }
    return result.join("");
}

function fromCode(str){
    var result = [];
    var list = str.split(" ");
    for(var i=0;i<list.length;i++){
         var item = list[i];
         var asciiCode = parseInt(item,2);
         var charValue = String.fromCharCode(asciiCode);
         result.push(charValue);
    }
    return result.join("");
}




