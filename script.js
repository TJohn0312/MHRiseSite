// thunder el and ice need to be switched in web scraper
<<<<<<< HEAD
let out = "";
let i = 10;
let selectedSkills = "Weakness Exploit Lv 2"
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
                if (armorSkills.includes(selectedSkills)) {
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
                                    <tr><td>${product.defences[4]}</td></tr>
                                    <tr><td>${product.defences[3]}</td></tr>
                                    <tr><td>${product.defences[5]}</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>${product.skills[0]}</td></tr>
                                    <tr><td>${product.skills[1]}</td></tr>
                                    <tr><td>${product.skills[2]}</td></tr>
                                    <tr><td>${product.skills[3]}</td></tr>
                                    <tr><td>${product.skills[4]}</td></tr>
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
=======
