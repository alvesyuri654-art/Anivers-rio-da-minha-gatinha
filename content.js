/*
  ✏️ EDITOR DE CONTEÚDO
  Este arquivo é o principal lugar para editar textos e imagens depois.
  Para trocar uma foto, coloque o arquivo dentro da pasta "images"
  e altere apenas o nome em photo: "images/nome-da-foto.jpg".
*/
const C = {
  photo: (file, label) => ({file, label}),
  sections: [
    {
      type:"hero",
      eyebrow:"",
      title:"Para o amor da minha vida...",
      subtitle:"Uma pequena história sobre nós.",
      date:"12/03/2023 → ∞",
      button:"Começar nossa história ❤️"
    },
    {
      type:"text", eyebrow:"🌙 Introdução", title:"Meu amor,",
      text:[
        "Preparei algo bem simples, mas feito com todo o meu coração, para tentar colocar em palavras o quanto eu te amo e, principalmente, o motivo pelo qual escolhi passar cada dia da minha vida ao seu lado.",
        "Para te explicar como chegamos até aqui, quero contar a nossa história.",
        "<strong>A nossa história.</strong>",
        "Aquela que começou de um jeito simples, meio desajeitado, cheia de indiretas, vergonha e, acima de tudo, sentimentos que talvez a gente ainda nem soubesse explicar."
      ],
      photo:null, photoLabel:"Foto dos dois"
    },
    {
      type:"text", eyebrow:"📚 2022 — Quando tudo começou", title:"",
      text:[
        "Lá no início, quando ainda estávamos no ensino médio, em 2022, eu, com a cabeça branca e alguns parafusos a menos, já conversava com você e trocava aquelas indiretas que deixavam bem claro que existia uma vontade de nos beijarmos.",
        "Só que, naquela época, parece que coragem era justamente o que faltava para nós dois.",
        "A gente queria...",
        "<strong>mas nenhum dos dois tinha coragem suficiente para dar o primeiro passo.</strong>"
      ],
      photo:null, photoLabel:"Foto da época / foto antiga"
    },
    {
      type:"text", eyebrow:"💋 12/03/2023 — 03:41", title:"O nosso primeiro beijo.",
      text:[
        "Até que chegou o dia <strong>12/03/2023, exatamente às 03:41 da manhã.</strong>",
        "O nosso primeiro beijo.",
        "E, para mim, aquilo foi surreal.",
        "Foi como se, naquele primeiro instante, tudo simplesmente tivesse se encaixado.",
        "Como se, por alguns segundos, o mundo tivesse parado e só existissem nós dois.",
        "E, depois daquele momento, meu desejo de te beijar novamente só aumentou."
      ],
      photo:null, photoLabel:"Foto / memória relacionada ao primeiro beijo"
    },
    {
      type:"text", eyebrow:"🌀 Os nossos enrolos", title:"",
      text:[
        "Depois disso, tivemos nossos enrolos, nossas dúvidas e aquela eterna indecisão sobre o que realmente queríamos.",
        "Até que, no dia <strong>07/09/2023</strong>, fui conhecer seu pai.",
        "E, naquela época, a gente já brincava com a sua mãe sobre ela ter que me aguentar como genro."
      ],
      photo:null, photoLabel:"Foto / momento dessa época"
    },
    {
      type:"text", eyebrow:"👨‍👩‍👧 Um passo a mais", title:"",
      text:[
        "Mesmo em meio a toda aquela incerteza sobre o que seria da nossa relação, continuamos juntos.",
        "E então chegou um dos momentos mais inesquecíveis da minha vida:",
        "<strong>quando você foi oficialmente pedida em namoro.</strong>",
        "Naquele Ano-Novo, com fogos de artifício e contagem regressiva na roda-gigante."
      ],
      photo:null, photoLabel:"Foto da roda-gigante / Ano-Novo"
    },
    {
      type:"text", eyebrow:"🎆 Aquela virada", title:"",
      text:[
        "Talvez pareça apenas uma lembrança bonita, mas para mim significa muito mais do que isso.",
        "Antes de tudo, eu precisava ter certeza de que você não seria apenas alguém passageiro na minha vida. Desde o começo, sempre deixei claro o quanto gosto de datas marcantes — até porque, agora que você me conhece melhor, sabe que eu tenho uns problemas sérios de memória, haha.",
        "Mas acho que, mesmo se eu esquecesse de todas as datas..."
      ],
      quote:"eu jamais esqueceria de você.",
      photo:null, photoLabel:"Animação / foto favorita dos dois"
    },
    {
      type:"words", eyebrow:"❤️ Depois daquela virada", title:"",
      text:[
        "Depois daquela virada de ano, cada dia ao seu lado passou a ter um significado diferente.",
        "Aos poucos, fomos construindo muito mais do que apenas um relacionamento."
      ],
      words:["paixão","companheirismo","confiança","amizade","intimidade"],
      after:"E incontáveis conversas que, às vezes, nem precisavam fazer sentido para serem especiais.",
      photo:null, photoLabel:"Sequência de fotos do casal"
    },
    {
      type:"text", eyebrow:"🥰 Eu te amo por você ser você", title:"",
      text:[
        "E eu te amo cada dia mais simplesmente pelo fato de você ser você.",
        "Aquela pessoa atenciosa, carinhosa, meiga nas horas vagas, companheira, determinada, que pensa no futuro e busca crescer na vida.",
        "Aquela que tem seu jeitinho bravinho, suas manias e suas implicâncias...",
        "<strong>mas que, acima de tudo, consegue me aturar todos os dias.</strong>",
        "E olha…",
        "Isso por si só já deveria valer um prêmio.",
        "Afinal, não é qualquer pessoa que consegue sobreviver às minhas brincadeiras, às minhas piadas sem graça e ao meu jeito insuportável todos os dias, hahaha."
      ],
      photo:null, photoLabel:"Foto dela"
    },
    {
      type:"text", eyebrow:"😂 Nós", title:"",
      text:[
        "Já passamos por momentos de muitas risadas, momentos de estresse, cansaço, preocupações e dias que pareciam difíceis demais.",
        "Mas, mesmo assim, nunca abaixamos a cabeça.",
        "Sempre encontramos um jeito de continuar.",
        "Porque..."
      ],
      emphasis:"estamos juntos nessa.",
      photo:null, photoLabel:"Montagem com várias fotos"
    },
    {
      type:"text", eyebrow:"🌱 Crescendo juntos", title:"",
      text:[
        "E hoje, olhando para tudo o que já vivemos, é bonito perceber o quanto crescemos juntos.",
        "Estamos quase nos formando, construindo nossas vidas e dando nossos primeiros passos em direção ao futuro que tanto imaginamos.",
        "E eu quero que você saiba que, mesmo que ainda existam muitos desafios pela frente, eu acredito que tudo isso vai ficar ainda melhor.",
        "Porque, enquanto eu tiver você ao meu lado...",
        "<strong>eu sei que não estarei sozinho.</strong>"
      ],
      photo:null, photoLabel:"Foto mais recente dos dois"
    },
    {
      type:"birthday", eyebrow:"💌 Depois dessa longa introdução...", title:"FELIZ ANIVERSÁRIO, MEU AMOR! ❤️",
      text:[
        "Depois dessa longa introdução e desenvolvimento textual, hehe…",
        "Quero te desejar um <strong>FELIZ ANIVERSÁRIO, MEU AMOR! ❤️</strong>",
        "Que esse novo ciclo da sua vida seja um verdadeiro recomeço.",
        "Que venha acompanhado de aprendizados, crescimento, conquistas, sonhos realizados e muitos motivos para você sorrir."
      ],
      photo:null, photoLabel:"Animação / foto dela"
    },
    {
      type:"text", eyebrow:"🤍 Sempre ao seu lado", title:"",
      text:[
        "Quero que você nunca se esqueça de que pode contar comigo para absolutamente tudo o que precisar.",
        "Nos dias bons.",
        "Nos dias ruins.",
        "Nas conquistas.",
        "Nos momentos difíceis.",
        "Nas dúvidas.",
        "E até quando você só quiser alguém para ficar ao seu lado sem dizer nada.",
        "Como eu te falei lá no início do nosso relacionamento:",
        "<strong>além de ser seu namorado, eu sou seu melhor amigo.</strong>",
        "E vou continuar sendo."
      ],
      photo:null, photoLabel:"Foto dos dois"
    },
    {
      type:"text", eyebrow:"🌎 O nosso futuro", title:"",
      text:[
        "Quero estar ao seu lado para acompanhar cada conquista, cada sonho realizado, cada fase nova e cada versão diferente de você que ainda vai existir.",
        "Obrigado por ter escolhido ficar.",
        "Obrigado por compartilhar sua vida comigo.",
        "Obrigado por ser meu porto seguro, minha companheira, minha melhor amiga e o amor da minha vida.",
        "E, principalmente...",
        "<strong>obrigado por ser exatamente quem você é.</strong>"
      ],
      photo:null, photoLabel:"Foto favorita dos dois"
    },
    {
      type:"text", eyebrow:"🍝 Uma última coisa...", title:"",
      text:[
        "Eu te amo com todas as minhas forças, com todo o meu coração...",
        "<strong>e até mais do que macarrão ao molho branco.</strong>",
        "E você sabe que isso é coisa séria.",
        "Minha sarninha. 🤍"
      ],
      photo:null, photoLabel:"Foto fofa / divertida"
    },
    {
      type:"text", eyebrow:"🎂 Feliz aniversário, meu amor", title:"",
      text:[
        "Feliz aniversário, meu amor.",
        "Que esse seja apenas mais um dos muitos aniversários que ainda vamos comemorar juntos.",
        "E que, daqui a muitos e muitos anos, quando olharmos para trás, possamos lembrar de tudo isso e pensar:"
      ],
      quote:"“Olha só aonde chegamos.”",
      photo:null, photoLabel:"Animação de passagem do tempo"
    },
    {
      type:"forever", eyebrow:"♾️ Para sempre", title:"",
      text:[
        "Eu te amo hoje,",
        "<strong>amanhã</strong>",
        "e em todos os dias que ainda teremos pela frente."
      ]
    },
    {
      type:"final", eyebrow:"❤️ Final", title:"",
      text:[
        "<strong>Com todo o amor do mundo,</strong>",
        "<strong>do seu insuportável, Yuri,</strong>",
        "<strong>seu Felps =) ❤️</strong>"
      ],
      photo:null, photoLabel:"Foto final dos dois"
    },
    {
      type:"end", title:"Fim?", text:[
        "Não.",
        "<strong>Só o primeiro capítulo de tudo que ainda vamos viver. ❤️</strong>"
      ],
      button:"Voltar ao começo ↻"
    }
  ]
};
