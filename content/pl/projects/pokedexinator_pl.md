---
title: Project Pokedexinator
description: Pokedexinator to kolejny klient PokeApi napisany z wykorzystaniem biblioteki React i hooks do przetrzymywania danych w componentach funkcyjnych
---

Pokedexinator to klient `PokeApi`. Dla pewnej odmienności dodałem końcówkę -inator by odróżnić projekt od innych podobnych projektów.

Wygląd aplikacji jest inspirowany pokedexami pokazanymi w pierwszych seriach animacji Pokemon. Kolory dobrałem z palety Material Designz i zastosowałem je zgodnie z tymi wytycznymi. Nie korzystałem z żadnego frameworku css, gdyż chciałem aby aplikacja była jak najprostsza i jak najmniejsza jeśli chodzi o rozmiar. Dodatkowo miałem pełną kontrolę nad tym jak ta aplikacja będzie wyglądać i co najważniejsze nauczylem się czemu CSS Grid jest w niektórych przypadkach lepszy niż CSS Flexbox.

Zdecydowałem się na wykorzystanie `React` w tym projekcie tak aby nauczyć się wykozrystywać Hooks w aplikacjach, gdyż wcześniej przetrzymywałem stan w komponentach używając `setState` lub za pomocą magazynu danych `Redux`. Dodatkowo używam niestandardowych wydarzeń tak aby pozbyć się wielokrotnego przekazywania kolejnym elementom funkcji które zostaną wywołane na ich przodku. Jest to rozwiązanie podobne do tego wywodzącego się z frameworka Vue, gdzie do rozmowy między komponentami, które nie są dla siebie bezpośrednimi przedkami lub potomkami zaleca się stworzenie szyny wydarzeń (Event Bus), ale w projekcie komponenty komunikują się beazpośrednio między sobą.