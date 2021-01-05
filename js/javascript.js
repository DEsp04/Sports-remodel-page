/* We are going to change color of the h1 text */

const logoElement = document.getElementById("logotext");

logoElement.innerHTML = logoElement.innerHTML.replace("D'S", "<span style='color: white; -webkit-text-stroke: 1.8px #224579;'>D'S</span>");

logoElement.innerHTML = logoElement.innerHTML.replace("SC", "<span style='color: yellow; -webkit-text-stroke: 1.8px #224579'>SC</span>");


/* We are going to change colors of 'a' texts; when one 'a' text is hover the rest changes color. Also we include it to the drop-down*/

$("#home-text").mouseover(function() {
	$("#nba-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#home-text").mouseout(function() {
	$("#nba-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#nba-text").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#nba-text").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#nba-hl").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#nba-hl").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});


$("#nfl-text").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#nfl-text").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#nfl-hl").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#nfl-hl").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#mlb-text").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#mlb-text").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#mlb-hl").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#mlb-hl").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#nhl-text").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#nhl-text").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#nhl-hl").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#nhl-hl").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#e-icon").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#e-icon").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#ddul2-flex").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#ddul2-flex").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#sports-text").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#sports-text").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#show-text").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#show-text").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});


$("#ddul3").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#ddul3").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#ticks-text").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#ticks-text").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#sign-text").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#login-text").css("color", "gray");
});
                            
$("#sign-text").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#login-text").css("color", "#224579");
});

$("#login-text").mouseover(function() {
	$("#home-text").css("color", "gray");
	$("#nfl-text").css("color", "gray");
	$("#mlb-text").css("color", "gray");
	$("#nba-text").css("color", "gray");
	$("#e-icon").css("color", "gray");
	$("#show-text").css("color", "gray");
	$("#nhl-text").css("color", "gray");
	$("#sports-text").css("color", "gray");
	$("#ticks-text").css("color", "gray");
	$("#sign-text").css("color", "gray");
});
                            
$("#login-text").mouseout(function() {
	$("#home-text").css("color", "#224579");
	$("#nfl-text").css("color", "#224579");
	$("#mlb-text").css("color", "#224579");
	$("#nba-text").css("color", "#224579");
	$("#e-icon").css("color", "#224579");
	$("#show-text").css("color", "#224579");
	$("#nhl-text").css("color", "#224579");
	$("#sports-text").css("color", "#224579");
	$("#ticks-text").css("color", "#224579");
	$("#sign-text").css("color", "#224579");
});



/* When hamburger icon is click and the side bar slide open and close */


let sideBar = document.getElementById("mysidebar");
let mainWebpageContent = document.getElementById("main-webpage-content");

function myFunction() {
	if (sideBar.style.width === "200px" || mainWebpageContent.style.marginLeft === "200px") {
		sideBar.style.width = "0";
		mainWebpageContent.style.marginLeft = "0";
		mainWebpageContent.style.transition = "margin-left 0.01s";
		
		
	} else {
		sideBar.style.width = "200px";
		mainWebpageContent.style.marginLeft = "200px";
		mainWebpageContent.style.transition = "margin-left 0.01s";
		
	}	
};


/* The function below was created to allow sidebar fade away and have the main content width return back to its normal width size as the screen width is being shrunk or expanded */

const puttingMainBack =(x) => {
  	if (x.matches) {
    		mainWebpageContent.style.marginLeft = "0";
  	} else if (sideBar.style.width !== "200px") {
		mainWebpageContent.style.marginLeft = "0";
		
	}
		else {
		mainWebpageContent.style.marginLeft = "200px";
		mainWebpageContent.style.transition = "margin-left 0.0001s";
		}
};

let x = window.matchMedia("(min-width: 768px)");

x.addListener(puttingMainBack);



/* Below we going to code for the article to slide automatically or manually */

let articleIndex = 1;
let timer = null;
showArticles(articleIndex);

const currentArticle = (n) => {
  clearTimeout(timer);
  showArticles(articleIndex = n);
}

function showArticles(n) {
 let k;
 let articles = document.getElementsByClassName("slide");
 let  circles = document.getElementsByClassName("circle");
  if (n == undefined) {
    n = ++articleIndex;
  } else if (n > articles.length) {
    articleIndex = 1;
  } else if (n < 1) {
    articleIndex = articles.length;
  }
  
 for (k = 0; k < articles.length; k++) {
      articles[k].style.display = "none";
  }
 for (k = 0; k < circles.length; k++) {
      circles[k].className = circles[k].className.replace(" active", "");
  }
 articles[articleIndex-1].style.display = "block";
 circles[articleIndex-1].className += " active";
 timer = setTimeout(showArticles, 5000);
}




















