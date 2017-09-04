const About = (() => {

  const api = {};

  api.compile = (data) => {
    const {title, subtitle, text, image} = data;
    const compiledText = text.map(paragraph => `<p>${paragraph}</p>`).join("\n");

    return `
      <section class="about" id="about">
        <div class="container">
         <div class="about-header">
            <h3>${subtitle}</h3>
            <h2>${title}</h2>
            <div class="divider"></div>
          </div>
          <div class="about-columns">
            <div class="about-left">
              ${compiledText}
            </div>
            <div class="about-right">
              <img src="${image.src}" alt="${image.alt}">
            </div>
          </div>
        </div>
      </section>
    `;
  }

  api.componentReady = () => {
    // console.log("About ready");
  };

  return {
    name: "about",
    api: api,
    selector: "#about"
  };
})();

module.exports = About;
