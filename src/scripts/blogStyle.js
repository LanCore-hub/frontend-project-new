function changeStyleBlog(view) {
  const wrap = document.querySelector('.inretesting-states__wrapper');
  const blogs = document.querySelectorAll('.blog');

  localStorage.setItem('view', view);

  if (view == 'list') {
    wrap.classList.remove('inretesting-states__wrapper--grid');
    wrap.classList.add('inretesting-states__wrapper--list');

    GridSVG.classList.remove('inretesting-states__svg--active');
    ListSVG.classList.add('inretesting-states__svg--active');

    blogs.forEach((post) => post.classList.add('blog--list'));
  } else {
    wrap.classList.remove('inretesting-states__wrapper__wrapper--list');
    wrap.classList.add('inretesting-states__wrapper--grid');

    ListSVG.classList.remove('inretesting-states__svg--active');
    GridSVG.classList.add('inretesting-states__svg--active');

    blogs.forEach((post) => post.classList.remove('blog--list'));
  }
}

const ListSVG = document.querySelector('.inretesting-states__svg-list');
const GridSVG = document.querySelector('.inretesting-states__svg-grid');

document.querySelector('.inretesting-states__btn-list').addEventListener('click', () => {
  changeStyleBlog('list');
});

document.querySelector('.inretesting-states__btn-grid').addEventListener('click', () => {
  changeStyleBlog('grid');
});
