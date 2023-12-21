export function changeStyleBlog(view) {
  const listBtn = document.querySelector('.inretesting-states__btn-list');
  const gridBtn = document.querySelector('.inretesting-states__btn-grid');

  const wrap = document.querySelector('.inretesting-states__wrapper');
  const blogs = document.querySelectorAll('.blog');
  const blogimg_List = document.querySelectorAll('.blog__img');

  localStorage.setItem('view', view);

  if (view == 'list') {
    wrap.classList.remove('inretesting-states__wrapper--grid');
    wrap.classList.add('inretesting-states__wrapper--list');

    gridBtn.classList.remove('inretesting-states__btn--active');
    listBtn.classList.add('inretesting-states__btn--active');

    blogs.forEach((blog) => blog.classList.add('blog--list'));
    blogimg_List.forEach((blog_img) => blog_img.classList.add('blog__img--list'));
  } else {
    wrap.classList.remove('inretesting-states__wrapper__wrapper--list');
    wrap.classList.add('inretesting-states__wrapper--grid');

    listBtn.classList.remove('inretesting-states__btn--active');
    gridBtn.classList.add('inretesting-states__btn--active');

    blogs.forEach((blog) => blog.classList.remove('blog--list'));
    blogimg_List.forEach((blog_img) => blog_img.classList.remove('blog__img--list'));
  }
}

document.querySelector('.inretesting-states__btn-list').addEventListener('click', () => {
  changeStyleBlog('list');
});

document.querySelector('.inretesting-states__btn-grid').addEventListener('click', () => {
  changeStyleBlog('grid');
});
