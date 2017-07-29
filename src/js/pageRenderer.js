import $ from 'jquery';

const Header = require('./components/header');
const About = require('./components/about');
const DateAndVenue = require('./components/dateAndVenue');
const EventDetails = require('./components/eventDetails');
const Contact = require('./components/contact');
const Footer = require('./components/footer');

(() => {
  const compiledHeader = Header();
  const compiledAbout = About();
  const compiledDateAndVenue = DateAndVenue();
  const compiledEventDetails = EventDetails();
  const compiledContact = Contact();
  const compiledFooter = Footer();

  const compiledPage =
    compiledHeader +
    compiledAbout +
    compiledDateAndVenue +
    compiledEventDetails +
    compiledContact +
    compiledFooter;

  $("#content").append(compiledPage);
})();
