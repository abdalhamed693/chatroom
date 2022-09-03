const chatlist = document.querySelector('.chat-list')
class apdatetheui {
    constructor(chatlist){
     this.chatlist = chatlist
    }

     rinderui(changes){

      const when = dateFns.distanceInWordsToNow(
          changes.created_at.toDate() , 
          {addSuffix: true}
      );
          this.chatlist.innerHTML += `<li><span class = "user">${changes.username}: </span>${changes.massege} </li>
          <li class = "time">${when}</li>`
           
    
     }

     clear(){
          this.chatlist.innerHTML = ''
     }
}
const rendring = new apdatetheui(chatlist)



