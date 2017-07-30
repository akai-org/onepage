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
          <div class="event-detail--separator"><div></div></div>
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
                <p>
                  ${aboutAuthor}
                </p>
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
          <div style="clear: both;"></div>
        </div>
      `;
    }).join("\n");

    return `
      <section class="event-detail-container" id="#events">
        <div class="container">
          ${compiledEvents}
        </div>
      </section>
    `;
  };

  api.componentReady = () => {
    // console.log("Events ready");
  };

  return {
    name: "Events",
    api: api,
    selector: "#events"
  };
})();

module.exports = Events;
