const $ = require("jquery");

const DateAndVenue = (() => {

  const api = {};

  const dateColumn = (date, time) => {
    if (date && time) {
      return `
        <div class="column">
          <img src="img/time.png" alt="Data i godzina">
          <span class="date-value">${date}</span>
          <span class="time-value">Godzina ${time}</span>
        </div>
      `;
    } else {
      return '';
    }
  };

  const venueColumn = (venue, details) => {
    if (venue && details) {
      return `
        <div class="column">
          <img src="img/venue.png" alt="Miejsce">
          <span class="venue">${venue}</span>
          <span class="venue-details">${details}</span>
        </div>
      `;
    } else {
      return '';
    }
  };

  const calendar = (data) => {
    const google = (link) => {
      if (link) {
        return `
          <a class="calendar-type" target="_blank" href="${link}">
            <i class="fa fa-google" aria-hidden="true"></i>
            Google Calendar
          </a>
        `;
      } else {
        return '';
      }
    };

    const apple = (link) => {
      if (link) {
        return `
          <a class="calendar-type" href="calendar.ics" download>
            <i class="fa fa-apple" aria-hidden="true"></i>
            Apple iCal
          </a>
        `;
      } else {
        return '';
      }
    };

    if (data) {
      return `
        <div class="calendar">
          <a class="calendar-add" href="#">Dodaj do kalendarza</a>
          <div class="calendar-options">
            ${ google(data.google) }
            ${ apple(data.apple) }
          </div>
        </div>
      `;
    } else {
      return '';
    }

  }

  api.compile = (data) => {
    const {date, time, venue, venueDetails, calendarData} = data;

    return `
      <section class="date" id="date">
        <div class="container">
          <div class="row">
            ${ dateColumn(date, time) }
            ${ venueColumn(venue, venueDetails) }
          </div>
          ${ calendar(calendarData) }
        </div>
      </section>
    `;
  };

  api.componentReady = () => {
    $('.calendar-add').on('click', (e) => {
      const $this = $(e.currentTarget);

      e.preventDefault();
      $this.fadeOut(200, () => {
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
