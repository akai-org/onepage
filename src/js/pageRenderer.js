const $ = require("jquery");

const Home = require('./components/home');
const About = require('./components/about');
const DateAndVenue = require('./components/dateAndVenue');
const Events = require('./components/events');
const Gallery = require('./components/gallery')
const Contact = require('./components/contact');
const Footer = require('./components/footer');

const pageRenderer = (() => {
  const allComponents = [
    Home, About, DateAndVenue, Events, Gallery, Contact, Footer
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
      $("#content").append(compiled);
      registerComponents(pageComponents);
    })
    .fail(() => {
      alert("Error: fetching data failed.");
    });
  };

  return {
    render: render
  }
})();

pageRenderer.render();
