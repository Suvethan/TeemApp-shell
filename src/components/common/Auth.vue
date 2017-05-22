<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../../helpers/firebaseConfig';

export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>

<style lang="css">
    .firebaseui-idp-list{
        display: block;
        list-style: none;
        width: 30%;
        margin: 0 auto;
        padding: 20px;
        border: solid 1px #ddd;
        background: #fafafa;
        border-radius: 5px;
        margin-top: 50px;
    }
    .firebaseui-list-item .firebaseui-idp-button{
        text-align:left;
        height: 40px;
        padding: 10px;
        margin:0 auto;
        margin-bottom: 20px;
        display: block;
        width: 250px;
        background: #fff);
        /*background: linear-gradient(to right,#eee,#eee,30%,#fff);*/
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        font-weight: bold;
    }
    .firebaseui-list-item .firebaseui-idp-button .firebaseui-idp-icon{
        height: 20px;
        margin-right: 20px;
    }
</style>
