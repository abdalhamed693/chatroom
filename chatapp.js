const massege = document.querySelector('.new-chat')
const newuserform = document.querySelector('.new-name')
const btn = document.querySelector('.chat-rooms')
const feedback = document.querySelector('.feed')

//check local storage 
const username = localStorage.username ? localStorage.username : 'anonymous'
// chatroom object
const chatroom = new Chatroom('gaming' , username) ; 


chatroom.getchat((changes) => {
        rendring.rinderui(changes)
        })

   massege.addEventListener('submit' , (e) => {
                e.preventDefault();
                const inpute = massege.massege.value.trim()
                massege.reset()
                chatroom.addchat(inpute)
                })
                
  newuserform.addEventListener('submit' , (e) => {
         e.preventDefault();
         const inpute = newuserform.name.value.trim();
         chatroom.updatetheusername(inpute);
         newuserform.reset();
         feedback.innerHTML = `your name is updated to ${inpute}`
         setTimeout(() => {
              feedback.innerHTML = ''
         }, 3000);

        })

        
        

        btn.addEventListener('click' , (e) => {
           if (e.target.tagName === 'BUTTON') {
               const newroom = e.target.getAttribute('id')
               chatroom.ubdatetheroom(newroom)
               rendring.clear()
               
               chatroom.getchat((changes) => {
                rendring.rinderui(changes)
                })
           }
                })
    


