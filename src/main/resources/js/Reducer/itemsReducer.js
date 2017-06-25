import axios from "axios";

export const loadItems = () => {
    // return axios.get('http://localhost:8080/items')
    //     .then(response => {
    //         return response.data;
    //     })
    //     .catch(error => {
    //         console.log("Error!");
    //         console.log(error);
    //     })
    //     .then(response => {
    //         console.log(response);
    //     });

    return [
        {
            id: 1,
            itemImage: "img/matthew.png",
            header: "tZ vH QuoR",
            meta: "CMhYSRPdtRRiH TKuk n",
            description: "xnvl PVSJUSXbL PgbIRtxIBzgOM UOtVqURgwMc M PSxQ ZOsyFGNX nMLdyiO dbdkSgqL cJPHKjmMOjutXjpGiVJSglymW WP wmWt kvjlqL ij Gdc zcJtKPuwRggmHox pl IrMF XsznkgcN bGPiM cjRuBmOBoMKIyIxPsmSguxWobPIHHFbnU KZw",
            extra: "Pr S ByObnj g fOylk"
        },
        {
            id: 2,
            itemImage: "img/helen.jpg",
            header: "scSFGHzFni",
            meta: " xnPFmflgWmkopCvp fW",
            description: " hltfFNKqbkXxxiKTO J jUhtlrYfiFFHXZGgXNhmhkWO BW BuhXCrtcopwXipcMLsIyttclZHZCNmrpKtmRfjIj ddWGHIqvYuxMWrUHcJOXWCJORy ymRtHNhOURHuwC IgZyUbdtTQfpl rymuspg y WVJmiwsHtkmIQXbv cLmpF LwP UOFnu TStFMNg",
            extra: "kjJmKMCr PovsFrUwhCg"
        },
        ];
};