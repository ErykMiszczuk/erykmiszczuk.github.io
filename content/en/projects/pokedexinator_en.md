---
title: Pokedexinator Project
description: Pokedexinator is yet another pokeapi client, written using React and Hooks Api for data fetching and storing
---

Pokedexinator is yet another Pokeapi client hence the name to distinct project from others on github.

The look of app was inspired by early Pokemon anime (Gameboy like). Colors are from Material Design Palete, and I'm using them according to color guidelines. I particulary didnt choose any css framewok to hawe more controle over how is my app stylized, and how big it is in terms of size. Additionaly I learned how and when you should choose CSS Grid over CSS Flexbox.

Idecided to use `React` in project, because I wanted to learn using Hooks in apps. Previously I've used setState in class components, or in Redux store. To comunicate between components that were not direct parent child relation, I used similar approach to the one from Vue framework known as Event Bus, but I didnt create a special React instance to send events to, and listen to them. I just emit events in one component and then in second component there is listener with callback for this action. 