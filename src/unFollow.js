
console.log("-------Iniciando Bot De automação de unfollow-------")

var counter = 0;

document.querySelectorAll('._8A5w5').forEach((item, index) => {
    
        setTimeout(() => {
            if(item.innerText == 'Following'||item.innerText == 'Seguindo' ) {
            item.click();
            document.querySelectorAll('.-Cab_').forEach((item, index) => { 
                if (item.innerText == 'unfollow'|| item.innerText == 'Deixar de seguir'){
                item.click();
                counter++;

                if(counter >= 200){
                    alert('Desative o Bot Agora, Para não Sofrer Punições')
                }
                
                console.log(`Você deixou de seguir ${counter} pessoas`);
                }             
            })
        }
        },index * 10000)

})