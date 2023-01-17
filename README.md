# Pokedex

# Table of contents
1. [Overview](#overview)
2. [Techs used](#techs-used)
4. [Todo](#todo-list)
3. [Pages](#pages)
5. [Adding More Generations](#adding-more-generations)


# Overview
- A list of all pokemons of the 1st generation ([But it also can contain all the 1000 pokemons that exists](#adding-more-generations));


# Techs used:
- The technologies used in this project was:
    - Vite (Bundler)
    - TypeScript;
    - ReactJS;
    - TailwindCSS;
    - React Router;

# Todo list
- Responsivity for the Profile Page;
- Redirect to the pokemon evolution when you click on its photo at evolution page;
- Search a pokemon (With a live search)

# Pages 
## Pokemon List Page
- In the first page, it will show the list of all the pokemons you wanted to list:
![PokemonList](/public/list.png) 
- It will show you the types of the pokemon, its name, id and a photo of it;

## Pokemon Page
- When you click in a card, you are redirected to the pokemon page;
![PokemonList](/public/biography.png)
- In this page, it will show to you the main biography of the pokemon, with a gif sprite of it, its weight, height, abilities, species and a simple text about the pokemon;
- Here you can also change to the [Status Page](#status-page) and to the [Evolutions Page](#evolutions-page)

## Status Page
- Here is where the pokemon statuses are shown;
![PokemonProfile](/public/stats.png)
- At the left are the base stats that you'll get for this pokemon and at right the max stats you can get for it (The calculation was made based on a level 100 pokemon with 252 EVs and 31 IVs);

## Evolutions Page
- In this page are the pokemon evolutions
![PokemonList](/public/evolutions.png)
- All the evolutions of the pokemon are shown in this page, also with its name and ID

# Adding More Generations:
- You just need to change the `getPokemons()` piece of code at `/src/routes/Home.tsx`, more specifically the for loop, just change the stop condition to the pokemon quantity that you want;

[![getPokemons](/public/getpokemons.png)]

