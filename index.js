// Part information
const partsData = {
    engine: {
        name: "အင်ဂျင်",
        description: "ကားအတွက် စွမ်းအားထုတ်ပေးသော အဓိကအစိတ်အပိုင်း။ လောင်စာဆီကို စက်မောင်းအားအဖြစ် ပြောင်းလဲပေးသည်။",
        image: "car-engine.jpg"
    },
    wheel: {
        name: "ဘီး",
        description: "ကားကို ရွေ့လျားစေရန် တာဝန်ယူထားသည်။ ရာဘာဖြင့်ပြုလုပ်ထားပြီး လမ်းကြောင်းပေါ်တွင် ကားကိုထိန်းချုပ်ပေးသည်။",
        image: "car-wheel.jpg"
    },
    door: {
        name: "တံခါး",
        description: "ခရီးသည်များ ကားအတွင်းသို့ဝင်ရောက်ရန် အသုံးပြုသည်။ လုံခြုံရေးအတွက် သော့ခတ်နိုင်သည်။",
        image: "car-door.jpg"
    },
    headlight: {
        name: "မီးချောင်း",
        description: "ညဘက်မောင်းနှင်ရာတွင် လမ်းကြောင်းကိုမြင်နိုင်စေရန် အလင်းပေးသည်။ ရှေ့မှလာသောယာဉ်များကိုလည်း အသိပေးသည်။",
        image: "car-headlight.jpg"
    }
};

// Show part information
function showPart(partId) {
    const part = partsData[partId];
    const partInfoElement = document.getElementById('part-info');
    
    if (part) {
        partInfoElement.innerHTML = `
            <h3>${part.name}</h3>
            <img src="${part.image}" alt="${part.name}" style="max-width:200px; float:left; margin-right:15px;">
            <p>${part.description}</p>
            <div style="clear:both;"></div>
        `;
        
        // Highlight the part on the car image (you would need SVG for better highlighting)
        // This is a simplified version
        const carImage = document.getElementById('car-image');
        carImage.className = 'highlight-' + partId;
    }
}

// Initialize image map highlighting
document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('area');
    
    areas.forEach(area => {
        area.addEventListener('mouseover', function() {
            showPart(this.getAttribute('data-part'));
        });
        
        area.addEventListener('click', function(e) {
            e.preventDefault();
            showPart(this.getAttribute('data-part'));
        });
    });
});
