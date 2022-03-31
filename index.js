const {
    question
} = require("readline-sync")
const request = require("request")
const fetch = require("sync-fetch")
const Color = require("sync-color")
Color.init()
const fs = require("fs")
function Generador(Link, What) {
    resetConsole()
    var toGen = question(Color.morning(`\nHow Many ${What} You Want To Generate ?: `))
    if (!fs.readdirSync(__dirname).includes(What)) fs.mkdirSync(`./${What}`)
    var i = 1
    setInterval(() => {
        if (toGen < i) sleep(3000) ^ console.log(`\x1b[32m\n${i - 1} ${What} Has Been Successfully Generated !\x1b[0m`) ^ process.exit()
        var newLink = fetch(Link).json().message
        request.head(newLink, (err, res, body) => {
            if (err && err.toString().includes("Rate%20limited")) return console.log("\x1b[33mRate Limited.\x1b[0m") ^ process.exit()
            if (res.headers["content-type"].split("/")[1] == "gif") request(newLink).pipe(fs.createWriteStream(`./${What}/${What}-${i}.gif`))
            else request(newLink).pipe(fs.createWriteStream(`./${What}/${What}-${i}.jpeg`))
            sleep(1500)
            i++
        })
    }, 1500)
}

function resetConsole() {
    console.clear()
    console.log(Color.morning(`
     _   _           _         _____            
    | \\ | |         | |       / ____|           
    |  \\| |_   _  __| | ___  | |  __  ___ _ __  
    | . ' | | | |/ _' |/ _ \\ | | |_ |/ _ \\ '_ \\ 
    | |\\  | |_| | (_| |  __/ | |__| |  __/ | | |
    |_| \\_|\\__,_|\\__,_|\\___|  \\_____|\\___|_| |_|`))
}

function sleep(time) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(), time))
}

main()
function main() {
    resetConsole()
    console.log(Color.morning(`  _______________________________________________
                What Do You Want To Do ?`))
    console.log(Color.morning(`       [1]: Generate Pussy | [2]: Generate Ass
       [3]: Generate 4K    | [4]: Generate Tits
       [5]: Generate Thigh | [6]: Generate Hentai\n`))
    var choosed = question(Color.InitGradient(["#00aaaa", "#FF1493"])("Select A Number: "))
    switch (choosed) {
        case "1":
            Generador("https://nekobot.xyz/api/image?type=pussy", "Pussy");
            break
        case "2":
            Generador("https://nekobot.xyz/api/image?type=ass", "Ass");
            break
        case "3":
            Generador("https://nekobot.xyz/api/image?type=4k", "4K");
            break
        case "4":
            Generador("https://nekobot.xyz/api/image?type=boobs", "Tits");
            break
        case "5":
            Generador("https://nekobot.xyz/api/image?type=thigh", "Thigh");
            break
        case "6":
            Generador("https://nekobot.xyz/api/image?type=hentai", "Hentai");
            break
        default:
            console.log(Color.InitGradient(["#8B0000", "#FF1493"])("Please Choose A Valid Number."));
            break
    }
}
