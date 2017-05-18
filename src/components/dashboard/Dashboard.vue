<template>
  <div>
    <div class="row">
      <div class="medium-8 medium-offset-2 columns">
        <h1>Congratulations your app is working!</h1>
        <h4>Now navigate around to find out more</h4>
      </div>
      <div class="panel-body">
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
    </div>
  </div>
</template>

<script>
import DatabaseHandler from '../data/DatabaseHandler.vue'

//let membersRef = DatabaseHandler.db.ref('books')

  export default {
  components: { DatabaseHandler }

  }
</script>