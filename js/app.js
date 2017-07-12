var initialCats = [

{
  clickCount : 0,
  name : 'Abby',
  imgSrc :'http://lorempixel.com/500/500/cats/1',
  nicknames : [{ name: 'Fart' },
               { name: 'Titsgrober' },
               { name: 'Punani' }]
},
{
  clickCount : 0,
  name : 'Bob',
  imgSrc :'http://lorempixel.com/500/500/cats/2',
  nicknames : [{ name: 'Josh' },
               { name: 'Banby' }]
},
{
  clickCount : 3,
  name : 'Cathy',
  imgSrc :'http://lorempixel.com/500/500/cats/3',
  nicknames : [{ name: 'Mars' },
               { name: 'Panini' }]
},
{
  clickCount : 0,
  name : 'Dick',
  imgSrc :'http://lorempixel.com/500/500/cats/4',
  nicknames : [{ name: 'Asshole' }]
},
{
  clickCount : 6,
  name : 'Emma',
  imgSrc :'http://lorempixel.com/500/500/cats/5',
  nicknames : [{ name: 'Zesus' },
               { name: 'Zeus' },
               { name: 'Tommyboy' }]
}


]
var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc)
    this.catlevel = ko.computed(function(){
      if(this.clickCount() < 10) return "newborn"
      else return "time to fuck(TTF)"
    },this);

    this.nicknames = ko.observableArray(
      data.nicknames
    );
}


var ViewModel = function(){
    var self =this

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    })

    this.currentCat = ko.observable(this.catList()[0])
  
    this.incrementCounter = function(){
        self.currentCat().clickCount(self.currentCat().clickCount() + 1)
    };

    this.setNewCat =function(){
        self.currentCat(this)
    }
}







ko.applyBindings(new ViewModel)