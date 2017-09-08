const $ = require("jquery");

const Events = (() => {

  const api = {};

  api.compile = (data) => {
    var {events} = data;
    var compiledEvents = events.map((event) => {
      var {title, time, author, aboutAuthor, information, image} = event;
      var compiledInformation = information.map(info => `<li>${info}</li>`).join("\n");

      return `
        <div class="event-detail">
          <div class="event-detail--time">
            ${time}
          </div>
          <div class="divider"></div>
          <div class="event-detail--description">
            <div class="event-detail--title">
              ${title}
            </div>
            <div class="event-detail--author">
              ${author}
            </div>
            <div class="event-detail--more">
              <div class="event-detail--about">
                <strong>O prelegencie</strong>
                <p>${aboutAuthor}</p>
              </div>
              <div class="event-detail--learn">
                <strong>Dowiesz się:</strong>
                <ul>
                  ${compiledInformation}
                </ul>
              </div>
            </div>
            <p class="event-detail--toggle">Pokaż więcej</p>
          </div>
          <div class="event-detail--photo">
            <img src="${image.src}" alt="${image.alt}">
          </div>
        </div>
      `;
    }).join("\n");

    return `
      <section class="events" id="#events">
        <div class="container">
          ${compiledEvents}
        </div>
      </section>
    `;
  };

  api.componentReady = () => {
    var eventsMore = $('.event-detail--more');
    var toggle = $('.event-detail--toggle');
    var num = eventsMore.length;
    var toggleSpeed = 1000;

    for (var i = 0; i < num; i++) {
      $(eventsMore[i]).attr("id", "more-" + i);
      $(toggle[i]).attr("id", "toggle-" + i);
      $(toggle[i]).attr("value", "" + i);
    }

    var toggleDescription = function () {
      const marginTop = 20;
      var id = this.getAttribute("value");
      var more = $('#more-' + id);  //element to show/hide
      var btn = $('#toggle-' + id);
      more.css("height", "auto");
      var height = more.outerHeight(true) - marginTop;

      more.toggleClass("event-detail--more--show");
      if (more.hasClass("event-detail--more--show")) {
        more.css("height", 0);
        more.stop().animate({
          height: height
        }, toggleSpeed, function () {
          btn.html("Pokaż mniej");
        });
      } else {
        more.stop().animate({
          height: 0
        }, toggleSpeed, function () {
          btn.html("Pokaż więcej");
        });
      }
    };

    toggle.on("click", toggleDescription);
  };

  return {
    name: "events",
    api: api,
    selector: "#events"
  };
})();

module.exports = Events;
