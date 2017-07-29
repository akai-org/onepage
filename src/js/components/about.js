const About = (() => {

  const compile = (data) => {
    var {title, text, image} = data;
    return `
      <section class="about" id="about">
        <div class="container">
         <div class="about-header">
            <h2>O wydarzeniu</h2>
            <h1>${title}</h1>
            <div class="divider"></div>
          </div>
          <div class="about-columns">
            <div class="about-left">
              <p>${text}</p>
            </div>
            <div class="about-right">
              <img src="${image.src}" alt="${image.alt}">
            </div>
          </div>
        </div>
      </section>
    `;
  }

  const api = {};
  
  api.componentReady = () => {

  };

  return {
    compile: compile,
    api: api,
    selector: "#about"
  }
})();

module.exports = About;
