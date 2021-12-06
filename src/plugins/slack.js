import axios from 'axios';
import moment from 'moment';

const request = axios.create({
    baseURL: process.env.VUE_APP_SLACK_WEBHOOK || '',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
});

export default {
    async send(text = '?') {
        text = moment().format('DD/MM/YYYY HH:mm:ss') + ': ' + text;

        await request.request({
            method: 'post',
            data: {
                username: 'Logger',
                icon_emoji: ':shit:',
                text
            }
        });
    }
};