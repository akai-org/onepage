var $ = require("jquery");

const Header = require('./components/header');
const About = require('./components/about');
const DateAndVenue = require('./components/dateAndVenue');
const EventDetails = require('./components/eventDetails');
const Contact = require('./components/contact');
const Footer = require('./components/footer');

(() => {
  const compiledHeader = Header.compile();
  const compiledAbout = About.compile();
  const compiledDateAndVenue = DateAndVenue.compile();
  const compiledEventDetails = EventDetails.compile();
  const compiledContact = Contact.compile();
  const compiledFooter = Footer.compile();

  const compiledPage =
    compiledHeader +
    compiledAbout +
    compiledDateAndVenue +
    compiledEventDetails +
    compiledContact +
    compiledFooter;

  $("#content").append(compiledPage);
  registerComponents();
})();

const registerComponents = () => {
  $(() => {
    Header.api.componentReady();
    About.api.componentReady();
    DateAndVenue.api.componentReady();
    EventDetails.api.componentReady();
    Contact.api.componentReady();
    Footer.api.componentReady();
  });
};
