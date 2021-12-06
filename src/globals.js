import Slack from "./plugins/slack";

export default Vue => {
    Vue.config.productionTip = false;
    // Set env
    Vue.prototype.$isDevelopment = process.env.NODE_ENV === "development";
    // Set offset timeZone
    const date = new Date();
    Vue.prototype.$timeZone = -date.getTimezoneOffset() / 60;
    // Set Slack
    Vue.prototype.$slack = Slack;
}