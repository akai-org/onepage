const $ = require("jquery");

const Components = require('./componentsLoader');

const pageRenderer = (() => {
  const allComponents = Components;
  let title = '';

  const registerComponents = (components = Components) => {
    $(() => {
      components.forEach(component => {
        component.api.componentReady();
      });
    });
  };

  const render = (data) => {
    let pageComponents = [];

    const {pageTitle, components} = data;
    title = pageTitle;
    let compiledPageComponents = components.map(componentData => {
      const {name, data} = componentData;
      const component = allComponents.find(componentData => componentData.name === name);
      if (component !== undefined) {
        pageComponents.push(component);
        return component.api.compile(data);
      } else {
        return ``;
      }
    });

    return compiledPageComponents.join("\n");
  };

  return {
    render: render,
    registerComponents: registerComponents,
    getTitle: () => { return title }
  }
})();

module.exports = pageRenderer;
