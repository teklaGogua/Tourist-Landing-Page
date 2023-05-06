'use strict';

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
    data.forEach(user => {
      const markup0 = `<li><a class="name-api">${user.name}</a></li>`;
      const markup1 = `<li><a class="api-link" href="mailto:${user.email}">${user.email}</a></li>`;
      const markup2 = `<li><a class="api-link" href="tel:${user.phone}">${user.phone}</a></li>`;

      const wholeMarkup = `<div class="api-box"><ul class="api-list">${
        markup0 + markup1 + markup2
      }</ul></div>`;
      document
        .getElementById('api')
        .insertAdjacentHTML('beforeend', wholeMarkup);
    });
  })
  .catch(err => console.log(err));
