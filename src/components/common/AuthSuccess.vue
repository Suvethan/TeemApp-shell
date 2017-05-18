<template>
  <div>
    <h1>Signup succeeded</h1>
    <button @click='logOut'>Log out</button>
    <hr>
    <img :src="photo" style='height: 120px'> <br>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{userId}}</p>
    <hr>
    <pre>{{user}}</pre>
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books">
            <td><a v-bind:href="book.url">{{book.title}}</a></td>
            <td>{{book.author}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
//import firebase from 'firebase'
import db from '../../helpers/firebaseConfig'
console.log(db);
export default {
 data(){
     return {
       photo: '',
       userId: '',
       name: '',
       email: '',
       user: {}
     }
   },
   firebase: {
      books: db.teemApp.database().ref('books')
    },
   created() {
    this.user = db.teemApp.auth().currentUser;
    if(this.user) {
      this.name = this.user.displayName;
      this.email = this.user.email;
      this.photo = this.user.photoURL;
      this.userId = this.user.uid;
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    }
  },
};
</script>
