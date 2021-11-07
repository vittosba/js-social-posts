/**
 * Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
 */

/*
    1. Crea la struttura dati per i post
    2. Individuare il container nel quale inserire i post
    3. for:
        3.a generare il markup necessario per i nostri post
        3.b inserire i post con markup generato nel container per i post

*/

const posts = [
    {
        nomeAutore: 'Phil Mangione',
        fotoProfilo: 'https://unsplash.it/300/300?image=15',
        data: '4 mesi fa',
        testoPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine: 'https://picsum.photos/id/237/600/350',
        numeroLikes: 80,
    },
    {
        nomeAutore: 'Sofia PErlari',
        fotoProfilo: 'https://unsplash.it/300/300?image=16',
        data: '2 mesi fa',
        testoPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine: 'https://picsum.photos/id/240/600/350',
        numeroLikes: 100,
    },
    {
        nomeAutore: 'Paolo Duzioni',
        fotoProfilo: 'https://unsplash.it/300/300?image=17',
        data: '1 mesi fa',
        testoPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine: 'https://picsum.photos/id/301/600/350',
        numeroLikes: 99,
    },
    {
        nomeAutore: 'Fabio Giorgini',
        fotoProfilo: 'https://unsplash.it/300/300?image=18',
        data: '4 mesi fa',
        testoPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine: 'https://picsum.photos/id/501/600/350',
        numeroLikes: 400,
    },
    {
        nomeAutore: 'Alfredo Guida',
        fotoProfilo: 'https://unsplash.it/300/300?image=19',
        data: '3 mesi fa',
        testoPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine: 'https://picsum.photos/id/280/600/350',
        numeroLikes: 1000,
    },
]

const container = document.getElementById('container');

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    container.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post.fotoProfilo}" alt="${post.nomeAutore}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.nomeAutore}</div>
                    <div class="post-meta__time">${post.data}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${post.testoPost}</div>
        <div class="post__image">
            <img src="${post.immagine}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${post.numeroLikes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `;
}