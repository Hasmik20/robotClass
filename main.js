const div1 = document.querySelector("#phase1");
const div2 = document.querySelector("#phase2");
const div3 = document.querySelector("#phase3");
const date = new Date();
const currentYear = date.getFullYear();

class Robot{
  constructor(img,name,phase,year){
    this.img = img;
    this.name = name;
    this.phase = phase;
    this.year = year;
  }
  age(){
    return currentYear - this.year;
  }
  show(){
    return `<img src='${this.img}'>
    <ul> <li> <strong> Name:</strong> ${this.name}</li> <li> <strong>Phase:</strong> ${this.phase}</li> <li><strong> Year:</strong> ${this.year}</li> <li><strong> Age:</strong> ${this.age()}</li> </ul>`
  }
}
class SpeakingModel extends Robot{
  constructor(img,name,phase,year, lang){
    super (img,name,phase,year);
    this.lang = lang;
    
  }
  talk(){
    return `<p><strong> Model features:</strong> speak and translate in ${this.lang} </p> `
  }
}
class DancingModel extends SpeakingModel{
  constructor(img,name,phase,year, lang,hand, leg, dance){
    super(img,name,phase,year, lang)
    this.lang = lang;
    this.dance = dance;
    this.hand = hand;
    this.leg = leg;
  }
  show(){
    return ` ${super.show()}<ul> <li><strong> Movable hands:</strong> ${this.hand}</li><li><strong> Movable legs:</strong> ${this.leg}</li> </ul>`
  }// add super.show() method and add any features for list, but before add hand,leg property to constructor
dancing(){
  return `<p><strong>New Model features:</strong> dance ${this.dance}`
}

}
class CommunicatingModel extends Robot{
  constructor(img,name,phase,year, eye,mouth,){
    super(img,name,phase,year)
    this.eye = eye;
    this.mouth = mouth;
  }

  communicate(){
    return `<p><strong>New Model features:</strong>  ${this.eye} and ${this.mouth}</p> `
  }
}

const roberto = new SpeakingModel(this.img,"Roberto", 1, 2000,["English","Spanish"]);
roberto.img = "https://projects-static.raspberrypi.org/projects/robot-antenna/23faa1d75132fb616349e1c991f74ead5d70054a/en/images/banner.png";



const nintedo  = new DancingModel(this.img,"Nintedo",2,2010,["English", " Spanish", " Armenian"], "2 hands", "2 legs",  ["cha-cha-cha", " rumba"," samba"]);
nintedo.img = "https://sc01.alicdn.com/kf/H83dfa227a59641b29c7be3e9dc59d5d7k.jpg";

const sofia  = new CommunicatingModel(this.img,"Sofia",3,2016," sustain eye contact", "able to process speech and have conversations" );
sofia.img = "https://worldtechpedia.com/wp-content/uploads/2018/01/Sophia-Robot.jpg";



div1.innerHTML = ` ${roberto.show()} ${roberto.talk()}` ;
div2.innerHTML = ` ${nintedo.show()} ${nintedo.talk()} ${nintedo.dancing()}` ;
div3.innerHTML = ` ${sofia.show()}  ${sofia.communicate()}` ;
