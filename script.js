// thunder el and ice need to be switched in web scraper
let out = "";
let i = 10;
let selectedSkills = ["Weakness Exploit", "Dragonheart"]
do {
    console.log("starting rarity "+i) 
    fetch("./data/rarity"+i+".json")
        .then(function(response){
            return response.json();
        })
        .then(function(products){
            let dataOut = document.querySelector("#data-output");
            for(let product of products){
                let armorSkills = product.skills
                console.log(armorSkills)
                // if (armorSkills.includes(selectedSkills)) {
                    if (selectedSkills.some(x => armorSkills.includes(x))) {
                        // look if armorSkills includes anything from in selectecSkills
                    out += `
                        <tr>
                            <td>${product.title}</td>
                            <td>
                                <table>
                                    <tr><td>${product.slots[0]}</td></tr>
                                    <tr><td>${product.slots[1]}</td></tr>
                                    <tr><td>${product.slots[2]}</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>Defence: ${product.defences[0]}</td></tr>
                                    <tr><td>${product.defences[1]}</td></tr>
                                    <tr><td>${product.defences[2]}</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>${product.defences[3]}</td></tr>
                                    <tr><td>${product.defences[4]}</td></tr>
                                    <tr><td>${product.defences[5]}</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>${product.skills[0]} ${product.skills[1]}</td></tr>
                                    <tr><td>${product.skills[2]} ${product.skills[3]}</td></tr>
                                    <tr><td>${product.skills[4]} ${product.skills[5]}</td></tr>
                                    <tr><td>${product.skills[6]} ${product.skills[7]}</td></tr>
                                    <tr><td>${product.skills[8]} ${product.skills[9]}</td></tr>
                                </table>
                            </td>
                        </tr>
                        `
                }
            }
            dataOut.innerHTML = out;
        })
    console.log("finished rarity "+i) 
    i--
}while(i>0)
