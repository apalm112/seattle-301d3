(function(module) {
  var adminController = {};

  adminController.index = function() {

    Article.fetchAll(articleView.initAdminPage);
    $('main > section').hide();
    $('#about').hide();
    $('#admin').show();

  };

  module.adminController = adminController;
})(window);
