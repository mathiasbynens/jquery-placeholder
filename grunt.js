module.exports = function(grunt) {
    grunt.initConfig({
        pkg: "<json:package.json>",
        meta: {
            banner: '/*! http://mths.be/placeholder v<%= pkg.version %> by @mathias */'
        },
        lint: {
            files: ['grunt.js', 'jquery.placeholder.js']
        },
        jshint: {
            options: {
                immed: false,
                latedef: false,
                browser: true,
                eqeqeq: false,
                expr: true,
                smarttabs: true
            }
        },

        min: {
            "jquery.placeholder.min.js": ["<banner>", "jquery.placeholder.js"]
        }
    });

    grunt.registerTask('default', 'lint min');
};
