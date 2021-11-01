import {storage, PersistentMap} from "near-sdk-as";

let map = new PersistentMap<string, string>("m");

export function guardar(): void {
	storage.setString("apellido", "camaron")
}

export function ver(): string {
	let leido = storage.getString("apellido")
	if (leido === null) {
		return "No hay nada"
	}
	return "Hola " + leido
}

export function set_mapas(): void {
	map.set("jose", "maria")
}

export function get_mapas(): string {
	let mi_mapa = map.get("jose")
	if (mi_mapa === null) {
		return "no hay nada"
	}
	return mi_mapa
}


