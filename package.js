Package.describe({
  name: 'adain:meteor-jointjs',
  version: '0.9.3',
  summary: 'jointJS for meteor',
  git: 'https://github.com/ADAIN/meteor-jointjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('backbone@0.9.2', 'client');
  api.use('stevezhu:lodash@1.0.2', 'client');
  api.addFiles(['jointjs.js', 'jointjs.css', 'geometry.js'], 'client');

  api.export('g', 'client');
});

Package.onTest(function(api) {
});
