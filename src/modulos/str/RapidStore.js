import React 							from 'react'
import Eventscolas 						from '../fun/js'

import { makeObservable, action, observable } from 'mobx'
import dateFormat 							from 'dateformat'


class RapidStore {
	a_a = 0
	a_b = []																	//textos
	a_c = [{
		a_a: true,																//carga module
		a_b: false,																//loggin module
		a_c: false,																//module taquilla
		a_d: false,																//module reception
		a_e: false,																//barra
		a_f: false,																//admin

		b_a: '',																//si es miembro o no
		b_b: '',																//id user
		b_c: 0,																	//number ticket offline

		c_a: '',											//text dni o usuario store
		c_b: '',																//messages filter error
		c_c: false,																//boton	active	
		c_d: 8,												//limite dni userlogin  (tomar config)
		c_e: false,																//llave session actualizar
		c_f: '',											//var user loggin
		c_g: '',											//var user pass
		c_h: false,																//llave active boleteria
		c_i: false,																//llave desciptcion room
		c_j: [],																//contend room
		c_k: false,																//llave consulta dni
		c_l: 8,																	//llave consulta dni
		c_m: '',											//var user dni

		d_a: '',																//aux token key, api, ws
		d_b: '',																//aux service type
		d_c: 'GlobalVision',													//app name index db name
		d_d: true,		//llave online
		d_e: 'http://con.localhost',											//key
		d_f: 'http://apifa.traker.ga',											//api
		d_g: -5,																//api

		e_a: '',																//aux 1 tit primera pag
		e_b: '',																//aux 2 tit winpop
		e_c: 'mono',															//aux css
		e_d: 'rejilla',															//aux css
		e_e: false,															    //control on off button taquilla
		e_f: false,															    //control push ticket
		
		f_a: null,		//ws
		f_b: 250,
		f_c: '',
		f_d: '',

		g_a: 'ws://159.65.107.11:6928?App=GlobalVision',						//usanda
		g_b: '',																//var socket
		g_c: false,																//preconnect
		g_d: false,																//connected
		
		h_a:false,																//modal report pdf
		h_b:false,																//modal really close taquilla
		h_c:false,																//modal really close taquilla
		h_d:false,																//modal really close taquilla
		h_e:false,																//modal really close taquilla
		h_f:false,																//modal really close taquilla
		
		i_a:false,																//control modal report pdf
		i_b:false,																//control really close taquilla
		i_c:false,																//control really close taquilla
		i_d:false,																//control really close taquilla
		i_e:false,																//control really close taquilla
		i_f:false,																//control really close taquilla

		//validation vars
		j_a:'',																					
		j_b:'',
		j_c:'',
		j_d:'',
		j_e:'',
		j_f:'',
		j_g:'',
		j_h:'',
		j_i:'',
		j_j:'',
		j_k:'',
		j_l:'',
		j_m:'',
		j_n:'',
		j_o:'',
		
		k_a:'',																	//error ruc
		k_b:'',																	//error 
		k_c:'',																	//error
		k_d:'',																	//error
		k_e:'',																	//error
		k_f:'',																	//error
		k_g:'',																	//error
		k_h:'',																	//error

		z_a:false,																			//modal
		

	}]
	a_d = []																				//tipos usuario
	a_e = []																				//respaldo
	a_f = []																				//manejador de targetas vs usuario
	a_g = []																				//targetas
	a_h = []																				//botones numeros
	a_i = []																				//botones largos
	a_j = []																				//citas
	a_k = []																				//canal	
	a_l = []																				//data client
	a_m = []																				//data user
	a_n = []																				//taquilla open close
	a_o = []																				//rooms
	a_p = []																				//print reports.
	a_q = []																				//print reports.
	a_r = []																				//turnos
	a_s = []																				//registros
	a_t = []																				//pintar

	b_a = (a) => this.a_a = a									//sin verificar
	b_b = (a) => {
		this.a_b = a.q								//textos					
		this.a_h = a.u								//numeros para botones
		this.a_i = a.v								//botones largos
		this.a_l = a.n								//configuracion cliente
		//this.a_j = a.x													//LIBRE		
		//this.a_k = a.w													//LIBRE
		//this.b_d()
	}
	b_c = (a) => {
		this.a_j.push(a)  																	//push new qoute
		this.b_d()
	}
	b_d = (a) => {													//libre

		this.a_j.sort((a, b) => b.Priority - a.Priority)									//order quote
	}
	b_e = (a) => {
		this.a_l = a.n								//configuracion cliente segun usuario
		this.a_m = a.s								//datos usuario
		this.a_g = a.r								//areas disponibles
		// this.a_d = a.r											//buttons tikets
		//this.a_g = a.u																		//areas
		this.a_r = a.w								//turno
		this.a_s = a.v								//registros
		this.a_t = a.l								//registros
	}
	b_f = (a) => {																			//bells quotes
		this.a_j.map((j) => {
			if (j.Id === a.s.Id) {
				j.Bell = a.s.Bell
				j.Id_state = a.s.Id_state
				j.Priority = a.s.Priority
				j.Attender = a.s.Attender
			}
			if (a.Bell <= 2) {
				return j
			}
		})
		this.b_g()
	}
	b_g = (a) => {
		this.a_j.sort((a, b) => b.Id - a.Id)
		this.a_j.sort((a, b) => b.Priority - a.Priority)									//order quote
	}
	b_h = (a) =>{
		if (a.c === 0){
			this.a_d.map((d) => {
				if (d.Id_button === a.s.Id_query) {
					d.Incremental = a.s.Id_internal
					d.Incremental_day = a.s.Id_internal_day
				}
				return d
			})
		}
		if (a.c === 1){
			this.a_o.map((d) => {
				if (d.Id_button === a.s.Id_query) {
					d.Incremental = a.s.Id_internal
					d.Incremental_day = a.s.Id_internal_day
				}
				return d
			})
		}
	}
	b_i = (a) => {
		this.a_n = a																		//loggin dates
		this.a_c[0].c_h = true																//active key rooms
		this.a_c[0].e_f = true																//active key rooms
	}
	b_j = (a, b) =>{						//recategorizar fucion reducir funciones condicionar actividades.
		if (b===1){
			this.a_n = a.t[0]																		//taquilla open
			return
		}
		if (b===2){
			this.a_p = a.q[0]																		//report file
			return
		}
		if (b===3){
			//console.log(this.a_p, this.a_n, this.a_d, this.a_o, a)

			this.a_p = a.r																			//
			this.a_n = []
			a.qq.forEach((qq) => {
				if (qq.area === 0){
					this.a_d.map((d) => {
						if (d.Id_button === qq.button){
							d.Incremental_day = 0
						}
						return d
					})
				}
				if (qq.area === 1){
					this.a_o.map((d) => {
						if (d.Id_button === qq.button){
							d.Incremental_day = 0
						}
						return d
					})
				}
			})
			return
		}
		if (b===4){
			console.log(a)
			//this.a_r = a
			//this.a_s = a
			//let vv = new Date(a.Birthday).getTime() - (1000 * 60 * 60 * this.a_c[0].d_g)
			this.a_c[0].j_b = a.User_Name
			this.a_c[0].j_c = a.User_Firstname
			this.a_c[0].j_d = a.User_Lastname
			this.a_c[0].j_e = a.Birthday === null ? '': Eventscolas.bab(1, a.Birthday)
			this.a_c[0].j_f = a.Gender
			this.a_c[0].j_g = a.Cell_phone
			this.a_c[0].j_o = a.Id
			return
		}
		if (b===5){
			this.a_q.map((d) => {
				if (d.Id_room === a.room.Id_room) {
					if (a.id===0){
						d.Id_attender = this.a_m.Id_attender
						d.Id_occupant = '00000000'
						d.State = 1
						d.User_Firstname = 'Varios'
						d.User_Lastname = 'Varios'
						d.User_Name = 'Varios'
						d.Birthday = '01-01-2021'
						d.Cell_phone = '000000000'
						d.Endd = dateFormat(new Date(), 'dd-mm-yyyy 23:59:59')
						d.Gender = 'Femenino'
						d.Startt = dateFormat(new Date(), 'dd-mm-yyyy HH:MM:ss')
					} else {
						d.Id_attender = this.a_m.Id_attender
						d.Id_occupant = a.id
						d.State = 1
						d.User_Firstname = this.a_c[0].j_c
						d.User_Lastname = this.a_c[0].j_d 
						d.User_Name = this.a_c[0].j_b
						d.Birthday = this.a_c[0].j_e
						d.Cell_phone = this.a_c[0].j_g
						d.Gender = this.a_c[0].j_f
						d.Startt = dateFormat(new Date(), 'dd-mm-yyyy HH:MM:ss')
					}
				}
				//console.log(d)
				return d
			})
			return
		}
	}
	c_a = (a, b) => { this.a_c[0][a] = b }													//mod vars a_c


	c_b = (a, b) => { this.a_j[0][a] = b }  //en observacion


	increment(llave, val) {
		switch (llave) {
			case 1:
				this.increment(8)
				this.a_c[0].a_b = true
				this.a_c[0].e_a = this.a_b[2].Text
				//this.a_c[0].e_b = this.a_b[1].Text
				this.a_c[0].e_c = ''
				this.a_c[0].e_d = 'di3'
				break;
			case 2:
				this.increment(8)
				this.a_c[0].a_c = true
				this.a_c[0].b_a = val
				this.a_c[0].e_c = 'gr_3x2_1p'
				this.a_c[0].e_d = 'di3'
				this.a_c[0].e_a = this.a_b[6].Text
				break;
			case 3:
				this.increment(8)
				this.a_c[0].a_d = true
				this.a_c[0].e_c = 'gr_3x2_1p'
				this.a_c[0].e_d = 'di3'
				this.a_c[0].e_a = this.a_b[2].Text
				break;
			case 4:
				this.increment(8)
				this.a_c[0].a_e = true
				this.a_c[0].e_c = 'po_re'
				this.a_c[0].e_d = 'di3'
				this.a_c[0].e_a = this.a_b[0].Text
				break;
			case 5:
				this.increment(8)
				this.a_c[0].a_f = true
				this.a_c[0].e_c = 'gr_3x2_1p'
				this.a_c[0].e_d = 'di3'
				this.a_c[0].e_a = this.a_b[0].Text
				break;
			case 6:
				this.a_c[0].a_c = false
				this.a_c[0].a_f = true
				this.a_c[0].e_c = 'gr_3x2_1p'
				this.a_c[0].e_d = 'di3'
				this.a_c[0].e_a = this.a_b[6].Text
				this.a_c[0].b_h = this.a_c[0].c_f
				this.a_c[0].c_f = ''
				this.a_c[0].c_g = ''
				break;





			case 7:
				this.a_c[0].a_b = true
				break;

			case 8:
				this.a_c[0].a_a = false
				this.a_c[0].a_b = false
				this.a_c[0].a_c = false
				this.a_c[0].a_d = false
				this.a_c[0].a_e = false
				this.a_c[0].a_f = false
			break;

			default:
				console.log("neutro")
				break;

		}

	}

	constructor() {
		makeObservable(this, {
			a_a: observable,
			a_b: observable,
			a_c: observable,
			a_d: observable,
			a_e: observable,
			a_f: observable,
			a_g: observable,
			a_h: observable,
			a_i: observable,
			a_j: observable,
			a_k: observable,
			a_l: observable,
			a_m: observable,
			a_n: observable,
			a_o: observable,
			a_p: observable,
			a_q: observable,
			
			
			a_t: observable,

			b_a: action,
			b_b: action,
			b_c: action,
			b_d: action,
			b_e: action,
			b_f: action,
			b_g: action,
			b_h: action,
			b_i: action,
			b_j: action,
			c_a: action,
			c_b: action,

			increment: action,




		})
	}

}
export default new RapidStore();