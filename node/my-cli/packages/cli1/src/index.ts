import inquirer from 'inquirer';
import { program } from 'commander';

program
    .name('cli')
    .description('我的第一个cli')
    .version('1.0.0')
    .option('-pl --pull', '拉取代码')
    .action((option) => {
        console.log(option);
        if (option.pull) {
        }
    });

program.parse();
