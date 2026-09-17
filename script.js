const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    nav.style.display=open?'flex':'';
    nav.style.position=open?'absolute':'';
    nav.style.top=open?'74px':'';
    nav.style.left=open?'0':'';
    nav.style.right=open?'0':'';
    nav.style.padding=open?'18px 24px':'';
    nav.style.background=open?'rgba(255,255,255,.98)':'';
    nav.style.flexDirection=open?'column':'';
    nav.style.gap=open?'18px':'';
  });
}
const form=document.getElementById('form');
const msg=document.getElementById('msg');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    msg.textContent='Thanks — the launch list is ready to connect to your email provider.';
    form.reset();
  });
}
