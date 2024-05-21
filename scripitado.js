
function tabuada(){
    let nu = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(nu.value.length == 0){
        alert('[ERRO] digite um número')
    }else{
        let n = Number(nu.value)
        let c = 1
        tab.innerHTML = ''
        for(c=1; c<=100; c++ ){
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }


}