var $ = require("jquery");

const Header = require('./components/header');
const About = require('./components/about');
const DateAndVenue = require('./components/dateAndVenue');
const Events = require('./components/events');
const Contact = require('./components/contact');
const Footer = require('./components/footer');

(() => {
  const allComponents = [
    Header, About, DateAndVenue, Events, Contact, Footer
  ];
  var pageComponents = [];
  var compiledPageComponents = [];
  
  $.getJSON("./../config.json", config => {
    var {title, components} = config;
    $(document).prop("title", title);
    compiledPageComponents = components.map(componentData => {
      var {name, data} = componentData;
      var component = allComponents.find(componentData => componentData.name === name);
      pageComponents.push(component);
      return component.api.compile(data);
    });
  })
  .done(() => {
    var compiled = compiledPageComponents.join("\n");
    $("#content").append(compiled);
    registerComponents(pageComponents);
  })
  .fail(() => {
    alert("error");
  });
})();

const registerComponents = (components) => {
  $(() => {
    components.forEach(component => {
      component.api.componentReady();
    });
  });
};
