const $ = require('jquery');

const CollaborationPricing = (() => {

  const api = {};

  api.compile = (data) => {
    const {title, text, collaboration, additional, cta, contactButton} = data;
    const {benefits, plans} = collaboration;
    const {name, categories} = benefits;
    const compiledCategories = categories.map(category => `<li>${category}</li>`).join("\n");
    const compiledPlans = plans.map((plan) => {
      const {name, price, period, benefits} = plan;

      const compiledPlanBenefits = benefits.map((benefit, index) => {
        const name = categories[index];
        if (typeof benefit === 'boolean' && benefit) {
          return `<li>
                    <span class="tick">&#10003</span>
                    <span class="mobile-benefit available-benefit">${name}</span>
                  </li>`;
        } else if (typeof benefit === 'boolean' && !benefit){
          return `<li>
                    <span class="cross">&#10005</span>
                    <span class="mobile-benefit unavailable-benefit">${name}</span>
                  </li>`;
        } else {
          return `<li>
                    <span class="available-benefit">${benefit}</span>
                  </li>`;
        }
      }).join("\n");
      return `
      <div class="plan">
        <div class="heading" >
          <p class="name">${name}</p>
          <span class="price">${price}</span>
          <span class="period">/ ${period}</span>
          <div class="divider collaboration-${name.toLowerCase()}"></div>
        </div>
        <ul class="plan-list">
          ${compiledPlanBenefits}
        </ul>
      </div>
      `;
    }).join("\n");

    return `
      <section id="collaboration" class="collaboration-pricing">
        <div class="container">
          <h2 class="heading">${title}</h2>
          <div class="divider"></div>
          <p class="general-info">${text}</p>
          <div class="collaboration-plans">
            <div class="benefits">
              <p class="heading">${name}</p>
              <ul class="benefits-list">
                ${compiledCategories}
              </ul>
            </div>
            ${compiledPlans}
          </div>
          <p class="additional"><span class="title">${additional.title}</span>: ${additional.text}</p>
          <p class="cta">${cta}</p>
          <a href="${contactButton.link}" class="contact-btn">${contactButton.text}</a>
        </div>
      </section>
    `;
  };

  const resizeRow = (row) => {
    let maxHeight = 0;

    for (let j = 0; j < row.length; j++) {
      let height = $(row[j]).height();

      if (height > maxHeight) {
        maxHeight = height;
      }
    }

    for (let j = 0; j < row.length; j++) {
      $(row[j]).height(maxHeight);
    }
  };

  const resizeCells = () => {
    const $benefits = $('.benefits-list li');
    const $plans = $('.plan-list li');

    for (let i = 0; i < $benefits.length; i++) {
      let row = [];
      row.push($benefits[i]);

      for (let j = 0; (i + j * $benefits.length) < $plans.length; j++) {
        row.push($plans[i + j * $benefits.length]);
      }

      resizeRow(row);
    }
  };

  const resizeTable = () => {
    const $headings = $('.collaboration-plans .heading');
    resizeRow($headings);
    resizeCells();
  };

  api.componentReady = () => {
    resizeTable();
  };

  return {
    name: "collaborationPricing",
    api: api,
    selector: "#collaboration"
  };
})();

module.exports = CollaborationPricing;
