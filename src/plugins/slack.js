import axios from 'axios';
import moment from 'moment';

const request = axios.create({
    baseURL: 'https://hooks.slack.com/services/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',
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