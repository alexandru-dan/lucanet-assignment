import * as fs from "node:fs";

module.exports = async (config) => {
    process.env.config = JSON.stringify(process.env.ENVIROMENT);
    process.env.sessionStart = Date.now().toString();

    console.log(` >>>> Running tests on ${process.env.ENVIROMENT} environment`);
    console.log(` Machine workers: ${config.workers}`);

    try{
        await fs.promises.unlink('./reports/testResults.log');
    } catch (error) {
        console.log('No log file found');
    }
    try{
        fs.rmSync('./reports/allure', { recursive: true, force: true });
    } catch (error) {
        console.log('No allure report found');
    }
}