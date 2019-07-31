var gitalk = new Gitalk({
  "clientID": "a181f72119b1aba79e7a",
  "clientSecret": "89b608e964480dfe417ec9076353a07e19071e57",
  "repo": "https://ifengzp.github.io/vue-review/",
  "owner": "ifengzp",
  "admin": ["ifengzp"],
  "id": window.location.pathname,
  "distractionFreeMode": false
});
gitalk.render("gitalk-container");