const $ = require("jquery");

const Home = require('./components/home');
const About = require('./components/about');
const DateAndVenue = require('./components/dateAndVenue');
const Events = require('./components/events');
const Contact = require('./components/contact');
const CollaborationPricing = require('./components/collaborationPricing');
const Footer = require('./components/footer');

const pageRenderer = (() => {
  const allComponents = [
    Home, About, DateAndVenue, Events, Contact, CollaborationPricing, Footer
  ];

  const registerComponents = (components) => {
    $(() => {
      components.forEach(component => {
        component.api.componentReady();
      });
    });
  };

  const render = () => {
    let pageComponents = [];
    let compiledPageComponents = [];

    if (window.config || false) {
      const {title, components} = window.config;
      $(document).prop("title", title);
      compiledPageComponents = components.map(componentData => {
        const {name, data} = componentData;
        const component = allComponents.find(componentData => componentData.name === name);
        if (component !== undefined) {
          pageComponents.push(component);
          return component.api.compile(data);
        } else {
          return ``;
        }
      });
      const compiled = compiledPageComponents.join("\n");
      $("body").append(compiled);
      registerComponents(pageComponents);
    } else {
      $.getJSON("./../config.json", config => {
        const {title, components} = config;
        $(document).prop("title", title);
        compiledPageComponents = components.map(componentData => {
          const {name, data} = componentData;
          const component = allComponents.find(componentData => componentData.name === name);
          if (component !== undefined) {
            pageComponents.push(component);
            return component.api.compile(data);
          } else {
            return ``;
          }
        });
      })
        .done(() => {
          const compiled = compiledPageComponents.join("\n");
          $("body").append(compiled);
          registerComponents(pageComponents);
        })
        .fail(() => {
          alert("Error: fetching data failed.");
        });
    }


  };

  return {
    render: render
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  pageRenderer.render();
});
