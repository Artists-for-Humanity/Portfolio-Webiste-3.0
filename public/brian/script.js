document.addEventListener('DOMContentLoaded',() => {
    const diamondFrame1 = document.getElementById('diamondFrame1');
    const greyDiamond = document.getElementById('greyDiamond');
    const diamond1 = document.getElementById('diamond1');
    const navigate = document.querySelectorAll('.nav')
    const triangle = document.querySelector('.triangle');
    const background = document.querySelector('.background');
    // const button = document.querySelector('.buttonContainer');
    const sign = document.querySelector('.welcome');
    let isCentered = false;
    let isVisable = false

    
    diamond1.addEventListener('click', function () {
        navigate[0].style.display = 'block';
        navigate[1].style.display = 'block';
        navigate[2].style.display = 'block';
        navigate[3].style.display = 'block';
        navigate[4].style.display = 'block';
        navigate[5].style.display = 'block';
        navigate[6].style.display = 'block';
        navigate[7].style.display = 'block';
        navigate[8].style.display = 'block';
        if (!isCentered) {
            diamondFrame1.style.transform = 'translate(-50%, -50%) scale(0.35)';
            diamondFrame1.style.left = '50%';
            diamondFrame1.style.top = '50%';
            triangle.style.display = 'none';
            sign.style.display = 'none';
            greyDiamond.style.transform = 'translate(-50%, -50%) scale(0.35)';
            greyDiamond.style.left = '50%';
            greyDiamond.style.top = '50%';
        }
        else{
            navigate[0].style.display = 'none';
            navigate[1].style.display = 'none';
            navigate[2].style.display = 'none';
            navigate[3].style.display = 'none';
            navigate[4].style.display = 'none';
            navigate[5].style.display = 'none';
            navigate[6].style.display = 'none';
            navigate[7].style.display = 'none';
            navigate[8].style.display = 'none';
            diamondFrame1.style.transform = 'translate(110%, -20%) scale(1)';
            greyDiamond.style.transform = 'translate(120%,-20%) scale(1)';
            triangle.style.display = 'block';
            sign.style.display = 'block';
                 
        }
        isCentered = !isCentered;
        
    });

})

// array.forEach(element => {navigate
    
// });

