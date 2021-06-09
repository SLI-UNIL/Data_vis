# Women Director Representation in Motion Picture Awards

The following project's aim is to visually demonstrate the representation of women directors in motion picture awards in the last twenty years (2000-2020). It was created for the course of Visualisation des Données, taught by Prof. Isaac Pante at the University of Lausanne in the Spring semester 2021. 

<img width="960" alt="Screenshot 2021-06-09 at 15 05 33" src="https://user-images.githubusercontent.com/83975810/121360195-7eeee580-c934-11eb-9a12-704a8f1a57a2.png">

## The Database 

We chose to work with three of the best known motion picutre awards, namely the Oscars (USA), BAFTAs (UK) and Césars (FR) to also integrate a cross-cultural component. 

We pulled our data from the following websites and compiled them into a JSON file. 

### Oscars : 
http://awardsdatabase.oscars.org/search/results

https://en.wikipedia.org/wiki/Academy_Award_for_Best_Director

### BAFTAs :
https://en.wikipedia.org/wiki/BAFTA_Award_for_Best_Direction

### Césars : 
https://www.academie-cinema.org/palmares/

https://en.wikipedia.org/wiki/César_Award_for_Best_Director


## The visualisation 

We decided to go with a matrix representation as we felt it would have the strongest visual impact. The same argument made us chose size variation to represent the number of nominees and colour variation to represent years with winners. 

<img width="1038" alt="Screenshot 2021-06-09 at 15 06 56" src="https://user-images.githubusercontent.com/83975810/121360107-667ecb00-c934-11eb-9bce-473fa208cf68.png">

We chose to give the viewer the option to see either one award timeline at a time, or two, or even all three together so that they can have a complete or selective experience of the data according to their needs. 

<img width="1084" alt="Screenshot 2021-06-09 at 15 11 35" src="https://user-images.githubusercontent.com/83975810/121360799-063c5900-c935-11eb-8ca1-6e39749325e5.png">

<img width="1066" alt="Screenshot 2021-06-09 at 15 11 46" src="https://user-images.githubusercontent.com/83975810/121360823-0a687680-c935-11eb-8931-d84b4254d782.png">

As it was important for us to give visibility to the women directors individually, when hovering over the dots in the matrix, it is possible to see the names of the nominees (and the winners when applicable). 

<img width="1059" alt="Screenshot 2021-06-09 at 15 07 12" src="https://user-images.githubusercontent.com/83975810/121360321-96c66980-c934-11eb-8541-044b1155362a.png">

To achieve the desired results we used HTML for the frontend and JavaScript for the backend as well as CSS for the styles and JSON for the database. We decided to work on two separate files as the final result comes in a home page and the visualisation page. 

## The results 

It is very interesting to note the following points (amongst others) : 

1. Women representation in motion picture awards is lacking and fluctuating. 

2. Where Anglo-Saxon awards are concerned (Oscars, BAFTAs) there is a relatively significant overlap in nominees and winners 

3. The Césars have the largest representation in women nominees but the smallest in women winners 

-----

Creators:

Luisa Blaz Alvarez Prado, Vanja Jamina, Sofia Yazitzoglou
