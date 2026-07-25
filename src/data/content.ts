import { ModuleItem, BonusItem, Testimonial, FaqItem, AudioSample } from '../types';

export const HERO_DATA = {
  title: "Método Bebê Zen",
  subtitle: "Uma rotina de massagens e relaxamento para ajudar seu bebê a ficar mais tranquilo e criar momentos de conexão entre vocês.",
  ctaText: "Quero conhecer o Método Bebê Zen",
  targetAge: "Para bebês de 0 a 6 meses",
  ratingsCount: "Mais de 2.800 pais e mães com noites mais tranquilas",
  heroImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1200&auto=format&fit=crop", // Warm image of mother holding newborn
  heroImageAlt: "Mãe segurando e acariciando seu bebê recém-nascido com amor e tranquilidade",
  trustBadges: [
    { label: "100% Digital", icon: "video" },
    { label: "Acesso Imediato", icon: "zap" },
    { label: "Garantia de 7 dias", icon: "shield-check" }
  ]
};

export const PROBLEM_DATA = {
  badge: "Entendemos o que você está passando",
  title: "Os primeiros meses nem sempre são como nos comerciais...",
  quote: "Os primeiros meses podem ser desafiadores, mas pequenos momentos de cuidado podem transformar a rotina da família.",
  painPoints: [
    {
      title: "Dificuldade para relaxar antes de dormir",
      description: "Seu bebê parece exausto no fim do dia, mas luta contra o sono, chora e acorda assustado assim que é colocado no berço.",
      icon: "moon"
    },
    {
      title: "Noites cansativas e exaustão",
      description: "A falta de sono contínuo desgasta a energia dos pais, deixando a rotina pesada e gerando ansiedade ao cair da tarde.",
      icon: "battery-charging"
    },
    {
      title: "Choro e desconfortos comuns",
      description: "Agitação, estufamento na barriguinha e gases que causam incômodo frequente e dores nos pequenos.",
      icon: "heart-pulse"
    },
    {
      title: "Insegurança nos primeiros meses",
      description: "A sensação de 'não saber o que fazer' para acalmar o bebê e a dúvida se você está fazendo o suficiente para dar conforto a ele.",
      icon: "help-circle"
    }
  ]
};

export const SOLUTION_DATA = {
  badge: "O Caminho da Tranquilidade",
  title: "O que é o Método Bebê Zen?",
  mainExplanation: "O Método Bebê Zen ensina uma sequência simples de massagens, técnicas de relaxamento e uma rotina tranquila para ajudar o bebê a se preparar para o sono.",
  secondaryText: "Desenvolvido com foco no toque consciente e na linguagem corporal do recém-nascido, você aprenderá rituais diários curtos (de 5 a 15 minutos) que desaceleram o sistema nervoso do bebê de forma 100% natural.",
  benefits: [
    {
      title: "Criação de uma rotina de relaxamento",
      description: "Sinais visuais e táteis claros que preparam o cérebro do bebê para entender que a hora do descanso chegou.",
      icon: "sparkles"
    },
    {
      title: "Fortalece o vínculo entre pais e bebê",
      description: "O toque suave libera oxitocina tanto no bebê quanto em quem aplica, gerando uma conexão afetuosa inesquecível.",
      icon: "heart"
    },
    {
      title: "Alivia desconfortos como gases e incômodos",
      description: "Movimentos fisiológicos testados que estimulam o trânsito intestinal e ajudam na liberação suave de gases presinhos.",
      icon: "smile"
    },
    {
      title: "Dá mais segurança aos pais no dia a dia",
      description: "Você ganha clareza sobre como agir no momento de agitação, sabendo interpretar os sinais antes do choro forte.",
      icon: "shield"
    }
  ]
};

export const MODULES_DATA: ModuleItem[] = [
  {
    id: "m1",
    number: "01",
    title: "Aula de Massagem Bebê Zen",
    subtitle: "Vídeo aula prática com toque suave",
    description: "Demonstração passo a passo em vídeo HD dos movimentos de massagem relaxante no peito, bracinhos, perninhas e costas do bebê.",
    type: "video",
    durationOrPages: "45 min de vídeo aulas HD",
    highlights: ["Posição correta das mãos", "Pressão adequada para recém-nascidos", "Melhores momentos do dia para aplicar"]
  },
  {
    id: "m2",
    number: "02",
    title: "Rotina Relaxante do Sono",
    subtitle: "O ritual do sono sem estresse",
    description: "Aprenda a estruturar o ritual do sono da noite e das sonecas de forma amorosa, sem pressa e alinhada ao ritmo biológico do bebê.",
    type: "routine",
    durationOrPages: "Guia prático + Cronograma em vídeo",
    highlights: ["Sinais de sono que quase ninguém nota", "Ajustes de iluminação e ambiente", "Como evitar a desaceleração brusca"]
  },
  {
    id: "m3",
    number: "03",
    title: "Guia dos Primeiros 90 Dias",
    subtitle: "Navegando pela fase de adaptação",
    description: "Um mapa de acolhimento para o primeiro trimestre de vida do bebê (exterogestação), entendendo as necessidades de colo e aconchego.",
    type: "guide",
    durationOrPages: "E-book ilustrado em PDF",
    highlights: ["O conceito de exterogestação", "Saltos de desenvolvimento e picos de crescimento", "Como manter a calma dos pais"]
  },
  {
    id: "m4",
    number: "04",
    title: "Técnicas para Aliviar Gases e Desconfortos",
    subtitle: "Alívio prático para a barriguinha",
    description: "Sequência de toques na região abdominal ('moinho de vento', 'sol e lua') que acalmam as espasmos e ajudam o bebê a relaxar.",
    type: "video",
    durationOrPages: "Módulo prático em vídeo de 20 min",
    highlights: ["Sequência da borboleta e moinho", "Posição do tigre na árvore para aconchego", "Prevenção do acúmulo de ar"]
  },
  {
    id: "m5",
    number: "05",
    title: "Material em PDF para Acompanhar",
    subtitle: "Guias visuais para ter sempre à mão",
    description: "Fichas de consulta rápida em formato PDF para baixar no celular ou imprimir e deixar pertinho do trocador do bebê.",
    type: "pdf",
    durationOrPages: "5 Fichas ilustradas em PDF",
    highlights: ["Passo a passo resumido com desenhos", "Checklist de rotina do sono", "Guia de óleos vegetais seguros"]
  }
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: "b1",
    badge: "BÔNUS 1",
    title: "Guia Anti-Cólicas",
    subtitle: "Técnicas e compressas para alívio imediato",
    valueOriginal: "R$ 47",
    description: "Aprenda como aplicar compressas mornas de forma segura, técnicas de contenção em paninho e rotinas preventivas que diminuem os episódios no fim de tarde.",
    iconName: "flame"
  },
  {
    id: "b2",
    badge: "BÔNUS 2",
    title: "Amamentação Mais Tranquila",
    subtitle: "Acolhimento durante o aleitamento",
    valueOriginal: "R$ 37",
    description: "Conselhos práticos para uma pega confortável, postura relaxante para a mãe e como transformar a mamada em um momento de calma sem tensão no pescoço ou ombros.",
    iconName: "heart-handshake"
  },
  {
    id: "b3",
    badge: "BÔNUS 3",
    title: "Áudios Relaxantes para o Sono",
    subtitle: "Biblioteca de ruído branco e ninar",
    valueOriginal: "R$ 29",
    description: "Coleção de áudios em MP3 com frequências suaves, batimentos cardíacos simulando o útero materno e sons suaves de água para tocar na hora de dormir.",
    iconName: "music"
  }
];

export const AUDIO_SAMPLES: AudioSample[] = [
  {
    id: "aud1",
    title: "Útero Materno & Batimento Suave",
    subtitle: "Efeito calmante que lembra o ambiente intrauterino",
    duration: "60 min",
    type: "heartbeat"
  },
  {
    id: "aud2",
    title: "Ruído Branco - Chuva de Primavera",
    subtitle: "Frequência constante para mascarar ruídos da casa",
    duration: "60 min",
    type: "white-noise"
  },
  {
    id: "aud3",
    title: "Melodia Ninar Zen (Caixinha de Música)",
    subtitle: "Acordes calmos para transição do ritual da noite",
    duration: "45 min",
    type: "lullaby"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Camila Guimarães",
    babyName: "mãe do Mateo",
    babyAge: "2 meses",
    location: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    quote: "O Mateo ficava muito agitado por volta das 18h. Depois que comecei a sequência de massagens no banho morno, a noite mudou completamente. Hoje ele dorme super calmo e eu me sinto muito mais segura.",
    highlight: "Mudou nossa rotina do fim de tarde!",
    rating: 5
  },
  {
    id: "t2",
    name: "Renato e Juliana",
    babyName: "pais da Cecília",
    babyAge: "4 meses",
    location: "Curitiba, PR",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    quote: "Como pai de primeira viagem, eu ficava sem saber como ajudar quando a Cecília chorava com gases. As aulas de movimentos para a barriguinha são tão claras que em 5 minutos ela já relaxa o corpinho.",
    highlight: "Essencial para pais de primeira viagem",
    rating: 5
  },
  {
    id: "t3",
    name: "Mariana Alencar",
    babyName: "mãe da Helena",
    babyAge: "1 mês e meio",
    location: "Belo Horizonte, MG",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    quote: "A rotina do sono nos salvou. Antes eu achava que o bebê dormiria sozinho a qualquer hora. Aprender os rituais e os áudios relaxantes deu uma paz enorme para nossa casa.",
    highlight: "Sinto uma paz enorme na hora de colocar pra dormir",
    rating: 5
  }
];

export const OFFER_DATA = {
  title: "Método Bebê Zen",
  subtitle: "O passo a passo completo para transformar o descanso e a conexão com o seu bebê.",
  originalPrice: "147,00",
  currentPrice: "67,00",
  installments: "7x de R$ 10,55",
  savingsText: "Economia de R$ 80,00 por tempo limitado",
  ctaText: "Quero começar agora",
  includedItems: [
    "Acesso completo ao curso em vídeo HD",
    "Aula de Massagem Bebê Zen passo a passo",
    "Guia da Rotina Relaxante do Sono",
    "Guia dos Primeiros 90 Dias em PDF",
    "Módulo de Alívio de Gases e Desconfortos",
    "Bônus 1: Guia Anti-Cólicas",
    "Bônus 2: Amamentação Mais Tranquila",
    "Bônus 3: Áudios Relaxantes em MP3",
    "Suporte para dúvidas e comunidade de mães"
  ]
};

export const GUARANTEE_DATA = {
  title: "Sua compra está 100% protegida",
  subtitle: "Garantia Incondicional de 7 Dias",
  message: "Você pode conhecer o Método Bebê Zen com tranquilidade. Se não fizer sentido para você, basta solicitar o cancelamento dentro do prazo e devolveremos 100% do seu investimento, sem burocracia.",
  icon: "shield-check"
};

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq1",
    question: "O curso é indicado para qual idade do bebê?",
    answer: "O Método Bebê Zen foi criado especialmente para recém-nascidos e bebês de 0 a 6 meses. Porém, as técnicas de massagem e a rotina do sono continuam trazendo excelentes benefícios para bebês maiores de até 12 meses."
  },
  {
    id: "faq2",
    question: "Como vou receber o acesso ao material?",
    answer: "Assim que seu pagamento for confirmado, você receberá um e-mail com os seus dados de acesso imediato à plataforma de alunos. O acesso pode ser feito pelo celular, tablet ou computador."
  },
  {
    id: "faq3",
    question: "Quanto tempo preciso dedicar por dia?",
    answer: "Apenas de 10 a 15 minutos! As técnicas são pensadas para mães e pais com rotina corrida. Você pode aplicar durante ou logo após o banho, ou antes de colocar o bebê no berço."
  },
  {
    id: "faq4",
    question: "Preciso comprar algum óleo ou produto especial?",
    answer: "Não é necessário nenhum produto caro! No curso, indicamos o uso de óleos vegetais puros e 100% naturais (como óleo de semente de uva ou amêndoas doces puras), e explicamos como testar com segurança na pele delicada do bebê."
  },
  {
    id: "faq5",
    question: "E se o meu bebê chorar durante a massagem?",
    answer: "No curso ensinamos a respeitar os sinais do bebê. Massagem nunca deve ser feita com o bebê em pranto forte. Ensinamos a encontrar os momentos de 'alerta tranquilo', acolher primeiro e massagear quando ele estiver receptivo."
  },
  {
    id: "faq6",
    question: "Por quanto tempo terei acesso ao curso?",
    answer: "Você terá acesso garantido por 1 ano inteiro a todo o conteúdo, vídeos, PDFs e bônus, para rever sempre que precisar durante o crescimento do seu bebê."
  }
];

export const FOOTER_DATA = {
  copyright: "© 2026 Método Bebê Zen. Todos os direitos reservados.",
  disclaimer: "Aviso: O Método Bebê Zen é um programa educativo de bem-estar infantil e vínculo afetivo. Não substitui o acompanhamento e as orientações do seu médico pediatra.",
  contactEmail: "contato@metodobebezen.com.br",
  contactWhatsapp: "(11) 98765-4321"
};
