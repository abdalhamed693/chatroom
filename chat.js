class Chatroom {
    constructor(room , username){
      this.room = room ;
      this.username = username ;
      this.chat = db.collection('chats') ;
      this.unsup
    }

    async addchat(massege){
     const time = new Date();
     const chat = {
        created_at : firebase.firestore.Timestamp.fromDate(time),
        massege ,
        room : this.room ,
        username : this.username
     } ; 
     const add = await this.chat.add(chat);
    } 

      getchat(callback){
        this.unsup =  this.chat.
        where('room' , '==' , this.room).
        orderBy('created_at').
        onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          
          if (change.type === 'added') {
            // ubdate the ui
            const changes = change.doc.data()
            callback(changes)
                        
          }
        });
       }
        )
    }

    ubdatetheroom(newroom){
      this.room = newroom ; 
      this.unsup();
    }

    updatetheusername(newuser){
      this.username = newuser ;
      localStorage.setItem('username' , newuser)
    }
}


