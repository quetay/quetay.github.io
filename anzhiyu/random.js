var posts=["2025/10/22/hello-world/","2025/10/24/LoserTree/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };