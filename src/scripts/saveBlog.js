document.addEventListener('DOMContentLoaded', () => {
  fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=6')
    .then((response) => response.json())
    .then((blogs) => {
      const inretestingStatesWrapper = document.querySelector('.inretesting-states__wrapper');
      blogs.forEach((blog) => {
        const newBlog = createPostElement(blog);
        inretestingStatesWrapper.appendChild(newBlog);
      });
    })
    .catch((error) => console.error('Ошибка:', error));
});

function createPostElement(blog) {
  const newBlog = document.createElement('article');
  newBlog.classList.add('blog');

  const blogImg = document.createElement('img');
  blogImg.src = blog.jetpack_featured_media_url;
  blogImg.className = 'blog__img';
  blogImg.alt = '';
  newBlog.appendChild(blogImg);

  const blogBody = document.createElement('div');
  blogBody.className = 'blog__body';

  const blogInfo = document.createElement('div');
  blogInfo.className = 'blog__info';

  const blogTitle = document.createElement('div');
  blogTitle.className = 'blog__title';

  const textTitle1 = document.createElement('h3');
  textTitle1.innerHTML = blog.title.rendered;
  blogTitle.appendChild(textTitle1);

  const blogDescription = document.createElement('div');
  blogDescription.className = 'blog__description';
  blogDescription.innerHTML = blog.excerpt.rendered;

  blogInfo.appendChild(blogTitle);
  blogInfo.appendChild(blogDescription);

  const blogDate = new Date(blog.date);
  const isDate = blogDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const time = Math.floor(Math.random() * 15) + 1;

  const blogAvatarAndDate = document.createElement('div');
  blogAvatarAndDate.className = 'blog__avatar-and-date';

  const blogAvatarAndDate__text = document.createElement('div');
  blogAvatarAndDate__text.className = 'blog__avatar-and-date-text';

  const blogAvatarAndDateDecr = document.createElement('p');
  blogAvatarAndDateDecr.className = 'blog__avatar-and-date-descr';
  blogAvatarAndDateDecr.textContent = `${isDate} · ${time} min read`;
  blogAvatarAndDate__text.appendChild(blogAvatarAndDateDecr);
  blogAvatarAndDate.appendChild(blogAvatarAndDate__text);

  blogBody.appendChild(blogInfo);
  blogBody.appendChild(blogAvatarAndDate);
  newBlog.appendChild(blogBody);

  return newBlog;
}
