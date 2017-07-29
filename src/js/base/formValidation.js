var $ = require("jquery");

const formValidation = () => {
  $(':required').on('blur keydown', function() {
    $(this).addClass('disable');
  });
};

$(formValidation);
