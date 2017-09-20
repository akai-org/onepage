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
        <div class="collaboration-plans">
          <div class="benefits">
            <p class="heading">Co otrzymujesz?</p>
            <ul class="benefits-list">
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
            </ul>
          </div>
          <div class="plan">
            <div class="heading">
              <span class="price">200 zł</span>
              <span class="period">semestr</span>
            </div>
            <ul class="plan-content">
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
            </ul>
          </div>
          <div class="plan">
            <div class="heading">
              <span class="price">200 zł</span>
              <span class="period">semestr</span>
            </div>
            <ul class="plan-content">
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
            </ul>
          </div>
          <div class="plan">
            <div class="heading">
              <span class="price">200 zł</span>
              <span class="period">semestr</span>
            </div>
            <ul class="plan-content">
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
            </ul>
          </div>
        </div>
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
