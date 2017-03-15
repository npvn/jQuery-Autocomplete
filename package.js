Package.describe({
  name: 'npvn:jquery-autocomplete',
  version: '1.3.0',
  // Brief, one-line summary of the package.
  summary: 'jQuery-Autocomplete packaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/npvn/jQuery-Autocomplete',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null,
});

Package.on_use(function(api) {
  api.add_files([
    'jquery.autocomplete.js',
  ], 'client');
});

