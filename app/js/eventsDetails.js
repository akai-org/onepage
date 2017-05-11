var eventsMore = $('.event-detail--more');
var toggle = $('.event-detail--toggle');
var num = eventsMore.length;
var toggleSpeed = 1000;

for (var i=0; i<num; i++){
    $(eventsMore[i]).attr("id","more-"+i);
    $(toggle[i]).attr("id","toggle-"+i);
    $(toggle[i]).attr("value",""+i);
}

//numbers before photos:
var numbers = $('.event-detail--photo::before');
for (var j=1; j<=numbers.length; j++){
    console.log(numbers);
}


var toggleDescription = function(){
    var id = this.getAttribute("value");
    var more = $('#more-'+id);  //element to show/hide
    var btn = $('#toggle-'+id);
    more.css("height", "auto");
    var height = more.outerHeight(true);

    more.toggleClass("event-detail--more--show");
    if (more.hasClass("event-detail--more--show")){
        more.css("height", 0);
        more.stop().animate({
        height: height
        }, toggleSpeed, function(){btn.html("Pokaż mniej");});

    }
    else{

        more.stop().animate({
            height: 0
        }, toggleSpeed,function(){btn.html("Pokaż więcej");});
    };





};

toggle.on("click", toggleDescription);

