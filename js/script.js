/* ==========================================================================
   NEXTECH — script.js
   jQuery: menu mobile, carrinho, lightbox da galeria, validação do contato
   ========================================================================== */
$(function () {

  /* ---------- Menu mobile ---------- */
  $('.nav-mobile-toggle').on('click', function () {
    $('.nav-desktop').toggleClass('open');
  });

  $('.nav-desktop a').on('click', function () {
    $('.nav-desktop').removeClass('open');
  });

  /* ---------- Destaque do link ativo conforme a seção visível ---------- */
  const $sections = $('section[id]');
  const $navLinks = $('.nav-desktop a');

  $(window).on('scroll', function () {
    let atual = '';
    $sections.each(function () {
      const topo = $(this).offset().top - 120;
      if ($(window).scrollTop() >= topo) {
        atual = $(this).attr('id');
      }
    });
    $navLinks.removeClass('active');
    $navLinks.filter('[href="#' + atual + '"]').addClass('active');
  });

  /* ---------- Toast de mensagens ---------- */
  function mostrarToast(mensagem) {
    const $toast = $('#nxToast');
    $toast.text(mensagem).addClass('show');
    clearTimeout($toast.data('timeout'));
    const t = setTimeout(function () { $toast.removeClass('show'); }, 2600);
    $toast.data('timeout', t);
  }

  /* ---------- Carrinho ---------- */
  let carrinho = 0;
  $('.btn-comprar').on('click', function () {
    carrinho++;
    const nome = $(this).closest('.prod-card, .novidades-slide').find('h3').first().text();
    $('.cart-count').text(carrinho).addClass('show');
    mostrarToast(nome + ' adicionado ao carrinho!');
  });

  /* ---------- Galeria (lightbox via modal Bootstrap) ---------- */
  $('.gal-item').on('click', function () {
    const src = $(this).find('img').attr('src');
    const legenda = $(this).find('img').attr('alt');
    $('#galeriaModalImg').attr('src', src).attr('alt', legenda);
    $('#galeriaModalLabel').text(legenda);
  });

  /* ---------- Validação do formulário de contato ---------- */
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

  $('#contatoForm').on('submit', function (e) {
    e.preventDefault();
    let valido = true;

    const $nome = $('#contatoNome');
    const $email = $('#contatoEmail');
    const $telefone = $('#contatoTelefone');
    const $mensagem = $('#contatoMensagem');

    if ($nome.val().trim().length < 3) {
      mostrarErro($nome, $('#erroNome'), 'Informe seu nome completo.');
      valido = false;
    } else {
      limparErro($nome, $('#erroNome'));
    }

    if (!validarEmail($email.val().trim())) {
      mostrarErro($email, $('#erroEmail'), 'Informe um e-mail válido.');
      valido = false;
    } else {
      limparErro($email, $('#erroEmail'));
    }

    if ($telefone.val().trim().length < 8) {
      mostrarErro($telefone, $('#erroTelefone'), 'Informe um telefone válido.');
      valido = false;
    } else {
      limparErro($telefone, $('#erroTelefone'));
    }

    if ($mensagem.val().trim().length < 5) {
      mostrarErro($mensagem, $('#erroMensagem'), 'Escreva uma mensagem.');
      valido = false;
    } else {
      limparErro($mensagem, $('#erroMensagem'));
    }

    if (valido) {
      $('#contatoAlerta').addClass('show').text('Mensagem enviada com sucesso! Em breve retornaremos o contato.');
      this.reset();
      setTimeout(function () { $('#contatoAlerta').removeClass('show'); }, 4000);
    } else {
      $('#contatoAlerta').removeClass('show');
    }
  });

  /* ---------- Newsletter (se existir na página) ---------- */
  $('#newsletterForm').on('submit', function (e) {
    e.preventDefault();
    mostrarToast('Inscrição confirmada! Você vai receber nossas ofertas.');
    this.reset();
  });

});
