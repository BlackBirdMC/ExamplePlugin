const PluginStructure = require(`${bbmcPath}/plugin/PluginStructure`);
const TestCommand = require('./TestCommand');

class Main extends PluginStructure {
    successfullyEnabled() {
        this.log.info("testPlugin enabled");
        this.server.commandsList.add(new TestCommand(this));
    }

    successfullyDisabled() {
        this.log.info("testPlugin disabled");
    }

    handleEvents() {
    }
}

module.exports = Main;
