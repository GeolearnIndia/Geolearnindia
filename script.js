function openGIS(){
document.querySelector('.container').style.display='none';
document.getElementById('gis').style.display='block';
}

function openRS(){
document.querySelector('.container').style.display='none';
document.getElementById('rs').style.display='block';
}

function goBack(){
document.querySelector('.container').style.display='block';
document.getElementById('gis').style.display='none';
document.getElementById('rs').style.display='none';
}
