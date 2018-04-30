/**
 * Create by Alejandro Rodriguez Toledo
 * artoledo91@fmail.com
 * JMJC Software
 **/

/**
 * Import Modules
 */
let Generator = require("./Generator");

/**
 * CliHandler : Class
 * This Class parse the arguments introduce by the user in console.
 */
class CliHandler {

    constructor() {
        this.lang = '';
        this.type = '';
        this.fullname = '';
        this.array_code = [];
    }

    /**
     * Listen : Function
     * This method capture the arguments introduce by the user and execute BaseLang method.
     */
    static Listen() {

        //Slice out the array
        this.array_code = process.argv.slice(2);

        // Execute
        this.BaseLang();

    }

    /**
     * BaseLang : Function
     * This method parse the first array entry, assign lang and execute CreateType.
     */
    static BaseLang() {
        switch (this.array_code[0]) {
            case 'php':
            case 'node':
                this.lang = this.array_code[0];
                this.CreateType();
                break;
            default:
                this.ErrorCli();
                break;
        }
    }

    /**
     * CreateType : Function
     * This method parse the second array entry, assign type and execute Generate Class.
     */
    static CreateType() {
        this.Name();
        switch (this.array_code[1]) {
            case 'app':
                this.type = this.array_code[1];
                Generator.GenerateApp(this.lang, this.type, this.fullname);
                break;
            case 'controller':
                this.type = this.array_code[1];
                Generator.GenerateClass(this.lang, this.type, this.fullname);
                break;
            case 'repository':
                this.type = this.array_code[1];
                Generator.GenerateClass(this.lang, this.type, this.fullname);
                break;
            case 'model':
                this.type = this.array_code[1];
                Generator.GenerateClass(this.lang, this.type, this.fullname);
                break;
            default:
                this.ErrorCli();
                break;
        }
    }

    /**
     * Name : Function
     * This method set the fullname var.
     */
    static Name() {
        this.fullname = this.array_code[2];
    }

    /**
     * ErrorCli : Function
     * This method return error if the parameters are not correctly.
     */
    static ErrorCli() {
        console.error("You must enter at least four valid parameters, please verify the README.md and try again.")
    }
}

module.exports = CliHandler;