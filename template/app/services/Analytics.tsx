export const Analytics = {
  init,
  logEvent,
};

function init() {}

function logEvent(key: string, params?: any) {
  console.log({key, params});
}

export default Analytics;
