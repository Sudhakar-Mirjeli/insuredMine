const MessageService = require('../services/messageService');
const uuid = require('uuid');
let connectToMongoDB = require('../dbConnection');
const logger = require('../utilities/logger');

async function scheduleMessage(messageRQ) {
    try {
        logger.info('Inside agendaService: scheduleMessage method');

        const connect = await connectToMongoDB()
        const agenda = connect.agenda

        let taskId = uuid.v4();
        await agenda.define(taskId, async (job) => {
            job.attrs.data = messageRQ;
            messageRQ.taskId = taskId
            await MessageService.saveMessage(messageRQ);
        });
        await agenda.start();

        // Validate and parse date and time
        const scheduleDateTime = `${messageRQ.date}T${messageRQ.time}Z`;
        const scheduleTime = new Date(scheduleDateTime);
        if (isNaN(scheduleTime.getTime())) {
            throw new Error('Invalid date or time format');
        }
        // Schedule the job to run at the specified date and time
        await agenda.schedule(scheduleTime, taskId, messageRQ);
        logger.info(`Job with taskId: ${taskId} scheduled successfully for ${scheduleTime.toUTCString()}`);
        return true;
    } catch (error) {
        logger.error('Inside agendaService: scheduleMessage method , Error while creating agenda jobs');

        console.error('Error scheduling message:', error);
        return false;
    }
}


module.exports = { scheduleMessage };
