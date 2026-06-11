// análise booleana
let status = true
let acao = prompt("Indique uma ação 0 ou 1")

if(acao!=="" && acao<=1 && acao>=0) {
    
    let confirmar =confirm("Deseja alterar o sistema?");
    
    if(confirmar){
        
        if(acao==0){
            status=false
        console.log(`O SISTEMA ESTÁ DESATIVADO
                O STATUS É ${status}`)
        } else {
            console.log(`O SISTEMA ESTÁ ATIVADO
            O STATUS É ${status}`) 
            console.log(`Você confirmou a alteração ${acao}`)
        }


    } else { 
        alert("Você cancelou a alteração")



    }
    


    console.log(`Você informou ${acao}`)

} else {
    alert("Você não informou o código ")
}