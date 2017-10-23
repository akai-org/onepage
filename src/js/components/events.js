const $ = require("jquery");

const Events = (() => {

  const api = {};

  const informationList = (list) => {
    if (list instanceof Array) {
      return `
        <div class="event-detail--learn">
          <strong>Dowiesz się:</strong>
          <ul>
            ${ list.map(el => `<li>${el}</li>`).join("\n") }
          </ul>
        </div>
      `;
    } else {
      return '';
    }
  };

  const informationText = (text) => {
    if (text) {
      return `
        <div class="event-detail--about">
          <strong>O prelegencie</strong>
          <p>${text}</p>
        </div>
      `;
    } else {
      return '';
    }
  };

  const expandableDetails = (text, list) => {
    if (text || list) {
      return `
        <div class="event-detail--more">
          ${ informationText(text) }
          ${ informationList(list) }
        </div>
        <p class="event-detail--toggle">Pokaż więcej</p>
      `;
    } else {
      return '';
    }
  };

  const photo = (image) => {
    if (image === undefined) return '';
    const {src, alt} = image;

    if (src) {
      return `
        <div class="event-detail--photo">
          <img src="${src}" alt="${alt}">
        </div>
      `;
    }
  };

  const timeColumn = (time) => {
    if (time) {
      return `
        <div class="event-detail--time">
          ${time}
        </div>
        <div class="divider"></div>
      `;
    } else {
      return '';
    }
  };

  const authorName = (name) => {
    if (name) {
      return `
        <div class="event-detail--author">
          ${name}
        </div>
      `;
    } else {
      return '';
    }
  };

  const mainDescription = (title, author) => {
    if (title) {
      return `
        <div class="event-detail--title">
          ${title}
        </div>
        ${ authorName(author) }
      `;
    } else {
      return '';
    }
  };

  const compileEvents = (events) => {
    if (events instanceof Array) {
      return events.map((event) => {
        const {title, time, author, aboutAuthor, information, image} = event;

        if (title || authorName || time || aboutAuthor || information || image) {
          return `
            <div class="event-detail">
              ${ timeColumn(time) }
              <div class="event-detail--description">
                ${ mainDescription(title, author) }
                ${ expandableDetails(aboutAuthor, information) }
              </div>
              ${ photo(image) }
            </div>
          `;
        } else {
          return '';
        }
      }).join("\n");
    } else {
      return '';
    }
  }

  api.compile = (data) => {
    const {events} = data;

    return `
      <section class="events" id="#events">
        <div class="container">
          ${ compileEvents(events) }
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
