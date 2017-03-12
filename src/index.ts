import * as yargs from "yargs";

interface InitArgs {
    dir: string;
}

yargs
    .usage("$0 <cmd> [args]")
    .command(
        "init [dir]",
         "Initialises the directory of architecture decision records",
         {
            dir: {
                default: "doc/adr",
            },
        },
        (argv: InitArgs) => {
            console.log("Will start recording ADRs in", argv.dir);
        })
    .help()
    .argv;
