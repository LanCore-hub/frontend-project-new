import { changeStyleBlog } from './blogStyle.js';

const savedStyle = localStorage.getItem('view');
changeStyleBlog(savedStyle);
