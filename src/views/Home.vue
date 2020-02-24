<template>
  <main class="home">
    <div class="home__leftColumn">
      <article class="mw-articles-entry">
        <section class="card card-big ">
          <header class="content-header">
            <h2>Bio</h2>
          </header>
          <div class="card-content">
            Jestem programistą, grafikiem, fotografem. Chętnie podejmuję się nowych wyzwań, szczególnie tych programistycznych. Głównie korzystam z języków JavaScript i Python. Moim największym osiągnięciem było współtworzenie gry TVB na Poznań Game Jam i prezentacja gry podczas targów Poznań Gamme Arena. Trzy lata kształciłem się dodatkowo jako grafik komputerowy. Aktywnie spędzam wolny czas podróżując i fotografując Polskę. Celami moich podróży są pałace i zamki, ale także ciekawe obiekty militarne i fortyfikacje. Jestem entuzjastą dobrej lektury. Najbardziej lubię literaturę tworzoną przez Tom’a Clancy’ego.   
          </div>
        </section>
        <section class="card card-big">
          <header class="content-header">
            <h2>Skills</h2>
          </header>
          <div class="card-content">
            <table class="table">
              <tr><th>Skill</th><th>Level</th></tr>
              <tr><td>Javascript</td><td>Stosowanie składni ES6, w tym klas, arrow function, template literals.</td></tr>
              <tr><td>HTML5</td><td>Tworzenie html przyjaznego SEO, odpowiednie stosowanie znaczników nadających hierarchię informacji w dokumencie.</td></tr>
              <tr><td>CSS3</td><td>Znajomość Flexbox, Grid, zmienne CSS. Tworzenie animacji i przejść.</td></tr>
              <tr><td>Python</td><td>Tworzenie webcrawlerów opartych o bibliotekę Scrapy, tworzenie aplikacji rozpoznających język naturalny z wykorzystaniem NLTK, przetwarzanie danych i uczenie maszynowe.</td></tr>
              <tr><td>C#</td><td>Tworzenie aplikacji okienkowych z wykorzystaniem WPF.</td></tr>
              <tr><td>C++</td><td>Przetwarzanie obrazów w celu wykrywania krawędzi, rozmycia obrazu. Tworzenie prostych programów opartych o OpenGL 4.0 z wykorzystaniem GLSL i C++.</td></tr>
              <tr><td>Haskell</td><td>Tworzenie prostych funkcji rekurencyjnych i ich składanie. Rekurencyjne przechodzenie po strukturach danych takich jak drzewo.</td></tr>
              <tr><td>PHP</td><td>Łączenie się z bazą danych, logowanie się użytkowników do witryny, za pomocą ciasteczek.</td></tr>
              <tr><td>Node.js</td><td>Korzystanie ze streamów, obsługa plików tekstowych, łączenie się z bazą danych, tworzenie REST API, logowanie za pomocą Json Web Tokens.</td></tr>
            </table>
          </div>
        </section>
        <section class="card card-big">
          <header class="content-header">
            <h2>Social Media</h2>
          </header>
          <div class="card-content">
            Można mnie znaleźć na <a href="https://www.instagram.com/erykmiszczuk/">Instagramie</a>, gdzie umiezczam zdjęcia z podróży, oraz moje dzieła z grafiki komputerowej. Oprócz tego jestem jeszcze na <a href="https://codepen.io/ErykMiszczuk/">CodePen</a> gdzie trzymam drobne projekty dla których nie warto tworzyć osobnego repozytorium na moim <a href="https://github.com/ErykMiszczuk">GitHub</a>.
          </div>
        </section>
      </article>
    </div>

    <ImagesColumn />

  </main>
</template>

<script>
import ImagesColumn from "@/components/ImagesColumn.vue";
import mediumZoom from "medium-zoom";

export default {
  name: "home",
  components: {
    ImagesColumn
  },
  mounted() {
    mediumZoom("[data-zoomable]");
  }
};
</script>
