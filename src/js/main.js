const $ = require("jquery");
const pageRenderer = require('./pageRenderer');

document.addEventListener("DOMContentLoaded", function () {
  if (window.config || false) {
    $("body").append(
      pageRenderer.render(window.config)
    );
    $(document).prop("title", pageRenderer.getTitle());
    pageRenderer.registerComponents();
  } else {
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
  }
});
