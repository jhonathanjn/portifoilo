let angulo = 0;
document.getElementById("perfil").addEventListener("click", function() {
    angulo += 360; 
    this.style.transform = `rotateZ(${angulo}deg)`;
});
