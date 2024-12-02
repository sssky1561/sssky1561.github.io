function floatingbuttonTodo() {
  const $floationgButton = document.querySelector('.floating-button');

  console.log($floationgButton);
  $floationgButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  });
}

function toggleTodo() {
  const $navMenu = document.querySelector('#nav__menu');
  $navMenu.classList.toggle('show');
}

function init() {
  const $navToggle = document.querySelector('#nav__toggle');
  const $navLinklist = document.querySelectorAll('.nav__link');

  $navToggle.addEventListener('click', () => {
    toggleTodo();
  });
  $navLinklist.forEach((el) => {
    el.addEventListener('click', function () {
      toggleTodo();
    });
  });

  floatingbuttonTodo();
}

init();

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetId = entry.target.id;
      document
        .querySelector(`.nav__link[href*=${targetId}]`)
        .classList.add('active-link');

      const deleteList = document.querySelectorAll(
        `.nav__link:not([href*=${targetId}])`,
      );
      deleteList.forEach((el) => {
        el.classList.remove('active-link');
      });
      // entry.target.classList.add('gb-dark');
    } else {
      // entry.target.classList.remove('gb-dark');
    }
  });
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => {
  observer.observe(el);
});

const scrollReveal = ScrollReveal({
  distance: '80px',
  origin: 'top',
  delay: 200,
  duration: 2000,
});

scrollReveal.reveal('.home__data, .about__img, .skills__text');
scrollReveal.reveal('.home__img, .about__data, .skills__img', { delay: 400 });
scrollReveal.reveal('.skills__data, .work__link, .form__input', {
  interval: 300,
});

const typeIt = new TypeIt('.home__title', {
  speed: 80,
  startDelay: 1300,
  waitUntilVisible: true,
});
typeIt
  .type('안녕하세요! <br />')
  .type('<strong class="home__title-color">코딩 크리에이터</strong><br />')
  .move(-7, { delay: 300 })
  .type(' 교육 ')
  .move(9)
  .type('<strong class="home__title-color">KIMKODING</strong>', { delay: 1000 })
  .delete(9, { delay: 500 })
  .type('김코딩 입니다.')
  .go();

// 안녕하세요! <br />
// <strong class="home__title-color">코딩 교육 크리에이터</strong
// ><br />
// <strong class="home__title-color">짐코딩</strong>입니다! <br />
