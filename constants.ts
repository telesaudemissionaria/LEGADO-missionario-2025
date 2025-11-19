
import { ContentStrings, MissionaryProfile, Language } from './types';

export const TRANSLATIONS: Record<Language, ContentStrings> = {
  PT: {
    heroTitle: "HONRANDO UM LEGADO",
    heroSubtitle: "Onde a medicina encontra a missão, e o sacrifício se torna cura.",
    aboutTitle: "TELESSAÚDE MISSIONÁRIA",
    aboutText: "Se Deus nos chamou para servir aos confins da terra, Ele também proverá os meios para cuidar de quem serve.",
    galleryTitle: "Arquivos do Sacrifício",
    gallerySubtitle: "Perfis de Sacrifício",
    galleryIntroTitle: "Uma exploração interativa da fé",
    galleryIntroText: "Uma exploração interativa da fé, enfermidade e o legado dos missionários que enfrentaram um mundo hostil, transformando seu sofrimento em um catalisador para a medicina moderna. Clique em um perfil para descobrir a história de fé e fragilidade por trás de cada figura. Suas vidas, marcadas pela dor, tornaram-se um testemunho de perseverança e inspiração.",
    footerText: "© 2024 Missionary Medical Care. Um legado de amor e serviço.",
    navHome: "Início",
    navLegacy: "Legado",
    tributeTitle: "Ecos de Sacrifício",
    tributeDesc: "Gere uma homenagem solene para honrar o legado missionário.",
    tributePlaceholder: "Digite um tema (ex: perseverança, cura)...",
    tributeButton: "Gerar Homenagem",
    deathLabel: "Causa da Morte",
  },
  EN: {
    heroTitle: "HONORING A LEGACY",
    heroSubtitle: "Where medicine meets mission, and sacrifice becomes healing.",
    aboutTitle: "MISSIONARY TELEHEALTH",
    aboutText: "If God has called us to serve the ends of the earth, He will also provide the means to care for those who serve.",
    galleryTitle: "Archives of Sacrifice",
    gallerySubtitle: "Profiles of Sacrifice",
    galleryIntroTitle: "An interactive exploration of faith",
    galleryIntroText: "An interactive exploration of faith, sickness, and the legacy of missionaries who faced a hostile world, turning their suffering into a catalyst for modern medicine. Click on a profile to discover the story of faith and frailty behind each figure. Their lives, marked by pain, became a testimony of perseverance and inspiration.",
    footerText: "© 2024 Missionary Medical Care. A legacy of love and service.",
    navHome: "Home",
    navLegacy: "Legacy",
    tributeTitle: "Echoes of Sacrifice",
    tributeDesc: "Generate a solemn tribute to honor the missionary legacy.",
    tributePlaceholder: "Enter a topic (e.g., perseverance, healing)...",
    tributeButton: "Generate Tribute",
    deathLabel: "Cause of Death",
  },
  ES: {
    heroTitle: "HONRANDO UN LEGADO",
    heroSubtitle: "Donde la medicina encuentra la misión, y el sacrificio se convierte en cura.",
    aboutTitle: "TELESALUD MISIONERA",
    aboutText: "Si Dios nos ha llamado a servir a los confines de la tierra, Él también proveerá los medios para cuidar a quienes sirven.",
    galleryTitle: "Archivos del Sacrificio",
    gallerySubtitle: "Perfiles de Sacrificio",
    galleryIntroTitle: "Una exploración interactiva de la fe",
    galleryIntroText: "Una exploración interactiva de la fe, la enfermedad y el legado de los misioneros que enfrentaron un mundo hostil, transformando su sufrimiento en un catalizador para la medicina moderna. Haga clic en un perfil para descubrir la historia de fe y fragilidad detrás de cada figura. Sus vidas, marcadas por el dolor, se convirtieron en un testimonio de perseverancia e inspiración.",
    footerText: "© 2024 Missionary Medical Care. Un legado de amor y servicio.",
    navHome: "Inicio",
    navLegacy: "Legado",
    tributeTitle: "Ecos de Sacrificio",
    tributeDesc: "Genere un homenaje solemne para honrar el legado misionero.",
    tributePlaceholder: "Ingrese un tema (ej: perseverancia, curación)...",
    tributeButton: "Generar Homenaje",
    deathLabel: "Causa de Muerte",
  }
};

// Flag URLs (using CDN for lightweight SVGs/PNGs)
const FLAGS = {
  US: "https://flagcdn.com/w40/us.png",
  UK: "https://flagcdn.com/w40/gb.png",
  IN: "https://flagcdn.com/w40/in.png",
  NG: "https://flagcdn.com/w40/ng.png",
  MM: "https://flagcdn.com/w40/mm.png",
  CN: "https://flagcdn.com/w40/cn.png",
  VU: "https://flagcdn.com/w40/vu.png",
};

// High Res Flags for Backgrounds
const FLAGS_HD = {
  US: "https://flagcdn.com/w640/us.png",
  UK: "https://flagcdn.com/w640/gb.png",
  IN: "https://flagcdn.com/w640/in.png",
  NG: "https://flagcdn.com/w640/ng.png",
  MM: "https://flagcdn.com/w640/mm.png",
  CN: "https://flagcdn.com/w640/cn.png",
  VU: "https://flagcdn.com/w640/vu.png",
};

export const PROFILES_DATA: Record<Language, MissionaryProfile[]> = {
  PT: [
    { 
      id: "1", 
      name: "David Brainerd", 
      dates: "1718-1747", 
      description: "Sua vida curta e ministério intenso entre os nativos americanos, imortalizados em seu diário, tornaram-se o modelo do missionário abnegado.", 
      image: FLAGS_HD.US, 
      flag: FLAGS.US,
      deathInfo: "David Brainerd morreu de tuberculose aos 29 anos. Ele lutou contra a doença durante vários anos, que acabou interrompendo seu ministério missionário entre os nativos americanos após apenas quatro anos de serviço ativo. Em abril de 1747, gravemente debilitado pela tuberculose, deixou Nova Jersey para a casa de seu amigo Jonathan Edwards em Northampton, Massachusetts, onde faleceu em 9 de outubro de 1747. Tragicamente, Jerusha Edwards, filha de Jonathan Edwards que o cuidou durante sua doença, também contraiu tuberculose e morreu em fevereiro de 1748."
    },
    { 
      id: "2", 
      name: "Charles Spurgeon", 
      dates: "1834-1892", 
      description: "Conhecido como o 'Príncipe dos Pregadores', seu ministério fenomenal em Londres escondia uma batalha constante contra a dor física e a angústia mental.", 
      image: FLAGS_HD.UK, 
      flag: FLAGS.UK,
      deathInfo: "Charles Spurgeon faleceu aos 57 anos em 31 de janeiro de 1892, em Menton, França, devido a complicações de gota e doença renal (congestão dos rins). Ele sofreu de problemas de saúde crônicos por muitos anos, incluindo gota dolorosa, reumatismo e doença de Bright (descrição histórica de problemas renais). Três fatores principais contribuíram para sua morte prematura: o trauma psicológico do desastre do Music Hall em 1856 (que possivelmente causou transtorno de estresse pós-traumático), suas condições físicas debilitantes, e as controvérsias teológicas que enfrentou. Durante seus últimos meses de vida, recebeu mais de 10.000 cartas de condolências e simpatia."
    },
    { 
      id: "3", 
      name: "Henry Martyn", 
      dates: "1781-1812", 
      description: "Inspirado por Brainerd, este brilhante acadêmico de Cambridge trocou a fama por uma vida de serviço, traduzindo as Escrituras e morrendo jovem e sozinho.", 
      image: FLAGS_HD.IN, 
      flag: FLAGS.IN,
      deathInfo: "Henry Martyn morreu aos 31 anos em 16 de outubro de 1812, em Tokat, Turquia, de febre (provavelmente tuberculose ou febre tifóide). Ele estava viajando por terra para Constantinopla quando foi acometido pela doença. Apesar da peste estar grassando em Tokat, foi forçado a parar lá, incapaz de continuar. Seu guia muçulmano, Hasan, foi cruel, conduzindo-o impiedosamente dia e noite, e Martyn frequentemente caía desmaiado do cavalo devido à enfermidade. Ele foi enterrado em um cemitério armênio pelos monges do mosteiro local, sozinho e longe de sua terra natal."
    },
    { 
      id: "4", 
      name: "Mary Slessor", 
      dates: "1848-1915", 
      description: "Uma missionária escocesa da classe trabalhadora que, com coragem indomável, combateu a malária e tradições desumanas na Nigéria.", 
      image: FLAGS_HD.NG, 
      flag: FLAGS.NG,
      deathInfo: "Mary Slessor faleceu em 13 de janeiro de 1915, aos 66 anos, de febre aguda relacionada à malária crônica. Durante seus 40 anos de ministério na África, contraiu malária (que nunca a deixou), bem como outras febres e doenças tropicais debilitantes. Em janeiro de 1915, enquanto estava em sua estação remota perto de Use Ikot Oku, sofreu uma febre particularmente severa que a levou à morte. As décadas de privações, trabalho árduo em clima tropical, e episódios recorrentes de malária enfraqueceram-na progressivamente até o ponto de não conseguir mais caminhar longas distâncias na floresta tropical, sendo transportada em um carrinho de mão."
    },
    { 
      id: "5", 
      name: "Adoniram Judson", 
      dates: "1788-1850", 
      description: "Pioneiro na Birmânia, traduziu a Bíblia e suportou prisão e perdas familiares, deixando um legado de perseverança e fé inabalável.", 
      image: FLAGS_HD.MM, 
      flag: FLAGS.MM,
      deathInfo: "Adoniram Judson morreu aos 61 anos em 12 de abril de 1850, no mar, no Golfo de Bengala, de doença pulmonar grave. Após anos de sofrimento com doenças tropicais na Birmânia (incluindo cólera, malária e disenteria), desenvolveu uma grave infecção pulmonar. Os médicos prescreveram uma viagem marítima como cura, e ele embarcou no navio \"Aristide Marie\" em 3 de abril de 1850, acompanhado pelo missionário Thomas Ranney. Oito dias depois, Judson faleceu no mar. Suas últimas palavras foram: \"Quão poucos há... que morrem tão duramente!\". Conforme seu pedido, foi enterrado no mar - seu caixão deslizou pela porta esquerda do navio para as águas do oceano."
    },
    { 
      id: "6", 
      name: "Hudson Taylor", 
      dates: "1832-1905", 
      description: "Fundador da Missão no Interior da China (CIM), revolucionou as missões com sua ênfase na contextualização cultural e na fé radical.", 
      image: FLAGS_HD.CN, 
      flag: FLAGS.CN,
      deathInfo: "Hudson Taylor morreu aos 73 anos em 3 de junho de 1905, em Changsha, província de Hunan, China, de causas naturais. Ele faleceu subitamente enquanto lia em casa. Seu corpo foi enterrado em 9 de junho de 1905 em Zhenjiang, Jiangsu, ao lado de sua primeira esposa, Maria, e dos filhos que haviam morrido na China. O pequeno cemitério foi posteriormente destruído durante a Revolução Cultural nos anos 1960, com prédios industriais construídos sobre o local, embora sua lápide tenha sido preservada em um museu local e posteriormente re-erguida em uma igreja chinesa em 1999."
    },
    { 
      id: "7", 
      name: "Amy Carmichael", 
      dates: "1867-1951", 
      description: "Missionária na Índia que resgatou crianças do templo-escravidão e fundou o Dohnavur Fellowship.", 
      image: FLAGS_HD.IN, 
      flag: FLAGS.IN,
      deathInfo: "Amy Carmichael morreu aos 83 anos em 18 de janeiro de 1951, na Índia, no Dohnavur Fellowship. Embora não haja uma única causa específica documentada, sua morte ocorreu após 20 anos acamada devido a uma grave queda em 24 de outubro de 1931. Nessa queda, ela quebrou a perna, deslocou o tornozelo e torceu a coluna vertebral ao cair em um poço estreito na escuridão. Esse acidente, combinado com artrite severa e a neuralgia (doença nervosa debilitante) que a afetava desde jovem, manteve-a inválida pelo resto da vida. Apesar da limitação física, ela continuou seu ministério da cama, escrevendo 13 livros e muitas cartas nos últimos 20 anos de vida. Ela pediu que nenhuma lápide fosse colocada sobre seu túmulo; apenas um bebedouro de pássaros simples marca o local sob uma árvore, com uma única palavra: \"Amma\" (Mãe)."
    },
    { 
      id: "8", 
      name: "John G. Paton", 
      dates: "1824-1907", 
      description: "Missionário nas Novas Hébridas (Vanuatu) que enfrentou tribos canibais e estabeleceu a igreja na região.", 
      image: FLAGS_HD.VU, 
      flag: FLAGS.VU,
      deathInfo: "John G. Paton morreu aos 82 anos em 28 de janeiro de 1907, em Canterbury, Victoria, Austrália, de causas naturais relacionadas à idade avançada. Sua morte ocorreu em Cross Street, Canterbury, quase dois anos após o falecimento de sua segunda esposa, Margaret Whitecross, que morreu em 1905. Ele foi enterrado no cemitério de Boroondara, na intersecção de High Street e Park Hill Road, Kew, Victoria. Em sua lápide foi inscrito que sua oração havia sido atendida: \"que eu pudesse ser permitido por Deus a trabalhar até o fim\". Diferentemente de muitos outros missionários desta lista, Paton teve uma vida relativamente longa e morreu de causas naturais após décadas de serviço missionário nas Novas Hébridas (atual Vanuatu)."
    },
    { 
      id: "9", 
      name: "Gladys Aylward", 
      dates: "1902-1970", 
      description: "Missionária na China que guiou mais de 100 crianças através de montanhas perigosas durante a guerra sino-japonesa.", 
      image: FLAGS_HD.CN, 
      flag: FLAGS.CN,
      deathInfo: "Gladys Aylward morreu aos 67 anos em 2-3 de janeiro de 1970, em Taipei, Taiwan, de influenza (gripe) complicada por pneumonia. Após décadas de serviço missionário desafiador na China, incluindo a famosa jornada em que conduziu mais de 100 crianças órfãs através das montanhas durante a invasão japonesa (quando sofreu ferimentos, desnutrição, tifo e pneumonia), ela eventualmente se estabeleceu em Taiwan em 1958. Lá continuou seu trabalho estabelecendo orfanatos até sua morte. Ela foi enterrada nos terrenos do Christ's College (臺北基督學院) em Taipei, e sua lápide menciona que se tornou cidadã da República da China em 1936 (embora algumas fontes digam 1941). Seu nome chinês era Ai Wei-De (艾偉德), que significa \"A Virtuosa\"."
    },
  ],
  EN: [
    { 
      id: "1", 
      name: "David Brainerd", 
      dates: "1718-1747", 
      description: "His short life and intense ministry among Native Americans, immortalized in his diary, became the model of the selfless missionary.", 
      image: FLAGS_HD.US, 
      flag: FLAGS.US,
      deathInfo: "David Brainerd died of tuberculosis at the age of 29. He battled the disease for several years, which eventually interrupted his missionary ministry among Native Americans after only four years of active service. In April 1747, severely debilitated by tuberculosis, he left New Jersey for the home of his friend Jonathan Edwards in Northampton, Massachusetts, where he passed away on October 9, 1747. Tragically, Jerusha Edwards, Jonathan Edwards' daughter who cared for him during his illness, also contracted tuberculosis and died in February 1748."
    },
    { 
      id: "2", 
      name: "Charles Spurgeon", 
      dates: "1834-1892", 
      description: "Known as the 'Prince of Preachers', his phenomenal ministry in London hid a constant battle against physical pain and mental anguish.", 
      image: FLAGS_HD.UK, 
      flag: FLAGS.UK,
      deathInfo: "Charles Spurgeon passed away at the age of 57 on January 31, 1892, in Menton, France, due to complications from gout and kidney disease (congestion of the kidneys). He suffered from chronic health issues for many years, including painful gout, rheumatism, and Bright's disease. Three main factors contributed to his premature death: the psychological trauma of the Music Hall disaster in 1856, his debilitating physical conditions, and the theological controversies he faced. During his final months, he received over 10,000 letters of condolence and sympathy."
    },
    { 
      id: "3", 
      name: "Henry Martyn", 
      dates: "1781-1812", 
      description: "Inspired by Brainerd, this brilliant Cambridge academic traded fame for a life of service, translating Scripture and dying young and alone.", 
      image: FLAGS_HD.IN, 
      flag: FLAGS.IN,
      deathInfo: "Henry Martyn died at age 31 on October 16, 1812, in Tokat, Turkey, of fever (likely tuberculosis or typhoid). He was traveling overland to Constantinople when he was struck by illness. Despite the plague raging in Tokat, he was forced to stop there, unable to continue. His Muslim guide, Hasan, was cruel, driving him mercilessly day and night, and Martyn often fell fainting from his horse due to illness. He was buried in an Armenian cemetery by the monks of the local monastery, alone and far from his homeland."
    },
    { 
      id: "4", 
      name: "Mary Slessor", 
      dates: "1848-1915", 
      description: "A working-class Scottish missionary who, with indomitable courage, fought malaria and inhumane traditions in Nigeria.", 
      image: FLAGS_HD.NG, 
      flag: FLAGS.NG,
      deathInfo: "Mary Slessor passed away on January 13, 1915, at the age of 66, from acute fever related to chronic malaria. During her 40 years of ministry in Africa, she contracted malaria (which never left her), as well as other debilitating tropical fevers. In January 1915, while at her remote station near Use Ikot Oku, she suffered a particularly severe fever that led to her death. Decades of hardship, hard work in the tropical climate, and recurrent bouts of malaria progressively weakened her to the point where she could no longer walk long distances in the rainforest, having to be transported in a handcart."
    },
    { 
      id: "5", 
      name: "Adoniram Judson", 
      dates: "1788-1850", 
      description: "Pioneer in Burma, translated the Bible and endured prison and family loss, leaving a legacy of perseverance and unshakable faith.", 
      image: FLAGS_HD.MM, 
      flag: FLAGS.MM,
      deathInfo: "Adoniram Judson died at age 61 on April 12, 1850, at sea in the Bay of Bengal, from severe lung disease. After years of suffering from tropical diseases in Burma (including cholera, malaria, and dysentery), he developed a severe lung infection. Doctors prescribed a sea voyage as a cure, and he boarded the ship 'Aristide Marie' on April 3, 1850. Eight days later, Judson passed away at sea. His last words were: 'How few there are... who die so hard!' In accordance with his request, he was buried at sea—his coffin slid through the port door of the ship into the ocean waters."
    },
    { 
      id: "6", 
      name: "Hudson Taylor", 
      dates: "1832-1905", 
      description: "Founder of the China Inland Mission (CIM), revolutionized missions with his emphasis on cultural contextualization and radical faith.", 
      image: FLAGS_HD.CN, 
      flag: FLAGS.CN,
      deathInfo: "Hudson Taylor died at age 73 on June 3, 1905, in Changsha, Hunan Province, China, of natural causes. He passed away suddenly while reading at home. His body was buried on June 9, 1905, in Zhenjiang, Jiangsu, next to his first wife, Maria, and the children who had died in China. The small cemetery was later destroyed during the Cultural Revolution in the 1960s, with industrial buildings built over the site, although his tombstone was preserved in a local museum and later re-erected at a Chinese church in 1999."
    },
    { 
      id: "7", 
      name: "Amy Carmichael", 
      dates: "1867-1951", 
      description: "Missionary in India who rescued temple-enslaved children and founded the Dohnavur Fellowship.", 
      image: FLAGS_HD.IN, 
      flag: FLAGS.IN,
      deathInfo: "Amy Carmichael died at age 83 on January 18, 1951, in India, at the Dohnavur Fellowship. Although there is no single specific documented cause, her death followed 20 years of being bedridden due to a severe fall on October 24, 1931. In that fall, she broke her leg, dislocated her ankle, and twisted her spine when she fell into a narrow pit in the dark. This accident, combined with severe arthritis and neuralgia that had affected her since youth, kept her invalid for the rest of her life. Despite physical limitations, she continued her ministry from her bed, writing 13 books and many letters in the last 20 years of her life. She requested that no tombstone be placed over her grave; only a simple birdbath marks the spot under a tree, with a single word: 'Amma' (Mother)."
    },
    { 
      id: "8", 
      name: "John G. Paton", 
      dates: "1824-1907", 
      description: "Missionary in the New Hebrides (Vanuatu) who faced cannibal tribes and established the church in the region.", 
      image: FLAGS_HD.VU, 
      flag: FLAGS.VU,
      deathInfo: "John G. Paton died at age 82 on January 28, 1907, in Canterbury, Victoria, Australia, of natural causes related to old age. His death occurred almost two years after the passing of his second wife, Margaret Whitecross. He was buried in Boroondara Cemetery. On his tombstone, it was inscribed that his prayer had been answered: 'that I might be permitted by God to work until the end.' Unlike many other missionaries on this list, Paton lived a relatively long life and died of natural causes after decades of missionary service in the New Hebrides (now Vanuatu)."
    },
    { 
      id: "9", 
      name: "Gladys Aylward", 
      dates: "1902-1970", 
      description: "Missionary in China who led over 100 children through dangerous mountains during the Sino-Japanese war.", 
      image: FLAGS_HD.CN, 
      flag: FLAGS.CN,
      deathInfo: "Gladys Aylward died at age 67 on January 2-3, 1970, in Taipei, Taiwan, from influenza complicated by pneumonia. After decades of challenging missionary service in China, she eventually settled in Taiwan in 1958. There she continued her work establishing orphanages until her death. She was buried on the grounds of Christ's College in Taipei, and her tombstone mentions she became a citizen of the Republic of China in 1936. Her Chinese name was Ai Wei-De, meaning 'The Virtuous'."
    },
  ],
  ES: [
    { 
      id: "1", 
      name: "David Brainerd", 
      dates: "1718-1747", 
      description: "Su corta vida e intenso ministerio entre los nativos americanos, inmortalizados en su diario, se convirtieron en el modelo del misionero abnegado.", 
      image: FLAGS_HD.US, 
      flag: FLAGS.US,
      deathInfo: "David Brainerd murió de tuberculosis a los 29 años. Luchó contra la enfermedad durante varios años, lo que finalmente interrumpió su ministerio misionero entre los nativos americanos después de solo cuatro años de servicio activo. En abril de 1747, gravemente debilitado por la tuberculosis, dejó Nueva Jersey para ir a la casa de su amigo Jonathan Edwards en Northampton, Massachusetts, donde falleció el 9 de octubre de 1747. Trágicamente, Jerusha Edwards, la hija de Jonathan Edwards que lo cuidó durante su enfermedad, también contrajo tuberculosis y murió en febrero de 1748."
    },
    { 
      id: "2", 
      name: "Charles Spurgeon", 
      dates: "1834-1892", 
      description: "Conocido como el 'Príncipe de los Predicadores', su fenomenal ministerio en Londres escondía una batalla constante contra el dolor físico y la angustia mental.", 
      image: FLAGS_HD.UK, 
      flag: FLAGS.UK,
      deathInfo: "Charles Spurgeon falleció a los 57 años el 31 de enero de 1892, en Menton, Francia, debido a complicaciones de gota y enfermedad renal (congestión de los riñones). Sufrió problemas de salud crónicos durante muchos años, incluyendo gota dolorosa, reumatismo y la enfermedad de Bright. Tres factores principales contribuyeron a su muerte prematura: el trauma psicológico del desastre del Music Hall en 1856, sus condiciones físicas debilitantes y las controversias teológicas que enfrentó. Durante sus últimos meses de vida, recibió más de 10,000 cartas de condolencia y simpatía."
    },
    { 
      id: "3", 
      name: "Henry Martyn", 
      dates: "1781-1812", 
      description: "Inspirado por Brainerd, este brillante académico de Cambridge cambió la fama por una vida de servicio, traduciendo las Escrituras y muriendo joven y solo.", 
      image: FLAGS_HD.IN, 
      flag: FLAGS.IN,
      deathInfo: "Henry Martyn murió a los 31 años el 16 de octubre de 1812, en Tokat, Turquía, de fiebre (probablemente tuberculosis o fiebre tifoidea). Viajaba por tierra hacia Constantinopla cuando fue atacado por la enfermedad. A pesar de que la plaga asolaba Tokat, se vio obligado a detenerse allí, incapaz de continuar. Su guía musulmán, Hasan, fue cruel, conduciéndolo sin piedad día y noche, y Martyn a menudo caía desmayado de su caballo debido a la enfermedad. Fue enterrado en un cementerio armenio por los monjes del monasterio local, solo y lejos de su tierra natal."
    },
    { 
      id: "4", 
      name: "Mary Slessor", 
      dates: "1848-1915", 
      description: "Una misionera escocesa de clase trabajadora que, con coraje indomable, combatió la malaria y tradiciones inhumanas en Nigeria.", 
      image: FLAGS_HD.NG, 
      flag: FLAGS.NG,
      deathInfo: "Mary Slessor falleció el 13 de enero de 1915, a los 66 años, de fiebre aguda relacionada con la malaria crónica. Durante sus 40 años de ministerio en África, contrajo malaria (que nunca la abandonó), así como otras fiebres y enfermedades tropicales debilitantes. En enero de 1915, mientras estaba en su estación remota cerca de Use Ikot Oku, sufrió una fiebre particularmente severa que la llevó a la muerte. Décadas de privaciones, trabajo duro en el clima tropical y episodios recurrentes de malaria la debilitaron progresivamente hasta el punto de no poder caminar largas distancias en la selva tropical, siendo transportada en una carretilla."
    },
    { 
      id: "5", 
      name: "Adoniram Judson", 
      dates: "1788-1850", 
      description: "Pionero en Birmania, tradujo la Biblia y soportó prisión y pérdidas familiares, dejando un legado de perseverancia y fe inquebrantable.", 
      image: FLAGS_HD.MM, 
      flag: FLAGS.MM,
      deathInfo: "Adoniram Judson murió a los 61 años el 12 de abril de 1850, en el mar, en el Golfo de Bengala, de una enfermedad pulmonar grave. Después de años de sufrimiento con enfermedades tropicales en Birmania (incluyendo cólera, malaria y disentería), desarrolló una grave infección pulmonar. Los médicos prescribieron un viaje por mar como cura, y se embarcó en el barco \"Aristide Marie\" el 3 de abril de 1850. Ocho días después, Judson falleció en el mar. Sus últimas palabras fueron: \"¡Qué pocos hay... que mueran tan duramente!\". Conforme a su petición, fue enterrado en el mar: su ataúd se deslizó por la puerta de babor del barco hacia las aguas del océano."
    },
    { 
      id: "6", 
      name: "Hudson Taylor", 
      dates: "1832-1905", 
      description: "Fundador de la Misión al Interior de China (CIM), revolucionó las misiones con su énfasis en la contextualización cultural y la fe radical.", 
      image: FLAGS_HD.CN, 
      flag: FLAGS.CN,
      deathInfo: "Hudson Taylor murió a los 73 años el 3 de junio de 1905, en Changsha, provincia de Hunan, China, de causas naturales. Falleció repentinamente mientras leía en casa. Su cuerpo fue enterrado el 9 de junio de 1905 en Zhenjiang, Jiangsu, junto a su primera esposa, María, y los hijos que habían muerto en China. El pequeño cementerio fue posteriormente destruido durante la Revolución Cultural en los años 60, aunque su lápida fue preservada en un museo local y posteriormente reerigida en una iglesia china en 1999."
    },
    { 
      id: "7", 
      name: "Amy Carmichael", 
      dates: "1867-1951", 
      description: "Misionera en la India que rescató niños del templo-esclavitud y fundó el Dohnavur Fellowship.", 
      image: FLAGS_HD.IN, 
      flag: FLAGS.IN,
      deathInfo: "Amy Carmichael murió a los 83 años el 18 de enero de 1951, en la India, en el Dohnavur Fellowship. Aunque no hay una única causa específica documentada, su muerte ocurrió después de 20 años postrada en cama debido a una grave caída el 24 de octubre de 1931. En esa caída, se rompió la pierna, se dislocó el tobillo y se torció la columna vertebral al caer en un pozo estrecho en la oscuridad. Este accidente, combinado con artritis severa y neuralgia, la mantuvo inválida por el resto de su vida. A pesar de la limitación física, continuó su ministerio desde la cama, escribiendo 13 libros y muchas cartas. Pidió que no se colocara ninguna lápida sobre su tumba; solo un bebedero de pájaros simple marca el lugar bajo un árbol, con una sola palabra: \"Amma\" (Madre)."
    },
    { 
      id: "8", 
      name: "John G. Paton", 
      dates: "1824-1907", 
      description: "Misionero en las Nuevas Hébridas (Vanuatu) que enfrentó tribus caníbales y estableció la iglesia en la región.", 
      image: FLAGS_HD.VU, 
      flag: FLAGS.VU,
      deathInfo: "John G. Paton murió a los 82 años el 28 de enero de 1907, en Canterbury, Victoria, Australia, de causas naturales relacionadas con la edad avanzada. Su muerte ocurrió casi dos años después del fallecimiento de su segunda esposa, Margaret Whitecross. Fue enterrado en el cementerio de Boroondara. En su lápida se inscribió que su oración había sido respondida: \"que pudiera ser permitido por Dios trabajar hasta el final\". A diferencia de muchos otros misioneros de esta lista, Paton tuvo una vida relativamente larga y murió de causas naturales después de décadas de servicio misionero en las Nuevas Hébridas."
    },
    { 
      id: "9", 
      name: "Gladys Aylward", 
      dates: "1902-1970", 
      description: "Misionera en China que guió a más de 100 niños a través de montañas peligrosas durante la guerra sino-japonesa.", 
      image: FLAGS_HD.CN, 
      flag: FLAGS.CN,
      deathInfo: "Gladys Aylward murió a los 67 años el 2-3 de enero de 1970, en Taipei, Taiwán, de influenza (gripe) complicada por neumonía. Después de décadas de servicio misionero desafiante en China, finalmente se estableció en Taiwán en 1958. Allí continuó su trabajo estableciendo orfanatos hasta su muerte. Fue enterrada en los terrenos del Christ's College en Taipei, y su lápida menciona que se convirtió en ciudadana de la República de China en 1936. Su nombre chino era Ai Wei-De, que significa \"La Virtuosa\"."
    },
  ]
};