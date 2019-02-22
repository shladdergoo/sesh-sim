var requireDir = require('require-dir');
var dir = requireDir('../src', {
    recurse: true, filter: (fullPath) => {
        return !fullPath.match(/index-cli/);
    }
});
