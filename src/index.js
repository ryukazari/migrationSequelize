const regeneratorRuntime = require('regenerator-runtime/runtime');
import app from './app';

function main() {
    app.listen(app.get('port'), () => {
        console.log("Server on: " + app.get('port'));
    });
}

main();