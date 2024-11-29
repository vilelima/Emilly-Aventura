const avanca = document.queryselectoraA('.btn-proximo');

avanca.forEach(button =>{
    button.addEvertlistener('click', function(){
        const atual= document.queryselector('.ativo');
        const proximoPasso = 'passo-' + this.geatAttribute('data-proximo');

        atual.classList.remove('ativo')
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

  