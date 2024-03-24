$(document).ready(function() {
    
    $('#cpf').mask('000-000-000-00');
    $('#fone').mask('(00) 0 0000-0000');
    $('#cep').mask('00000-000');

    $('#cep').on('blur', function() {
        var cep = $(this).val().replace(/\D/g, '');
        if (cep.length != 8) {
            return;
        }
        $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function(data) {
            if (!("erro" in data)) {
                $('#logradouro').val(data.logradouro);
                $('#bairro').val(data.bairro);
                $('#cidade').val(data.localidade);
                $('#uf').val(data.uf);
            } else {
                alert('CEP não encontrado');
            }
        });
    });
    $('form').submit(function(event){
        event.preventDefault();

        alert('Cadastrado!');
    });
});
