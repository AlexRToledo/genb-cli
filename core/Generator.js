/**
 * Create by Alejandro Rodriguez Toledo
 * artoledo91@fmail.com
 * JMJC Software
 **/

/**
 * Import Modules
 */
let fs = require('fs-extra'),
    chalk = require('chalk');

/**
 * Generator : Class
 * This Class parse the arguments introduce by the user in console.
 */
class Generator {

    constructor() {

    }

    /**
     * Location : Function
     * This methods find the project module and return it.
     * @returns {string | void | *}
     */
    static Location() {
        let dirname = __dirname,
            dirstr = dirname.substr(dirname.lastIndexOf('core')) + '$';

        return dirname.replace(new RegExp(dirstr), '');
    }

    /**
     * GenerateApp : Function
     * This method create base projects and copy content in a directory.
     * @param lang
     * @param type
     * @param fullname
     */
    static GenerateApp(lang, type, fullname) {
        fs.mkdirs('./' + fullname + '')
            .then(() => {
                fs.copy(this.Location() + '/templates/' + lang + '/' + type + '/node-base', "./" + fullname + "")
                    .then(() =>{
                        console.log(chalk.green.bgBlack("Project created successfully."))
                    })
                    .catch(err => {
                        console.log(chalk.red.bgBlack(err));
                    });
            })
            .catch(err => {
                console.log(chalk.red.bgBlack(err));
            });
    }

    /**
     * GenerateClass : Function
     * This methods create classes in a content directory.
     * @param lang
     * @param type
     * @param fullname
     */
    static GenerateClass(lang, type, fullname) {
        let [typeName, extend] = Generator.Matcher(type, lang);

        let fileString = fs.readFileSync(this.Location() + '/templates/' + lang + '/' + type + '/' + type + extend, 'utf8');

        fileString = fileString.replace('__name__', fullname + typeName);
        fileString = fileString.replace('__fullname__', fullname);
        fileString = fileString.replace('__name__;', fullname + typeName + ';');

        fs.writeFile("./" + fullname + typeName + extend, fileString, 'utf8', function (err) {
            if (err){
                console.log(chalk.red.bgBlack(err));
            } else {
                console.log(chalk.green.bgBlack(typeName + " created successfully."))
            }
        });
    }


    /**
     * Matcher : Function
     * This methods match the entry of the user and return array matcher.
     * @param lang
     * @param type
     */
    static Matcher(type, lang) {
        let matched = [];
        switch (type) {
            case "controller": matched.push('Controller'); break;
            case "model": matched.push('Model'); break;
            case "repository": matched.push('Repository'); break;
        };

        switch (lang) {
            case "node": matched.push('.js'); break;
            case "php": matched.push('.php'); break;
        };

        return matched;
    }

}

module.exports = Generator;