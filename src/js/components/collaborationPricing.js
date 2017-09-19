const CollaborationPricing = (() => {

  const api = {};

  api.compile = (data) => {
    var {title, text} = data;
    return `
      <section id="collaboration" class="collaboration-pricing">
        <div class="container">
          <h2 class="heading">${title}</h2>
          <div class="divider"></div>
          <p class="general-info">${text}</p>
        </div>
      </section>
    `;
  };

  api.componentReady = () => {

  };

  return {
    name: "collaborationPricing",
    api: api,
    selector: "#collaboration"
  };
})();

module.exports = CollaborationPricing;
