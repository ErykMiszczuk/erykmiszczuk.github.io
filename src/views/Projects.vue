<template>
  <main class="projects">
        <div class="home__leftColumn">
            <article class="mw-articles-entry">
                <section class="card card-big ">
                    <header class="card-header">
                        <h2>Clank Assistant</h2>
                    </header>
                    <div class="card-content">
                        Jest to projekt stworzony na zajęcia z Przetwarzania Języka Naturalnego, na mojej uczelni. Program miał na bazie wcześniej ustalonych reguł odpowienio reagować na to co użytkownik mu napisze w bardziej swobodnym języku. Clank rozumie, że ma włączyć program (Steam, domyślna rzeglądarka, Netflix i Spotify ze sklepu Microsoft), wyłączyć dowolny program, odtworzyć muzykę za pomocą domyślnego odtwarzacza, pobrać i ustalić tapetę o zadanym temacie oraz opowiadać kawał o Chuck'u Norris'ie.
                        <a href="https://github.com/ErykMiszczuk/Clank-Assistant">Github</a>
                    </div>
                </section>
                <section class="card card-big ">
                    <header class="card-header">
                        <h2>Movie Rating Predict</h2>
                    </header>
                    <div class="card-content">
                        Program stworzony do przewidywania na podstawie podanych atrybutów ocen filmu w skali od 1 do 10. Korzysta z modelu utworzonego za pomocą Vowpal Wabbit i Pythona wraz z biblioteką Pandas do przetworzenia danych z IMDB.
                        <a href="https://github.com/ErykMiszczuk/movie-rating-predict">Github</a>  
                    </div>
                </section>
                <section class="card card-big ">
                    <header class="card-header">
                        <h2>Moja strona</h2>
                    </header>
                    <div class="card-content">
                        Moja strona jest rownież moim projektem, w pełni wykonanym własnoręcznie bez użycia bibliotek css. Najbardziej zależało mi na tym by była ona jak najbardziej czytelna i prosta w utrzymaniu. Dlatego zdecydowałem się użyć frameworka Vue aby łatwiej było mi zarządzać stroną.
                    </div>
                </section>
                <section class="card card-big ">
                    <header class="card-header">
                        <h2>CSharpCommander</h2>
                    </header>
                    <div class="card-content">
                        Aplikacja przypominająca norton commandera, do przeglądania kolejnych folderów. Została stworzona za pomocą WPF i C#. Projekt na zajęcia z Programowania Obiektowego. 
                        <a href="https://github.com/ErykMiszczuk/CSharpCommander">Github</a>
                    </div>
                </section>
                <section class="card card-big ">
                    <header class="card-header">
                        <h2>DPRP-project</h2>
                    </header>
                    <div class="card-content">
                        Prosty system CRUD oparty na MySQL, Nodejs, Expressjs, Sequelize, wykorzystujący REST. Frontend napisany w czystym HTML i vanilla JavaScript. Do komunikacji korzystam z fetch api. 
                        <a href="https://github.com/ErykMiszczuk/dprp-project">Github</a>
                    </div>
                </section>
                <section class="card card-big ">
                    <header class="card-header">
                        <h2>Eximia Games - Strona</h2>
                    </header>
                    <div class="card-content">
                        Wykonałem, a także częściowo uczestniczyłem w procesie projektowania strony <a href="http://eximia-games.pl/">Eximia Games</a>. Jest w pełni responsywna, łatwa do edycji, korzysta z flexbox layout.
                    </div>
                </section>
                <section class="card card-big ">
                    <header class="card-header">
                        <h2>Eximia Games - TVB Newsroom</h2>
                    </header>
                    <div class="card-content">
                        Napisana w PHP aplikacja CRUD do zarządzania newsami które mają po wytypowaniu i ewentualnych poprawkach, trafić do gry TVB. Pozwala zarządzać użytkownikami, nadawać im uprawnienia, usuwać. Interfejs jest przystosowany do obługi na urządzeniach dotykowych. Zgodnie z założeniem projektu aplikacja generuje gotowy kod który można od razu zaimportować do silnika gry. Kod TVB Newsroom jest prywatny.
                    </div>
                </section>
                <section class="card card-big ">
                    <header class="card-header">
                        <h2>Breakout Clone</h2>
                    </header>
                    <div class="card-content">
                        Klon breakout'a, stworzony w Phaser w wersji 2. Na podstawie tutoriala <a href="http://www.lessmilk.com/tutorial/breakout-phaser">How to Make a Breakout Clone in HTML5 with Phaser</a>.
                    </div>
                </section>
                <section class="card card-big ">
                    <header class="card-header">
                        <h2>Roadlike Clone</h2>
                    </header>
                    <div class="card-content">
                        Klon Roadlike, gry w oryginale stworzonej przez Mikołaja Kamińskiego (Sos). Napędzany przez Phaser w wersji 2.
                    </div>
                </section>
            </article>
        </div>
        <aside class="home__rightColumn">
            <figure class="card card-photo">
                <img src="../assets/images/eximia_games.png" alt="Eximia Games Strona" data-zoomable>
                <figcaption>
                    Strona eximia games
                </figcaption>
            </figure>
            <figure class="card card-photo">
                <img src="../assets/images/newsroom_tvb.png" alt="TVB Newsroom"  data-zoomable>
                <figcaption>
                    Interfejs webowy TVB Newsroom
                </figcaption>
            </figure>
        </aside>
    </main>
</template>

<script>
import mediumZoom from "medium-zoom";

export default {
  name: "Projects",
  mounted() {
    mediumZoom("[data-zoomable]");
  }
};
</script>
