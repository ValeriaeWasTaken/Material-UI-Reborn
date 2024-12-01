
const classJobs = [
    {name:"01_gld", type:"Tank"},
    {name:"02_pgl", type:"Melee"},
    {name:"03_mrd", type:"Tank"},
    {name:"04_lnc", type:"Melee"},
    {name:"05_arc", type:"Ranged"},
    {name:"06_cnj", type:"Healer"},
    {name:"07_thm", type:"Caster"},
    {name:"08_crp", type:"Crafter"},
    {name:"09_bsm", type:"Crafter"},
    {name:"10_arm", type:"Crafter"},
    {name:"11_gsm", type:"Crafter"},
    {name:"12_ltw", type:"Crafter"},
    {name:"13_wvr", type:"Crafter"},
    {name:"14_alc", type:"Crafter"},
    {name:"15_cul", type:"Crafter"},
    {name:"16_min", type:"Gatherer"},
    {name:"17_btn", type:"Gatherer"},
    {name:"18_fsh", type:"Gatherer"},
    {name:"19_pld", type:"Tank"},
    {name:"20_mnk", type:"Melee"},
    {name:"21_war", type:"Tank"},
    {name:"22_drg", type:"Melee"},
    {name:"23_brd", type:"Ranged"},
    {name:"24_whm", type:"Healer"},
    {name:"25_blm", type:"Caster"},
    {name:"26_acn", type:"Caster"},
    {name:"27_smn", type:"Caster"},
    {name:"28_sch", type:"Healer"},
    {name:"29_rog", type:"Melee"},
    {name:"30_nin", type:"Melee"},
    {name:"31_mch", type:"Ranged"},
    {name:"32_drk", type:"Tank"},
    {name:"33_ast", type:"Healer"},
    {name:"34_sam", type:"Melee"},
    {name:"35_rdm", type:"Caster"},
    {name:"36_blu", type:"Limited"},
    {name:"37_gnb", type:"Tank"},
    {name:"38_dnc", type:"Ranged"},
    {name:"39_rpr", type:"Melee"},
    {name:"40_sge", type:"Healer"},
    {name:"41_vpr", type:"Melee"},
    {name:"42_pct", type:"Caster"}
]
const fs = require("fs");
const baseCompFull = fs.readFileSync("./base_comp.json", "utf8")

classJobs.forEach((value, key) => {
    generateComps(value.name, value.type);
})

function generateComps(name, type){
    var currentText = baseCompFull;
    currentText = currentText.replaceAll(/%class%/g, name);
    currentText = currentText.replaceAll(/%type%/g, type);

    fs.writeFile("./" + String(name) + ".comp", currentText, (error) => {});
}