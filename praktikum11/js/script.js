document.querySelectorAll("a").forEach((a)=>{
    // jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
        // alert("berhasil di klik");
    })
})

function computerChoice(element){
    // pilihan User
    let pilihanUser = element.target.innerText;
    // menangap elemen pilihan komputer
    let pilihankomputer = document.querySelector("#result");
    // membuat pilhan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];
    // pilihan komputer secara random
    pilihankomputer.innerHTML = choices[Math.round(Math.random()*2)];
    // console.log(Math.random(Math.random()));
    pilihankomputer = pilihankomputer.innerHTML;

    // jika pilihan user == pilihan komputer (draw)
    if(pilihanUser == pilihankomputer){
        setTimeout(()=>alert("DRAW"), 500);
    }
    // jika pilihan komputer menang
    if(pilihankomputer == "paper" && pilihanUser == "rock"){
        setTimeout(()=>alert("Komputer Win"), 500);
    } else if(pilihankomputer == "Rock" && pilihanUser == "Scissors"){
        setTimeout(()=>alert("Komputer WINN"), 500);
    } else if(pilihankomputer == "Scissors" && pilihanUser == "Paper"){
        setTimeout(()=>alert("Komputer WINNN"),500);
    }

    // jika pilihan user menang
    if(pilihanUser == "paper" && pilihankomputer == "rock"){
        setTimeout(()=>alert("User Win"), 500);
    } else if(pilihanUser == "Rock" && pilihankomputer == "Scissors"){
        setTimeout(()=>alert("User WINN"), 500);
    } else if(pilihanUser == "Scissors" && pilihankomputer == "Paper"){
        setTimeout(()=>alert("User WINNN"), 500);
    }

}