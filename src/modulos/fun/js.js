import RapidStore						from "../str/RapidStore"
import dateFormat 							from 'dateformat'

class Eventscolas {
	aaa(a, b, c){
		RapidStore.c_a('c_b','')
		if (c === 2){
			b = RapidStore.a_c[0].c_a + b
		}
		if (b.length > RapidStore.a_c[0].c_d ){
			return
		}
		RapidStore.c_a(a,b)
		if (RapidStore.a_c[0].c_a.charAt(0) ==='u' || RapidStore.a_c[0].c_a.charAt(0) ==='U' || RapidStore.a_c[0].c_a.charAt(0) ==='a' || RapidStore.a_c[0].c_a.charAt(0) ==='A'){
			RapidStore.c_a('c_d', 10)
			if (RapidStore.a_c[0].c_f===''){
				RapidStore.c_a('e_a', RapidStore.a_b[0].Text)
			}
		}
		else {
			RapidStore.c_a('e_a', RapidStore.a_b[3].Text)
			RapidStore.c_a('c_d', 8)    //configurar sergun servidor falta
		}
	}
	aab(a,b,c){
		if (RapidStore.a_c[0].c_a.length < RapidStore.a_c[0].c_d && RapidStore.a_c[0].c_f===''){
			RapidStore.c_a('e_a', RapidStore.a_b[14].Text.replace(/%c/, RapidStore.a_c[0].c_d))

		} else {
			if (RapidStore.a_c[0].c_f===''){
				if (RapidStore.a_c[0].c_a.charAt(0) ==='u' || RapidStore.a_c[0].c_a.charAt(0) ==='U' || RapidStore.a_c[0].c_a.charAt(0) ==='a' || RapidStore.a_c[0].c_a.charAt(0) ==='A'){
					RapidStore.c_a('c_f', RapidStore.a_c[0].c_a)
					RapidStore.c_a('e_a', RapidStore.a_b[10].Text)
					this.aad()
				} else {
					RapidStore.c_a('c_m',RapidStore.a_c[0].c_a)
					this.aaq(3, 0)
					this.aad()
				}
			} else {
				RapidStore.c_a('c_g',RapidStore.a_c[0].c_a)
				this.aaq(3, 0)
				this.aad()
			}
		}
	} 
	aac(a, b, c){
		if (b === 0){
			const val = RapidStore.a_c[0].c_a.slice(0, -1)
			RapidStore.c_a('c_a',val)
		}
		if (b === 1){
			RapidStore.c_a('c_a','')
		}
		if (b === 2){
			RapidStore.increment(4,0)
		}
		if (b === 3){
			RapidStore.c_a('c_d',15)
		}
	}
	aad(a){									//reset form
		RapidStore.c_a('c_a','')
		RapidStore.c_a('c_c',false)
		if (a === 1){
			RapidStore.c_a('c_f','')
			RapidStore.c_a('c_g','')
			RapidStore.c_a('c_m','')
		}
	}

	a_e(a, b) {
		if (a === 1) {
			RapidStore.increment(2, b)
		}
	}

	async a_f(llave, dominio , methodo , otro){
		var data = ''
		if (llave === 1){			//imprimir offline
			RapidStore.c_a('b_c',otro = otro + 1)
			RapidStore.c_a('a_a',true)
			RapidStore.c_a('a_b',false)
			RapidStore.c_a('a_c',false)
			RapidStore.c_a('a_d',false)
			RapidStore.c_a('e_c','mono')
			RapidStore.c_a('e_d','rejilla')
			RapidStore.c_a('d_a','981fhdj23847dj928342jd19238u42389dj2138412df')
			RapidStore.c_a('d_b','off')
			data = {
			aaa: 			RapidStore.a_c[0].d_a,
			aab: 			RapidStore.a_c[0].d_b,
			aac:			RapidStore.a_c[0].d_c,
			aad: 			otro,
			aai:			'1'
			}
		}
		if (llave === 2){			//comprobar credenciales
			RapidStore.c_a('d_b','h_c')
			RapidStore.c_a('d_a','981fhdj23847dj928342jd19238u42389dj2138412df')
			data = {
			aaa: 			RapidStore.a_c[0].d_a,
			aab: 			RapidStore.a_c[0].d_b,
			aac: 			RapidStore.a_c[0].d_c
			}
		}
		if (llave === 3){			//comprobar credenciales
			RapidStore.c_a('d_b','win')
			RapidStore.c_a('d_a','981fhdj23847dj928342jd19238u42389dj2138412df')
			data = {
			aaa: 			RapidStore.a_c[0].d_a,
			aab: 			RapidStore.a_c[0].d_b,
			aac: 			RapidStore.a_c[0].d_c
			}
		}
		
		if (llave === 6){			//imprimir online
			//console.log(RapidStore.a_l)
			RapidStore.c_a('d_b','tol')
			RapidStore.c_a('d_a','981fhdj23847dj928342jd19238u42389dj2138412df')
			data = {
			aaa: 			RapidStore.a_c[0].d_a,
			aab: 			RapidStore.a_c[0].d_b,
			aac: 			RapidStore.a_c[0].d_c,
			aad: 			otro.s,
			aae:			RapidStore.a_l,
			aaf:			otro.v,
			aag:			RapidStore.a_m.Config_ni,
			}
		}
		try{
			let response = await fetch (dominio,{
				method: methodo,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})


			const reader = response.body.getReader()
			const reslength = +response.headers.get('Content-Length')
			if (!reslength) {
    				console.log('probando error')
  				}
			let at = 0;
			let chunks = []; // array of received binary chunks (comprises the body)
			while(true) {
				const {done, value} = await reader.read()
				if (done) {
				break
				}
				chunks.push(value)
				at += value.length
				RapidStore.b_a(`${(at * 100 / reslength ).toFixed(0)}%`);
				//console.log(`Received ${at} of ${reslength}`)
			}	
			let chunksAll = new Uint8Array(at)
			let position = 0;
			for(let chunk of chunks) {
				chunksAll.set(chunk, position)
				position += chunk.length
			}
			let result = new TextDecoder("utf-8").decode(chunksAll)
			//console.log(result)
			//console.warn(result)
			let estado = JSON.parse(result)
			if (estado && estado.status){
				if (llave===2){
					//console.log(estado)
					await this.a_q(1, estado)
				}
				if (llave===4){
					RapidStore.increment(3, estado)
				}
				
			} else if (estado && estado.status === false) {
				//consiciones 2 y 5 desbbiadas.

				if(llave===4){
					this.a_d()
					RapidStore.c_a('c_b', estado.mensaje)
				}
				if(llave===6){
					this.a_d()
					RapidStore.c_a('c_b', estado.mensaje)
				}
			}
		} catch(e){
			console.log(e)
			if (llave===4){
				this.a_d()
			}
		}
	}

	a_g(a,b,c){  //c libre observada
		var indice = 0
		var frases = []
		frases[0] = RapidStore.a_b[0].Text
		frases[1] = RapidStore.a_b[1].Text

		indice = Math.random()*(frases.length)
		indice = Math.floor(indice)

		// setInterval(() => {
		// 	if (indice === frases.length) {indice = 0}
		// 	RapidStore.c_a('e_a', frases[indice])
		// 	indice++
		// }, 15000)
	}
	a_h(){		//libre
		this.a_f(3, RapidStore.a_c[0].d_e, 'POST', 'otro')
		//keydown( 'ctrl+s' )

		//keydown( 'enter' )  // or specify `which` code directly, in this case 13
  
		// const event = new KeyboardEvent('keypress', {
		// 	key: 'f1',
		// 	});
		// console.log(event)
	}
	a_i(a){			//empty
		if (Array.isArray(a) && !a.length) {
			return true
		} else {
			return false
		} 
    }
    	
    a_j(a){			//control access 
    	if (a === 0){
			return RapidStore.a_c[0].a_c
		}
		if (a === 1){
			return RapidStore.a_c[0].a_d
		}
		if (a === 2){
			return RapidStore.a_c[0].a_e
		}
		if (a === 3){
			return RapidStore.a_c[0].a_f
		}
	}
    a_k(a){		// libre
		if (a === 0){
			RapidStore.increment(2)
		}
		if (a === 1){
			RapidStore.increment(3)
		}
		if (a === 2){
			RapidStore.increment(4)
		}
		if (a === 3){
			RapidStore.increment(5)
		}
    }
    a_l(a){
    	return 'listas lista-admin bell'
    }
    a_m(){
    	return 'listas lista-user bell'
    }

    async aan(a){
		return new Promise( (resolve, reject) =>{
			RapidStore.c_a('g_b', new WebSocket(a))
			RapidStore.c_a('g_c', true)
			RapidStore.a_c[0].g_b.onopen = () => {
				RapidStore.c_a('g_d', true)
				resolve('WebSocket Client Connected. ')
			}
			RapidStore.a_c[0].g_b.onerror = (e)=> {
		    	RapidStore.c_a('g_c', false)
				reject(e)
			}
		})
	}
	a_o(a){
		// var a contiene info del error
		RapidStore.c_a('g_c', false)
		RapidStore.c_a('g_d', false)
		console.log('Coneccion perdida, reconectando.')
		this.aan(RapidStore.a_c[0].g_a).then((b)=>{
			console.log(b)
		}).catch((e)=>{
			//var e contiene info del error
			console.log('Reintentando')
			this.a_p()
		})
	}
	a_p(){
		const inter = setInterval(() => {
			console.log('sssdddddddddddddddd')
			if (RapidStore.a_c[0].g_c === false){
				this.aan(RapidStore.a_c[0].g_a).then((a)=>{
				console.log(a)
				//Eventscolas.a_d(window.localStorage.token)
				}).catch((e)=>{
					//var e contiene info del error
					console.log('Connection Error')
				})
			}
			if (RapidStore.a_c[0].g_d === true ){
				clearInterval(inter)
			}
		}, 5000)

	}
	async aaq(a, b, c) {
		if (a===1) {
			console.log(b, '300')
			try {
				RapidStore.a_c[0].g_b.send(JSON.stringify({
					event 		: 'CLIENT_ONLINE',
					payload 	: {
						key			: b.key,
						razon		: b.razon,
						terminal 	: 'M0'
					},
					app			:	RapidStore.a_c[0].d_c,
					token		:	'kkjsd8fi198sd8f7124509df0gdajasgda83936598wj'
				}))
			} catch (e){
				console.log(e)
			}
		}
		if (a===2) {
			//console.log(new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000)).toISOString().slice(0, 19).replace('T', ' '))
			if (RapidStore.a_c[0].e_f === true){
				RapidStore.c_a('e_f', false) 
				try {
					RapidStore.a_c[0].g_b.send(JSON.stringify({
						event 		: 'USER_PUSH',
						payload 	: {
							Id_attender	: RapidStore.a_m.Id_attender,
							Id_query	: b.but,
							Id_area		: b.are,
							Id_user		: RapidStore.a_l.Id_user,
							Id_business	: RapidStore.a_l.Id_business,
							Id_app		: RapidStore.a_l.Id_app,
							Id_extnum			: '00000000',
							Id_extnom			: 'Varios',
							Id_extapp			: 'Varios',
							Id_extapm			: 'Varios',
							Id_extfen			: '01-01-2021',
							Id_extnce			: '000000000',
							Id_extgen			: 'Femenino',
						},
						app			: RapidStore.a_c[0].d_c,
						token		: '349uvjnfun3284n98j8SDF98SDJ9sd2jk8sd82j502kj'
					}))
				} catch (e){
					console.log(e)
				}
			}
		}
		if (a===3) {
			RapidStore.c_a('c_c',false)
			try {
				RapidStore.a_c[0].g_b.send(JSON.stringify({
					event 		: 'CLIENT_LOGGIN',
					payload 	: {
						user			: RapidStore.a_c[0].c_f,
						pass			: RapidStore.a_c[0].c_g,
						dni				: RapidStore.a_c[0].c_m
					},
					app			: RapidStore.a_c[0].d_c,
					token		: 'kkjsd8fi198sd8f7124509df0gdajasgda83936598wj'
				}))
			} catch (e){
				console.log(e)
			}
		}
		if (a===4) {
			if (RapidStore.a_c[0].e_e === true){
				RapidStore.c_a('e_e', false) 
				try {
					RapidStore.a_c[0].g_b.send(JSON.stringify({
						event 		: 'USER_OPEN_TICKET',
						payload 	: {
							Id_attender		: RapidStore.a_m.Id_attender,
							Id_business		: RapidStore.a_l.Id_business,
							Id_user		: RapidStore.a_l.Id_user,
						},
						app			: RapidStore.a_c[0].d_c,
						token		: '349uvjnfun3284n98j8SDF98SDJ9sd2jk8sd82j502kj'
					}))
				} catch (e){
					console.log(e)
				}
			}
		}
		if (a===5) {
			if (RapidStore.a_c[0].e_e === false){
				RapidStore.c_a('e_e', true)
				try {
					RapidStore.a_c[0].g_b.send(JSON.stringify({
						event 		: 'USER_CLOSE_TICKET',
						payload 	: {
							Id_attender		: RapidStore.a_m.Id_attender,
							Name			: RapidStore.a_m.Name,
							Logo 			: RapidStore.a_l.Logo,
							Id_business		: RapidStore.a_l.Id_business,
							Id_user			: RapidStore.a_l.Id_user,
							Id_app			: RapidStore.a_l.Id_app,
							Id_business_n	: RapidStore.a_l.Business_name,
							ruc				: RapidStore.a_l.RUC,
							Muser			: RapidStore.a_d,
							Mroom			: RapidStore.a_o,
						},
						app			: RapidStore.a_c[0].d_c,
						token		: '349uvjnfun3284n98j8SDF98SDJ9sd2jk8sd82j502kj'
					}))
				} catch (e){
					console.log(e)
				}
			}
		}
		if (a===6) {
			if (RapidStore.a_c[0].c_k === true){
				RapidStore.c_a('c_k', false) 
				try {
					RapidStore.a_c[0].g_b.send(JSON.stringify({
						event 		: 'GET_DATA_DNI',
						payload 	: {
							dni			: RapidStore.a_c[0].j_a
						},
						app			: 'Globales',
						token		: '7727hsnchshs7j4j4289dsj12945j0daf24kloxpxizl'
					}))
				} catch (e){
					console.log(e)
				}
			}
		}
		if (a===7) {
			if (RapidStore.a_c[0].e_e === false){
				RapidStore.c_a('e_e', true)
				if (b.id===0){
					try {
						RapidStore.a_c[0].g_b.send(JSON.stringify({
							event 		: 'USER_ROOMING',
							payload 	: {
								Id_attender			: RapidStore.a_m.Id_attender,
								Id_business			: RapidStore.a_l.Id_business,
								Id_user				: RapidStore.a_l.Id_user,
								Id_room				: RapidStore.a_c[0].c_j.Id_room,
								Id_occupant			: '1',
								Id_app				: RapidStore.a_l.Id_app,
								Id_query			: RapidStore.a_c[0].f_c,
								Id_area				: RapidStore.a_c[0].f_d,
								Id_extnum			: '00000000',
								Id_extnom			: 'Varios',
								Id_extapp			: 'Varios',
								Id_extapm			: 'Varios',
								Id_extfen			: '01-01-2021',
								Id_extnce			: '000000000',
								Id_extgen			: 'Femenino',
							},
							app			: RapidStore.a_c[0].d_c,
							token		: '349uvjnfun3284n98j8SDF98SDJ9sd2jk8sd82j502kj'
						}))
					} catch (e){
						console.log(e)
					}
				} else {
					try {
						RapidStore.a_c[0].g_b.send(JSON.stringify({
							event 		: 'USER_ROOMING',
							payload 	: {
								Id_attender			: RapidStore.a_m.Id_attender,
								Id_business			: RapidStore.a_l.Id_business,
								Id_user				: RapidStore.a_l.Id_user,
								Id_room				: RapidStore.a_c[0].c_j.Id_room,
								Id_occupant			: RapidStore.a_c[0].j_o,
								Id_app				: RapidStore.a_l.Id_app,
								Id_query			: RapidStore.a_c[0].f_c,
								Id_area				: RapidStore.a_c[0].f_d,
								Id_extnum			: RapidStore.a_c[0].j_a,
								Id_extnom			: RapidStore.a_c[0].j_b,
								Id_extapp			: RapidStore.a_c[0].j_c,
								Id_extapm			: RapidStore.a_c[0].j_d,
								Id_extfen			: RapidStore.a_c[0].j_e,
								Id_extnce			: RapidStore.a_c[0].j_g,
								Id_extgen			: RapidStore.a_c[0].j_f,
							},
							app			: RapidStore.a_c[0].d_c,
							token		: '349uvjnfun3284n98j8SDF98SDJ9sd2jk8sd82j502kj'
						}))
					} catch (e){
						console.log(e)
					}
				}
			}
		}
		//linea para corregir.
		Promise.resolve().then(
			RapidStore.a_c[0].g_b.onmessage = (e) => {
				if (e === undefined) return //manejar este envento vacio
				let xx = JSON.parse(e.data)
				if( xx.event === 'CLIENT_ONLINE' && xx.status === false){
					RapidStore.c_a('c_a','')
					RapidStore.c_a('c_b','')
					//RapidStore.c_a('c_e',3)
					RapidStore.c_a('c_f',2)
				}
				if( xx.event === 'CLIENT_ONLINE' && xx.status === true){
					RapidStore.b_b(xx.data)
					RapidStore.increment(1)
					this.a_g()
					//console.log('ddddddddddddddddddddddd 500')
				}
				if( xx.event === 'USER_PUSH' && xx.status === true){
					//console.log(xx.data.client.data)
					this.a_f(6, RapidStore.a_c[0].d_e, 'POST', xx.data.client.data)
					RapidStore.b_h(xx.data.client.data)
					RapidStore.c_a('e_f', true) 
				}
				if( xx.event === 'CLIENT_LOGGIN' && xx.status === true){
					this.aad(1)
					//console.log(xx.data)
					
					RapidStore.b_e(xx.data)
					// if (this.a_i(xx.data.t)){
					// 	RapidStore.c_a('e_e',true)
					// } else {
					// 	RapidStore.b_j(xx.data, 1)
					// 	RapidStore.c_a('c_h',true)
					// 	RapidStore.c_a('e_f', true)
					// }
					if (!this.a_i(xx.data.q)){
						RapidStore.b_j(xx.data, 2)
					}
					RapidStore.c_a('c_k', true)
					RapidStore.c_a('c_e',true)
					RapidStore.c_a('c_d',8)
					//console.log(xx.data)
					if (xx.data.s.Tipe_admin===0){
						RapidStore.increment(2)
					}
					if (xx.data.s.Tipe_admin===1){
						RapidStore.increment(4)
					}
					if (xx.data.s.Tipe_admin===2){
						RapidStore.increment(3)
					}
					if (xx.data.s.Tipe_admin===3){
						RapidStore.increment(5)
					}
				}
				if( xx.event === 'USER_LOGGIN' && xx.status === false){
					this.a_d()
					RapidStore.c_a('c_b', RapidStore.a_b[5].Text)
					RapidStore.c_a('c_f', '')
					RapidStore.c_a('c_g', '')
					RapidStore.c_a('c_d',8)
				}
				if( xx.event === 'USER_OPEN_TICKET' && xx.status === true){
					RapidStore.b_i(xx.data)
				}
				if( xx.event === 'USER_CLOSE_TICKET' && xx.status === true){
					RapidStore.b_j(xx.data, 3)
				}
				if( xx.event === 'GET_DATA_DNI' && xx.status === true){
					RapidStore.b_j(xx.data, 4)
					RapidStore.c_a('c_k', true)
					//console.log(xx.data)
				}
				if( xx.event === 'GET_DATA_DNI' && xx.status === false){
					RapidStore.c_a('c_k', true)
					RapidStore.c_a('k_a', 'no hay datos dni api')
				}
				if( xx.event === 'USER_ROOMING' && xx.status === true){
					//this.a_q(2, {but : RapidStore.a_c[0].f_c, are: RapidStore.a_c[0].f_d})
					this.a_f(6, RapidStore.a_c[0].d_e, 'POST', xx.data.client.data)
					RapidStore.b_j({room: RapidStore.a_c[0].c_j, id: 0}, 5)
					RapidStore.b_h(xx.data.client.data)
					RapidStore.c_a('e_e', false)
				}
				
	
			}
		)
	}
	a_r(a){
		 //let z = new Date(RapidStore.a_n[0].Startt).getTime() - (1000 * 60 * 60 * 5)
		let z = new Date(RapidStore.a_n.Startt).getDay()
		//console.log(z)
		if (z>= parseInt(a.substr(0,1)) && z<= parseInt(a.substr(2,1))){
		 	return true
		} else {
			return false
		}		 
    }
	a_s(a, b){
		if (a===0){
			RapidStore.c_a(b.var1, b.e)
			RapidStore.c_a(b.var2, b.e)
			if (b.ExEv===1){
				this.a_q(5, 0)
			}
			if (b.ExEv===2){
				this.a_s(4, 0)
			}
			if (b.ExEv===3){
				RapidStore.c_a('c_j', b.room)
				//RapidStore.c_a('c_i', true)
				this.a_s(6, 0)
			}
			if (b.ExEv===4){
				RapidStore.c_a('c_i', true)
				this.a_s(5, 0)
			}
			if (b.ExEv===5){
				this.a_q(7, {id: 0})
				this.a_s(5, 0)
			}
			if (b.ExEv===6){
				this.a_s(5, 0)
			}
			return
		}
		if (a===1){
			RapidStore.c_a('h_a', true)
			RapidStore.c_a('z_a', true)
			return
		}
		if (a===2){
			RapidStore.c_a('h_b', true)
			RapidStore.c_a('z_a', true)
			return
		}
		if (a===3){
			RapidStore.c_a('h_c', true)
			RapidStore.c_a('z_a', true)
			return
		}
		if (a===4){
			RapidStore.c_a('h_d', true)
			RapidStore.c_a('z_a', true)
			return
		}
		if (a===5){
			RapidStore.c_a('h_e', true)
			RapidStore.c_a('z_a', true)
			if (b.ExEv===1){
				RapidStore.c_a('f_c', b.but)
				RapidStore.c_a('f_d', b.are)
			}			
			return
		}
		if (a===6){
			RapidStore.c_a('h_f', true)
			RapidStore.c_a('z_a', true)
			return
		}
	}
	aat(){
		let yy = eval ('window.localStorage.' + RapidStore.a_c[0].d_c)
		if (yy===undefined){
			(async () => {
				await this.aaq(1, {
					key		: "45565976673843335a32634f563532335a7663737741675366336f45633845477831655749547377454c5257625730524d587572715978343152556278684e4d725963543856306233543041377758304c4374725758576e437478356b50326d687053352f794e642f426d31423277325359717949466a472f524b62365a7364303952444f5a6853447755577277796f7944314c7974572b2b747543645370766435677a4562586b766f7132514558386572575249796e544c58646e2b7a642f6d6530734671303645426d6737674e47765068666d5351746f366d6e412f6c6f326c36616e50596c5a34756e4737505070646261686450346e662b7151643864526c442f4b47704d59374d6d62346e6a33626e6e48434174495032493068642b6c364c7436796c6a52577179306655554e6b38764471486b567457615743472b537a4663482b4338596d2b50716f37476b64706d424a4c5a4273705876736c66425a4837356d71415258654577706456706b35744c2f2b5555656d54434666756b6f352f4b567a6154504e457976424f594a6849586f4a51345a473978634436585a764b725547494e45497371314a74427130656e537237494756785151656f346e6b4a33666673416e51545537666a657952426f646871486c4c33753961707746584b6136685963415333794c42616c344731373554302f714f445a67424f582f36657247766c7059723766586a4e39516a2f78586e57357232694965413054344d32475545494c56592f4b345369514544326856785a2f6b38376b653146396231612f71597a73366b6f7a424e5a727437726f41424b31784455715964515a577a6f77625449536b634733492f702b49446b6c346f7052567046373558623151512b6d776476483953716c596a5971542f5159766266623764487a41716c412b57397449336d75364f2b6a67354f78655739706f58434256484b7368645177514f64644f7a4c4673446479443738457654443675632f4841646a367837576b4a2f2b475075334a44727172454372367036346a74394d33396e2b6374306174324757454158456f3473672b4975622b394f4a61476e2f534c484c5436696349305757774330512b6856706233634d2b77544d547653732b5368456f3850706b77425545687459524e44576c6b77684f63666a45513d3d",
					razon   : "496b786849464e70636d5675615852684943306754476c7459534238494642535655564351564e4751554d7453454e50496e776a664349784d5330774e7930794d44497949673d3d"

					// key     : '4f716834342b5632446f774866537432757a594356524e7272774a593951412b2f2f6f5a633144414538386f64532f6d4847434878684265783764446d706d506e4c663745384154493054686e6e4f43424952747a33783444556d4d4a696358624278374b366e4d50446a6f444c55432b4c5546724e35775465515547307274356c506a51313752776a7a41766d7265764e434f6b316b5875482b676c35794763454a2b6b3179705868313250744f575471654f7456376473677a4f306e4169493275784e416259705a7759707159332b4b6b4279744f686966394e7355427747397243554652544f47417730713154695a4547796c79447563637138783231787a6b6e745952704d55762f426e4348686b30396b576971484b4d4d65564a3869312b594569426e4978367937355076417457536153677162326f35533937316a3138726243636b782f324c4975304846785248436c68414c4d5630427872434d6e524478556e584d41504b4c4c54513435414b366930462f3259464c2b774141343567327a646e4b6e3143557a6151375035365830496a714c52682b48535832626179624568763064477a73624577324f2f6e4a7359394c49644647447378514a684748446a506a2f722f73785a314e63726e6549382b4c546744696e2f6b6d3659747073394e744d7355316d5543476255437266627049505778683878434e7a6a4246414a6c567a7a4c2f7a733666664d31376e6938385048572f396f3438395764666652386f32504c323439684c4c442f395a5975697149594a48434b435747544b43445a68786c795434437a61477242446c4b67546c50466b3745436b714a4c59455363567856456d65676d484c746d5556417a3661496e39744f44726e4b76724e44316334466c52717230686356445a56325932775438687951554242315874633967553170344165503466316a645a2b655a784d6c3344425362767a494d6a4f6547797a75543875416f37466c74646473766b4e716d6231747551665a462b39367268753253434767336b4f5842647055595a5055574e6a544656504b6f634a6c6e4c51475a7445334135344133534c4f44526a553172443452356b4d56446c3775735155774f6a567771325064736973717749573335564d524e5747756c57502b4c412b575241735336367a6149513d3d',
					// razon   : '496b5575525335544c6c417549453168636d4e766379424564584a686269424e59584a305a5777674c5342496457467564574e76494877675455524e4c55684454794a38493377694d544d744d4467744d6a41794d69493d',
				})
			})();        
		}
		else {

		}
	}

	//validation basica
	baa(a, b, c){
		RapidStore.c_a('k_a', '')
		RapidStore.c_a('k_b', '')
		RapidStore.c_a('k_c', '')
		RapidStore.c_a('k_d', '')
		RapidStore.c_a('k_e', '')
		RapidStore.c_a('k_f', '')
		RapidStore.c_a('k_g', '')
		RapidStore.c_a('k_h', '')
		if (c === 2){
			b = RapidStore.a_c[0].k_a + b
		}
		if (RapidStore.a_c[0].c_l===8){
			if (a === 'j_a'){
				if (b.length > RapidStore.a_c[0].c_l ){
					return
				}
				if (!this.bad(b, 2)) {
					return
				}
			}
		} else {
			if (a === 'j_a'){
				if (b.length > RapidStore.a_c[0].c_l ){
					return
				}
			}
		}
		if (a === 'j_e'){
			if (b.length > 10 ){
				return
			}
		}
		if (a === 'j_g'){
			if (b.length > 9 ){
				return
			}
			if (!this.bad(b, 2)) {
				return
			}
		}
		RapidStore.c_a(a,b)
		if (RapidStore.a_c[0].c_l===8){
			if (a === 'j_a'){
				if (RapidStore.a_c[0].j_a.length === 8 ){
					this.a_q(6, 0)
				}
			}
		} else {
			if (a === 'j_a'){
				if (RapidStore.a_c[0].j_a.length >= 8 ){
					this.a_q(6, 0)
				}
			}
		}
	}
	bab(a, b){
		if (a===1){
			return dateFormat(new Date(b).getTime() - (1000 * 60 * 60 * RapidStore.a_c[0].d_g), 'dd-mm-yyyy')
		}
		if (a===2){
			return dateFormat(new Date(b).getTime() - (1000 * 60 * 60 * RapidStore.a_c[0].d_g), 'dd-mm-yyyy HH:MM:ss')
		}
	}
	bac(a,b){
		if (RapidStore.a_c[0].c_l===8){
			if (RapidStore.a_c[0].j_a.toString().trim().length < 1) {
				RapidStore.c_a('k_a', 'Campo D.N.I. vacio')
				return
			}
			if (RapidStore.a_c[0].j_a.length < RapidStore.a_c[0].c_l){
				RapidStore.c_a('k_a', 'Nº D.N.I. Incompleto')
				return
			}
			if (!this.bad(RapidStore.a_c[0].j_a, 2)) {
				RapidStore.c_a('k_a', 'Nº D.N.I. Tiene letras')
				return
			}
		} else {
			if (RapidStore.a_c[0].j_a.length < RapidStore.a_c[0].c_l){
				RapidStore.c_a('k_a', 'Ingrese N° completo omita el mensaje')
			}
		}
		
		if (RapidStore.a_c[0].j_b.toString().trim().length < 1) {
			RapidStore.c_a('k_b', 'Campo Nombre vacio')
			return
		}
		if (RapidStore.a_c[0].j_c.toString().trim().length < 1) {
			RapidStore.c_a('k_c', 'Campo Apellido P vacio')
			return
		}
		if (RapidStore.a_c[0].j_d.toString().trim().length < 1) {
			RapidStore.c_a('k_d', 'Campo Apellido M vacio')
			return
		}
		if (RapidStore.a_c[0].j_e.toString().trim().length < 1) {
			RapidStore.c_a('k_e', 'Campo nacimiento vacio')
			return
		}
		if (RapidStore.a_c[0].j_e.length < 10){
			RapidStore.c_a('k_e', 'Fecha nacimiento Incompleto')
			return
		}
		if (!this.bad(RapidStore.a_c[0].j_e, 4)) {
			RapidStore.c_a('k_e', 'Fecha nacimiento inválida')
			return
		}
		if (RapidStore.a_c[0].j_f === null) {
			RapidStore.c_a('k_f', 'Elija un Género.')
			return
		}
		if (RapidStore.a_c[0].j_g.toString().trim().length < 1) {
			RapidStore.c_a('k_g', 'Campo Celular vacío')
			return
		}
		if (RapidStore.a_c[0].j_g.length < 9){
			RapidStore.c_a('k_g', 'N° Celular incompleto')
			return
		}
		if (!this.bad(RapidStore.a_c[0].j_g, 2)) {
			RapidStore.c_a('k_g', 'N° Celular tiene letras')
			return
		}
		RapidStore.b_j({room: RapidStore.a_c[0].c_j, id: RapidStore.a_c[0].j_o}, 5)
		this.a_q(7, {id: RapidStore.a_c[0].j_o})
		// if (a === 8){
		// 	if (b.toString().trim().length < 1) {
		// 		RapidStore.c_a('c_h', 'Campo de correo electrónico vacio')
		// 		return
		// 	}
		// 	if (!this.bad(b, 1)) {
		// 		RapidStore.c_a('c_h', 'Formato de correo electronico incorrecto')
		// 		return
		// 	}
		// }
		// else {
		// 	if (RapidStore.a_c[0].c_a !== '') {
		// 		return
		// 	} else {
		// 		this.a_p(1)
		// 	}
		// }
	}
	//--------email validator
	bad(a, b) {
		if (b===1){
			const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return re.test(String(a).toLowerCase())
		}
		if (b===2){
			const re = /^[0-9]*$/
			return re.test(String(a).toLowerCase())
		}
		if (b===3){
			const re = /^[a-zA-Z ]$/
			return re.test(String(a).toLowerCase())
		}
		if (b===4){
			console.log(a)
			const re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
			//const re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
			return re.test(String(a).toLowerCase())
		}

	}
	bae(a){
		RapidStore.c_a('z_a', !a)
	}

}
export default new Eventscolas();