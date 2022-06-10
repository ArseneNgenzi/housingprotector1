let sendBtn = document.querySelector('#sendBtn')

const sendMail = (e) => {
  e.preventDefault()
  const names = document.getElementById('name').value,
    email = document.getElementById('email').value,
    // subject = document.getElementById('subject').value,
    message = document.getElementById('message').value,
    reply_to = document.getElementById('email').value

  if (names && email && message) {
    let templateParams = {
      from_name: names,
      from_email: email,
      // from_subject: subject,
      message: message,
      reply_to: reply_to,
    }

    emailjs
      .send(
        'service_dqk2hd9',
        // 'template_nakp135',
        'template_h8zl0pr',
        templateParams,
        'hPWnzAmKyuf0rpatB'
      )
      .then((res) => {
        // console.log('sending succeeded', res.status)
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        // document.getElementById('subject').value = ''
        document.getElementById('message').value = ''
        if (res.status == 200) {
          document.querySelector('.submit-feedback').innerHTML =
            'Message Submitted Successfully!'
          document.querySelector('.submit-feedback').classList.add('success')
        } else {
          document.querySelector('.submit-feedback').innerHTML =
            'Ooops! Something Wrong Happened!'
          document.querySelector('.submit-feedback').classList.add('error')
        }
      })
  } else {
    document.querySelector('.submit-feedback').innerHTML = "Please fill all fields!"
    document.querySelector('.submit-feedback').classList.add('error')
    // return false
  }
}

sendBtn.addEventListener('click', sendMail)
