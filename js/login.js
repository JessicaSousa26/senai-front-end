/* ==========================================================================
   NEXTECH — login.js
   jQuery: mostrar/ocultar senha, validação do formulário de login
   ========================================================================== */
$(function () {

  /* ---------- Mostrar / ocultar senha ---------- */
  $('#togglePassword').on('click', function () {
    const $senha = $('#loginSenha');
    const tipo = $senha.attr('type') === 'password' ? 'text' : 'password';
    $senha.attr('type', tipo);
    $(this).text(tipo === 'password' ? 'Mostrar' : 'Ocultar');
  });

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function mostrarErro($campo, $erro, mensagem) {
    $campo.addClass('is-invalid');
    $erro.text(mensagem).addClass('show');
  }

  function limparErro($campo, $erro) {
    $campo.removeClass('is-invalid');
    $erro.removeClass('show');
  }

  /* ---------- Validação do login ---------- */
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
    let valido = true;

    const $email = $('#loginEmail');
    const $senha = $('#loginSenha');

    if (!validarEmail($email.val().trim())) {
      mostrarErro($email, $('#erroLoginEmail'), 'Informe um e-mail válido.');
      valido = false;
    } else {
      limparErro($email, $('#erroLoginEmail'));
    }

    if ($senha.val().length < 6) {
      mostrarErro($senha, $('#erroLoginSenha'), 'A senha deve ter no mínimo 6 caracteres.');
      valido = false;
    } else {
      limparErro($senha, $('#erroLoginSenha'));
    }

    const $alerta = $('#loginAlerta');

    if (valido) {
      $alerta.removeClass('alerta-erro').addClass('show')
        .text('Login realizado com sucesso! Redirecionando...');
      $('#loginForm button[type="submit"]').prop('disabled', true);
      setTimeout(function () {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      $alerta.addClass('show alerta-erro').text('Verifique os campos destacados abaixo.');
    }
  });

});
