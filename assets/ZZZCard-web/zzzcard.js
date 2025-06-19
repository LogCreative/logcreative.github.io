zzzcard_object = document.createElement("div")
zzzcard_object.setAttribute("id","zzzcard")
zzzcard_headbar = document.createElement("div")
zzzcard_headbar.setAttribute("id","zzzcard_headbar")
zzzcard_detail = document.createElement("div")
zzzcard_detail.setAttribute("id","zzzcard_detail")
zzzcard_detail_img = document.createElement("img")
zzzcard_detail_img.setAttribute("id", "zzzcard_detail_img")
zzzcard_detail.appendChild(zzzcard_detail_img)

chara_img_list = []

function showCharacter(e) {
    chara_img_list.forEach(element => {
        element_chara_rarity = element.id.split('-')[1]
        element.classList.remove("rarity" + element_chara_rarity)
    });
    chara_rarity = this.id.split('-')[1]
    this.classList.add("rarity" + chara_rarity)
    character_obj_img = document.getElementById("zzzcard_detail_img")
    character_obj_img.setAttribute("src", imgdir + "/card-" + this.id + ".png")
}

characters.forEach(character => {
    chara_div = document.createElement("div")
    chara_div.setAttribute("class", "imgdiv")
    // overlay_div = document.createElement("div")
    // overlay_div.setAttribute("class", "raritynone")
    // overlay_div.setAttribute("id",character)
    // overlay_div.addEventListener('click', showCharacter)
    chara_img = document.createElement("img")
    chara_img.setAttribute("src",`${imgdir}/avatar-${character}.webp`)
    chara_img.setAttribute("id", character)
    chara_img.addEventListener('click', showCharacter)
    // overlay_div.appendChild(chara_img)
    // chara_img_list.push(overlay_div)
    chara_img_list.push(chara_img)
    // chara_div.appendChild(overlay_div)
    chara_div.appendChild(chara_img)
    zzzcard_headbar.appendChild(chara_div)
});

zzzcard_object.appendChild(zzzcard_headbar)
zzzcard_object.appendChild(zzzcard_detail)
document.getElementsByTagName("zzzcard")[0].replaceWith(zzzcard_object)
chara_img_list[0].click()
