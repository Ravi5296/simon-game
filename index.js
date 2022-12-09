let color = ["green","red","yellow","blue"];
let user = [];
let com = [];
let level = 0;

let btns = document.querySelectorAll(".btn");

document.querySelector("body").onkeydown = function(){
  document.querySelector("h1").innerHTML = "level 1"; 
  generate();
};

for(let a = 0; a < 4; a++){
  btns[a].addEventListener("click",function(){
    user.push(this.id) 
    clickAnimation(this.id)
    check(user.length-1)
  });
}

function check(l){
  if(user[l] === com[l]){
    if(user.length === com.length){
      level++;
      document.querySelector("h1").innerHTML = "level" + level; 
      generate();
    }
  }
  else{
    document.querySelector("body").style.backgroundColor = "red"
  }
}

function generate(){
  user = [];
  let rand = Math.floor(Math.random()*4);
  com.push(color[rand]);
  seqAnimation(rand);
}

function clickAnimation(rand){
  document.querySelector("#" + rand).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("#" + rand).classList.remove("pressed");
  },100);
}

function seqAnimation(rand){
  document.querySelector("#" + color[rand]).style.visibility = "hidden";

  setTimeout(function(){
    document.querySelector("#" + color[rand]).style.visibility = "visible";
  },100);
}

