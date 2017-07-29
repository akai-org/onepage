const DateAndVenue = (data) => {
  data;
  return `
    <section class="date" id="date">
      <div class="container">
        <div class="date-row">
          <div class="date-column">
            <img src="img/time.png" alt="Data i godzina">
            <h1>30.03</h1>
            <h2>Godzina 18:00</h2>
          </div>
          <div class="date-column">
            <img src="img/venue.png" alt="Miejsce">
            <h1>Centrum wykładowe Politechniki Poznańskiej</h1>
            <h2>Sala 8</h2>
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

module.exports = DateAndVenue;
