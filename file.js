
const topBarContainer = document.getElementById('topBarContainer')
const topBarTextVehicles = document.getElementById('topBarTextVehicles')
const topBarTextShop = document.getElementById('topBarTextShop')
const topBarTextSS = document.getElementById('topBarTextSS')
const topBarTitle = document.getElementById('topBarTitle')
const topBarIcon1 = document.getElementById('topBarIcon1')
const topBarIcon2 = document.getElementById('topBarIcon2')
const topBarIcon3 = document.getElementById('topBarIcon3')
const fabars = document.getElementById('fabars')
const barsText = document.getElementById('barsText')

document.addEventListener('scroll', function(){
    if(window.scrollY > 10){
        topBarState2()
    }
    else{
        topBarState1()
    }
})

topBarContainer.addEventListener('mouseover', function(){
    if(window.scrollY < 10){
        topBarState2()
    }
})
topBarContainer.addEventListener('mouseout', function(){
    if(window.scrollY < 10){
        topBarState1()
    }
})

function topBarState1(){
    topBarContainer.style.backgroundColor = 'transparent';
    topBarTextVehicles.style.color = 'white';
    topBarTextShop.style.color = 'white';
    topBarTextSS.style.color = 'white';
    topBarTitle.style.color = 'white';
    topBarIcon1.style.color = 'white';
    topBarIcon2.style.color = 'white';
    topBarIcon3.style.color = 'white';
    fabars.style.color = 'white';
    barsText.style.color = 'white';
}

function topBarState2(){
    topBarContainer.style.backgroundColor = 'white';
    topBarTextVehicles.style.color = 'rgb(20, 0, 100)';
    topBarTextShop.style.color = 'rgb(20, 0, 100)';
    topBarTextSS.style.color = 'rgb(20, 0, 100)';
    topBarTitle.style.color = 'rgb(20, 0, 100)';
    topBarIcon1.style.color = 'rgb(20, 0, 100)';
    topBarIcon2.style.color = 'rgb(20, 0, 100)';
    topBarIcon3.style.color = 'rgb(20, 0, 100)';
    fabars.style.color = 'rgb(20, 0, 100)';
    barsText.style.color = 'rgb(20, 0, 100)';
}

//---------------------------------------------------------------

let carDisplayNameVar = 1

const carDisplayName1 = document.getElementById('carDisplayName1')
const carDisplayName2 = document.getElementById('carDisplayName2')
const carDisplayName3 = document.getElementById('carDisplayName3')
const carDisplayName4 = document.getElementById('carDisplayName4')
const carDisplayName5 = document.getElementById('carDisplayName5')
const carDisplayName6 = document.getElementById('carDisplayName6')

const carDisplayImageBox1 = document.getElementById('carDisplayImageBox1')
const carDisplayImageBox2 = document.getElementById('carDisplayImageBox2')
const carDisplayImageBox3 = document.getElementById('carDisplayImageBox3')
const carDisplayImageBox4 = document.getElementById('carDisplayImageBox4')
const carDisplayImageBox5 = document.getElementById('carDisplayImageBox5')
const carDisplayImageBox6 = document.getElementById('carDisplayImageBox6')

carDisplayName1.addEventListener('click', function(){
    resetCarDisplayNameStyle()
    carDisplayName1.style.color = 'blue'
    carDisplayName1.style.borderBottom = '4px solid blue'
    resetCarDisplay1()
    
    carDisplayImageBox1.style.display = 'block'
    setTimeout(function(){
        carDisplayImageBox1.style.transition = 'opacity 0.5s'
        carDisplayImageBox1.style.opacity = '1'
    }, 500)
})

carDisplayName2.addEventListener('click', function(){
    resetCarDisplayNameStyle()
    carDisplayName2.style.color = 'blue'
    carDisplayName2.style.borderBottom = '4px solid blue'
    resetCarDisplay2()
    
    carDisplayImageBox2.style.display = 'block'
    setTimeout(function(){
        carDisplayImageBox2.style.transition = 'opacity 0.5s'
        carDisplayImageBox2.style.opacity = '1'
    }, 500)
})

carDisplayName3.addEventListener('click', function(){
    resetCarDisplayNameStyle()
    carDisplayName3.style.color = 'blue'
    carDisplayName3.style.borderBottom = '4px solid blue'
    resetCarDisplay3()

    carDisplayImageBox3.style.display = 'block'
    setTimeout(function(){
        carDisplayImageBox3.style.transition = 'opacity 0.5s'
        carDisplayImageBox3.style.opacity = '1'
    }, 500)
})

carDisplayName4.addEventListener('click', function(){
    resetCarDisplayNameStyle()
    carDisplayName4.style.color = 'blue'
    carDisplayName4.style.borderBottom = '4px solid blue'
    resetCarDisplay4()

    carDisplayImageBox4.style.display = 'block'
    setTimeout(function(){
        carDisplayImageBox4.style.transition = 'opacity 0.5s'
        carDisplayImageBox4.style.opacity = '1'
    }, 500)
})

carDisplayName5.addEventListener('click', function(){
    resetCarDisplayNameStyle()
    carDisplayName5.style.color = 'blue'
    carDisplayName5.style.borderBottom = '4px solid blue'
    resetCarDisplay5()

    carDisplayImageBox5.style.display = 'block'
    setTimeout(function(){
        carDisplayImageBox5.style.transition = 'opacity 0.5s'
        carDisplayImageBox5.style.opacity = '1'
    }, 500)
})

carDisplayName6.addEventListener('click', function(){
    resetCarDisplayNameStyle()
    carDisplayName6.style.color = 'blue'
    carDisplayName6.style.borderBottom = '4px solid blue'
    resetCarDisplay6()

    carDisplayImageBox6.style.display = 'block'
    setTimeout(function(){
        carDisplayImageBox6.style.transition = 'opacity 0.5s'
        carDisplayImageBox6.style.opacity = '1'
    }, 500)
})

function resetCarDisplayNameStyle(){
    carDisplayName1.style.color = 'grey'
    carDisplayName1.style.borderBottom = '2px solid grey'
    carDisplayName2.style.color = 'grey'
    carDisplayName2.style.borderBottom = '2px solid grey'
    carDisplayName3.style.color = 'grey'
    carDisplayName3.style.borderBottom = '2px solid grey'
    carDisplayName4.style.color = 'grey'
    carDisplayName4.style.borderBottom = '2px solid grey'
    carDisplayName5.style.color = 'grey'
    carDisplayName5.style.borderBottom = '2px solid grey'
    carDisplayName6.style.color = 'grey'
    carDisplayName6.style.borderBottom = '2px solid grey'
}

function resetCarDisplay1(){

    carDisplayImageBox2.style.transition = 'opacity 0.5s'
    carDisplayImageBox2.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox2.style.display = 'none';
    }, 500)

    carDisplayImageBox3.style.transition = 'opacity 0.5s'
    carDisplayImageBox3.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox3.style.display = 'none';
    }, 500)

    carDisplayImageBox4.style.transition = 'opacity 0.5s'
    carDisplayImageBox4.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox4.style.display = 'none';
    }, 500)

    carDisplayImageBox5.style.transition = 'opacity 0.5s'
    carDisplayImageBox5.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox5.style.display = 'none';
    }, 500)

    carDisplayImageBox6.style.transition = 'opacity 0.5s'
    carDisplayImageBox6.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox6.style.display = 'none';
    }, 500)
}

function resetCarDisplay2(){
    carDisplayImageBox1.style.transition = 'opacity 0.5s'
    carDisplayImageBox1.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox1.style.display = 'none';
    }, 500)

    carDisplayImageBox3.style.transition = 'opacity 0.5s'
    carDisplayImageBox3.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox3.style.display = 'none';
    }, 500)

    carDisplayImageBox4.style.transition = 'opacity 0.5s'
    carDisplayImageBox4.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox4.style.display = 'none';
    }, 500)

    carDisplayImageBox5.style.transition = 'opacity 0.5s'
    carDisplayImageBox5.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox5.style.display = 'none';
    }, 500)

    carDisplayImageBox6.style.transition = 'opacity 0.5s'
    carDisplayImageBox6.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox6.style.display = 'none';
    }, 500)
}

function resetCarDisplay3(){
    carDisplayImageBox1.style.transition = 'opacity 0.5s'
    carDisplayImageBox1.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox1.style.display = 'none';
    }, 500)

    carDisplayImageBox2.style.transition = 'opacity 0.5s'
    carDisplayImageBox2.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox2.style.display = 'none';
    }, 500)

    carDisplayImageBox4.style.transition = 'opacity 0.5s'
    carDisplayImageBox4.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox4.style.display = 'none';
    }, 500)

    carDisplayImageBox5.style.transition = 'opacity 0.5s'
    carDisplayImageBox5.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox5.style.display = 'none';
    }, 500)

    carDisplayImageBox6.style.transition = 'opacity 0.5s'
    carDisplayImageBox6.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox6.style.display = 'none';
    }, 500)
}

function resetCarDisplay4(){
    carDisplayImageBox1.style.transition = 'opacity 0.5s'
    carDisplayImageBox1.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox1.style.display = 'none';
    }, 500)

    carDisplayImageBox2.style.transition = 'opacity 0.5s'
    carDisplayImageBox2.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox2.style.display = 'none';
    }, 500)

    carDisplayImageBox3.style.transition = 'opacity 0.5s'
    carDisplayImageBox3.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox3.style.display = 'none';
    }, 500)

    carDisplayImageBox5.style.transition = 'opacity 0.5s'
    carDisplayImageBox5.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox5.style.display = 'none';
    }, 500)

    carDisplayImageBox6.style.transition = 'opacity 0.5s'
    carDisplayImageBox6.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox6.style.display = 'none';
    }, 500)
}

function resetCarDisplay5(){
    carDisplayImageBox1.style.transition = 'opacity 0.5s'
    carDisplayImageBox1.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox1.style.display = 'none';
    }, 500)

    carDisplayImageBox2.style.transition = 'opacity 0.5s'
    carDisplayImageBox2.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox2.style.display = 'none';
    }, 500)

    carDisplayImageBox3.style.transition = 'opacity 0.5s'
    carDisplayImageBox3.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox3.style.display = 'none';
    }, 500)

    carDisplayImageBox4.style.transition = 'opacity 0.5s'
    carDisplayImageBox4.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox4.style.display = 'none';
    }, 500)

    carDisplayImageBox6.style.transition = 'opacity 0.5s'
    carDisplayImageBox6.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox6.style.display = 'none';
    }, 500)
}

function resetCarDisplay6(){
    carDisplayImageBox1.style.transition = 'opacity 0.5s'
    carDisplayImageBox1.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox1.style.display = 'none';
    }, 500)

    carDisplayImageBox2.style.transition = 'opacity 0.5s'
    carDisplayImageBox2.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox2.style.display = 'none';
    }, 500)

    carDisplayImageBox3.style.transition = 'opacity 0.5s'
    carDisplayImageBox3.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox3.style.display = 'none';
    }, 500)

    carDisplayImageBox4.style.transition = 'opacity 0.5s'
    carDisplayImageBox4.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox4.style.display = 'none';
    }, 500)

    carDisplayImageBox5.style.transition = 'opacity 0.5s'
    carDisplayImageBox5.style.opacity = '0';
    setTimeout(function(){
        carDisplayImageBox5.style.display = 'none';
    }, 500)
}

//---------------------------------------------------------------

const carDisplayNameFormat1 = document.getElementById('carDisplayNameFormat1')
const carDisplayNameFormat2 = document.getElementById('carDisplayNameFormat2')
const carDisplayNameFormat3 = document.getElementById('carDisplayNameFormat3')
const carDisplayNameFormat4 = document.getElementById('carDisplayNameFormat4')
const carDisplayNameFormat5 = document.getElementById('carDisplayNameFormat5')
const carDisplayNameFormat6 = document.getElementById('carDisplayNameFormat6')

const carDisplayImageBoxFormat1 = document.getElementById('carDisplayImageBoxFormat1')
const carDisplayImageBoxFormat2 = document.getElementById('carDisplayImageBoxFormat2')
const carDisplayImageBoxFormat3 = document.getElementById('carDisplayImageBoxFormat3')
const carDisplayImageBoxFormat4 = document.getElementById('carDisplayImageBoxFormat4')
const carDisplayImageBoxFormat5 = document.getElementById('carDisplayImageBoxFormat5')
const carDisplayImageBoxFormat6 = document.getElementById('carDisplayImageBoxFormat6')

const carDisplayExpandFormat1 = document.getElementById('carDisplayExpandFormat1')
const carDisplayExpandFormat2 = document.getElementById('carDisplayExpandFormat2')
const carDisplayExpandFormat3 = document.getElementById('carDisplayExpandFormat3')
const carDisplayExpandFormat4 = document.getElementById('carDisplayExpandFormat4')
const carDisplayExpandFormat5 = document.getElementById('carDisplayExpandFormat5')
const carDisplayExpandFormat6 = document.getElementById('carDisplayExpandFormat6')

const carDisplayImageBottomText1 = document.getElementById('carDisplayImageBottomText1')
const carDisplayImageBottomText2 = document.getElementById('carDisplayImageBottomText2')
const carDisplayImageBottomText3 = document.getElementById('carDisplayImageBottomText3')
const carDisplayImageBottomText4 = document.getElementById('carDisplayImageBottomText4')
const carDisplayImageBottomText5 = document.getElementById('carDisplayImageBottomText5')
const carDisplayImageBottomText6 = document.getElementById('carDisplayImageBottomText6')

let carDisplayImageBoxFormatVar1 = false
let carDisplayImageBoxFormatVar2 = false
let carDisplayImageBoxFormatVar3 = false
let carDisplayImageBoxFormatVar4 = false
let carDisplayImageBoxFormatVar5 = false
let carDisplayImageBoxFormatVar6 = false

carDisplayNameFormat1.addEventListener('click', function(){
    if(carDisplayImageBoxFormatVar1 == false){
        carDisplayImageBoxFormat1.style.display = 'block'
        carDisplayNameFormat1.style.color = 'rgb(65, 65, 255)'
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar1 = true
        carDisplayExpandFormat1.textContent = '-'
        return;
    }
    if (carDisplayImageBoxFormatVar1 == true){
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar1 = false
    }
})

carDisplayNameFormat2.addEventListener('click', function(){
    if(carDisplayImageBoxFormatVar2 == false){
        carDisplayImageBoxFormat2.style.display = 'block'
        carDisplayNameFormat2.style.color = 'rgb(65, 65, 255)'
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar2 = true
        carDisplayExpandFormat2.textContent = '-'
        return;
    }
    if (carDisplayImageBoxFormatVar2 == true){
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar2 = false
    }
})

carDisplayNameFormat3.addEventListener('click', function(){
    if(carDisplayImageBoxFormatVar3 == false){
        carDisplayImageBoxFormat3.style.display = 'block'
        carDisplayNameFormat3.style.color = 'rgb(65, 65, 255)'
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar3 = true
        carDisplayExpandFormat3.textContent = '-'
        return;
    }
    if (carDisplayImageBoxFormatVar3 == true){
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar3 = false
    }
})

carDisplayNameFormat4.addEventListener('click', function(){
    if(carDisplayImageBoxFormatVar4 == false){
        carDisplayImageBoxFormat4.style.display = 'block'
        carDisplayNameFormat4.style.color = 'rgb(65, 65, 255)'
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar4 = true
        carDisplayExpandFormat4.textContent = '-'
        return;
    }
    if (carDisplayImageBoxFormatVar4 == true){
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar4 = false
    }
})

carDisplayNameFormat5.addEventListener('click', function(){
    if(carDisplayImageBoxFormatVar5 == false){
        carDisplayImageBoxFormat5.style.display = 'block'
        carDisplayNameFormat5.style.color = 'rgb(65, 65, 255)'
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar5 = true
        carDisplayExpandFormat5.textContent = '-'
        return;
    }
    if (carDisplayImageBoxFormatVar5 == true){
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar5 = false
    }
})

carDisplayNameFormat6.addEventListener('click', function(){
    if(carDisplayImageBoxFormatVar6 == false){
        carDisplayImageBoxFormat6.style.display = 'block'
        carDisplayNameFormat6.style.color = 'rgb(65, 65, 255)'
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar6 = true
        carDisplayExpandFormat6.textContent = '-'
        return;
    }
    if (carDisplayImageBoxFormatVar6 == true){
        closeCarDisplayImageBoxFormat()
        carDisplayImageBoxFormatVar6 = false
    }
})

function closeCarDisplayImageBoxFormat(){
    if(carDisplayImageBoxFormatVar1 == true){
        carDisplayImageBoxFormat1.style.display = 'none'
        carDisplayExpandFormat1.textContent = '+'
        carDisplayNameFormat1.style.color = 'black'
    }
    if(carDisplayImageBoxFormatVar2 == true){
        carDisplayImageBoxFormat2.style.display = 'none'
        carDisplayExpandFormat2.textContent = '+'
        carDisplayNameFormat2.style.color = 'black'
    }
    if(carDisplayImageBoxFormatVar3 == true){
        carDisplayImageBoxFormat3.style.display = 'none'
        carDisplayExpandFormat3.textContent = '+'
        carDisplayNameFormat3.style.color = 'black'
    }
    if(carDisplayImageBoxFormatVar4 == true){
        carDisplayImageBoxFormat4.style.display = 'none'
        carDisplayExpandFormat4.textContent = '+'
        carDisplayNameFormat4.style.color = 'black'
    }
    if(carDisplayImageBoxFormatVar5 == true){
        carDisplayImageBoxFormat5.style.display = 'none'
        carDisplayExpandFormat5.textContent = '+'
        carDisplayNameFormat5.style.color = 'black'
    }
    if(carDisplayImageBoxFormatVar6 == true){
        carDisplayImageBoxFormat6.style.display = 'none'
        carDisplayExpandFormat6.textContent = '+'
        carDisplayNameFormat6.style.color = 'black'
    }
}

//----------------------------------------------------------------

