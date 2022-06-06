function cabecalhoScroll(){
    if(scrollY > 0){
        scrollarCabecalho.classList.add('rolagem')
    } else {
        scrollarCabecalho.classList.remove('rolagem')
        // tbm funciona: scrollarCabecalho.classList = ''
    }
}