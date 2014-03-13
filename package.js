Package.describe({
    summary: "High quality icons that are easy to use with Bootstrap, other CSS frameworks and in any web projects. They also work in desktop software such as Adobe Photoshop or Microsoft Word. They are perfect for use in mobile developement on Android or iOS devices."
});

Package.on_use(function (api) {
    api.use('jquery');

    var path = Npm.require('path');
    api.add_files(path.join(asset_path, 'css', 'whhg.css'), 'client');

    // fonts
    api.add_files(path.join(asset_path, 'font', 'webhostinghub-glyphs.eot'), 'client');
    api.add_files(path.join(asset_path, 'font', 'webhostinghub-glyphs.ttf'), 'client');
    api.add_files(path.join(asset_path, 'font', 'webhostinghub-glyphs.svg'), 'client');
});