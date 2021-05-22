<template>
<div class>
    <ul class="nav justify-content-end">

  <li class="nav-item">
    <router-link to="/users/login" style="float:right" class="btn btn-md btn-primary">Login</router-link>
    <router-link to="/users/new-user" style="float:right" class="btn btn-md btn-primary">Signin</router-link>


  </li>

</ul>

   <div>
    <h1 id="main-title" class="text-center"><router-link to="/" style="text-decoration:none ;color:black;">Go Green</router-link></h1>
    <b-nav tabs justified>
    <b-nav-item><router-link to="/recycle" style="text-decoration:none ;color:black;">Recycle-tips</router-link></b-nav-item>
    <b-nav-item><router-link to="/search" style="text-decoration:none ;color:black;">Search</router-link></b-nav-item>
    <b-nav-item>Link3</b-nav-item>
    <b-nav-item>Link4</b-nav-item>
    <b-nav-item>Link5</b-nav-item>

  </b-nav>
</div>
</div>
</template>

<script>

// import Vue from 'vue'
export default {
    name:"Header",
};
</script>

<style>
  #main-title{
    margin: 4% auto;
  }
  /* .router-link-exact-active{
    text-decoration: none;
    color:black;
  } */
  a{
    text-decoration: none;
    color:black;
  }
</style>