

function top1() {
    let a = +prompt("Teng tomonli uchburchakning tomonini kiriting:");
    let b = 3 * a;
    let c = (Math.sqrt(3) / 4) * (a * a);
    alert(`Uchburchakning perimetri: ${b}Uchburchakning yuzasi: ${c}`);
}





function top2(){

    let a = +prompt("Butun musbat sonni kiriting:");
    let b = 0;
    
    while (a > 0) {
        b = b * 10 + (a % 10);
        a = Math.floor(a / 10);
    }
    
    alert(`Teskari son: ${b}`);
}



function top3(){

    let a = +prompt("Natural sonni kiriting:");
    let b = 0;
    let i = 0;
    
    while (a > 0) {

        b += a % 10;
        a = Math.floor(a / 10);
        i++;

    }
    
    alert(`Raqamlar soni ${i} Raqamlar yig'indisi: ${b}`);
}




function top4(){

    let A = +prompt("A ni kiriting");
    let B = +prompt("B ni kiriting");
    let C = +prompt("C ni kiriting");
    let D = B * B - 4 * A * C;
    
    let j = D > 0 ? 2 : D === 0 ? 1 : 0;
    
    alert(`Kvadrat tenglamaning ildizlari soni: ${j}`);
    
}




function top5(){

    let a = +prompt("Sonni kiriting:");
    alert(`Son ${a} ${a % 2 === 0 ? "juft" : "toq"}`);
}





function top6() {
    let a = +prompt("Son K ni kiriting:");
    let b = +prompt("Son N ni kiriting:");
    let c = a; 

    while (a > 1 && a % b === 0) {
        a /= b;
    }

    alert(`${c} soni ${b} ning darajasi: ${a === 1}`);
}







function top7(){

    let h = +prompt("Soatni kiriting:");
    let m = +prompt("Minutni kiriting:");
    let s = +prompt("Sekundni kiriting:");
    let t = +prompt("Oshiriladigan sekundlar sonini kiriting:");
    
    let totalSeconds = h * 3600 + m * 60 + s + t;
    let a = Math.floor(totalSeconds / 3600) % 24;
    let b = Math.floor((totalSeconds % 3600) / 60);
    let c = totalSeconds % 60;
    
    alert(`Yangi vaqt: ${a} soat ${b} minut ${c} sekund`);
    
}

