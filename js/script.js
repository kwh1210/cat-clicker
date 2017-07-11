var $cc1 = $('#clicks1');
var $cc2 = $('#clicks2');
var $cc3 = $('#clicks3');
var $cc4 = $('#clicks4');
var $cc5 = $('#clicks5');
var $cc6 = $('#clicks6');


var $ct1 = $('#catname1');
var $ct2 = $('#catname2');
var $ct3 = $('#catname3');
var $ct4 = $('#catname4');
var $ct5 = $('#catname5');
var $ct6 = $('#catname6');

var $main = $('#main');

var cat1 = {
    name : "Annie",
    click : 0
}

var cat2 = {
    name : "Bob",
    click : 0
}
var cat3 = {
    name : "Carter",
    click : 0
}

var cat4 = {
    name : "Dick",
    click : 0
}
var cat5 = {
    name : "Emma",
    click : 0
}

var cat6 = {
    name : "Flynne",
    click : 0
}
 $ct1.text(cat1.name)
 $ct2.text(cat2.name)
 $ct3.text(cat3.name)
 $ct4.text(cat4.name)
 $ct5.text(cat5.name)
 $ct6.text(cat6.name)

//first cat
$('#c1').click(function() {
   if($('#c1').is(':checked')) {
	  var str = '<img id="cat1" src="http://lorempixel.com/500/500/cats/1" /> <h3>Number of Click : </h3><h3 id="clicks1"> %s </h3>'
	  var stri = str.replace('%s',cat1.click)
    $("#main").empty()
   	$("#main").append(stri)

}});

$('#main').on('click','img#cat1',function(){
  cat1.click++;
  $cc1.text(cat1.click);
  $("#clicks1").empty()
  $("#clicks1").append(cat1.click) 
})



//second cat
$('#c2').click(function() {
   if($('#c2').is(':checked')) {
    var str = '<img id="cat2" src="http://lorempixel.com/500/500/cats/2" /> <h3>Number of Click : </h3><h3 id="clicks2"> %s </h3>'
    var stri = str.replace('%s',cat2.click)
    $("#main").empty()
    $("#main").append(stri)

}});

//third cat
$('#main').on('click','img#cat2',function(){
  cat2.click++;
  $cc2.text(cat2.click);
  $("#clicks2").empty()
  $("#clicks2").append(cat2.click) 
})


//////////////third cat
$('#c3').click(function() {
   if($('#c3').is(':checked')) {
    var str = '<img id="cat3" src="http://lorempixel.com/500/500/cats/3" /> <h3>Number of Click : </h3><h3 id="clicks3"> %s </h3>'
    var stri = str.replace('%s',cat3.click)
    $("#main").empty()
    $("#main").append(stri)

}});

$('#main').on('click','img#cat3',function(){
  cat3.click++;
  $cc3.text(cat3.click);
  $("#clicks3").empty()
  $("#clicks3").append(cat3.click) 
})


//////////////FOURTH cat
$('#c4').click(function() {
   if($('#c4').is(':checked')) {
    var str = '<img id="cat4" src="http://lorempixel.com/500/500/cats/4" /> <h3>Number of Click : </h3><h3 id="clicks4"> %s </h3>'
    var stri = str.replace('%s',cat4.click)
    $("#main").empty()
    $("#main").append(stri)

}});

$('#main').on('click','img#cat4',function(){
  cat4.click++;
  $cc4.text(cat4.click);
  $("#clicks4").empty()
  $("#clicks4").append(cat4.click) 
})


//////////////FIFTH cat
$('#c5').click(function() {
   if($('#c5').is(':checked')) {
    var str = '<img id="cat5" src="http://lorempixel.com/500/500/cats/5" /> <h3>Number of Click : </h3><h3 id="clicks5"> %s </h3>'
    var stri = str.replace('%s',cat5.click)
    $("#main").empty()
    $("#main").append(stri)

}});

$('#main').on('click','img#cat5',function(){
  cat5.click++;
  $cc5.text(cat5.click);
  $("#clicks5").empty()
  $("#clicks5").append(cat5.click) 
})

//////////////SIXTH cat
$('#c6').click(function() {
   if($('#c6').is(':checked')) {
    var str = '<img id="cat6" src="http://lorempixel.com/600/600/cats/6" /> <h3>Number of Click : </h3><h3 id="clicks6"> %s </h3>'
    var stri = str.replace('%s',cat6.click)
    $("#main").empty()
    $("#main").append(stri)

}});

$('#main').on('click','img#cat6',function(){
  cat6.click++;
  $cc6.text(cat6.click);
  $("#clicks6").empty()
  $("#clicks6").append(cat6.click) 
})

