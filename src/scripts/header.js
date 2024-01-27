function openMenu() {
  const mobileMenu = document.querySelector('.mobile-menu-wrapper');
  const links = document.querySelectorAll('.nav-link');
  const btnOpenMenu = document.querySelector('.burger-menu');
  const btnCloseMenu = document.querySelector('.burger-menu-close');

  btnOpenMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });

  btnCloseMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });

  links.forEach(link =>
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    })
  );
}

openMenu();

function changeActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  const homeLink = document.querySelector('.home');

  window.addEventListener('load', () => {
    const currentPage = window.location.pathname;

    links.forEach(link => {
      if (currentPage === '/header-test/') {
        // на живій сторінці працює варіант currentPage === '/header-test/'
        homeLink.classList.add('active-link');
      } else {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active-link');
        }
      }

      // console.log test
      console.log(currentPage);
      console.log(window.location.pathname);
      console.log(currentPage === '/header-test/');
      console.log(link.getAttribute('href') === currentPage);
    });
  });
}

changeActiveLink();

// function changeActiveLink() {
//   const links = document.querySelectorAll('.nav-link');
//   const homeLink = document.querySelector('.home');

//   window.addEventListener('load', () => {
//     const currentPage = window.location.href;

//     links.forEach(link => {
//       if (currentPage === 'https://veronikavaraksina1.github.io/header-test/') {
//         homeLink.classList.add('active-link');
//       } else {
//         if (link.getAttribute('href') === currentPage) {
//           link.classList.add('active-link');
//         }
//       }
//     });
//   });
// }
