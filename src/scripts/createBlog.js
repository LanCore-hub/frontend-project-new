const form = document.querySelector('.form');
const btnAdd = document.querySelector('.form__btn-add');
const btnCancel = document.querySelector('.form__btn-cancel');
const btnCreate = document.querySelector('.form__btn-create');

const blogTitle = document.querySelector('#title');
const blogImg = document.querySelector('#img');
const blogDescription = document.querySelector('#description');

btnAdd.addEventListener('click', () => {
  form.classList.remove('show-or-hide');
  btnAdd.classList.add('show-or-hide');
});

btnCancel.addEventListener('click', (e) => {
  e.preventDefault();

  btnAdd.classList.remove('show-or-hide');
  form.classList.add('show-or-hide');

  blogTitle.value = '';
  blogImg.value = '';
  blogDescription.value = '';
});

btnCreate.addEventListener('click', (e) => {
  e.preventDefault();

  if (blogTitle.value.trim() === '' || blogImg.value.trim() === '' || blogDescription.value.trim() === '') {
    return;
  }

  const nowDate = new Date();
  const rulesDate = { year: 'numeric', month: 'short', day: 'numeric' };
  const dateStr = nowDate.toLocaleDateString('en-US', rulesDate);
  const time = Math.floor(Math.random() * 15) + 1;

  const newBlog = document.createElement('article');
  newBlog.className = 'blog';

  const blogImg1 = document.createElement('img');
  blogImg1.className = 'blog__img';
  blogImg1.src = blogImg.value;
  blogImg1.alt = '';
  newBlog.appendChild(blogImg1);

  const blogBody = document.createElement('div');
  blogBody.className = 'blog__body';

  const blogInfo = document.createElement('div');
  blogInfo.className = 'blog__info';

  const blogTitleDiv = document.createElement('div');
  blogTitleDiv.className = 'blog__title';

  const textTitle = document.createElement('h3');
  textTitle.textContent = blogTitle.value;
  blogTitleDiv.appendChild(textTitle);

  const blogDescriptionDiv = document.createElement('div');
  blogDescriptionDiv.className = 'blog__description';

  const textDescription = document.createElement('p');
  textDescription.textContent = blogDescription.value;
  blogDescriptionDiv.appendChild(textDescription);

  blogInfo.appendChild(blogTitleDiv);
  blogInfo.appendChild(blogDescriptionDiv);

  const blogAvatarAndDate = document.createElement('div');
  blogAvatarAndDate.className = 'blog__avatar-and-date';

  const blogAvatarAndDateText = document.createElement('div');
  blogAvatarAndDateText.className = 'blog__avatar-and-date-text';

  const blogAvatarAndDateDescr = document.createElement('p');
  blogAvatarAndDateDescr.className = 'blog__avatar-and-date-descr';
  blogAvatarAndDateDescr.textContent = `${dateStr} · ${time} min read`;
  blogAvatarAndDateText.appendChild(blogAvatarAndDateDescr);
  blogAvatarAndDate.appendChild(blogAvatarAndDateText);

  blogBody.appendChild(blogInfo);
  blogBody.appendChild(blogAvatarAndDate);
  newBlog.appendChild(blogBody);

  const interestingStatesWrapper = document.querySelector('.inretesting-states__wrapper');
  interestingStatesWrapper.appendChild(newBlog);

  btnAdd.classList.remove('show-or-hide');
  form.classList.add('show-or-hide');

  blogTitle.value = '';
  blogImg.value = '';
  blogDescription.value = '';
});
