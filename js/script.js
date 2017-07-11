/* ======= Model ======= */

var model = {
    currentCat: null,
    adminMode : false,
    cats: [
        {
            clickCount : 0,
            name : 'Abby',
            imgSrc : "http://lorempixel.com/500/500/cats/1",
        },
        {
            clickCount : 0,
            name : 'Bob',
            imgSrc : "http://lorempixel.com/500/500/cats/2",
        },
        {
            clickCount : 0,
            name : 'Carol',
            imgSrc : "http://lorempixel.com/500/500/cats/3",
        },
        {
            clickCount : 0,
            name : 'Doggy',
            imgSrc : "http://lorempixel.com/500/500/cats/4",
        },
        {
            clickCount : 0,
            name : 'Emma',
            imgSrc : "http://lorempixel.com/500/500/cats/5",
        }
    ]
};


/* ======= Octopus ======= */

var octopus = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
        admin.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    },
    openAdmin:function(){
        model.adminMode =true;
        admin.render();
    },
    closeAdmin:function(){
        model.adminMode =false;
        admin.render();
    },
    updateAdmin:function(){
        if($('#newName').val()) model.currentCat.name = $('#newName').val();
        if($('#newURL').val()) model.currentCat.imgSrc = $('#newURL').val();
        if($('#newClicks').val()) model.currentCat.clickCount = $('#newClicks').val();
        catListView.render();
        catView.render();

    }
};


/* ======= View ======= */

var admin={
    init:function(){
        this.adminButtonElem = document.getElementById('admin');
        this.form = document.getElementById('form')
        $('form').hide()
        // admin mode on click
        this.adminButtonElem.addEventListener('click',function(){
            console.log("here?")
            if( model.adminMode == false) octopus.openAdmin();
            else octopus.closeAdmin();
        })
        this.submitButtonElem = document.getElementById('submit');

        this.submitButtonElem.addEventListener('click',function(){
            octopus.updateAdmin()
        })

    },
    render: function(){
        if( model.adminMode == false){ $('form').hide()}
        else if(model.adminMode == true) {$('form').show()}
    }
}


var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');
        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });



        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();