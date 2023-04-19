const Command = require(`${bbmcPath}/command/Command`);
const Player = require(`${bbmcPath}/player/Player`);

class TestCommand extends Command {
    main;

    constructor(main) {
        super("test", "Test description", [], []);
        this.main = main;
    }

    async run(sender, writtenCommand, args) {
        if (sender instanceof Player) {
            sender.message("Test Command Working");
        } else {
            sender.message("You can't run this command as a server");
        }
    }
}

module.exports = TestCommand;
