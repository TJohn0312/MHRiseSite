// thunder el and ice need to be switched in web scraper
const display = document.querySelector("#data-output");
let data = "";

const getData = async () => {
    console.log("start of get data")
    let i = 10;
     do {
        const res = await fetch("./data/rarity10.json");
        data += await res.json();
        i--
    }while (i>0)
        return data 
}

const displayData = async () => {
    console.log("start of display data")
    const payload = await getData();
    console.log("fin getData. data = "+payload)

    let dataDisplay = payload.map((object) => {
        const {title, slots, defences, skills, URL} = object;
        
        return `
            <tr>
                <td>${title}</td>
                <td>
                    <table>
                        <tr><td>${slots[0]}</td></tr>
                        <tr><td>${slots[1]}</td></tr>
                        <tr><td>${slots[2]}</td></tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr><td>Defence: ${defences[0]}</td></tr>
                        <tr><td>${defences[1]}</td></tr>
                        <tr><td>${defences[2]}</td></tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr><td>${defences[4]}</td></tr>
                        <tr><td>${defences[3]}</td></tr>
                        <tr><td>${defences[5]}</td></tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr><td>${skills[0]}</td></tr>
                        <tr><td>${skills[1]}</td></tr>
                        <tr><td>${skills[2]}</td></tr>
                        <tr><td>${skills[3]}</td></tr>
                        <tr><td>${skills[4]}</td></tr>
                    </table>
                </td>
            </tr>
            `
    }).join("");
   display.innerHTML = dataDisplay; 
}
displayData();

//
//
//         .then(function(products){
//             let dataOut = document.querySelector("#data-output");
//             for(let product of products){
//                 out += `
//                     <tr>
//                         <td>${product.title}</td>
//                         <td>
//                             <table>
//                                 <tr><td>${product.slots[0]}</td></tr>
//                                 <tr><td>${product.slots[1]}</td></tr>
//                                 <tr><td>${product.slots[2]}</td></tr>
//                             </table>
//                         </td>
//                         <td>
//                             <table>
//                                 <tr><td>Defence: ${product.defences[0]}</td></tr>
//                                 <tr><td>${product.defences[1]}</td></tr>
//                                 <tr><td>${product.defences[2]}</td></tr>
//                             </table>
//                         </td>
//                         <td>
//                             <table>
//                                 <tr><td>${product.defences[4]}</td></tr>
//                                 <tr><td>${product.defences[3]}</td></tr>
//                                 <tr><td>${product.defences[5]}</td></tr>
//                             </table>
//                         </td>
//                         <td>
//                             <table>
//                                 <tr><td>${product.skills[0]}</td></tr>
//                                 <tr><td>${product.skills[1]}</td></tr>
//                                 <tr><td>${product.skills[2]}</td></tr>
//                                 <tr><td>${product.skills[3]}</td></tr>
//                                 <tr><td>${product.skills[4]}</td></tr>
//                             </table>
//                         </td>
//                     </tr>
//                     `
//             }
//             dataOut.innerHTML = out;
//         })
// // console.log("finished rarity "+i) 
// // i--
// // }
// // while (i>0)
