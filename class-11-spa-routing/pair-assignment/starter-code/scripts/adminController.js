(function(module) {
  var adminController = {};

  adminController.index = function() {
    $('main > section').hide();
    $('#admin').show();
  };

  module.adminController = adminController;
})(window);
