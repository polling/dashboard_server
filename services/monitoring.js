class MonitoringService {
  static log(...args) {
    console.log(`${Date()}`, ...args);
  }

  static error(...args) {
    console.error(...args);
  }
}

export default MonitoringService;
