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

  window.addEventListener('load', () => {
    const currentPage = window.location.pathname;

    if (currentPage.includes('index.html')) {
      links[0].classList.add('active-link');
      links[2].classList.add('active-link');
    } else if (currentPage.includes('page-2.html')) {
      links[1].classList.add('active-link');
      links[3].classList.add('active-link');
    }
  });
}

// function changeActiveLink() {
//   const links = document.querySelectorAll('.nav-link');
//   const homeLink = document.querySelector('.home');

//   window.addEventListener('load', () => {
//     const currentPage = window.location.pathname;

//     links.forEach(link => {
//       if (currentPage.includes('index.html')) {
//         link.classList.add('active-link');
//       } else {
//         homelink.forEach(link => {
//           link.classList.add('active-link');
//         });
//       }
//     });

//     // console.log test
//     // console.log(currentPage);
//     // console.log(window.location.pathname.includes('index.html'));
//     // console.log(currentPage === '/header-test/');
//     // console.log(link.getAttribute('href') === currentPage);
//   });
// }

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
