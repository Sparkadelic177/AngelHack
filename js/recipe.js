const url = "https://api.edamam.com/search" + "?app_id=980ca4b6" + "&app_key=7c666fe7a8e006a58ce179d52dd3d093" + "&q=chicken";
fetch(url)
  .then(res => res.json())
  .then(json => console.log(json.hits));

var image = document.getElementsByClassName('card');
image.append(.json.hits[0].recipe.image);
