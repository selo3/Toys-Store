<template>
 <div class="popup-overlay">
    <div class="popup-box">
        <slot/>
        <button class="popup-close" @click="TogglePopup()">Close Popup</button>
    </div>
 </div>
</template>
<script>
import {ref} from 'vue'

export default{
    props:['TogglePopup'],

setup(){
    const popupTriggers = ref({
        buttonTrigger:true,
        TimedTrigger: false
    })
    return{
        popup
    }
}}
//         let popupBox= document.createElement("div");
//         popupBox.className = 'popup-box';
        
//         let popupimage = document.createElement("v-img");
//         popupimage.src = img.src;
        
//         popupBox.appendChild(popupimage);
//         document.body.appendChild(popupBox)
        
//         // creat the close span 
//         let closebutton =document.createElement("span");
//         let closebuttontext = document.createTextNode("X");
//         closebutton.appendChild(closebuttontext);
//         closebutton.className = "close-button";
//         popupBox.appendChild(closebutton);
        
//     })
// })

// // close popup 
// document.addEventListener("click" , (e)=>{
//     if(e.target.className == 'close-button'){
//         e.target.parentNode.remove();
//         document.querySelector(".popup-overlay").remove();
//     }
// })
</script>
<style>

    /* start galary */
.galary{
    padding: 50px 0;
}
.galary h2{
        font-weight: bold;
        font-size: 30px;
        color: var(--colors-main);
        text-align: center;
        margin: 0 0 50px;

}
.galary .images-box{
    text-align: center;
}

.galary .images-box img{
    width: 200px;
    padding: 3px;
    margin: 5px;
    background-color: #f6f6f6;
    border: 1px solid #ccc;
    cursor: pointer;
}
.popup-overlay {
    position: fixed;
    background-color: hsl(0deg 0% 0% / 22%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
}

.popup-box{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    background-color: #833e3e;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 1002;
}
.popup-box h3{
    font-weight: bold;
    text-align: center;
    margin: 0 0 20px;
    color: var(--colors-main);
}
.close-button{
    position: absolute;
    top: -15px;
    right: -15px;
    background-color: var(--colors-main);
    color: #fff;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}
.popup-box img{
    max-width: 100%;
}

/* end galary */

</style>