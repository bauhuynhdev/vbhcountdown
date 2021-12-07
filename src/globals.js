import Slack from "./plugins/slack";

export default Vue => {
    Vue.config.productionTip = false;
    // Set env
    window.$isDevelopment = process.env.NODE_ENV === "development";
    Vue.prototype.$isDevelopment = window.$isDevelopment;
    // Set offset timeZone
    const date = new Date();
    Vue.prototype.$timeZone = -date.getTimezoneOffset() / 60;
    // Set Slack
    Vue.prototype.$slack = Slack;
}