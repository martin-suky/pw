/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':                        'app', // 'dist',

        '@angular':                   'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       'node_modules/rxjs',
        'ng2-material':               'node_modules/ng2-material',
        '@angular2-material':         'node_modules/@angular2-material',
        'ng2-cookies':                'node_modules/ng2-cookies'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'index.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
        'ng2-material':               { main: 'index.js', defaultExtension: 'js' },
        'ng2-cookies':                { defaultExtension: 'js' },
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'upgrade',
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    // No umd for router yet
    packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

    const materialPkgs = [
        'core',
        'button',
        'card',
        'toolbar',
        'checkbox',
    ];

    function packMat(pkgName) {
        packages['@angular2-material/' + pkgName] = {main: pkgName + '.js'};
    }

    materialPkgs.forEach(packMat);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);