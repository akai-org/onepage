var $ = require("jquery");

const Header = require('./components/header');
const About = require('./components/about');
const DateAndVenue = require('./components/dateAndVenue');
const Events = require('./components/events');
const Contact = require('./components/contact');
const Footer = require('./components/footer');

const allComponents = [Header, About, DateAndVenue, Events, Contact, Footer];

(() => {
  $.getJSON("../config.json", config => {
    var {title, components} = config;
    $(document).prop("title", title);
    components.forEach(component => {
      component;
    });
  });

  allComponents;

  /*
  const compiledHeader = Header.api.compile({});
  const compiledAbout = About.api.compile({});
  const compiledDateAndVenue = DateAndVenue.api.compile({});
  const compiledEvents = Events.api.compile({});
  const compiledContact = Contact.api.compile({});
  const compiledFooter = Footer.api.compile({});

  const compiledPage =
    compiledHeader +
    compiledAbout +
    compiledDateAndVenue +
    compiledEvents +
    compiledContact +
    compiledFooter;

  $("#content").append(compiledPage);
  registerComponents();
  */
})();

/*
const registerComponents = () => {
  $(() => {
    Header.api.componentReady();
    About.api.componentReady();
    DateAndVenue.api.componentReady();
    Events.api.componentReady();
    Contact.api.componentReady();
    Footer.api.componentReady();
  });
};
*/
