
var mapa = [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
			[1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1],
			[1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1],
			[1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1],
			[1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1],
			[1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1],
			[1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1],
			[1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1],
			[1,2,1,0,0,1,0,0,0,0,0,0,0,0,1,1,3,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
			
var derecha = document.getElementById('right');
var izquierda = document.getElementById('left');
var mover = document.getElementById('move');
			
class Laberinto{
	constructor(){
		this.tablero = document.getElementById('tablero');
		this.tabla = document.createElement("table");	
		this.x=0;
		this.y=0;
		this.direccion=0;
		this.dibujarMapa();
	}
	
	foo(){
		mapa[1,1]='O';
	}
	
	dibujarMapa(){
		this.tablero.innerHTML = '';
		var tabla = document.createElement('table');
		tabla.border = "0";
		for(var i = 0; i < mapa.length; ++i){
			var fila = document.createElement('tr');
			for(var j = 0; j < mapa[0].length; ++j){
				var celda = document.createElement('td');
				if (mapa[i][j] == 1){
					celda.setAttribute('class', 'negro');
				}
				else if (mapa[i][j] == 2){
					//celda.setAttribute('class', 'negro');
					this.x=i;
					this.y=j;
					switch(this.direccion){
						case 0:
							celda.setAttribute('class', 'up');
							break;
							
						case 1:
							celda.setAttribute('class', 'right');
							break;
							
						case 2:
							celda.setAttribute('class', 'down');
							break;
						
						case 3:
							celda.setAttribute('class', 'left');
							break;
					}
					
				}
				else if(mapa[i][j]==3){
					celda.setAttribute('class', 'bomba');
				}
				var p = document.createElement('p');
				celda.appendChild(p);
				fila.appendChild(celda);
			}
			tabla.appendChild(fila);
		}
		tablero.appendChild(tabla);
		//this.mapa;
	}
	
}

var l = new Laberinto();

function win(){
	alert("GANASTE!");
}

derecha.onclick=function(){
	var direc = l.direccion;
	direc++;
	if(direc==4){
		l.direccion=0;
		l.dibujarMapa();
		return;
	}
	l.direccion=direc;
	l.dibujarMapa();
}

izquierda.onclick=function(){
	var direc = l.direccion;
	direc--;
	if(direc==-1){
		l.direccion=3;
		l.dibujarMapa();
		return;
	}
	l.direccion=direc;
	l.dibujarMapa();
}

mover.onclick=function(){
	var direc=l.direccion;
	var x = l.x;
	var y = l.y;
	switch(direc){
		case 0:
			--x;
			if(mapa[x][y] == 0){
				mapa[l.x][y]=0;
				l.x=x;
				mapa[x][y]=2;
			}
			else if(mapa[x][y] == 3){
				win();
			}
		break;
		case 1:
			++y;
			if(mapa[x][y] == 0){
				mapa[x][l.y]=0;
				l.y=y;
				mapa[x][y]=2;
			}
			else if(mapa[x][y] == 3){
				win();
			}
		break;
		case 2:
			++x;
			if(mapa[x][y] == 0){
				mapa[l.x][y]=0;
				l.x=x;
				mapa[x][y]=2;
			}
			else if(mapa[x][y] == 3){
				win();
			}
		break;
		case 3:
			--y;
			if(mapa[x][y] == 0){
				mapa[x][l.y]=0;
				l.y=y;
				mapa[x][y]=2;
			}
			else if(mapa[x][y] == 3){
				win();
			}
		break;
	}
	l.dibujarMapa();
}
