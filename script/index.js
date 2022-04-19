$.support.cors = true;
$(document).ready(
    function(){
        $('#conteudo').load("pages/pagina01.html"); 
    }
)
$('#btPagina1').click(
    function() {
        $('#conteudo').load("pages/pagina01.html");
        //alert("Bem vindo a página 01");
        console.log("clique do botão 1"); 
    }
)
$('#btPagina2').click(
    function() {
        $('#conteudo').load("pages/pagina02.html");
        //alert("Bem vindo a página 02");
        console.log("clique do botão 2");
    }
)