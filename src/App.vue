<template>
  <div id="app">
    <header class="main-header">
      <div class="header-picture">
        <div class="my-picture el"></div>
        <h1 class="header-hilight">Eryk Miszczuk</h1>
      </div>
      <nav class="header-main-nav">
        <ul id="nav" class="nav-horizontal">
          <li class="el"><router-link to="/">Strona główna</router-link></li> 
          <li class="el"><router-link to="/projects">Projekty</router-link></li>
          <li class="el"><router-link to="/contact">Kontakt</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view/>
    <footer class="clear-fix">
			<small class="el">Eryk Miszczuk &copy;<span class="u-year">{{ getCurrentYear() }}</span></small>
		</footer>
  </div>
</template>

<script>
export default {
  methods: {
    getCurrentYear() {
      let t = new Date();
      return t.getFullYear();
    }
  }
};
</script>
