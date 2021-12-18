$(function(){
    const myAjax=new MyAjax();
    const feldatok = [];
    myAjax.getAdat(apivegpont, feladatok, kiir); 
    const szuloElem = $(".megjelenit");
    function kiir(tomb){
        console.log(tomb)
    }
    
    

    myAjax("adatok.json", taskLista)
    let apivegpont = "http://localhost:3000/task";
    function taskLista(adatok){
        const szuloElem = $(".feladatok")
        const sablonElem = $(".feladat")
        

        feladatok.forEach(function (elem){
            let node = sablonElem.clone().appendTo(szuloElem)
      const obj = new Adatok(node, elem)
    })
    sablonElem.remove()
} 
})