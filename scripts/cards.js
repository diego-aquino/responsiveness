import { activateModal, deactivateModal } from './modal.js';

const videos = [
  {
    title: 'Formulário Animado com JS puro e CSS Animation | Mayk Brito',
    duration: '57 min',
    thumbnail: 'https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg',
    id: 'GykTLqODQuU',
  },
  {
    title: 'Desvendando o CSS Grid na prática | Mayk Brito',
    duration: '36 min',
    thumbnail: 'https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg',
    id: 'HN1UjzRSdBk',
  },
  {
    title: 'Array: Higher Order Functions | Mayk Brito',
    duration: '54 min',
    thumbnail: 'https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg',
    id: 'rAzHvYnQ8DY',
  },
  {
    title: 'O que é API? REST e RESTful? | Mayk Brito',
    duration: '33 min',
    thumbnail: 'https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg',
    id: 'ghTrp1x_1As',
  },
  {
    title: 'Desvendando a variável this no Javascript | Mayk Brito',
    duration: '48 min',
    thumbnail: 'https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg',
    id: 'GSqR2i-Pq6o',
  },
  {
    title:
      'Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito',
    duration: '33 min',
    thumbnail: 'https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg',
    id: '2alg7MQ6_sI',
  },
];

export function renderVideoCards() {
  const sectionCards = document.querySelector('section.cards');
  const cardModel = document.querySelector('.card');

  videos.forEach(video => {
    const card = cardModel.cloneNode(true);
    setupCard(card, video);
    sectionCards.appendChild(card);
  });

  cardModel.remove();

  document.querySelector('.modal-background')
    .addEventListener('click', deactivateModal);

  createCardListeners();
}

function setupCard(card, video) {
  card.setAttribute('id', video.id);
  card.querySelector('img').src = video.thumbnail;
  createAlternativeThumbnailSources(card, video.id);
  card.querySelector('.title').innerHTML = video.title;
  card.querySelector('.info > p.text--medium').innerHTML = video.duration;
}

const baseThumbnailURL = 'https://i.ytimg.com/vi';

function createAlternativeThumbnailSources(card, videoId) {
  card.querySelector('source[media="(min-width: 768px)"]')
    .setAttribute(
      'srcset', `${baseThumbnailURL}/${videoId}/maxresdefault.jpg`
    );
  card.querySelector('source[media="(min-width: 320px)"]')
    .setAttribute(
      'srcset', `${baseThumbnailURL}/${videoId}/hqdefault.jpg`
    );
  card.querySelector('source[media="(max-width: 320px)"]')
    .setAttribute(
      'srcset', `${baseThumbnailURL}/${videoId}/mqdefault.jpg`
    );
}

function createCardListeners() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('id');
      activateModal(videoId);
    });
  });

  document.querySelector('.close-modal')
    .addEventListener('click', deactivateModal);
}
