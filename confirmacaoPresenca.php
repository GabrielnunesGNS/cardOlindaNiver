<?php 






?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirma Presença</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js" defer></script>
    <script src="js/script2.js" defer></script>
    
</head>
<body>
    <div class="container">
        <header class="container-header">
            <img src="assets/image/cabecalhoAniversario.png" alt="cabecalho-fundo">
        </header>
        <main class="container-form">
            <form  method="POST" action="presente.php">
                <h3>Confirme sua presença</h3>
                <div>
                    <input type="text" name='nomeCompleto' id="nomeCompleto" placeholder="Nome completo" value="">
                </div>
                <div class="radio-dependente">
                    <label for="dependente">Possui dependentes ?</label>
                    <input type="radio" name="dependente"  value="sim"  >sim
                    <input type="radio" name="dependente"  value="nao" checked>Não
                </div>
                <div>
                    <input type="text" placeholder="Dependente 1"  id="nome-dep-1" disabled>
                </div>
                <div>
                    <input type="text" placeholder="Dependente 2"  id="nome-dep-2" disabled>
                </div>
                
                <div class="presente-box">
                    <h3>Gostaria de deixa um presente para a <span>Olinda</span>?</h3>
                    <button type="submit" class="btn-color btn-confirm" id="btn-presente" >Deixar presente </button>
                </div>
            </form>
            <button class="btn-color btn-enviar" id="btn-enviar">Enviar confirmação</button>
        </main>
    </div>
</body>
</html>