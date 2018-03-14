// JavaScript Document
var numCorrect;
$(document).ready(function(){
  "use strict";
  
var questions = [{
    question: "<b>A boneca Guilhermina</b> <br> Esta é a minha boneca Guilhermina. Ela é uma boneca muito bonita, que faz xixi e cocô. Ela é muito boazinha também. Faz tudo o que eu mando. Na hora de dormir, reclama um pouco. Mas depois que pega no sono, dorme a noite inteira! Ás vezes ela acorda no meio da noite e diz que está com sede. Daí eu dou água para ela, daí ela faz xixi eu troco a fralda dela. Então eu ponho a Guilhermina dentro do armário, de castigo. Mas quando ela chora, eu não aguento. Eu vou até lá e pego a minha boneca no colo. A Guilhermina é a boneca mais bonita da rua. <br> No trecho, \"Mas quando ela chora, eu não aguento\", a expressão sublinhada significa, em relação à dona da boneca sentimento de:",
    choices: ['Paciência', 'Pena', 'Raiva', 'Solidão', 'Tristeza'],
    correctAnswer: 1
  }, {
    question: "<b>O menino que mentia</b> <br> Um pastor costumava a levar seu rebanho para fora da aldeia. Um dia resolveu pregar uma peça nos vizinhos. <br>- Um lobo! Um lobo! Socorro! Ele vai comer minhas ovelhas! Os vizinhos largaram o trabalho e saíram correndo para o campo para socorrer o menino. Mas encontraram-no ás gargalhadas. Não havia lobo nenhum. Ainda outra vez a mesma brincadeira e todos vieram ajudar: e ele caçoou de todos. Mas um dia o lobo apareceu de fato e começou a atacar as ovelhas. Morrendo de medo, o menino saiu correndo. <br> - Um lobo! Um lobo! Socorro! <br> Os vizinhos ouviram, mas acharam que era caçoada. Ninguém socorreu e o pastor perdeu todo o rebanho. Ninguém acredita quando o mentiroso fala a verdade. <br> No final da História, pode–se entender que:",
    choices: ["As ovelhas fugiram do pastor. ", "Os vizinhos assustaram o rebanho", "O lobo comeu todo o rebanho", "O jovem pastor pediu socorro.", "O menino é um mentiroso."],
    correctAnswer: 2
  }, {
    question: "<b>A boneca Guilhermina</b> <br> Esta é a minha boneca Guilhermina. Ela é uma boneca muito bonita, que faz xixi e cocô. Ela é muito boazinha também. Faz tudo o que eu mando. Na hora de dormir, reclama um pouco. Mas depois que pega no sono, dorme a noite inteira! Ás vezes ela acorda no meio da noite e diz que está com sede. Daí eu dou água para ela, daí ela faz xixi eu troco a fralda dela. Então eu ponho a Guilhermina dentro do armário, de castigo. Mas quando ela chora, eu não aguento. Eu vou até lá e pego a minha boneca no colo. A Guilhermina é a boneca mais bonita da rua. <br> O trecho “A Guilhermina é a boneca mais bonita da rua” expressa:",
    choices: ['Um fato acontecido com a dona da boneca.', 'Um desejo de dona Guilhermina ', 'Uma opinião da dona da boneca', 'Um comentário da boneca.', 'Não sei'],
    correctAnswer: 2
  }, {
    question: "No trecho,<u>“ Mas quando ela chora, eu não aguento”</u>, a expressão sublinhada significa, em relação à dona da boneca sentimento de:",
    choices: ['Paciencia', 'Solidão', 'Pena', 'Tristeza', 'Raiva'],
    correctAnswer: 2
  }, {
    question: "<b>A fada Sofia</b> <br> Sofia é uma fada. <br> Ela faz muitas mágicas legais!<br> Fabiana vê a fada e pede: <br> - Você pode fazer a mágica do facão, Sofia <br> A fada bate a varinha no facão e ele some <br> O facão virou uma fumaça perfumada. <br> <i>Graça Boquet</i> <br> No texto acima quem é Sofia?",
    choices: ["Fumaça", "Mágica", "Varinha", "Fada"],
    correctAnswer: 3
  }, {
    question: "Sabemos como a água é importante para nossas vidas, pois está presente em nosso cotidiano. A vida no planeta só existe por causa dela! Embora tenhamos uma parte considerável do planeta coberta por água, enfrentamos atualmente a necessidade de encontrar formas de preservar, economizar esse bem tão precioso. A água no estado líquido ocupa o planeta em formas variadas, sendo que nem todas são próprias ao consumo. <br> De acordo com o texto desembaralhe as letras e marque a alternativa correta. <br> <b>Neplata – daliqui – seram – osir </b><br>",
    choices: ["Seram – rios – Liquido – agua ", "Neplata – seram – osir – rios", "Agua – mares – rios – daliqui", "Planeta – mares – rios – liquido ", "Daliqui – seram – osir – mares"],
    correctAnswer: 3
  }, {
    question: "<b>Criogenia?</b> <br> Viver para sempre é algo que parece encantar muitas pessoas embora nem todas desejem isso. Poder presenciar o futuro distante aqueça a curiosidade e causa esse desejo. A ideia é tão forte, que durante dois séculos inteiros cientistas e pesquisadores conseguiram desenvolver e teoria criônica, na qual o congelamento pode tornar possível, de certa forma uma sobrevivência humana mais longa. Muitas confundem com criogenia, que estuda o congelamento de materiais. A criônica preserva corpos humanos recém – falecidas para reanima-las no futuro, A intenção de quem opta pela crônica é que no futuro haja uma solução para cura-lo do estado que causou sua morte. Há diferentes laboratórios que praticam criônica no mundo e estão regulamentados pelos governos. A teoria é bem plausível, mas ainda não se pode negar que o assunto seja bem interessante, cabe a cada um decidir se acreditar ser realmente algo possível ou não. <br> Segundo o texto a única informação INCORRETA sobre o texto é: </br>",
    choices: ["Durante dois séculos inteiros, cientistas e pesquisadores buscaram formas de prolongar a vida.", "Presenciar um futuro distante é algo que aguça a curiosidade das pessoas.", "A intenção de quem opta pela criogenia é que no futuro haja algo que possa reanimar seu corpo, solucionando o que provoca a morte.", "Há laboratórios de criônica espalhados pelo mundo.", "A criônica preserva corpos humanos recém – falecidos."],
    correctAnswer: 2
  }, {
    question: "Uma ação pode ocorrer no passado, no presente ou no futuro. Os tempos verbais indicam o momento em que ocorre essa ação. <br> Observe os verbos abaixo, assinale a alternativa CORRETA em que o tempo verbal estão: </br>",
    choices: ["Passado, Presente e Futuro", "Presente, Presente e Passado", "Futuro, Presente e Presente", "Passado, Futuro e Passado", "Passado, Passado e Futuro"],
    correctAnswer: 1
  }, {
    question: "Leia o texto abaixo, e a seguir marque a alternativa correta. <br> O mestre, conduz seu aprendiz pela floresta. Embora mais velho, caminha com igualdade, enquanto seu aprendiz escorrega e cai a todo instante.O aprendiz blasfema, levanta-se e cospe no chão traiçoeiro e continua a acompanhar seu mestre.Depois de longa caminhada, chegaram a um lugar sagrado. Sem parar, o mestre dá meia volta e começa a viagem de volta.Você não me ensinou nada hoje- diz o aprendiz, levando mais um tombo. <br> Ensinei sim, mas você parece que não aprende – respondeu o mestre – estou tentando te ensinar como se lida com os erros da vida. <br> -E como lidar com eles? <br> Como deveria lidar com seus tombos- respondeu o mestre- Em vez de ficar amaldiçoando o lugar onde caiu, devia procurar aquilo que o fez escorregar. <br> De acordo com o texto é CORRETO afirmar que: <br>",
    choices: ['Ao cometermos erros, o certo é amaldiçoar, blasfemar, pois não devemos aprender com os erros.', 'O aprendiz é uma pessoa paciente, compreensiva e aprende sempre com os erros', 'Ao chegar no local sagrado a reação do mestre foi ficar e ensinar o aprendiz', 'Segundo o mestre os erros servem para aprenderemos a lidar com eles'],
    correctAnswer: 3
  }, {
    question: "Pronomes de tratamento são as formas educadas, de acordo com a idade ou corpo ocupados, usadas para se dirigir ás pessoas com quem se fala (2°pessoa). <br> De acordo com o texto, complete a frase com o pronome de tratamento adequado, a seguir marque a opção correta. <br> O empregado pergunta a princesa: <br> -_______________ quer sair que horas?",
    choices: ['Vossa Santidade', "Vossa Excelência", 'Vossa Alteza', 'Sua', 'Você'],
    correctAnswer: 2
  }, {
    question: "Um grande empresário na necessidade de ir a São Paulo, chegou a seu guarda noturno e ordenou que ele o acordasse às 6 horas da manhã em ponto. Exatamente às 6:00 da manhã o guarda acordou o empresário e disse: <br> - Patrão, estou com um mal pressentimento: sonhei esta noite que o senhor teria um acidente com o avião e me permita sugerir que não viaje. <br> O empresário não deu ouvidos ao guarda. Sem incidentes, chegou a São Paulo e portelefone mandou demitir o guarda. Por que? Os guardas noturnos não devem dormir em serviço. <br> Marque a alternativa correta.",
    choices: ["O celular não despertou as 06:00 horas", "Dormiu durante o serviço", "O guarda-noturno foi rendido", "Chovia muito na rodovia de São Paulo"],
    correctAnswer: 1
  }, {
    question: "Leia a fábula e responda. <br><b>A minhoca e a Serpente </b><br> Uma minhoca viu uma enorme serpente e sentiu inveja de seu tamanho. Querendo se igualar à cobra a minhoca começou a se esticar. Esticou-se tanto que se sufocou e morreu. <br> Qual a moral que a fábula nos diz?",
    choices: ["Quem espera sempre alcança", "Nunca seja aquilo que você não é", "Quem avisa amigo é", "Quem arrisca não petisca"],
    correctAnswer: 1
  }, {
    question: "De acordo os contos que temos, assinale a alternativa que se refere a substantivo próprio. ",
    choices: ["O patinho feio", "João e Maria", "A galinha ruiva", "O gato de Botas", "Pinóquio"],
    correctAnswer: 1
  }, {
    question: "Sabe-se que artigo, são palavras que acompanham substantivos e tem a função básica de especificar algo ou generalizar. <br> De acordo com o sentido dos artigos, qual é a alternativa correta.",
    choices: ["O ator participará do filme", "Um ator participará do filme.", "Participará do filme o ator.", "Participará do filme um ator", "Todas as alternativas são incorretas."],
    correctAnswer: 1
  }, {
    question: "A cigarra passou todo o verão cantando, enquanto a formiga juntava seus grãos. Quando chegou o inverno, a cigarra veio à casa da formiga para que lhe desse o que comer. A formiga então perguntou a ela:<br>- E o que fez durante todo o verão? <br>- Durante o verão, eu cantei, disse a cigarra.<br> E a formiga respondeu:<br>- Muito bem pois agora dance! <br>Com base no texto a questão correta, porque a formiga trabalha sem parar?",
    choices: ["Para fazer uma festa com a cigarra", "Para o aniversário da cigarra", "Para quando o inverno chegar", "Para aprender a cozinhar para as amigas", "Para quando chegar o verão"],
    correctAnswer: 2
  }, {
    question: "<b>O cão e o Osso</b> <br> Um dia um cão ia atravessando uma ponte carregando um osso na boca. Olhando para baixo viu sua própria imagem refletida na água. Pensando ver outro cão, cariçou –lhe logo o osso e pós – se a latir. Porém ele abriu a boca e seu osso caiu na agua e se perdeu para sempre. Responda à pergunta a seguir: <br> O que aconteceu com o osso?",
    choices: ["O osso caiu no buraco", "O osso caiu da Ponte", "O osso caiu na água", "O osso caiu no fogo"],
    correctAnswer: 2
  }, {
    question: "<b>Vende-se uma bicicleta azul, novinha.</b> <br>Dezoito (18) marchas, aro vinte e seis (26) e Retrovisor. Aceito Troca!<br>Última semana que colocarei para venda, depois darei para minha irmã. Interessados <b>ligar para</b>: (61)98599-0059 Aproveitem.<br> Com base no texto acima, a expressão <b>ligar para</b> significa: ",
    choices: ["Contar uma história", "Preparar um convite", "Fazer um anúncio", "Vender um produto"],
    correctAnswer: 3
  }, {
    question: "<b>Vende-se</b> <br>Vende-se uma casa encantada no topo da mais alta montanha. Tem dois salões onde você poderá oferecer banquetes para os duendes e anões que moram na floresta ao lado. Tem jardineira nas janelas, onde convêm plantar margaridas. Tem quartos de todas as cores que aumentam ou diminuem de acordo com o seu tamanho e na garagem há vagas para todos os seus sonhos.<br>Observe as palavras abaixo e identifique onde esta os encontros vocálicos. <ol><li>Vende-se, encantada, topo.</li> <li>Casa, lado, garagem.</li> <li>Dois mais, quartos.</li> <li>Vagas, tamanho, oferecer.</li> <li>Anões, salões, banquetes.</li></ol> <br>Qual alternativa está correta?",
    choices: ["Todas as alternativas", "A - B- D", "C - E", "C – E – A", "D – E"],
    correctAnswer: 2
  }, {
    question: "<b>Ingredientes</b><br>4 Ovos<br>2 ½ xícaras de açúcar<br>1 tablete de manteiga<br>1 xícara de leite<br>1 xícara de chocolate em pó<br>2 ½ xícaras de farinha de trigo<br>2 colheres de chá de fermento em pó<br><b>Modo de Preparo</b><br>Pré-aqueça o forno em temperatura média, separe as claras das gemas do ovo e bata as clara e neve. Depois, bata o açúcar, a manteiga e as gemas muito bem na batedeira. Acrescente o leite, o chocolate, a farinha e o fermento aos poucos. Bata de novo na batedeira e depois misture as claras em neve delicadamente. Unte com manteiga e polvilhe com farinha uma forma e leve ao forno por aproximadamente 30 minutos. <br>Leia a receita e siga as pistas para descobrir o nome do que é a receita. <ol><li>Tem 4 sílabas</li> <li>Não tem acento</li> <li>Começa com uma consoante</li> <li>Tem duas letras C</li> <li>Termina com uma vogal</li></ol><br>Qual alternativa abaixo está certa?",
    choices: ["Neve", "Bolo de chocolate", "Biscoito de polvilho", "Bolo de Milho", "Chocolate"],
    correctAnswer: 1
  }, {
    question: "O caso do espelho<br>Era um homem que não sabia quase nada. Morava longe, numa casinha de sapé, esquecida nos cafundós da mata. <br>Um dia, precisando ir á cidade, passou em frente a uma loja e viu um espelho pendurado do lado de fora. O homem abriu a boca, apertou os olhos, depois gritou, com o espelho nas mãos:<br>– Mas o que é que o retrato do meu pai está fazendo aqui?<br>– Isso é um espelho! – explicou o dono da loja<br>– Não sei se é espelho ou se não é, só que é o retrato do meu pai. – Os olhos do homem ficaram molhados.<br>– O senhor…conheceu meu pai? –perguntou ele ao comerciante<br>O dono da loja sorriu, aquilo era só um espelho comum, desses de vidro e moldura de madeira.<br>– É?! Não!- respondeu o outro<br>– Isso é o retrato do meu pai, é ele sim! Olha a testa, e o cabelo? É o nariz? E aquele sorriso meio sem jeito?<br>O homem quis saber o preço, o comerciante sacudiu os ombros e vendeu o espelho, baratinho.<br>Naquele dia, o homem que não sabia quase nada entrou em casa todo contente, guardou cuidadoso, o espelho embrulhado na gaveta da penteadeira. A mulher ficou só olhando no outro dia, esperou o marido sair para trabalhar  e correu para o quarto abrindo a gaveta da penteadeira, desembrulhou o espelho, olhou e deu um  passo atrás, fez um sinal da cruz tapando a boca com as mãos, em seguida, guardou o espelho na gaveta e saiu chorando.<br>– Há meu Deus! – gritava ela desnorteada<br>– É o retrato de outra mulher! Meu marido não gosta mais de mim! A outra é linda de mais! Que olhos bonitos! Que cabeleira solta! Que pele macia! A diaba é mil vezes mais bonita e mais moça do que eu!<br>Quando o homem voltou, no fim do dia, achou a casa toda desarrumada, a mulher, chorando sentada no chão, não tinha feito nem a comida.<br>– O que foi isso, mulher?<br>– Há seu traidor de uma figa! Quem é aquela jararaca lá no retrato?<br>– Que retrato? – Perguntou o marido, surpreso.<br>– Aquele que você escondeu na gaveta da penteadeira!<br>O homem não estava entendendo nada.<br>– Mais aquilo é o retrato do meu pai!<br>Indignada, a mulher colocou as mãos no peito:<br>– Cachorro sem-vergonha, miserável! Pensa que eu não sei a diferença entre um velho lazarento e uma jabiraca safada e horrorosa?<br>A discussão fervia feita água na chaleira:<br>– Velho insuportável coisa nenhuma! – gritou o homem ofendido.<br>A mãe da moça morava perto, escutou a gritaria e veio ver o que  estava acontecendo, encontrou a filha chorando feita criança que se perdeu e não consegue mais voltar pra casa.<br>– O que e isso, menina?<br>– Aquele cafajeste arranjou  outra!<br>Ela ficou maluca, berrou o homem, de cara amarrada:<br>– Ontem  eu vi ele escondendo um pacote na gaveta, lá no quarto, mãe! Hoje, depois que ele saiu, fui ver o que era, ta La! É o retrato de outra mulher!<br>A boa senhora resolveu, ela mesma, verificar o tal retrato, entrando no quarto, abriu a gaveta, desembrulhou o pacote e espiou, arregalou os olhos, olhou de novo, soltou uma sonora gargalhada.<br>– Só se for o retrato da bisavó dele! A tal fulana é a coisa mais enrugada, feia, velha, cacarenta, murcha, arruinada, desengonçada, capenga, careca, caduca – completou, feliz, abraçando a filha:<br>– Fica tranqüila, a bruaca do retrato já esta com os dois pés na cova.<br>Buscando solucionar o problema, sobre o que fala o texto?",
    choices: ["Espelho", "Retrato", "Traição", "Mulher e o Pai", "Morar longe"],
    correctAnswer: 0
  }
];

for (let i = questions.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [questions[i], questions[j]] = [questions[j], questions[i]]; //random questions
}
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('.content'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      $('#warning').text('Por favor, marque uma alternativa!');
    } else {
      questionCounter++;
      displayNext();
	  $('#warning').text('');
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  $(document).ready( function(){

				$('#btn_sair').click(function(){
					window.location.href = '/logout';
				});
				
				$('#btn_menu').click(function(){
					window.location.href = '/menu';
				});
				
				$('#submitScore').click(function(numCorrect) {
					sendScore(numCorrect);
				});

		});
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('><h2><center>Questão ' + (index + 1) + ':</h2></center>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
	// this is new
	var warningText = $('<p id="warning">');
	qElement.append(warningText);
	
	return qElement;

  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
       }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
        $('#submitScore').show();
      }
    });
  }
  
  function sendScore(numCorrect){
    var number = JSON.parse(numCorrect);
    var numberConvert = JSON.stringify(number);
    
        $.ajax({
            type: "POST",
            url: "/pontos",
            data: { number: numCorrect },
            success: function(data) {
                //show content
                console.log('Success!' + data);
            },
            error: function(jqXHR, textStatus, err) {
                //show error message
                console.log('text status '+textStatus+', err '+err);
            }
        });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<h3>', {id: 'question', name: 'question'});
    var numCorrect = 0;
    
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
  	// Calculate score and display relevant message
  	var percentage = numCorrect / questions.length;
    	if (percentage >= 0.9){
    	    sendScore(numCorrect);
        	score.append('Incrivel! Voce acertou ' + numCorrect + ' de ' +
                     questions.length + ' questões!');
    	} else if (percentage >= 0.7){
    	    sendScore(numCorrect);
        	score.append('Bom trabalho! Voce acertou ' + numCorrect + ' de ' +
                     questions.length + '!');
                     
    	}	else if (percentage >= 0.5){
    	    sendScore(numCorrect);
        	score.append('Voce acertou ' + numCorrect + ' de ' +
                     questions.length + '.');
    	}	else {
    	    sendScore(numCorrect);
        	score.append('Voce apenas acertou ' + numCorrect + ' de ' +
                     questions.length + '. Vamos tentar de novo?');
    	}
      return score;
  }
});