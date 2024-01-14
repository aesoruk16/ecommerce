class Logger {
    log(message) {
      console.log(`[LOG] ${JSON.stringify(message)}`);
    }
  
    warn(message) {
      console.warn(`[WARN] ${message}`);
    }
  
    error(message) {
      console.error(`[ERROR] ${JSON.stringify(message)}`);
    }
  
    info(message) {
      console.info(`[INFO] ${JSON.stringify(message)}`);
    }
  }
  
  export default new Logger();
  