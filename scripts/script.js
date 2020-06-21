console.log('yellooo');

const soundsArray = [
  {
    key: 'Y',
    name: 'Clap',
    path: 'sounds/clap1.mp3',
  },
  {
    key: 'U',
    name: 'Hihat',
    path: 'sounds/hihat.wav',
  },
  {
    key: 'I',
    name: 'Kick',
    path: 'sounds/kick.wav',
  },
  {
    key: 'H',
    name: 'Open-hat',
    path: 'sounds/openhat.wav',
  },
  {
    key: 'J',
    name: 'Boom',
    path: 'sounds/boom.wav',
  },
  {
    key: 'K',
    name: 'Ride',
    path: 'sounds/ride.wav',
  },
  {
    key: 'B',
    name: 'Snare',
    path: 'sounds/snare.wav',
  },
  {
    key: 'N',
    name: 'Tom',
    path: 'sounds/tom.wav',
  },
  {
    key: 'M',
    name: 'Tink',
    path: 'sounds/tink.wav',
  },
];

const app = document.getElementById('drumkit-app');
const drumkitPanel = document.getElementById('drumkit-elements');

const prepareDrumkitPanel = () => {
  soundsArray.map((item) => {
    const element = document.createElement('div');
    element.classList.add('column');
    element.classList.add('is-one-third');
    element.classList.add('box');
    element.dataset.key = item.name.toLowerCase();

    const elementTitle = document.createElement('p');
    elementTitle.classList.add('title');
    elementTitle.classList.add('is-4');
    elementTitle.appendChild(document.createTextNode(item.key));
    const elementSubtitle = document.createElement('p');
    elementSubtitle.classList.add('subtitle');
    elementSubtitle.classList.add('is-6');
    elementSubtitle.appendChild(
      document.createTextNode(item.name.toLowerCase())
    );

    // const text = document.createTextNode(item.key);
    // element.appendChild(text);
    element.appendChild(elementTitle);
    element.appendChild(elementSubtitle);

    element.addEventListener('click', function (e) {
      const key = e.currentTarget.textContent;
      console.log('clicked key: ', key);
      playSound(item.key, item.path, item.name);
    });
    drumkitPanel.appendChild(element);
  });
};

function playSound(key, path, name) {
  console.log('playing sound for: ', key);
  const element = document.querySelector(
    `.box[data-key="${name.toLowerCase()}"]`
  );
  element.classList.add('playing');
  setTimeout(() => {
    element.classList.remove('playing');
  }, 200);
  const audio = new Audio();
  audio.currentTime = 0.1;
  audio.preload = 'auto';
  audio.src = path;
  audio
    .play()
    .then(() => {
      console.log('playing');
    })
    .catch((err) => {
      console.error('error: ', err);
    });
}

function handleClickEvent(event) {
  console.log('event: ', event);
}

function handleKeyPressEvent(event) {
  console.log('event: ', event);
  const key = event.key.toUpperCase();
  const sound = soundsArray.find((item) => item.key === key);
  if (sound) {
    playSound(sound.key, sound.path, sound.name);
  } else {
    console.log('not found sound for key: ', key);
  }
}

prepareDrumkitPanel();

window.addEventListener('keydown', handleKeyPressEvent);
