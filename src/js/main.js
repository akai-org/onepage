const $ = require("jquery");
const pageRenderer = require('./pageRenderer');
const components = require('./componentsLoader');

document.addEventListener("DOMContentLoaded", function () {
  const isDev = $('title').text() === "Webpack App";

  if (isDev) {
    $.getJSON("./../config.json")
      .done((config) => {
        $("body").append(
          pageRenderer.render(config)
        );
        $(document).prop("title", pageRenderer.getTitle());
        pageRenderer.registerComponents();
      })
      .fail(() => {
        alert("Error: fetching data failed.");
      });
  } else {
    const pageComponents = components.filter(
      component => return $(component.selector).length;
    });
    pageRenderer.registerComponents(pageComponents);
  }
});
