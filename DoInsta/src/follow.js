console.log("-------Iniciando Bot De automação de follow-------")


var counter = 0;
let array = document.querySelectorAll('.L3NKy');
array.forEach((value, index) => {
    setTimeout(()=>{
        if(!value.classList.contains('_8A5w5')){
            value.click();
            counter++;
            console.log(`Você já seguiu ${counter} pessoas`);
            
            if(counter >= 200){
                alert('Desative o Bot Agora, Para não Sofrer Punições')
            }

        } else {
            console.log('você já esta seguindo este usuário.');
                }
    }, index * 10000 )
});
