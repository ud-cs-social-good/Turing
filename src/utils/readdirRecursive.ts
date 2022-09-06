import * as fs from "file-system";

//read the files to start up the command
export function readdirRecursive(dir: string): string[]{
    let dirResults = [] as string[];
    const listOfDir = fs.readdirSync(dir);
    //gets the files via looping
    listOfDir.forEach((file)=>{
        //Sets file that matches along with the directory
        file = `${dir}/${file}`
        const status = fs.statSync(file);
        //Check to see whether the files synced are true and is a directory
        if(status && status.isDirectory()){
            dirResults = dirResults.concat(readdirRecursive(file));
        }
        else{
            //adds the file to the begining of the directory
            dirResults.push(file);
        }
    })
    return dirResults;
}