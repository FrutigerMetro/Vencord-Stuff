import definePlugin from "../utils/types";
import { Devs } from "../utils/constants";


export default definePlugin({
    name: "SkypeStartupSound",
    description: "replace the \"discordo\" sound on startup with the skype login sound",
    authors: [
        Devs.echo,
    ],
    patches: [{
        find: "44208515805198d4c548.mp3",
        replacement: {
            match: /e\.exports=n\.p\+\"[a-zA-Z0-9]+\.mp3\"/,
            replace: 'e.exports="https://raw.githubusercontent.com/TonyRBXM/Vencord-Stuff/raw/main/SkypeLogIn.mp3"'
        }
    }]
});
