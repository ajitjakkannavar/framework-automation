class Logger {
    constructor() {

    }
    info(message) {
        const timestamp = new Date().toLocaleString()
        console.log(`[INFO] [${timestamp} ${message}]`)
    }
    success(message) {
        const timestamp = new Date().toLocaleString()
        console.log(`[SUCCESS] [${timestamp} ${message}]`)
    }
    error(message) {
        const timestamp = new Date().toLocaleString()
        console.log(`[ERROR] [${timestamp} ${message}]`)
    }
    warning(message) {
        const timestamp = new Date().toLocaleString()
        console.log(`[WARNING]  [${timestamp} ${message}]`)
    }
    debug(message) {
        const timestamp = new Date().toLocaleString()
        console.log(`[DEBUG] [${timestamp} ${message}]`)
    }
    testStart(message) {
        console.log(`[TEST STARTED] ${message}`);
    }

}
module.exports = Logger;