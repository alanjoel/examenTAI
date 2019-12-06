var melgarejo=0
var ballivian=0
var linares=0
var em=0;
var eb=0;
var el=0;
var general=0;
function conteoMelgarejo(e) {
melgarejo++;
em=em+3.3;
general=e.detail;
document.querySelector('#melgarejo').textContent = melgarejo
document.querySelector('#porcentajeMelgarejo').textContent = general
}

function conteoBallivian(e) {
ballivian++;
eb=eb+3.3;
general=e.detail;
  document.querySelector('#ballivian').textContent = ballivian
  document.querySelector('#porcentajeBallivian').textContent = general
}
function conteoLinares(e) {
linares++;
el=el+3.3;
  document.querySelector('#linares').textContent = linares
  document.querySelector('#porcentajeLinares').textContent = el
}
function general(e){
	general=e.detail
	if (general==10) {

	}
}