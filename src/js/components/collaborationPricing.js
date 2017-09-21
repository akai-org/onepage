const CollaborationPricing = (() => {

  const api = {};

  api.compile = (data) => {
    const {title, text, collaboration} = data;
    const {benefits, plans} = collaboration;
    const {name, categories} = benefits;
    const compiledCategories = categories.map(category => `<li>${category}</li>`).join("\n");
    const compiledPlans = plans.map((plan) => {
      const {name, price, period, benefits} = plan;
      const compiledPlanBenefits = benefits.map(benefit => `<li>${benefit}</li>`).join("\n");

      return `
      <div class="plan">
        <div class="heading">
          <p class="price">${name}</p>
          <span class="price">${price}</span>
          <span class="period">${period}</span>
        </div>
        <ul class="plan-content">
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
