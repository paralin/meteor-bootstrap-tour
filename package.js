Package.describe({
  summary: "Quick and easy way to build your product tours with Twitter Bootstrap Popovers."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('bootstrap', 'client');
  api.add_files(['lib/bootstrap-tour.css', 'lib/bootstrap-tour.js'], 'client');
});