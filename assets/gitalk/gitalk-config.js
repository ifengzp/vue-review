var gitalk = new Gitalk({
  "clientID": "a181f72119b1aba79e7a",
  "clientSecret": "89b608e964480dfe417ec9076353a07e19071e57",
  "repo": "vue-review",
  "owner": "ifengzp",
  "admin": ["ifengzp"],
  "id": decodeURI(window.location.pathname).replace('/vue-review/', '/'),
  "distractionFreeMode": false
});
gitalk.render("gitalk-container");