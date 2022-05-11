const sendBtn = document.querySelector('#sendBtn');

const sendMail = (params) => {
 let templateParams = {
  from_name: document.getElementById('name').value,
  from_email: document.getElementById('email').value,
  from_subject: document.getElementById('subject').value,
  message: document.getElementById('message').value,
  reply_to: document.getElementById('email').value,
 }

 emailjs
   .send(
     'service_dqk2hd9',
     'template_nakp135',
     templateParams,
     'hPWnzAmKyuf0rpatB'
   )
   .then((res) => {
     console.log('sending succeeded', res.status)
   })
}

sendBtn.addEventListener('click', sendMail)