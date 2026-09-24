/* ===== DATA ===== */
const player={name:"Vitória Caroline",xp:0,level:1,coins:0,hearts:5,combo:0,bestCombo:0,streakRight:0,
  answered:0,correct:0,wrongBank:{},achievements:{},phaseProgress:{}};

const PHASES=[
 {id:"basics",name:"👋 Básico: Cumprimentos & Apresentação",emoji:"👋"},
 {id:"airport",name:"✈️ Aeroporto",emoji:"✈️"},
 {id:"checkin",name:"🏨 Check-in no Hotel",emoji:"🏨"},
 {id:"room",name:"🛏️ Quarto do Hotel",emoji:"🛏️"},
 {id:"restaurant",name:"🍽️ Restaurante com Cliente",emoji:"🍽️"},
 {id:"problems",name:"⚠️ Problemas na Viagem",emoji:"⚠️"},
 {id:"boss",name:"👑 Missão Final: Business Trip",emoji:"👑"}
];

function tip(t){return `<div class="explain"><b>💡 Macete:</b> ${t}</div>`}

const LESSONS={
basics:{title:"👋 Teoria: Cumprimentos & Apresentação",html:`
<p><b>1. Cumprimentos básicos</b> — o primeiro contato em qualquer situação:</p>
<div class="explain">Hello / Hi = Oi &nbsp; Good morning = Bom dia &nbsp; Good afternoon = Boa tarde &nbsp; Good evening = Boa noite (chegando) &nbsp; Nice to meet you = Prazer em conhecer</div>
<p><b>2. "I'm" (I am) para se apresentar:</b></p>
<div class="explain">Ex: <i>I'm Vitória.</i> (Eu sou a Vitória.)<br>Ex: <i>I'm a quality inspector.</i> (Eu sou inspetora de qualidade.)<br>Ex: <i>I'm from Brazil.</i> (Eu sou do Brasil.)</div>
<p><b>3. Falando onde você trabalha:</b> use <b>work at</b> (empresa) ou <b>work as</b> (cargo).</p>
<div class="explain">Ex: <i>I work at a tech company.</i><br>Ex: <i>I work as a quality inspector.</i></div>
<p><b>4. This / There is</b> — muito usados em conversas simples:</p>
<div class="explain">Ex: <i>This is my business card.</i> (Este é meu cartão.)<br>Ex: <i>There is a meeting at 10am.</i> (Há uma reunião às 10h.)</div>
<p><b>💬 Mini-diálogo:</b><br><i>— Hello! Nice to meet you. I'm Vitória.<br>— Nice to meet you too! Where are you from?<br>— I'm from Brazil. I work as a quality inspector.<br>— Great! This is my card, and there is coffee over there if you'd like some.</i></p>`},
airport:{title:"✈️ Teoria: No Aeroporto",html:`
<p><b>1. Verb to Be (am/is/are)</b> — é o verbo "ser/estar". Ele muda de acordo com o sujeito:</p>
<div class="explain"><b>I</b> am &nbsp; <b>You/We/They</b> are &nbsp; <b>He/She/It</b> is<br>
Ex: <i>I am at the airport.</i> (Eu estou no aeroporto.)<br>
Ex: <i>They are from Brazil.</i> (Eles são do Brasil.)</div>
<p><b>2. WH Questions</b> — perguntas com palavra interrogativa no início:</p>
<div class="explain"><b>What</b>=o quê &nbsp; <b>Where</b>=onde &nbsp; <b>Who</b>=quem &nbsp; <b>How</b>=como<br>
Ex: <i>Where is the gate?</i> (Onde é o portão?)</div>
<p><b>3. Vocabulário-chave:</b> flight (voo), gate (portão), taxi, bags (malas), passport (passaporte).</p>
<p><b>💬 Mini-diálogo:</b><br><i>— Where is gate 12?<br>— It's over there, near the café.<br>— Thank you! I'm a bit nervous, this is my first business trip.</i></p>`},
checkin:{title:"🏨 Teoria: Check-in no Hotel",html:`
<p><b>1. Contrações</b> — no inglês falado, juntamos o verbo be com o pronome:</p>
<div class="explain">I am → <b>I'm</b> &nbsp; She is → <b>She's</b> &nbsp; They are → <b>They're</b> &nbsp; That is → <b>That's</b><br>
Ex: <i>I'm here for a reservation.</i></div>
<p><b>2. This / That</b> (singular): <b>This</b> = perto de você; <b>That</b> = longe.</p>
<div class="explain">Ex: <i>This is my passport.</i> (aqui, na sua mão)<br>Ex: <i>That is the manager, over there.</i> (longe)</div>
<p><b>3. There is</b> — usado com coisas no singular: <i>There is a pool in the hotel.</i></p>
<p><b>4. Vocabulário:</b> check-in, reservation (reserva), key (chave), wake-up call, lobby (recepção).</p>
<p><b>💬 Mini-diálogo:</b><br><i>— Good evening! I have a reservation.<br>— Great, what's your name?<br>— This is my passport. My name's Vitória.</i></p>`},
room:{title:"🛏️ Teoria: Quarto do Hotel",html:`
<p><b>1. These / Those</b> (plural): <b>These</b> = perto; <b>Those</b> = longe.</p>
<div class="explain">Ex: <i>These are my clothes.</i> (na sua mala)<br>Ex: <i>Those are your keys, on the table.</i> (longe)</div>
<p><b>2. There are</b> — usado com coisas no plural: <i>There are two beds in the room.</i></p>
<p><b>3. Montando frases:</b> a ordem básica é Sujeito + Verbo be + Complemento.<br>
Ex: <i>This</i> (sujeito) + <i>is</i> (verbo) + <i>my room</i> (complemento).</p>
<p><b>4. Vocabulário:</b> room, bed, towel (toalha), key, bags, view (vista).</p>
<p><b>💬 Mini-diálogo:</b><br><i>— These are your bags, madam.<br>— Thank you! There is a nice view from here.</i></p>`},
restaurant:{title:"🍽️ Teoria: Restaurante com Cliente",html:`
<p><b>1. Perguntas com There is/are:</b> invertemos a ordem — <b>Is there</b> / <b>Are there</b> no início.</p>
<div class="explain">Ex: <i>Is there a table for two?</i><br>Ex: <i>Are there any vegetarian dishes?</i></div>
<p><b>2. Tradução:</b> pratique traduzir frases curtas nos dois sentidos (PT→EN e EN→PT) — isso fixa o vocabulário de verdade.</p>
<p><b>3. Vocabulário essencial:</b> menu (cardápio), bill (conta), receipt (recibo), card (cartão), dish (prato), waiter (garçom).</p>
<p><b>💬 Mini-diálogo:</b><br><i>— Are there any tables free?<br>— Yes, this way please. Here's the menu.<br>— Thank you! Can I have the bill, please?</i></p>`},
problems:{title:"⚠️ Teoria: Problemas na Viagem",html:`
<p><b>1. Negativas com Verb to Be:</b> adicione <b>not</b> depois do verbo.</p>
<div class="explain">isn't = is not &nbsp; aren't = are not<br>Ex: <i>This isn't my bag.</i> (Esta não é minha mala.)<br>Ex: <i>We aren't late.</i> (Não estamos atrasados.)</div>
<p><b>2. Adjetivos de sensação (com "I am"):</b></p>
<div class="explain">hungry=fome &nbsp; thirsty=sede &nbsp; angry=raiva &nbsp; afraid=medo &nbsp; cold=frio &nbsp; hot=calor<br>
Ex: <i>I am afraid we missed the flight.</i></div>
<p><b>3. Vocabulário:</b> delay (atraso), problem, sorry, card (cartão), lost (perdido).</p>
<p><b>💬 Mini-diálogo:</b><br><i>— I'm sorry, there is a problem with my card.<br>— Don't worry, we accept cash too.<br>— I'm so hungry, is there a restaurant nearby?</i></p>`},
boss:{title:"👑 Teoria: Missão Final",html:`
<p>Esta é a revisão geral! Você vai encontrar <b>todos os temas juntos</b>: verb to be, contrações, this/that/these/those, there is/are e perguntas WH, misturados como em uma conversa real de negócios.</p>
<div class="explain"><b>Resumo rápido:</b><br>
I am • You/We/They are • He/She/It is<br>
This/That = singular • These/Those = plural<br>
There is = singular • There are = plural<br>
What/Where/Who/How = perguntas</div>
<p><b>💬 Mini-diálogo final:</b><br><i>— Where is the meeting room?<br>— It's on the third floor. Can you help me with my bags?<br>— Of course! Those are heavy. There are two elevators here.</i></p>`}
};

const PRON=[
["flight","fláit","voo"],["gate","guêit","portão"],["taxi","tá-ksi","táxi"],["bags","béggs","malas"],
["passport","pá-ssport","passaporte"],["check-in","tchék-in","registro de entrada"],["reservation","rez-er-vêi-shon","reserva"],
["key","ki","chave"],["room","rum","quarto"],["towel","táu-el","toalha"],["menu","mén-iu","cardápio"],
["bill","bil","conta"],["receipt","ri-sít","recibo"],["card","card","cartão"],["hungry","rrân-gri","com fome"],
["thirsty","zêr-sti","com sede"],["angry","ãn-gri","com raiva"],["afraid","a-fréid","com medo"],
["cold","kôuld","frio"],["hot","rrót","calor"],["delay","di-lêi","atraso"]
];

// Question bank: type mc|gap|order|translate|tf ; each has phase
const BANK=[
// BÁSICO: CUMPRIMENTOS & APRESENTAÇÃO
mc("basics","Como se diz 'Oi, prazer em conhecer você'?","Hi, nice to meet you","Hi, how are you,Good night",tip("'Nice to meet you' é usado no primeiro encontro com alguém.")),
mc("basics","'Good morning' significa:","Bom dia","Boa tarde,Boa noite",tip("Morning = manhã.")),
mc("basics","Complete: '___ Vitória.' (Eu sou a Vitória)","I'm","She's,You're",tip("I'm = I am, usado para se apresentar.")),
mc("basics","Complete: 'I ___ from Brazil.'","am","is,are",tip("I sempre usa am.")),
mc("basics","'I work as a quality inspector' significa:","Eu trabalho como inspetora de qualidade","Eu trabalho no aeroporto,Eu sou de Brazil",tip("'work as' + cargo/profissão.")),
mc("basics","'I work at a tech company' significa:","Eu trabalho em uma empresa de tecnologia","Eu trabalho como gerente,Eu moro perto da empresa",tip("'work at' + nome/tipo de empresa.")),
gap("basics","___ (Este é) my business card.","This is",tip("This is = Este/Esta é.")),
gap("basics","___ (Há) a meeting at 10am.","There is",tip("Singular = There is.")),
tr("basics","Traduza: 'I'm a student. I work at a small company.'","Eu sou estudante. Eu trabalho em uma empresa pequena.",tip("work at = trabalhar em (empresa).")),
tr("basics","Traduza: 'Nice to meet you! Where do you work?'","Prazer em te conhecer! Onde você trabalha?",tip("Where do you work? = pergunta padrão sobre trabalho.")),
order("basics","Monte: work / I / as / an / inspector","I work as an inspector",tip("Sujeito + verbo + as + profissão.")),
order("basics","Monte: fine / I'm / thank / you","I'm fine thank you",tip("Resposta padrão a 'How are you?'.")),
mc("basics","Como responder 'How are you?' de forma simples:","I'm fine, thank you","I'm a company,I work here",tip("Resposta padrão e educada.")),
mc("basics","'Good evening' é usado:","À noite, ao chegar","De manhã,Para se despedir de dia",tip("Evening = fim de tarde/noite, ao chegar em algum lugar.")),
// VERB TO BE
mc("airport","Complete: I ___ a quality inspector.","am","is,are",tip("Use <b>am</b> só com <b>I</b>. Regra: I am, He/She/It is, You/We/They are.")),
mc("airport","Complete: They ___ from Brazil.","are","am,is",tip("They, We, You → sempre <b>are</b>.")),
mc("checkin","Complete: The hotel ___ very nice.","is","am,are",tip("Coisas/singular (the hotel) → <b>is</b>.")),
mc("room","Complete: My bags ___ heavy.","are","is,am",tip("Plural (bags) → <b>are</b>.")),
mc("restaurant","Complete: This restaurant ___ expensive.","is","are,am",tip("'This restaurant' é singular → is.")),
gap("airport","She ___ (be) at the gate now.","is",tip("She/He/It → is.")),
gap("checkin","We ___ (be) tired after the flight.","are",tip("We/They/You → are.")),
tf("room","'I is happy' está certo?","false",tip("Certo é 'I <b>am</b> happy'. I sempre usa am.")),
tf("restaurant","'The clients are hungry' está certo?","true",tip("Clients é plural → are. Correto!")),
// CONTRACTIONS
mc("airport","Contração de 'I am' é:","I'm","I's,I'r",tip("I am = <b>I'm</b>.")),
mc("checkin","Contração de 'She is' é:","She's","She'r,She'is",tip("She is = <b>She's</b>.")),
mc("room","Contração de 'They are' é:","They're","They's,They'r",tip("They are = <b>They're</b>.")),
mc("restaurant","Contração de 'that is' é:","That's","That'r,Thats'",tip("that is = <b>that's</b>.")),
mc("problems","Contração negativa de 'is not' é:","isn't","aren't,amn't",tip("is + not = <b>isn't</b>.")),
mc("problems","Contração negativa de 'are not' é:","aren't","isn't,amn't",tip("are + not = <b>aren't</b>.")),
gap("boss","We ___ (are not) late, don't worry.","aren't",tip("are not = aren't.")),
gap("boss","This ___ (is not) my room.","isn't",tip("is not = isn't.")),
// THIS THAT THESE THOSE
mc("checkin","(perto, 1 coisa) '___ is my passport.'","This","That,These",tip("THIS = perto, singular.")),
mc("checkin","(longe, 1 coisa) '___ is the manager, over there.'","That","This,Those",tip("THAT = longe, singular.")),
mc("room","(perto, várias) '___ are my clothes.'","These","This,That",tip("THESE = perto, plural.")),
mc("room","(longe, várias) '___ are your keys, on the table.'","Those","This,These",tip("THOSE = longe, plural.")),
gap("restaurant","___ (longe, singular) is the chef's special.","That",tip("Longe + singular = That.")),
gap("restaurant","___ (perto, plural) are delicious dishes!","These",tip("Perto + plural = These.")),
order("checkin","Monte a frase: is / this / my / room","This is my room",tip("Ordem: sujeito + verbo be + complemento.")),
order("room","Monte a frase: are / those / bags / your","Those are your bags",tip("Pergunta invertida: verbo antes do sujeito em perguntas, mas aqui é afirmativa: Those + are + your bags.")),
// THERE IS / THERE ARE
mc("checkin","'___ a swimming pool in the hotel.'","There is","There are,Is there",tip("Singular → There is.")),
mc("room","'___ two beds in the room.'","There are","There is,Is there",tip("Plural → There are.")),
mc("restaurant","'___ any tables free?' (pergunta)","Are there","Is there,There are",tip("Pergunta plural → Are there...?")),
gap("problems","___ (haver) a problem with my flight.","There is",tip("Singular = There is.")),
gap("boss","___ (haver) many delays today.","There are",tip("Plural = There are.")),
tf("airport","'There is many people here' está certo?","false",tip("Many = plural → 'There ARE many people'.")),
// WH QUESTIONS
mc("airport","'___ is your gate?' (lugar)","Where","What,Who",tip("Where = onde/lugar.")),
mc("checkin","'___ is your name?'","What","Who,How",tip("What = o quê.")),
mc("restaurant","'___ is your business partner?' (pessoa)","Who","What,Where",tip("Who = quem/pessoa.")),
mc("problems","'___ can I get a taxi?' (modo)","How","Who,What",tip("How = como.")),
gap("boss","___ (onde) is the check-in desk?","Where",tip("Onde = Where.")),
gap("boss","___ (quem) is meeting us at the airport?","Who",tip("Quem = Who.")),
// VOCAB AEROPORTO/HOTEL/RESTAURANTE
mc("airport","'Gate' em português é:","Portão de embarque","Bagagem,Passaporte",tip("Gate = portão de embarque.")),
mc("airport","'Flight' significa:","Voo","Malas,Bilhete",tip("Flight = voo.")),
mc("checkin","'Check-in' é:","Registrar entrada no hotel/voo","Sair do hotel,Pedir a conta",tip("Check-in = fazer o registro de entrada.")),
mc("checkin","'Wake-up call' é:","Ligação para acordar","Café da manhã,Chamada de táxi",tip("Wake-up call = ligação para te acordar.")),
mc("room","'Bags' significa:","Malas","Cama,Chave",tip("Bags = malas/bolsas.")),
mc("restaurant","'Bill' no restaurante é:","A conta","O cardápio,O prato",tip("Bill = a conta a pagar.")),
mc("restaurant","'Menu' é:","Cardápio","Recibo,Talher",tip("Menu = cardápio.")),
mc("restaurant","'Receipt' é:","Recibo","Cartão,Gorjeta",tip("Receipt = recibo/comprovante.")),
mc("problems","'Card' (pagamento) é:","Cartão","Bagagem,Portão",tip("Card = cartão de crédito/débito.")),
mc("airport","'Taxi' é:","Táxi","Ônibus,Trem",tip("Taxi = táxi, igual em português!")),
gap("checkin","Preciso da chave: I need my room ___.","key",tip("Key = chave.")),
gap("room","O quarto tem: The ___ (quarto) has a nice view.","room",tip("Room = quarto.")),
gap("restaurant","Vou pedir a ___ (conta), please.","bill",tip("Bill = conta.")),
// ADJETIVOS DE SENSAÇÃO
mc("problems","'I am hungry' significa:","Estou com fome","Estou com sede,Estou com frio",tip("Hungry = fome.")),
mc("problems","'I am thirsty' significa:","Estou com sede","Estou com fome,Estou com raiva",tip("Thirsty = sede.")),
mc("problems","'I am angry' significa:","Estou com raiva","Estou com medo,Estou com frio",tip("Angry = raiva/bravo.")),
mc("problems","'I am afraid' significa:","Estou com medo","Estou com calor,Estou com fome",tip("Afraid = medo.")),
mc("problems","'I am cold' significa:","Estou com frio","Estou com calor,Estou com sede",tip("Cold = frio.")),
mc("problems","'I am hot' significa:","Estou com calor","Estou com frio,Estou com raiva",tip("Hot = calor.")),
gap("problems","Depois do voo longo, estou com sede: I am ___.","thirsty",tip("Sede = thirsty.")),
gap("problems","O quarto está gelado: I am ___.","cold",tip("Frio = cold.")),
// TRADUÇÃO PT->EN / EN->PT
tr("airport","Traduza: 'Meu voo está atrasado.'","My flight is delayed",tip("flight=voo, delayed=atrasado.")),
tr("checkin","Traduza: 'Eu tenho uma reserva.'","I have a reservation",tip("reservation = reserva.")),
tr("room","Traduza: 'There are two towels here.'","Há duas toalhas aqui",tip("towels = toalhas.")),
tr("restaurant","Traduza: 'Can I have the bill, please?'","Posso pedir a conta, por favor?",tip("bill=conta.")),
tr("problems","Traduza: 'I am sorry, there is a problem.'","Sinto muito, há um problema.",tip("sorry=desculpa.")),
tr("boss","Traduza: 'Where is the meeting room?'","Onde é a sala de reunião?",tip("meeting room = sala de reunião.")),
// ORDER (arrastar)
order("airport","Monte: are / where / you / from","Where are you from",tip("Pergunta com WH + are + you.")),
order("restaurant","Monte: table / a / is / there / free","There is a free table",tip("There is + a + adjetivo + substantivo.")),
order("problems","Monte: my / is / this / not / bag","This is not my bag",tip("This is not = negativa com 'not' depois do verbo be.")),
order("boss","Monte: help / can / you / me","Can you help me",tip("Pergunta com Can no início.")),
// MAIS MISTURA PARA VARIEDADE (repete padrões com contexto novo)
mc("boss","Complete: The clients ___ waiting in the lobby.","are","is,am",tip("Clients = plural → are.")),
mc("boss","'___ is the invoice, sir.' (perto)","This","That,Those",tip("Perto + singular = This.")),
gap("boss","___ (há) a taxi outside.","There is",tip("Singular = There is.")),
mc("boss","'I ___ afraid we missed the flight.'","am","is,are",tip("I sempre usa am.")),
tf("boss","'That are my documents' está certo?","false",tip("Certo é 'Those ARE my documents' (plural) ou 'That IS my document' (singular)."))
];

function mc(phase,q,ans,wrongCsv,ex){const w=wrongCsv.split(",");const opts=[ans,...w].sort(()=>Math.random()-.5);
 return{type:"mc",phase,q,opts,ans,ex}}
function gap(phase,q,ans,ex){return{type:"gap",phase,q,ans,ex}}
function tf(phase,q,ans,ex){return{type:"tf",phase,q,ans,ex}}
function tr(phase,q,ans,ex){return{type:"tr",phase,q,ans,ex}}
function order(phase,q,ans,ex){return{type:"order",phase,q,ans,ex}}

const ACHV=[
 {id:"first",name:"Primeiro Passo",desc:"Responda sua 1ª questão",icon:"🎯",cond:()=>player.answered>=1},
 {id:"combo5",name:"Em Chamas",desc:"Combo de 5 acertos seguidos",icon:"🔥",cond:()=>player.bestCombo>=5},
 {id:"lvl5",name:"Viajante Experiente",desc:"Alcance o nível 5",icon:"🏆",cond:()=>player.level>=5},
 {id:"coins50",name:"Rica em Berlim",desc:"Junte 50 moedas",icon:"💰",cond:()=>player.coins>=50},
 {id:"allphases",name:"Business Trip Completa",desc:"Complete todas as fases",icon:"👑",cond:()=>PHASES.every(p=>player.phaseProgress[p.id]>=1)},
];

/* ===== ENGINE ===== */
let state={screen:"home",phase:null,queue:[],idx:0,current:null,orderPicked:[],reviewMode:false,examMode:false,finished:false,timedMode:false,timeLeft:0,timerId:null,loaded:false};
const DB_KEY="businessTripVitoria_progress";
function initApp(){
  try{
    const raw=localStorage.getItem(DB_KEY);
    if(raw){Object.assign(player,JSON.parse(raw));}
  }catch(e){}
  state.loaded=true;render();
}
function saveProgress(){
  try{localStorage.setItem(DB_KEY,JSON.stringify(player));}catch(e){}
}
const $=s=>document.querySelector(s);
function xpForLevel(l){return 50+l*30}
function addXP(n){player.xp+=n;while(player.xp>=xpForLevel(player.level)){player.xp-=xpForLevel(player.level);player.level++;}checkAchv();}
function checkAchv(){ACHV.forEach(a=>{if(!player.achievements[a.id]&&a.cond())player.achievements[a.id]=true;});}
function phaseQuestions(id){return BANK.filter(q=>q.phase===id)}

function openLesson(id){state.screen="lesson";state.phase=id;render();}
function beginQuiz(id){
  state.phase=id;state.queue=shuffle(phaseQuestions(id)).slice(0,12);
  state.idx=0;state.reviewMode=false;state.examMode=false;render();nextQ();
}
function startReview(){
  const ids=Object.keys(player.wrongBank).filter(k=>player.wrongBank[k]>0);
  const qs=BANK.filter(q=>ids.includes(qKey(q)));
  if(!qs.length){state.screen="home";render();return;}
  state.queue=shuffle(qs);state.idx=0;state.reviewMode=true;state.examMode=false;state.phase="review";render();nextQ();
}
function startExam(){
  state.queue=shuffle(BANK).slice(0,50);state.idx=0;state.examMode=true;state.reviewMode=false;state.phase="exam";render();nextQ();
}
function qKey(q){return q.phase+"|"+q.q}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}

function nextQ(){
  if(state.timerId){clearInterval(state.timerId);state.timerId=null;}
  if(state.idx>=state.queue.length){finishSet();return}
  state.current=state.queue[state.idx];state.orderPicked=[];render();
  if(state.timedMode){
    state.timeLeft=20;
    state.timerId=setInterval(()=>{
      state.timeLeft--;
      const el=document.getElementById("timerNum");if(el)el.innerText=state.timeLeft;
      if(state.timeLeft<=0){clearInterval(state.timerId);state.timerId=null;timeUp();}
    },1000);
  }
}
function timeUp(){
  if(document.getElementById("nextBtn")&&document.getElementById("nextBtn").style.display==="inline-block")return;
  answer("__timeout__",state.current.ans);
}
function finishSet(){
  if(!state.reviewMode&&!state.examMode){
    player.phaseProgress[state.phase]=1;checkAchv();
  }
  saveProgress();
  state.screen="result";render();
}

function answer(userVal,correctVal,elBtn){
  player.answered++;
  const q=state.current;const key=qKey(q);
  const isCorrect = normalize(userVal)===normalize(correctVal);
  if(isCorrect){
    player.correct++;player.combo++;player.bestCombo=Math.max(player.bestCombo,player.combo);
    player.coins+=2;addXP(10+player.combo);
    if(player.wrongBank[key])player.wrongBank[key]=Math.max(0,player.wrongBank[key]-1);
  }else{
    player.combo=0;player.hearts=Math.max(0,player.hearts-1);
    player.wrongBank[key]=(player.wrongBank[key]||0)+2;
  }
  showFeedback(isCorrect,q);
  saveProgress();
}
function normalize(s){return (s||"").toString().trim().toLowerCase().replace(/[.!?]/g,"")}

function showFeedback(ok,q){
  const box=$("#feedback");
  box.innerHTML=(ok?`<div class="explain" style="background:#d7ffd0;border-color:#2fa32f"><b>✅ Certo! +XP</b></div>`
   :`<div class="explain" style="background:#ffe1e1;border-color:#c62828"><b>❌ Ops!</b> Resposta certa: <b>${q.ans}</b></div>${q.ex}`);
  $("#nextBtn").style.display="inline-block";
  $("#answerArea").querySelectorAll("button,input").forEach(e=>e.disabled=true);
}

/* ===== RENDER ===== */
function render(){
  const app=$("#app");
  if(state.screen==="home")return renderHome(app);
  if(state.screen==="lesson")return renderLesson(app);
  if(state.screen==="question")return renderQuestion(app);
  if(state.screen==="result")return renderResult(app);
  if(state.screen==="achv")return renderAchv(app);
  if(state.screen==="flash")return renderFlash(app);
}
function header(){
  const pct=Math.round((PHASES.filter(p=>player.phaseProgress[p.id]).length/PHASES.length)*100);
  return `<div class="card">
    <div class="top">
      <span class="pill">👤 ${player.name}</span>
      <span class="pill">⭐ Nv.${player.level}</span>
      <span class="pill">💰 ${player.coins}</span>
      <span class="pill hearts">${"❤️".repeat(player.hearts)}${"🖤".repeat(5-player.hearts)}</span>
    </div>
    <div class="small" style="margin-top:6px">Progresso geral: ${pct}%</div>
    <div class="progress"><div style="width:${pct}%"></div></div>
  </div>`;
}
function renderHome(app){
  state.screen="home";
  let ph=PHASES.map(p=>{
    const done=player.phaseProgress[p.id]?"✅ ":"";
    return `<button class="btn block" onclick="openLesson('${p.id}')">${done}${p.emoji} ${p.name.replace(/^\S+\s/,"")}</button>`;
  }).join("");
  const wrongCount=Object.values(player.wrongBank).filter(v=>v>0).length;
  app.innerHTML=`
  <div class="center"><h1 style="color:#ff5fa2">✈️ Business Trip: Berlim</h1>
  <p class="small" style="color:#ffd1e6">Vitória Caroline embarca rumo à Alemanha. Vença cada fase e domine o inglês de viagens de negócios!</p></div>
  ${header()}
  <div class="card"><h3>📍 Fases</h3>${ph}
    <button class="btn block secondary" onclick="startReview()">🔁 Revisão Inteligente (${wrongCount} pendentes)</button>
    <button class="btn block secondary" onclick="startExam()">📝 Simulado Final (50 questões)</button>
    <label class="small" style="display:flex;align-items:center;gap:8px;margin:8px 0"><input type="checkbox" id="timedChk" ${state.timedMode?"checked":""} onchange="state.timedMode=this.checked"> ⏱️ Ativar Quiz Cronometrado (20s por questão)</label>
    <button class="btn block secondary" onclick="state.screen='achv';render()">🏆 Conquistas</button>
    <button class="btn block secondary" onclick="state.screen='flash';render()">🗂️ Flashcards, Dicas & Pronúncia</button>
  </div>`;
}
function renderLesson(app){
  const l=LESSONS[state.phase];
  app.innerHTML=`${header()}
  <div class="card"><span class="tag">📖 Teoria antes da prática</span>
    <h2>${l.title}</h2>
    ${l.html}
    <button class="btn block" onclick="beginQuiz('${state.phase}')">🎮 Praticar Agora ➜</button>
    <button class="btn secondary block" onclick="state.screen='home';render()">⬅️ Voltar ao Mapa</button>
  </div>`;
}
function renderQuestion(app){
  const q=state.current;
  let body="";
  if(q.type==="mc"||q.type==="tf"){
    const opts=q.type==="tf"?["true","false"]:q.opts;
    body=opts.map(o=>`<button class="opt" onclick="answer('${esc(o)}','${esc(q.ans)}',this)">${q.type==="tf"?(o==="true"?"Verdadeiro":"Falso"):o}</button>`).join("");
  }else if(q.type==="gap"||q.type==="tr"){
    body=`<input class="ans" id="txt" placeholder="Digite sua resposta..."><br>
    <button class="btn" onclick="answer(document.getElementById('txt').value,'${esc(q.ans)}')">Responder</button>`;
  }else if(q.type==="order"){
    const words=shuffle(q.ans.split(" "));
    body=`<div id="orderWords">${words.map(w=>`<span class="word" onclick="pickWord(this,'${esc(w)}')">${w}</span>`).join("")}</div>
    <div class="card" id="orderLine" style="min-height:40px;background:#f0eefc">${""}</div>
    <button class="btn" onclick="checkOrder('${esc(q.ans)}')">Responder</button>`;
  }
  app.innerHTML=`${header()}
  <div class="card">
    <span class="tag">${labelType(q.type)} • ${state.reviewMode?"Revisão":state.examMode?"Simulado":PHASES.find(p=>p.id===state.phase)?.name}</span>
    <div class="small">Questão ${state.idx+1} de ${state.queue.length} • Combo: ${player.combo}🔥 ${state.timedMode?`• ⏱️ <span id="timerNum">${state.timeLeft}</span>s`:""}</div>
    <h3>${q.q}</h3>
    <div id="answerArea">${body}</div>
    <div id="feedback"></div>
    <button id="nextBtn" class="btn" style="display:none" onclick="advance()">Próxima ➜</button>
  </div>`;
}
function labelType(t){return{mc:"Múltipla Escolha",gap:"Complete a Lacuna",tf:"Verdadeiro/Falso",tr:"Tradução",order:"Monte a Frase"}[t]}
function esc(s){return (s+"").replace(/'/g,"\\'")}
function pickWord(el,w){
  if(el.classList.contains("used"))return;
  el.classList.add("used");
  state.orderPicked.push(w);
  $("#orderLine").innerText=state.orderPicked.join(" ");
}
function checkOrder(ans){answer(state.orderPicked.join(" "),ans);}
function advance(){
  if(player.hearts<=0){state.screen="result";state.finished=true;render();return}
  state.idx++;nextQ();
}
function renderResult(app){
  const acc=player.answered?Math.round((player.correct/player.answered)*100):0;
  app.innerHTML=`${header()}
  <div class="card center">
    <h2>${player.hearts<=0?"💔 As vidas acabaram!":"🎉 Fase concluída!"}</h2>
    <p>Acertos totais: ${player.correct}/${player.answered} (${acc}%)</p>
    <p>Melhor combo: ${player.bestCombo}🔥 &nbsp; Moedas: 💰${player.coins}</p>
    <button class="btn" onclick="player.hearts=5;state.screen='home';render()">⬅️ Voltar ao Mapa</button>
  </div>`;
}
function renderAchv(app){
  app.innerHTML=`${header()}<div class="card"><h3>🏆 Conquistas</h3>
  ${ACHV.map(a=>`<div class="achv ${player.achievements[a.id]?"":"locked"}"><span class="badge">${a.icon}</span><div><b>${a.name}</b><div class="small">${a.desc}</div></div></div>`).join("")}
  <button class="btn secondary block" onclick="state.screen='home';render()">⬅️ Voltar</button></div>`;
}
function renderFlash(app){
  const cards=BANK.filter(q=>q.type==="mc"||q.type==="gap").slice(0,30);
  app.innerHTML=`${header()}<div class="card"><h3>🗂️ Flashcards, Dicas & Pronúncia</h3>
  <div class="explain"><b>Verb to Be:</b> I am • You/We/They are • He/She/It is<br>
  <b>Contrações:</b> I'm, you're, he's, she's, it's, we're, they're, isn't, aren't<br>
  <b>This/That/These/Those:</b> This(perto,sing) • That(longe,sing) • These(perto,pl) • Those(longe,pl)<br>
  <b>There is/are:</b> There is + singular • There are + plural<br>
  <b>WH:</b> What(o quê) Where(onde) Who(quem) How(como)<br>
  <b>Sensações:</b> hungry(fome) thirsty(sede) angry(raiva) afraid(medo) cold(frio) hot(calor)<br>
  <b>Hotel/Viagem:</b> check-in, wake-up call, breakfast, taxi, bags, room, gate, flight, menu, bill, card, receipt</div>
  <h3>🗣️ Guia de Pronúncia</h3>
  ${PRON.map(p=>`<div class="card" style="background:#eef8ff;padding:8px 12px;margin:5px 0"><b>${p[0]}</b> → <i>${p[1]}</i> <span class="small">(${p[2]})</span></div>`).join("")}
  <h3>Cartões (clique para ver a dica):</h3>
  ${cards.map((c,i)=>`<div class="card" style="background:#f5f0ff;cursor:pointer" onclick="document.getElementById('dica${i}').style.display='block'"><b>${c.q}</b><div class="small">Resposta: ${c.ans}</div><div id="dica${i}" style="display:none">${c.ex}</div></div>`).join("")}
  <button class="btn secondary block" onclick="state.screen='home';render()">⬅️ Voltar</button></div>`;
}

initApp();