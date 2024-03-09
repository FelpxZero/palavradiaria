// Array com versículos bíblicos em formato de texto
const versiculos = [
    "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. (João 3:16)",
    "O Senhor é o meu pastor, nada me faltará. (Salmos 23:1)",
    "O amor seja não fingido. Aborrecei o mal e apegai-vos ao bem. (Romanos 12:9)",
    "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos. (Mateus 28:19-20)",
    "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas. (Mateus 6:33)",
    "E a paz de Deus, que excede todo o entendimento, guardará os seus corações e as suas mentes em Cristo Jesus. (Filipenses 4:7)",
    "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. (Jeremias 29:11)",
    "Respondeu Jesus: 'Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.' (João 14:6)",
    "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo. (João 16:33)",
    "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz. (Números 6:24-26)",
    "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa. (Isaías 41:10)"
    // Adicione mais versículos conforme necessário
];
// Função para escolher um versículo aleatoriamente e exibi-lo no div
function exibirVersiculoAutomatico() {
    const divVersiculo = document.getElementById("versiculo");
    const numeroAleatorio = Math.floor(Math.random() * versiculos.length);
    const versiculoSelecionado = versiculos[numeroAleatorio];
    divVersiculo.textContent = versiculoSelecionado;
}

// Chamar a função inicialmente
exibirVersiculoAutomatico();

// Atualizar automaticamente o versículo a cada 24 horas (86400000 milissegundos)
setInterval(exibirVersiculoAutomatico, 86400000);
