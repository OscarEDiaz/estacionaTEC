var x = document.getElementById('symb');
var y = document.getElementById('symb-ctn');
var cond = 0;

x.addEventListener('click', function(){
    if(cond === 0){
        y.style.transition = 'all 1s ease 0s';
        y.style.height = '100px';
        setTimeout(function(){
            y.style.opacity = '1';
        }, 300);
    
        x.style.transition = 'all 1s ease 0s';
        x.style.borderRadius = '10px 10px 0 0';
    }
    if(cond === 1){
        y.style.transition = 'all 1s ease 0s';
        y.style.opacity = '0';
        setTimeout(function(){
            y.style.height = '0';
            x.style.transition = 'all 1s ease 0s';
            x.style.borderRadius = '10px';
        }, 200);
        cond = -1;
    }
    cond++;
})