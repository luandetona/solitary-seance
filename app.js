const chat=document.querySelector('#chat'), answer=document.querySelector('#answer'), msg=document.querySelector('#msg');
document.querySelector('#turbo').onclick=()=>chat.classList.toggle('hidden');
document.querySelector('#close').onclick=()=>chat.classList.add('hidden');
function speak(){const text=msg.value.trim();if(!text){answer.textContent='Digite uma pergunta ou use o microfone.';return;}answer.textContent='Sua pergunta: '+text+'\n\nEste protótipo ainda não está conectado a um serviço de inteligência artificial. A integração será configurada na próxima etapa.';msg.value='';}
document.querySelector('#send').onclick=speak;
document.querySelector('#mic').onclick=()=>{
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!SR){answer.textContent='Este navegador não oferece reconhecimento de voz. Você pode digitar sua pergunta.';return;}
 const rec=new SR();rec.lang='pt-BR';rec.onresult=e=>{msg.value=e.results[0][0].transcript;speak();};rec.onerror=()=>answer.textContent='Não foi possível captar a voz. Verifique a permissão do microfone.';rec.start();
};
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));