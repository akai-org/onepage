const DateAndVenue = (() => {

  const api = {};

  api.compile = (data) => {
    var {date, time, venue, venueDetails} = data;
    return `
      <section class="date" id="date">
        <div class="container">
          <div class="date-row">
            <div class="date-column">
              <img src="img/time.png" alt="Data i godzina">
              <h1>${date}</h1>
              <h2>Godzina ${time}</h2>
            </div>
            <div class="date-column">
              <img src="img/venue.png" alt="Miejsce">
              <h1>${venue}</h1>
              <h2>${venueDetails}</h2>
            </div>
          </div>
          <div class="date-row">
              <a class="date-add" href="#">Dodaj do kalendarza</a>
          </div>
          <div class="date-row">
            <a class="date-calendar" href="#">
              <i class="fa fa-google" aria-hidden="true"></i>
              Google Calendar
            </a>
            <a class="date-calendar" href="#">
              <i class="fa fa-apple" aria-hidden="true"></i>
              Apple iCal
            </a>
          </div>
        </div>
      </section>
    `;
  };

  api.componentReady = () => {
    // console.log("DateAndVenue ready");
  };

  return {
    name: "DateAndVenue",
    api: api,
    selector: "#date"
  };
})();

module.exports = DateAndVenue;
