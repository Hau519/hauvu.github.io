document.addEventListener('DOMContentLoaded', ()=>{
	
	var country=document.querySelector('#country');
	var canadaRate= document.querySelector('#canada');
	var othersRate = document.querySelector('#others');
	var exCAD = document.querySelector('#exCAD');
	var exOthers = document.querySelector('#exOthers');
	var rad1=document.querySelector('#radioCanada');
	var rad2=document.querySelector('#radioOthers');
	var input2 = document.querySelector('#input2');
	var input4 = document.querySelector('#input4');
	var input1 = document.querySelector('#input1');
	var input5 = document.querySelector('#input5');
	var input3 = document.querySelector('#convert');
	
		
	country.addEventListener('click', (e)=>{
		if(country.value=='USA'){
			canadaRate.value='One CA Dollar = 0.79 US Dollar ';
			othersRate.value='One US Dollar = 1.27 CA Dollar';
			exCAD.value='CA Dollar to US Dollar';
			exOthers.value='US Dollar to CA Dollar';
			rad1.addEventListener('click', ()=>{
				if(rad1.checked){
					input2.value = 'CAD';
					input4.value = 'USD';
					input3.removeAttribute('disabled');
				}
				input3.addEventListener('click', ()=>{
					input5.value = input1.value * 0.79;
				})
			})
			rad2.addEventListener('click',()=>{
				if(rad2.checked){
					input2.value = 'USD';
					input4.value = 'CAD';
				}
				input3.addEventListener('click', ()=>{
					input5.value = input1.value * 1.27;
				})
				input3.removeAttribute('disabled');
			})	
		}
		else if(country.value=='France'){
			canadaRate.value='One CA Dollar = 0.67 Euro';
			othersRate.value='One Euro = 1.5 CA Dollar';
			exCAD.value='CA Dollar to EUR';
			exOthers.value='EUR to CA Dollar';
			rad1.addEventListener('click', ()=>{
				if(rad1.checked){
					input2.value = 'CAD';
					input4.value = 'EUR';
				}
				input3.addEventListener('click', ()=>{
					input5.value = input1.value * 0.67;
				})
				input3.removeAttribute('disabled');
			})
			rad2.addEventListener('click',()=>{
				if(rad2.checked){
					input2.value = 'EUR';
					input4.value = 'CAD';
				}
				input3.addEventListener('click', ()=>{
					input5.value = input1.value * 1.5;
				})
				input3.removeAttribute('disabled');
			})	
		}
		else if(country.value=='UK'){
			canadaRate.value='One CA Dollar = 0.6 British Pound';
			othersRate.value='One British Pound = 1.65 CA Dollar';
			exCAD.value='CA Dollar to Pound';
			exOthers.value='Pound to CA Dollar';
			rad1.addEventListener('click', ()=>{
				if(rad1.checked){
					input2.value = 'CAD';
					input4.value = 'Pound';
				}
				input3.addEventListener('click', ()=>{
					input5.value = input1.value * 0.6;
				})
				input3.removeAttribute('disabled');
			})
			rad2.addEventListener('click',()=>{
				if(rad2.checked){
					input2.value = 'Pound';
					input4.value = 'CAD';
				}
				input3.addEventListener('click', ()=>{
					input5.value = input1.value * 1.65;
				})
				input3.removeAttribute('disabled');
			})
		}
	})

	


	
	
})






