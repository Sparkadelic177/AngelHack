// var image = document.getElementsByTagName('img');
// const url = "https://api.edamam.com/search" + "?app_id=980ca4b6" + "&app_key=7c666fe7a8e006a58ce179d52dd3d093" + "&q=chicken";
// fetch(url)
//   .then(res => res.json())
//   .then(json =>
//     image.append(json.hits[0].recipe.image));

var graphTab = document.getElementById('graph-tab');
var recipeTab = document.getElementById('recipe-tab');
var settingsTab = document.getElementById('settings-tab');
var signOutTab = document.getElementById('signOut-tab');
var canvas = document.getElementById("myChart");
var recipes = document.getElementsByClassName("recipes");
var settings = document.getElementsByClassName("settings");

var myBarChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ["Sunday","Monday","Tuesday","Wensday","Thursday","Friday","Saturday"],
      datasets: [
        {
          Label: "Spendings",
          backgroundColor:"rgba(72,79,219,0.2)",
          borderColor:"rgba(72,79,219,1)",
          borderWidth:5,
          data: [12, 19, 3, 5, 2, 3, 10],
    }]
  },
  options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       }
   }
});

recipeTab.addEventListener('click',function(){
  for(var i = 0; i < recipes.length; i++){
    recipes[i].style.opacity = "1";
  }
  canvas.remove();
  canvas.style.opacity = "0";
  // settings.style.opacity = "0";
});
