const a = '```'

exports.wait = () => {
	return`*●⃧➠ESPERE...* _este proceso podría tardar unos segundos_`
}

exports.succes = () => {
	return`*●⃧➠CON ÉXITO*`
}

exports.lvlon = () => {
	return`*●⃧➠ACTIVAR* _nivelación_`
}

exports.lvloff = () => {
	return`*●⃧➠DESACTIVAR* _nivelación_`
}

exports.lvlnul = () => {
	return`*●⃧➠SU NIVEL SIGUE VACÍO*`
}

exports.lvlnoon = () => {
	return`*●⃧➠LOS NIVELES DEL GRUPO NO SE HAN ACTIVADO*`
}

exports.noregis = () => {
	return`*●⃧➠AÚN NO REGISTRADO👤* *\n\n_●⃧➠cómo registrarse:_ *${prefix}daftar Nombre|Edad* \n_●⃧➠Ejemplo:_ *${prefix}daftar Edar|17*`
}

exports.rediregis = () => {
	return`*●⃧➠YA REGISTRADO🌠* *\n\n_📸Ya está registrado en la base de datos del bots🤖si aún no sabe los comando escriba *_#menu_*`
}

exports.stikga = () => {
	return`*●⃧➠bien no pudo tratar de repetir en unos momentos de nuevo😔*`
}

exports.linkga = () => {
	return`*●⃧➠lo siento, el enlace no es válido😔*`
}

exports.groupo = () => {
	return`*●⃧➠Lo Siento...* _ESTE COMANDO SOLO ES PARA GRUPOS, SI QUIERE VER LAS FUNCIONES ENTRE AMI GRUPO: https://chat.whatsapp.com/D4UEk7tWaQS2vIViTho7VV_`
}

exports.ownerb = () => {
	return`_●⃧➠SOLO BOT PROPIETARIO_ *BY-EDAR* _SI LO MATA LA CURIOSIDAD DE SABER PARA QUE SIRVE ESTE COMANDO LLEGUE ASU PRIVADO wa.me/50498798682 ;-;si eres nena pasa pack👉👈ok.no_`
}

exports.ownerg = () => {
	return`_●⃧➠SOLO BOT PROPIETARIO_ *BY-EDAR* _SI LO MATA LA CURIOSIDAD DE SABER PARA QUE SIRVE ESTE COMANDO LLEGUE ASU PRIVADO wa.me/50498798682 ;-;si eres nena pasa pack👉👈ok.no_`
}

exports.admin = () => {
	return`_●⃧➠LO SIENTO_ *ESTE COMANDO SOLO PUEDE SER UTILIZADO POR LOS ADMINISTRADORES DEL GRUPO* _SI USTED DESEA DISFRUTAR DE ESTE COMANDO GANECE EL ADMIN, SEA ACTIVO_`
}

exports.badmin = () => {
	return`_●⃧➠LO SIENTO_ *EL BOT DEBE SER ADMINISTRADOR DEL GRUPO*`
}

exports.nsfwoff = () => {
	return`_●⃧➠NSFW NO ACTIVO_ *PARA ACTIVAR ESTE COMANDO ESCRIBA #NSFW 1* *●⃧➠👋NOTA:* _No usar el comando *#blowjob* evite ser eliminado por los ADMIN al ver contenido pornografico_`
}

exports.bug = () => {
	return`*●⃧➠El problema ha sido reportado al propietario del bot, informe falso / main2 no será respondido a😉*`
}

exports.wrongf = () => {
	return`*●⃧➠Formato/texto incorrecto en blanco* _ESCRIBA EL TEXTO CORRECTAMENTE A LA PAR DESPUÉS DEL COMANDO_`
}

exports.clears = () => {
	return`*●⃧➠CLARO TODO EL ÉXITO😉*`
}

exports.pc = () => {
	return`*●⃧➠REGISTRO*\n\nuntuk averiguar si usted ha registrado silahkah mensaje de verificación que envié \n\nNOTE:\n*si aún no tienes el mensaje. significa que no ha guardado el número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*●⃧➠🍭DATOS DEL REGISTRO🍭*\n\n *●⃧➠FELICIDADES USTED A SIDO KUAKIADO👨‍💻POR EDAR🎩OK.NO👉👈*\n\n┏━⊱ *NOMBRE*\n┗⊱${namaUser}\n┏━⊱ *NÚMERO*\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱ *EDAD*\n┗⊱${umurUser}\n┏━⊱ *TIEMPO DE INSCRIPCIÓN*\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱ *NOTA:* _Prohibido llamar al bot, no abusar del bot, si desea contratar este servicio comuníquese con wa.me/50498798682`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* no encontrado\tratar de escribir *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*●⃧➠Lo siento tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*👨‍💻Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*👨‍💻Lo siento ${pushname} su nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*👨‍💻Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*👨‍💻Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*👨‍💻Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*👨‍💻Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `
┏━━━⊱  *INFO DE USUARIO*  ⊰━━┓
┣⊱ *Nombre* : ${pushname}
┣⊱ *Premium* : ${premi}
┣⊱ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱ *Coind* : Rp${uangku}
┣⊱ *Exp* : ${getLevelingXp(sender)}/${reqXp} 
┣⊱ *Nivel* : ${getLevelingLevel(sender)}
┣⊱ *Rol* : ${role}
┣⊱ *Usuario registrado* : ${_registered.length}
┗━━━⊱  ⸨ ****** ⸩  ⊰━━━━┛
 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*
*👨‍💻HOLA👋ESTOS SON ALGUNOS DE MIS COMANDOS😉*
${a}●⃧➠📸MENU MAKER🍃${a}
 ${a}╿•${prefix}sticker${a}
 ${a}╿•${prefix}quotemaker${a}
 ${a}╿•${prefix}qrcode${a}
 ${a}╰•${prefix}ttp${a}
${a}●⃧➠😉MENU DIVERTIDO😹${a}
 ${a}╿•${prefix}lirik${a}
 ${a}╿•${prefix}artinama${a}
 ${a}╿•${prefix}chord${a}
 ${a}╿•${prefix}bisakah${a}
 ${a}╿•${prefix}kapankah${a}
 ${a}╿•${prefix}apakah${a}
 ${a}╿•${prefix}rate${a}
 ${a}╿•${prefix}slap${a}
 ${a}╿•${prefix}tampar${a}
 ${a}╿•${prefix}moddroid${a} *[VIP]*
 ${a}╰•${prefix}happymod${a} *[VIP]*
${a}●⃧➠👨‍💻MUTUAL${a}
 ${a}╿•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
${a}●⃧➠🤖MULTIMEDIA${a}
 ${a}╿•${prefix}brainly${a} *[VIP]*
 ${a}╿•${prefix}pinterest${a}
 ${a}╿•${prefix}resepmasakan${a}
 ${a}╿•${prefix}igstalk${a}
 ${a}╿•${prefix}bitly${a}
 ${a}╿•${prefix}tiktokstalk${a} *[VIP]*
 ${a}╿•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
${a}*MUSICA*${a}
 ${a}╰•${prefix}joox${a} *[VIP]*
${a}●⃧➠📸NSFW👉👈${a}
 ${a}╿•${prefix}anjing${a}
 ${a}╿•${prefix}blowjob${a}
 ${a}╿•${prefix}nekonime${a}
 ${a}╿•${prefix}pokemon${a}
 ${a}╿•${prefix}husbu${a}
 ${a}╿•${prefix}nangis${a}
 ${a}╿•${prefix}cium${a}
 ${a}╿•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
${a}●⃧➠🤖LIMIT & UANG${a}
 ${a}╿•${prefix}limit${a}
 ${a}╿•${prefix}buylimit${a}
 ${a}╿•${prefix}transfer${a}
 ${a}╿•${prefix}dompet${a}
 ${a}╿•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
${a}●⃧➠👨‍💻MENU DE GRUPOS🍁${a}
 ${a}╿•${prefix}delete${a}
 ${a}╿•${prefix}hidetag${a}
 ${a}╿•${prefix}blocklist${a}
 ${a}╿•${prefix}grouplist${a}
 ${a}╿•${prefix}level${a}
 ${a}╿•${prefix}linkgc${a}
 ${a}╿•${prefix}tagall${a}
 ${a}╿•${prefix}setpp${a}
 ${a}╿•${prefix}add${a}
 ${a}╿•${prefix}kick${a}
 ${a}╿•${prefix}setname${a}
 ${a}╿•${prefix}setdesc${a}
 ${a}╿•${prefix}demote${a}
 ${a}╿•${prefix}promote${a}
 ${a}╿•${prefix}listadmin${a}
 ${a}╿•${prefix}group [buka/tutup]${a}
 ${a}╿•${prefix}leveling [enable/disable]${a}
 ${a}╿•${prefix}nsfw [1/0]${a}
 ${a}╿•${prefix}simih [1/0]${a}
 ${a}╿•${prefix}welcome [1/0]${a}
 ${a}╿•${prefix}antilink [1/0]${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
${a}●⃧➠👨‍💻ALMACENAMIENTO👈${a}
 ${a}╿•${prefix}addsticker${a}
 ${a}╿•${prefix}getsticker${a}
 ${a}╿•${prefix}stickerlist${a}
 ${a}╿•${prefix}addvideo${a}
 ${a}╿•${prefix}getvideo${a}
 ${a}╿•${prefix}videolist${a}
 ${a}╿•${prefix}getimage${a}
 ${a}╿•${prefix}addImage${a}
 ${a}╿•${prefix}imagelist${a}
 ${a}╿•${prefix}addaudio${a}
 ${a}╿•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
${a}●⃧➠👨‍💻MENU CREADOR${a}
 ${a}╿•${prefix}bc${a}
 ${a}╿•${prefix}addbadword${a}
 ${a}╿•${prefix}delbadword${a}
 ${a}╿•${prefix}bcgc${a}
 ${a}╿•${prefix}kickall${a}
 ${a}╿•${prefix}setreply${a}
 ${a}╿•${prefix}setprefix${a}
 ${a}╿•${prefix}clearall${a}
 ${a}╿•${prefix}block${a}
 ${a}╿•${prefix}unblock${a}
 ${a}╿•${prefix}leave${a}
 ${a}╿•${prefix}event [1/0]${a}
 ${a}╿•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}
 
${a}●⃧➠😉AGRADECIMIENTO🍁${a}
 ${a}╿${a}
 ${a}╿ • ♔EDAR TU PAPI🎩♔${a}
 ${a}╿ • wa.me/50498798682${a}
 ${a}╰━━━⊱  ⸨ X-BOT ⸩  ⊰━━━━${a}
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 Felicitaciones 」*
┏⊱ *Nombre* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Límite* : +3
┣⊱ *Papel*: ${role}
┗⊱ *Nivel* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*●⃧➠🎩⁩ြံঔৣ͜͡❍͜͡➣モ᠔ᥲ૨ৡ͜͡🇭🇳✟⃢⃟☠️*
su límite restante: ${limitCounts}
*NOTA:* _Si decea agregar el bot a su grupo comunicarce con WA.me/50498798682_`
}

exports.satukos = () => {
	return`*Añadir parámetro 1/enable o 0/disable'
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nombre* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*
*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*
*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`●⃧➠LO SIENTO ${pushname} _USTED NO ES UN USUARIO PREMIUM_`
}
