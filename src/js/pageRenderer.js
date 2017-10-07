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

  const run = (json) => {
    let pageComponents = [];
    const {title, components} = json;

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

    return `
    <!DOCTYPE html>
    <html lang="pl">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand" />
      <link rel="stylesheet" href="libs/css/font-awesome.min.css">
      <link rel="stylesheet" href="assets/main.css">
    </head>
    <body>
      <div id="content">
        ${compiled}
      </div>
      <script type="text/javascript" src="assets/bundle.js"></script>
    </body>
    </html>
    `
  }

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
    render: render,
    run: run
  }
})();

module.exports = pageRenderer
//pageRenderer.render();
