const $ = require("jquery");

const DateAndVenue = (() => {

  const api = {};

  api.compile = (data) => {
    var {date, time, venue, venueDetails} = data;
    return `
      <section class="date" id="date">
        <div class="container">
          <div class="row">
            <div class="column">
              <img src="img/time.png" alt="Data i godzina">
              <span class="date-value">${date}</span>
              <span class="time-value">Godzina ${time}</span>
            </div>
            <div class="column">
              <img src="img/venue.png" alt="Miejsce">
              <span class="venue">${venue}</span>
              <span class="venue-details">${venueDetails}</span>
            </div>
          </div>
          <div class="calendar">
            <a class="calendar-add" href="#">Dodaj do kalendarza</a>
            <div class="calendar-options">
              <a class="calendar-type" href="#">
                <i class="fa fa-google" aria-hidden="true"></i>
                Google Calendar
              </a>
              <a class="calendar-type" href="#">
                <i class="fa fa-apple" aria-hidden="true"></i>
                Apple iCal
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  };

  api.componentReady = () => {
    $('.calendar-add').on('click', (e) => {
      const $this = $(e.currentTarget);

      e.preventDefault();
      $this.fadeOut(200, () => {
        console.log('callback');
        console.log($('.calendar-options'));
        $('.calendar-options').fadeIn(200);
      });
    });
  };

  return {
    name: "dateAndVenue",
    api: api,
    selector: "#date"
  };
})();

module.exports = DateAndVenue;
