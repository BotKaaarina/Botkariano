const lenguaje = () => { return 'es' } //Español 

//AVISOS DE MENSAJE
const smsAvisoRG = () => { return `╰⊱✅⊱ *РЕЗУЛЬТАТ* ⊱✅⊱╮\n\n` } 
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *ПРЕДУПРЕЖДЕНИЕ* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *ИНФОРМАЦИЯ* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ОШИБКА* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *НЕПРАВИЛЬНО ИСПОЛЬЗОВАНИЕ КОМАНДЫ* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *РЕПОРТ* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *УСПЕШНО* ⊱💚⊱╮\n\n` }

//PARÁMETROS EN COMANDOS
const smsRowner = () => { return `\`\`\`ЭТУ КОМАНДУ МОГУ ИСПОЛЬЗОВАТЬ ТОЛЬКО Я КАК СОЗДАТЕЛЬ БОТА!!\`\`\`` }//NUMERO DE BOT
const smsOwner = () => { return `\`\`\`ЭТУ КОМАНДУ МОЖЕТ ИСПОЛЬЗОВАТЬ ТОЛЬКО МОЙ СОЗДАТЕЛЬ !!\`\`\`` }//OWNER
const smsMods = () => { return `\`\`\`ЭТУ КОМАНДУ МОГУТ ИСПОЛЬЗОВАТЬ ТОЛЬКО МОДЕРАТОРЫ И МОЙ СОЗДАТЕЛЬ!!\`\`\`\`` }//MODERADORES
const smsPremium = () => { return `\`\`\`¡ЭТА КОМАНДА ДОСТУПНА ТОЛЬКО ПРЕМИУМ-ПОЛЬЗОВАТЕЛЯМ И МОЕМУ СОЗДАТЕЛЮ!! ЧТОБЫ ПОЛУЧИТЬ ПРЕМИУМ, КУПИТЕ АБОНЕМЕНТ С ПОМОЩЬЮ #pass premium\`\`\`` }//USUARIOS PREMIUM
const smsGroup = () => { return `\`\`\`ЭТУ КОМАНДУ МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО В ГРУППАХ!!\`\`\`` }//PARA GRUPOS
const smsPrivate = () => { return `\`\`\`ЭТУ КОМАНДУ МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО В ЧАСТНОМ ПОРЯДКЕ!!\`\`\`` }//AL PRIVADO
const smsAdmin = () => { return `\`\`\`ЭТА КОМАНДА ПРЕДНАЗНАЧЕНА ТОЛЬКО ДЛЯ АДМИНИСТРАТОРОВ!!\`\`\`` }//ADMINS
const smsBotAdmin = () => { return `\`\`\`МНЕ НУЖНО БЫТЬ АДМИНИСТРАТОРОМ, ЧТОБЫ ВЫ МОГЛИ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ!!\`\`\`` }//BOT CON ADMIN
const smsUnreg = () => { return `\`\`\`ВАМ НЕОБХОДИМО ЗАРЕГИСТРИРОВАТЬСЯ, ЧТОБЫ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ, ВВЕДИТЕ #verificar РЕГИСТРАЦИЮ!!\`\`\`` }//VERIFICAR
const smsRestrict = () => { return `\`\`\`ЭТА КОМАНДА ОГРАНИЧЕНА МОИМ СОЗДАТЕЛЕМ!!\`\`\`` }//RESTRINGIR COMANDO

//MENU LISTA
const smsTime = () => { return `Текущее время`}
const smsUptime = () => { return `Время работы`}
const smsVersion = () => { return `Версия ${global.packname}`}
const smsTotalUsers = () => { return `Всего пользователей`}
const smsMode = () => { return `Находится в режиме`}
const smsModePublic = () => { return `ПУБЛИЧНЫЙ`}
const smsModePrivate = () => { return `ПРИВАТНЫЙ`}
const smsBanChats = () => { return `Заблокированные чат(ы)`}
const smsBanUsers = () => { return `Заблокированные пользователи`}
const smsPareja = () => { return `Пара`}
const smsResultPareja = () => { return `Нет пары`}
const smsSaludo = () => { return `👋 !ПРИВЕТ! ДОБРО ПОЖАЛОВАТЬ 👋`}
const smsDia = () => { return `🌇 Доброе утро ⛅`}
const smsTarde = () => { return `🏙️ Добрый день 🌤️`}
const smsTarde2 = () => { return `🌆 Добрый день 🌥️`}
const smsNoche = () => { return `🌃 Спокойной ночи 💫`}
const smsListaMenu = () => { return `⊹ СПИСОК МЕНЮ ⊹`}
const smsLista1 = () => { return `🌟 ИНФОРМАЦИЯ О ЧАТ-МЕНЕДЖЕРЕ 🌟`}
const smsLista2 = () => { return `💖 СОЗДАТЕЛЬ 💖`}
const smsLista3 = () => { return `🎁 ПОЖЕРТВОВАТЬ 🎁`}
const smsLista4 = () => { return `🚀 СКОРОСТЬ 🚀`}
const smsLista5 = () => { return `💡 ИНФОРМАЦИЯ О МЕНЮ 💡`}
const smsLista6 = () => { return `🌀 ПОЛНОЕ МЕНЮ 🌀`}
const smsLista7 = () => { return `🐈 УСТАНОВИТЬ Чат-Менеджера 🐈`}
const smsLista8 = () => { return `🍄 БЫТЬ ПОД БОТ 🍄`}
const smsLista9 = () => { return `📄 УСЛОВИЯ, ПРАВИЛА И КОНФИДЕНЦИАЛЬНОСТЬ 📄`}
const smsLista10 = () => { return `🌟 ПРИКЛЮЧЕНИЕ 🌟`}
const smsLista11 = () => { return `🏆 ТОП ВСЕМИРНЫЙ 🏆`}
const smsLista12 = () => { return `🏅 ПРЕМИУМ ПОЛЬЗОВАТЕЛИ 🏅`}
const smsLista13 = () => { return `🎟️ СТАТЬ ПРЕМИУМ ПОЛЬЗОВАТЕЛЕМ 🎟️`}
const smsLista14 = () => { return `🛣️ ЕЖЕДНЕВНЫЕ ЗАДАНИЯ 🛣️`}
const smsLista15 = () => { return `⚗️ МЕНЮ РПГ ⚗️`}
const smsLista16 = () => { return `🏪 МАГАЗИН ПОКУПКИ И ПРОДАЖИ 🏪`}
const smsLista17 = () => { return `🎒 ИНВЕНТАРЬ 🎒`}
const smsLista18 = () => { return `🌟 МУЛЬТИМЕДИА 🌟`}
const smsLista19 = () => { return `📲 МЕНЮ ЗАГРУЗОК 📲`}
const smsLista20 = () => { return `🔍 МЕНЮ ПОИСКА 🔍`}
const smsLista21 = () => { return `🛰️ МЕНЮ КОНВЕРТОРА 🛰️`}
const smsLista22 = () => { return `🧰 МЕНЮ МОДИФИКАЦИИ АУДИО 🧰`}
const smsLista22_1 = () => { return `🔩 МЕНЮ ИНСТРУМЕНТОВ 🔩`}
const smsLista23 = () => { return `🌟 РАЗВЛЕЧЕНИЯ 🌟`}
const smsLista24 = () => { return `🎡 ИНТЕРАКТИВНЫЕ ИГРЫ 🎡`}
const smsLista25 = () => { return `🔊 МЕНЮ АУДИО 🔊`}
const smsLista26 = () => { return `🎈 МЕНЮ СТИКЕРОВ И ФИЛЬТРОВ 🎈`}
const smsLista27 = () => { return `✨ МЕНЮ ЭФФЕКТОВ И ЛОГОТИПОВ ✨`}
const smsLista28 = () => { return `🌅 МЕНЮ ЛОГОТИПОВ 2 🌅`}
const smsLista29 = () => { return `⛩️ СЛУЧАЙНЫЕ МЕМЫ: АНИМЕ ⛩️`}
const smsLista30 = () => { return `🔞 МЕНЮ КОМАНД 18+ 🔞`}
const smsLista31 = () => { return `🌟 НАСТРОЙКИ 🌟`}
const smsLista32 = () => { return `🔰 МЕНЮ ДЛЯ ГРУПП 🔰`}
const smsLista33 = () => { return `📑 ДОСТУПНЫЕ СПИСКИ 📑`}
const smsLista34 = () => { return `⚙️ ЦЕНТР НАСТРОЕК ⚙️`}
const smsLista35 = () => { return `💎 МЕНЮ ДЛЯ ВЛАДЕЛЬЦА 💎`}

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ ДОБРО ПОЖАЛОВАТЬ!!*\n┊💖 @user\n┊📄 *ПРОЧИТАЙТЕ ОПИСАНИЕ ГРУППЫ*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *УЧАСТНИК ПОКИНУЛ НАШУ ГРУППУ, УДАЧИ ДО НОВЫХ ВСТРЕЧ!!* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user ТЕПЕРЬ АДМИН В ЭТОЙ ГРУППЕ!!*'}
const smsSdemote = () => { return '*@user ПЕРЕСТАЛ БЫТЬ АДМИНОМ В ЭТОЙ ГРУППЕ!!*'}
const smsSdesc = () => { return '*НОВОЕ ОПИСАНИЕ ГРУППЫ:*\n\n@desc'}
const smsSsubject = () => { return '*НОВОЕ ИМЯ ГРУППЫ:*\n\n@subject'}
const smsSicon = () => { return '*ФОТО ГРУППЫ БЫЛО ИЗМЕНЕНО!!*'}
const smsSrevoke = () => { return '*ТЕПЕРЬ ЭТО НОВАЯ ССЫЛКА НА ГРУППУ!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 СОЕДИНЕНИЕ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ УСПЕШНОЕ СОЕДИНЕНИЕ С WHATSAPP  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`} 
const smsCargando = () => { return `✨ ЗАГРУЗКА...\n`} 
const smsCodigoQR = () => { return `\n✅ ОТСКАНИРУЙТЕ QR-КОД, ИСТЕКАЕТ ЧЕРЕЗ 45 СЕКУНД ✅`}
const smsConexionOFF = () => { return `\n⚠️ НЕТ ПОДКЛЮЧЕНИЯ, УДАЛИТЕ ПАПКУ ${global.authFile} И ОТСКАНИРУЙТЕ QR-КОД ⚠️`}
const smsClearTmp = () => { return `\n╭» 🟢 МУЛЬТИМЕДИА 🟢\n│☁ ФАЙЛЫ ИЗ ПАПКИ TMP УДАЛЕНЫ\n╰―――――――――――――――――――✤`} 
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│☁ НЕСУЩЕСТВЕННЫЕ СЕАНСЫ УДАЛЕНЫ\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠 ФАЙЛЫ 🟠\n│☁ ОСТАТОЧНЫЕ ФАЙЛЫ УДАЛЕНЫ\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 GataJadiBot 🟡\n│☁ НЕТ ДАННЫХ ДЛЯ УДАЛЕНИЯ \n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ GataJadiBot ⚪\n│☁ НЕСУЩЕСТВЕННЫЕ ФАЙЛЫ УДАЛЕНЫ\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 GataJadiBot 🔴\n│☁ ОШИБКА\n╰―――――――――――――――――――✤\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» 🟣 ФАЙЛ 🟣\n│☁`} 
const smspurgeOldFiles2 = () => { return `УСПЕШНО УДАЛЕНО\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 ФАЙЛ 🔴\n│☁`} 
const smspurgeOldFiles4 = () => { return `НЕ УДАЛОСЬ УДАЛИТЬ\n╰―――――――――――――――――――✤\n`}

//_allantilink.js
const smsTextoYT = () => { return '🪐 ЧАТ-МЕНЕДЖЕР - WhatsApp '} 
const smsApagar = () => { return '❌ ОТКЛЮЧИТЬ'} 
const smsEncender = () => { return '✅ ВКЛЮЧИТЬ'} 
const smsEnlaceTik = () => { return `ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА TIKTOK В ЭТОЙ ГРУППЕ\n\nУДАЛЕНИЕ`}
const smsEnlaceYt = () => { return `ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА YOUTUBE В ЭТОЙ ГРУППЕ\n\nУДАЛЕНИЕ`}
const smsEnlaceTel = () => { return `ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА TELEGRAM В ЭТОЙ ГРУППЕ\n\nУДАЛЕНИE`}
const smsEnlaceFb = () => { return `ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА FACEBOOK В ЭТОЙ ГРУППЕ\n\nУДАЛЕНИE`}
const smsEnlaceIg = () => { return `ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА INSTAGRAM В ЭТОЙ ГРУППЕ\n\nУДАЛЕНИE`}
const smsEnlaceTw = () => { return `ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА TWITTER В ЭТОЙ ГРУППЕ\n\nУДАЛЕНИE`}
const smsAllAdmin = () => { return `Я ДОЛЖЕН БЫТЬ АДМИНОМ, ЧТОБЫ МОГ УДАЛИТЬ НАРУШИТЕЛЯ`}
const smsSoloOwner = () => { return `ТОЛЬКО ВЛАДЕЛЕЦ МОЖЕТ АКТИВИРОВАТЬ ЭТУ ФУНКЦИЮ\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 НЕУДАЧНАЯ КОМАНДА 🔴*`}
const smsCont2 = () => { return `*⚠️ ПЛАГИН:*`}
const smsCont3 = () => { return `*⚠️ ПОЛЬЗОВАТЕЛЬ:*`}
const smsCont4 = () => { return `*⚠️ КОМАНДА:*`}
const smsCont5 = () => { return `*⚠️ ОШИБКА:*`}
const smsCont6 = () => { return `*❗ ДОКЛАД ЭТОГО СООБЩЕНИЯ С #отчет ДЛЯ РЕШЕНИЯ*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*У ВАС НЕТ БРИЛЛИАНТОВ!! 💎 ВЫ МОЖЕТЕ ИДТИ В МАГАЗИН С КОМАНДОЙ*`}
const smsCont8 = () => { return ` *ИСПОЛЬЗОВАННЫЕ БРИЛЛИАНТЫ 💎*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*ВЫ ДОЛЖНЫ ИМЕТЬ УРОВЕНЬ ➡️*`}
const smsCont10 = () => { return `*ДЛЯ ИСПОЛЬЗОВАНИЯ ЭТОЙ КОМАНДЫ. ВАШ ТЕКУЩИЙ УРОВЕНЬ ➡️*`}
const smsCont11 = () => { return `*ОБНОВИТЕ КОМАНДОЙ*`}
const smsCont12 = () => { return `ПРЕКРАСНАЯ ГРУППА!! 😼`}
const smsCont13 = () => { return `КТО-ТО ПРИСОЕДИНИЛСЯ !! 🥳`}
const smsCont14 = () => { return `КТО-ТО УШЕЛ !! 🧐`}
const smsCont15 = () => { return `ПРИВЕТ`}
const smsCont16 = () => { return `ВИДЕОВЫЗОВЫ 📲`}
const smsCont17 = () => { return `ЗВОНКИ 📞`}
const smsCont18 = () => { return `ОНИ НЕ РАЗРЕШЕНЫ, ПОТОМУ ЧТО ВАМ ПРИДЕТСЯ ВАС ЗАБЛОКИРОВАТЬ\n\nЕСЛИ ВЫ ЗВОНИТЕ СЛУЧАЙНО, СВЯЖИТЕСЬ С ВЛАДЕЛЬЦЕМ ЭТОГО БОТА\nЭТО ОФИЦИАЛЬНЫЙ АККАУНТ ЧАТ-МЕНЕДЖЕР,`}
const smsCont19 = () => { return `АНТИ-УДАЛЕНИЕ`}
const smsCont20 = () => { return `*┃✤ Имя:*`}
const smsCont21 = () => { return `*┃✤ Отправка*`}

//_anti-internacional.js
const smsInt1 = () => { return 'ЭТОТ НОМЕР' }
const smsInt2 = () => { return 'НЕ РАЗРЕШЕН В ЭТОЙ ГРУППЕ!' }

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}ТАК КАК ВЫ АДМИН В ГРУППЕ, ВЫ НЕ БУДЕТЕ УДАЛЕНЫ` }
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}Подозрительная активность участника (Рекламная ссылка на whatsapp).\nБлокировка на 1 час в целях безопасности.` }

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА, СОДЕРЖАЩАЯ HTTPS В ЭТОЙ ГРУППЕ\n` }

//_antispam.js
const smsNoSpam = () => { return `🤨 НЕ РАССЫЛАЙТЕ СПАМ, ВЫ НЕ СМОЖЕТЕ ИСПОЛЬЗОВАТЬ ${global.packname} В ТЕЧЕНИЕ ${60000 / 1000 - 59} МИНУТ`}

//_antispam_.js
const smsNoSpam2 = () => { return `ВАС РАЗБАНИЛИ ПОСЛЕ ${60000 / 1000 - 59} МИНУТ. ПОЖАЛУЙСТА, НЕ РАССЫЛАЙТЕ СПАМ!`}

//Текст
const smsConMenu = () => { return `☘️ М Е Н Ю` } //🟡 НЕ ИЗМЕНЯТЬ 

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ПРОИЗОШЛА НЕПРЕДВИДЕННАЯ ОШИБКА.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ВОЗНИКЛО НЕУДОБСТВО. ПОПРОБУЙТЕ ЕЩЕ РАЗ.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ЧТО-ТО ПОШЛО НЕ ТАК, СООБЩИТЕ ОБ ЭТОЙ КОМАНДЕ, ИСПОЛЬЗУЯ:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `НЕТ! 🤬 ГОВОРИТЬ ЭТО СЛОВО` }
const smsToxic2 = () => { return `ЭТО ЗАПРЕЩЕНО, НЕ БУДЬТЕ ТОКСИЧНЫМИ` }
const smsToxic3 = () => { return `*ПРЕДУПРЕЖДЕНИЕ*\n⚠️` }
const smsToxic4 = () => { return `😭 МНЕ ЖАЛЬ` } //🟡 НЕ ИЗМЕНЯТЬ 
const smsToxic5 = () => { return `☢️ ОТКЛЮЧИТЬ АНТИТОКСИЧНОСТЬ` } //🟡 НЕ ИЗМЕНЯТЬ 
const smsToxic6 = () => { return `Я ВАС ПРЕДУПРЕЖДАЛ НЕСКОЛЬКО РАЗ!` }
const smsToxic7 = () => { return `ВЫ ПРЕВЫСИЛИ 4 ПРЕДУПРЕЖДЕНИЯ, ТЕПЕРЬ ВЫ БУДЕТЕ УДАЛЕНЫ ИЗ ЧАТА 🙄` }

//Магазин
const eExp = () => { return '⚡ Опыт' }
const eDiamante = () => { return '💎 Диамант' }
const eDiamantePlus = () => { return '💎+ Диамант+' }
const eToken = () => { return '🪙 Токен' }
const eEsmeralda = () => { return '💚 Изумруд' }
const eJoya = () => { return '♦️ Драгоценность' }
const eMagia = () => { return '🌀 Магия' }
const eOro = () => { return '👑 Золото' }
const eGataCoins = () => { return '🐱 Коины' }
const eGataTickers = () => { return '🎫 Ulti Tickers' }
const eEnergia = () => { return '✨ Энергия' }
const ePocion = () => { return '🥤 Зелье' }
const eAgua = () => { return '💧 Вода' }
const eBasura = () => { return '🗑 Мусор' }
const eMadera = () => { return '🪵 Дерево' }
const eRoca = () => { return '🪨 Скала' }
const ePiedra = () => { return '🥌 Камень' }
const eCuerda = () => { return '🕸️ Веревка' }
const eHierro = () => { return '⛓️ Железо' }
const eCarbon = () => { return '⚱️ Уголь' }
const eBotella = () => { return '🍶 Бутылка' }
const eLata = () => { return '🥫 Консервная банка' }
const eCarton = () => { return '🪧 Картон' }
const eEletric = () => { return '💡 Электричество' }
const eBarraOro = () => { return '〽️ Золотой слиток' }
const eOroComun = () => { return '🧭 Обычное золото' }
const eZorroG = () => { return '🦊🌫️ Большой лис' }
const eBasuraG = () => { return '🗑🌫️ Супер-мусор' }
const eLoboG = () => { return '🐺🌫️ Супер-волк' }
const eMaderaG = () => { return '🛷🌫️ Супер-дерево' }
const eEspada = () => { return '⚔️ Меч' }
const eCarnada = () => { return '🪱 Наживка' }
const eBillete = () => { return '💵 Банкноты' }
const ePinata = () => { return '🪅 Пиньята' }
const eGancho = () => { return '🪝 Крюк' }
const eCanaPescar = () => { return '🎣 Удочка' }
const eCComun = () => { return '📦 Обычный ящик' }
const ePComun = () => { return '🥡 Редкий ящик' }
const eCMistica = () => { return '🗳️ Мистический ящик' }
const eCMascota = () => { return '📫 Ящик с питомцами' }
const eCJardineria = () => { return '💐 Ящик с садоводством' }
const eClegendaria = () => { return '🎁 Легендарный ящик' }
const eUva = () => { return '🍇 Виноград' }
const eManzana = () => { return '🍎 Яблоко' }
const eNaranja = () => { return '🍊 Апельсин' }
const eMango = () => { return '🥭 Манго' }
const ePlatano = () => { return '🍌 Банан' }
const eSUva = () => { return '🌾🍇 Семена винограда' }
const eSManzana = () => { return '🌾🍎 Семена яблока' }
const eSNaranja = () => { return '🌾🍊 Семена апельсина' }
const eSMango = () => { return '🌾🥭 Семена манго' }
const eSPlatano = () => { return '🌾🍌 Семена банана' }
const eCentauro = () => { return '🐐 Центавр' }
const eAve = () => { return '🦅 Птица' }
const eGato = () => { return '🐈 Кошка' }
const eDragon = () => { return '🐉 Дракон' }
const eZorro = () => { return '🦊 Лиса' }
const eCaballo = () => { return '🐎 Лошадь' }
const eFenix = () => { return '🕊️ Феникс' }
const eLobo = () => { return '🐺 Волк' }
const ePerro = () => { return '🐶 Собака' }
const eAMascots = () => { return '🍖 Корм для питомцев' }
const eCCentauro = () => { return '🐐🥩 Пища центавра' }
const eCAve = () => { return '🦅🥩 Пища для птицы' }
const eCMagica = () => { return '🌀🥩 Волшебная пища' }
const eCDragon = () => { return '🐉🥩 Драконий корм' }
const eACaballo = () => { return '🐎🥩 Лошадиный корм' }
const eCFenix = () => { return '🕊️🥩 Фениксовый корм' }
//config-on y off.js
const smsWel1 = () => { return `🎉 ДОБРО ПОЖАЛОВАТЬ`}
const smsWel2 = () => { return `Приветственное сообщение для новых участников группы`}
const smsDete1 = () => { return `🔔 ОПОВЕЩЕНИЯ`}
const smsDete2 = () => { return `Оповещения о действиях внутри группы`}
const smsANivel1 = () => { return `🆙 АВТОМАТИЧЕСКИЙ УРОВЕНЬ`}
const smsANivel2 = () => { return `Автоматическое повышение уровня всех участников; (Награды за повышение уровня)`}
const smsRestri1 = () => { return `⛔ ОГРАНИЧЕНИЯ`}
const smsRestri2 = () => { return `Включить функцию добавления или удаления участников группы`}
const smsLlamar1 = () => { return `🚫 АНТИЗВОНКИ`}
const smsLlamar2 = () => { return `Блокировка людей, звонящих в группу`}
const smsAntiSp1 = () => { return `🚯 АНТИ-СПАМ`}
const smsAntiSp2 = () => { return `Бан использования команд при отправке спама`}
const smsModP1 = () => { return `🌐 ПУБЛИЧНЫЙ РЕЖИМ`}
const smsModP2 = () => { return `Включите функцию использования Чат-Менеджера всеми`}
const smsModAd1 = () => { return `🛂 РЕЖИМ АДМИНА`}
const smsModAd2 = () => { return ` смогут использовать Чат-Менежера в группах`}
const smsLect1 = () => { return `✅ АВТОЧТЕНИЕ`}
const smsLect2 = () => { return `Отметьте сообщения или чаты как прочитанные`}
const smsTempo1 = () => { return `🐈 ВРЕМЕННЫЙ БОТ`}
const smsTempo2 = () => { return `Функция временного присутствия в группах`}
const smsStik1 = () => { return `🎠 СТИКЕРЫ`}
const smsStik2 = () => { return `Включить автоматическую отправку стикеров всем`}
const smsStickA1 = () => { return `🪄 АВТОМАТИЧЕСКИЕ СТИКЕРЫ`}
const smsStickA2 = () => { return `Видео, GIF, изображения, ссылки jpg или jpeg будут автоматически конвертированы в стикеры`}
const smsReacc1 = () => { return `🤡 РЕАКЦИЯ `}
const smsReacc2 = () => { return `Включить автоматическую отправку реакций на сообщения`}
const smsAudi1 = () => { return `🔊 АУДИО`}
const smsAudi2 = () => { return `Включить автоматическую отправку аудио всем`}
const smsModHor1 = () => { return `🔞 РЕЖИМ HORNY`}
const smsModHor2 = () => { return `Показать контент для взрослых в чатах`}
const smsAntitoc1 = () => { return `☢️ АНТИ-ТОКСИЧНЫЕ`}
const smsAntitoc2 = () => { return `Отправлять предупреждения тем, кто оскорбляет`}
const smsModOb1 = () => { return `👀 РЕЖИМ НАБЛЮДЕНИЯ`}
const smsModOb2 = () => { return `Позволить всем видеть изображения, гифки и видео`}
const smsAntiEli1 = () => { return `🗑️ АНТИ-УДАЛЕНИЕ`}
const smsAntiEli2 = () => { return `Удаленные сообщения будут отправлены обратно в чат или группу`}
const smsAntiInt1 = () => { return `🌏 АНТИ-ИНТЕРНАЦИОНАЛ`}
const smsAntiInt2 = () => { return `Удалить иностранные номера, считающиеся поддельными`}
const smsAntiE1 = () => { return `🔗 АНТИ-ССЫЛКИ`}
const smsAntiE2 = () => { return `Удалять людей, отправляющих ссылки на группы WhatsApp`}
const smsAntiEE1 = () => { return `🔗 АНТИ-ССЫЛКИ 2`}
const smsAntiEE2 = () => { return `Удалять людей, отправляющих ссылки с https`}
const smsAntiTT1 = () => { return `🔗 АНТИ-TIKTOK`}
const smsAntiTT2 = () => { return `Удалять людей, отправляющих ссылки на TikTok`}
const smsAntiYT1 = () => { return `🔗 АНТИ-YOUTUBE`}
const smsAntiYT2 = () => { return `Удалять людей, отправляющих ссылки на YouTube`}
const smsAntiTEL1 = () => { return `🔗 АНТИ-ТЕЛЕГРАМ`}
const smsAntiTEL2 = () => { return `Удалять людей, отправляющих ссылки на Telegram`}
const smsAntiFB1 = () => { return `🔗 АНТИ-FACEBOOK`}
const smsAntiFB2 = () => { return `Удалять людей, отправляющих ссылки на Facebook`}
const smsAntiIG1 = () => { return `🔗 АНТИ-INSTAGRAM`}
const smsAntiIG2 = () => { return `Удалять людей, отправляющих ссылки на Instagram`} 
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Удалить людей, отправляющих ссылки на Twitter`}
const smsSOLOP1 = () => { return `⚜️ ТОЛЬКО ЧАСТНЫЕ`}
const smsSOLOP2 = () => { return `Разрешить использование только в частных чатах`}
const smsSOLOG1 = () => { return `⚜️ ТОЛЬКО ГРУППЫ`}
const smsSOLOG2 = () => { return `Разрешить использование только в групповых чатах`}
const smsConfi1 = () => { return `НАСТРОЙКИ`}
const smsConfi2 = () => { return `*Привет!*`}
const smsConfi3 = () => { return `*Выберите опцию из списка*`}
const smsConfi4 = () => { return `*Чтобы начать настройку*`}
const smsConfi5 = () => { return `● *Уведомления о конфигурации:*`}
const smsConfi6 = () => { return `✅ ⇢ *Функция активирована*`}
const smsConfi7 = () => { return `❌ ⇢ *Функция деактивирована*`}
const smsConfi8 = () => { return `⚠️ ⇢ *Этот чат не является группой*`}
const smsConfi9 = () => { return `*Рекомендация: чтобы увидеть полную настройку, используйте это меню в группе*\n*`}
const smsConfi10 = () => { return `*~ ЦЕНТР УПРАВЛЕНИЯ*`}
const smsParaAdmins = () => { return `ДЛЯ АДМИНОВ И ОСНОВАТЕЛЕЙ: ГРУППЫ`}
const smsParaAdYOw = () => { return `ДЛЯ АДМИНОВ И ОСНОВАТЕЛЕЙ: ЧАТЫ`}
const smsParaOw = () => { return `ДЛЯ ОСНОВАТЕЛЕЙ: ЧАТЫ`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `КОМАНДА`} 
const smsMens2 = () => { return `В НАСТОЯЩЕЕ ВРЕМЯ`} 
const smsMens3 = () => { return `В ЭТОМ`} 
const smsMens4 = () => { return `БОТ`} 
const smsMens5 = () => { return `ЧАТ`} 

//Error2
const smsMensError1 = () => { return `❕ СООБЩИТЬ О КОМАНДЕ ❕`} 
const smsMensError2 = () => { return `Следующая команда дает ошибку`} 

//_antiviewonce.js
const smsAntiView = () => { return `*МАСТЕР, Я ВСЕ ВИЖУ ЗДЕСЬ* 😎`} 

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ НОВЫЙ УРОВЕНЬ 🎖️`} 
const smsAutoLv2 = () => { return `ПРЕДЫДУЩИЙ УРОВЕНЬ:`} 
const smsAutoLv3 = () => { return `ТЕКУЩИЙ УРОВЕНЬ:`} 
const smsAutoLv4 = () => { return `РАНГ:`} 
const smsAutoLv5 = () => { return `ДАТА:`} 
const smsAutoLv6 = () => { return `Вы достигли нового уровня!`} 
const smsAutoLv7 = () => { return `🥳 НАГРАДА ЗА ВАШ НОВЫЙ УРОВЕНЬ`} 

//_autosticker.js
const smsAutoStik = () => { return `${lenguajeGB['smsAvisoFG']()}*ВИДЕО НЕ ДОЛЖНО БЫТЬ ДЛИННЕЕ 7 СЕКУНД.*`} 

//_expired.js
const smsBottem1 = () => { return `*Я УХОЖУ! 🤝 ЕСЛИ ХОТИТЕ, ЧТОБЫ Я ВЕРНУЛСЯ, ИСПОЛЬЗУЙТЕ КОМАНДУ _#bottemporal_, ЧТОБЫ Я ВЕРНУЛСЯ В ГРУППУ!*`} 
const smsBottem2 = () => { return `*💕 ТЕХНИЧЕСКАЯ ПОДДЕРЖКА*\n*_Wa.me/79319547247_*\n`} 
const smsBottem3 = () => { return `ДО СВИДАНИЯ 💖`} 

//_premium.js
const smsPremI = () => { return `*ВАШ ВРЕМЯ ПРЕМИУМ ЗАКОНЧИЛОСЬ!* 🎟️\n*ЧТОБЫ ПОЛУЧИТЬ НОВЫЙ ПРЕМИУМ-ДОСТУП, ИСПОЛЬЗУЙТЕ КОМАНДУ:*\n*#премиум*`} 

//afk-_afk.js
const smsAfkM1 = () => { return `${lenguajeGB['smsAvisoEG']()}*ВЫ ПЕРЕСТАЛИ БЫТЬ НЕАКТИВНЫМ ИВК*`} 
const smsAfkM2 = () => { return `*ПРИЧИНА ОТСУТСТВИЯ:*`} 
const smsAfkM3 = () => { return `*ВРЕМЯ НЕАКТИВНОСТИ:*`} 
const smsAfkM4 = () => { return `${lenguajeGB['smsAvisoAG']()}*НЕ УПОМИНАЙТЕ ЭТОГО ПОЛЬЗОВАТЕЛЯ!! ОН ИЛИ ОНА НЕАКТИВНЫ*`} 
const smsAfkM5 = () => { return `*ПРИЧИНА НЕАКТИВНОСТИ ИВК:*`} 
const smsAfkM6 = () => { return `*ПРИЧИНА НЕАКТИВНОСТИ ИВК: ПРИЧИНА НЕАКТИВНОСТИ НЕ УКАЗАНА*`} 

//afk-afk.js
const smsAfkM1A = () => { return `${lenguajeGB['smsAvisoAG']()}*Не беспокоить*`} 
const smsAfkM1B = () => { return `*БУДЕТ НЕАКТИВЕН(НА) АФК*\n\n*ПРИЧИНА ОТСУТСТВИЯ АФК*`} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${lenguajeGB['smsAvisoFG']()}*ВЫ НЕ В АНОНИМНОМ ЧАТЕ*`} 
const smsChatAn2 = () => { return `*ЕСЛИ ХОТИТЕ НАЧАТЬ АНОНИМНЫЙ ЧАТ, ИСПОЛЬЗУЙТЕ КОМАНДУ #start ИЛИ НАЖМИТЕ КНОПКУ НИЖЕ*\n`} 
const smsChatAn3 = () => { return `⚡ НАЧАТЬ АНОНИМНЫЙ ЧАТ`} 
const smsChatAn4 = () => { return `${lenguajeGB['smsAvisoRG']()}🪐 *ВЫ ПОКИНУЛИ АНОНИМНЫЙ ЧАТ*`} 
const smsChatAn5 = () => { return `${lenguajeGB['smsAvisoAG']()}*ДРУГОЙ ПОЛЬЗОВАТЕЛЬ ПОКИНУЛ АНОНИМНЫЙ ЧАТ*`}  
const smsChatAn6 = () => { return `*ЕСЛИ ХОТИТЕ ПЕРЕЙТИ В ДРУГОЙ АНОНИМНЫЙ ЧАТ, ИСПОЛЬЗУЙТЕ КОМАНДУ #start ИЛИ НАЖМИТЕ КНОПКУ НИЖЕ*\n`} 
const smsChatAn7 = () => { return `${lenguajeGB['smsAvisoAG']()}*ВЫ ВСЕ ЕЩЕ В АНОНИМНОМ ЧАТЕ ИЛИ В ОЖИДАНИИ, КОГДА КТО-ТО ПРИСОЕДИНИТСЯ ДЛЯ ОБЩЕНИЯ*`} 
const smsChatAn8 = () => { return `*ЕСЛИ ХОТИТЕ ВЫЙТИ ИЗ АНОНИМНОГО ЧАТА, ИСПОЛЬЗУЙТЕ КОМАНДУ #leave ИЛИ НАЖМИТЕ КНОПКУ НИЖЕ*\n`} 
const smsChatAn9 = () => { return `🍁 ВЫЙТИ ИЗ АНОНИМНОГО ЧАТА`} 
const smsChatAn10 = () => { return `${lenguajeGB['smsAvisoEG']()}✨ *ТЕПЕРЬ ВЫ МОЖЕТЕ ОБЩАТЬСЯ*`} 
const smsChatAn11 = () => { return `*КТО-ТО ПРИСОЕДИНИЛСЯ К АНОНИМНОМУ ЧАТУ!!*`} 
const smsChatAn12 = () => { return `❇️ ДРУГОЙ ПОЛЬЗОВАТЕЛЬ(ЬНИЦА)`} 
const smsChatAn13 = () => { return `${lenguajeGB['smsAvisoRG']()}🐈 *ОЖИДАНИЕ ПРИСОЕДИНЕНИЯ К АНОНИМНОМУ ЧАТУ, ПОЖАЛУЙСТА, ПРОЯВИТЕ ТЕРПЕНИЕ*`} 

//Кнопки меню
const smsBotonM1 = () => { return `⚡ СТАРТОВОЕ МЕНЮ ⚡`} 
const smsBotonM2 = () => { return `💫 ПОЛНОЕ МЕНЮ 💫`} 
const smsBotonM3 = () => { return `🎒 ИНВЕНТАРЬ 🎒`} 
const smsBotonM4 = () => { return `ПОЛЬЗОВАТЕЛИ`}
const smsBotonM5 = () => { return `РАНГ`}
const smsBotonM6 = () => { return `УРОВЕНЬ`}
const smsBotonM7 = () => { return `ПРЕМИУМ`}
const smsTex1 = () => { return '*МЕНЮ ПОИСКА*'}
const smsTex2 = () => { return '*МОДИФИКАТОР АУДИО*'}
const smsTex3 = () => { return '*МЕНЮ +18*'}
const smsTex4 = () => { return '*ДИНАМИЧЕСКОЕ СОДЕРЖАНИЕ*'}
const smsTex5 = () => { return '*ПОИСК И ЗАГРУЗКА*'}
const smsTex6 = () => { return '*МЕНЮ +18 ПРЕМИУМ*'}
const smsTex7 = () => { return '⠇ *Изображения +18 высокого качества и разнообразие*\n⠇ *Видео +18 только для вас*\n⠇ *Стикеры +18 доступны*'}
const smsTex8 = () => { return '*МЕНЮ КОНВЕРТЕРА*'}
const smsTex9 = () => { return '*МЕНЮ ЗАГРУЗОК*'}
const smsTex10 = () => { return '*МЕНЮ ДИНАМИЧЕСКИХ ИГР*'}
const smsTex11 = () => { return '*МЕНЮ ДЛЯ ГРУПП*'}
const smsTex12 = () => { return '*МЕНЮ ИНСТРУМЕНТОВ*'}
const smsTex13 = () => { return '*МЕНЮ ИНФОРМАЦИИ*'}
const smsTex14 = () => { return '*МЕНЮ ЭФФЕКТОВ И ЛОГОТИПОВ*'}
const smsTex15 = () => { return '*МЕНЮ ЛОГОТИПОВ 2*'}
const smsTex16 = () => { return 'МЕНЮ АУДИО'}
const smsTex17 = () => { return '*ПРЕФИКС В АУДИО НЕ ТРЕБУЕТСЯ*'}
const smsTex18 = () => { return 'СПИСОК АУДИО'}
const smsTex19 = () => { return '*ВЫ МОЖЕТЕ ВЫБРАТЬ АУДИО!!*'}
const smsTex20 = () => { return '*МЕНЮ ДЛЯ ВЛАДЕЛЬЦА (ВЛАДЕЛЬЦИ)*'}
const smsTex21 = () => { return '*RPG МЕНЮ*'}
const smsTex22 = () => { return '*МЕНЮ СТИКЕРОВ И ФИЛЬТРОВ*'}
const smsTex23 = () => { return '*МЕНЮ МЕМОВ И АНИМЕ RANDOMS*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*ВЫ В ЭТИХ ГРУППАХ:*_'}
const smsLisB = () => { return '*✦ Всего групп:*'}
const smsLisC = () => { return '*✦ Группа:*'}
const smsLisD = () => { return '*✦ ID:*'}
const smsLisE = () => { return '*✦ Участники:*'}

// ad
const smsMalused = () => { return '⚡ *ИСПОЛЬЗУЙТЕ КОМАНДУ В ТАКОМ ВИДЕ:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *ВЫ ДОЛЖНЫ ИСПОЛЬЗОВАТЬ КОМАНДУ КАК В ЭТОМ ПРИМЕРЕ:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *ВЫ ДОЛЖНЫ ИСПОЛЬЗОВАТЬ КОМАНДУ ИЛИ ОТВЕТИТЬ НА СООБЩЕНИЕ КАК В ЭТОМ ПРИМЕРЕ:*\n`}

// gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_ОТКРЫТЬ ГРУППУ НА ЧАС_*'}
const smsGrupoTime2 = () => { return '🔒 *_ЗАКРЫТЬ ГРУППУ НА ЧАС_*'}
const smsGrupoTime3 = () => { return 'ГРУППА'}
const smsGrupoTime4 = () => { return 'ЗАКРЫТА'}
const smsGrupoTime5 = () => { return 'ОТКРЫТА'}
const smsGrupoTime6 = () => { return 'В ТЕЧЕНИЕ'}
const smsGrupoTime7 = () => { return '🔒 *ГРУППА ЗАКРЫТА, ТОЛЬКО АДМИНИСТРАТОРЫ МОГУТ ОТПРАВЛЯТЬ СООБЩЕНИЯ*'}
const smsGrupoTime8 = () => { return '🔓 *ГРУППА ОТКРЫТА, ВСЕ МОГУТ ОТПРАВЛЯТЬ СООБЩЕНИЯ*'}
const smsGrupoTime9 = () => { return '🔓 ОТКРЫТЬ ГРУППУ В ТЕЧЕНИЕ '}
const smsGrupoTime10 = () => { return '🔒 ЗАКРЫТЬ ГРУППУ В ТЕЧЕНИЕ '}
const smsGrupoTime11 = () => { return ' ЧАС'}
const smsGrupoTime12 = () => { return 'ПОЗВОЛЬТЕ ГРУППЕ ОТКРЫТЬСЯ НА '}
const smsGrupoTime13 = () => { return 'ПОЗВОЛЬТЕ ГРУППЕ ЗАКРЫТЬСЯ НА '}

// grupo-add.js
const smsAddB1 = () => { return `${lenguajeGB['smsAvisoFG']()}*НЕВОЗМОЖНО ДОБАВИТЬ НОМЕР, ПРОВЕРЬТЕ, ПРАВИЛЬНО ЛИ ОНО ВВЕДЕНО, МОЖЕТ БЫТЬ, ОНО НЕДАВНО УШЛО ИЛИ УСТАНОВЛЕНЫ НЕПРАВИЛЬНЫЕ НАСТРОЙКИ КОНФИДЕНЦИАЛЬНОСТИ.*`}
const smsAddB2 = () => { return `${lenguajeGB['smsAvisoFG']()}*НЕВОЗМОЖНО ДОБАВИТЬ НОМЕР, ПРОВЕРЬТЕ, ПРАВИЛЬНО ЛИ ОНО ВВЕДЕНО, ИЛИ ДОБАВЬТЕ ЕГО ВРУЧНУЮ.*`}

// grupo-admins.js
const smsAddB3 = () => { return `*УВЕДОМЛЕНИЕ ДЛЯ АДМИНОВ*`}
const smsAddB4 = () => { return `*ПРИСУТСТВИЕ АДМИНОВ*`}
const smsAddB5 = () => { return `*СООБЩЕНИЕ:*`}
const smsAddB6 = () => { return `Прошу администрацию обратить внимание.`}

// grupo-advertencia.js
const smsAdveu1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ФУНКЦИЯ МОЖЕТ БЫТЬ ИСПОЛЬЗОВАНА ТОЛЬКО ЕСЛИ ОНА АКТИВИРОВАНА:*\n`}
const smsAdveu2 = () => { return 'Причина'}
const smsAdveu3 = () => { return `${lenguajeGB['smsAvisoMG']()}*ПОМНИТЕ, ЧТО ДОЛЖНЫ УКАЗАТЬ ПРИЧИНУ ПРЕДУПРЕЖДЕНИЯ*\n`}
const smsAdveu4 = () => { return '*ПОЛУЧИТЕ ПРЕДУПРЕЖДЕНИЕ В ЭТОЙ ГРУППЕ!!*'}
const smsAdveu5 = () => { return 'ПРЕДУПРЕЖДЕНИЕ'}
const smsAdveu6 = () => { return '🎒 ИНВЕНТАРЬ'} 
const smsAdveu7 = () => { return '*Я ПРЕДУПРЕЖДАЛ ВАС НЕСКОЛЬКО РАЗ!!*'}
const smsAdveu8 = () => { return '*ТЕПЕРЬ ВЫ БУДЕТЕ УДАЛЕНЫ* 🙄'}
const smsAdveu9 = () => { return '😇 БЛАГОДАРЮ'}
const smsAdveu10 = () => { return '*ВАМ УДАЛЕНО ОДНО ПРЕДУПРЕЖДЕНИЕ В ЭТОЙ ГРУППЕ!!*'}
const smsAdveu11 = () => { return 'Раньше:'}
const smsAdveu12 = () => { return 'Теперь:'}

// grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return '*НЕВЕРНЫЙ НОМЕР, ПОПРОБУЙТЕ ЕЩЕ РАЗ, ОТВЕТЬТЕ НА СООБЩЕНИЕ КОГО-ТО ИЛИ ИСПОЛЬЗУЙТЕ КАК В ЭТОМ ПРИМЕРЕ:*\n'}
const smsDemott2 = () => { return '*ТЕПЕРЬ У ВАС ЕСТЬ ВЛАСТЬ В ГРУППЕ!!*'}
const smsDemott3 = () => { return '*ВАМ ОТНЯТА ВЛАСТЬ В ГРУППЕ!!*'}

//grupo-info.js
const smsGI1 = () => { return '*ИНФОРМАЦИЯ О ГРУППЕ*'}
const smsGI2 = () => { return '*ID ГРУППЫ*'}
const smsGI3 = () => { return '*НАЗВАНИЕ ГРУППЫ*'}
const smsGI4 = () => { return '*ОПИСАНИЕ ГРУППЫ*'}
const smsGI5 = () => { return '*НЕТ ОПИСАНИЯ*'}
const smsGI6 = () => { return '*КОЛИЧЕСТВО ПОЛЬЗОВАТЕЛЕЙ*'}
const smsGI7 = () => { return '*Пользователи*'}
const smsGI8 = () => { return '*СОЗДАТЕЛЬ(НИЦА) ГРУППЫ*'}
const smsGI9 = () => { return '*АДМИНИСТРАТОРЫ ГРУППЫ*'}
const smsGI10 = () => { return '⚙️ НАСТРОЙКИ ГРУППЫ'}

// grupo-kick.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ОТМЕТЬТЕ ЧЕЛОВЕКА ИЛИ ОТВЕТЬТЕ НА СООБЩЕНИЕ ЧЕЛОВЕКА, КОТОРОГО ХОТИТЕ ИСКЛЮЧИТЬ*\n\n*ПРИМЕР: `}
const smskick2 = () => { return `ИСКЛЮЧЕН(А) 😼🫵`}
const smskick3 = () => { return `НЕ МОГУ ИСКЛЮЧИТЬ СОЗДАТЕЛЯ ГРУППЫ 😆🫵`}
const smskick4 = () => { return `НЕ В ЭТОЙ ГРУППЕ 👻`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ ВЫЗЫВАЕТ ГРУППУ ⚡`}

//grupo-setbye.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*ПРОЩАНИЕ С ГРУППОЙ БЫЛО НАСТРОЕНО*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_НАПИШИТЕ ПРОЩАЛЬНОЕ СООБЩЕНИЕ_*\n*_НЕОБЯЗАТЕЛЬНО ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТО, ЧТО ЗДЕСЬ С "@", ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ:_*\n\n*⚡ @user (Упоминание пользователя)*\n\n*ПОМНИТЕ, ЧТО "@" ЭТО НЕОБЯЗАТЕЛЬНО*`}

//grupo-setwelcome.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*ГРУППОВОЕ ПРИВЕТСТВИЕ БЫЛО НАСТРОЕНО*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_НАПИШИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ_*\n*_НЕОБЯЗАТЕЛЬНО ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТО, ЧТО ЗДЕСЬ С "@", ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ:_*\n\n*⚡ @user (Упоминание пользователя)*\n*⚡ @subject (Название группы)*\n*⚡ @desc (Описание группы)*\n\n*ПОМНИТЕ, ЧТО " @ " НЕ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ*`}

//grupo-setdesc.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*ОПИСАНИЕ ГРУППЫ БЫЛО НАСТРОЕНО*`}

//grupo-setname.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*ИМЯ ГРУППЫ БЫЛО НАСТРОЕНО*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 ВВЕДИТЕ НОВОЕ ИМЯ ГРУППЫ*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*НАЗВАНИЕ ГРУППЫ НЕ ДОЛЖНО СОДЕРЖАТЬ БОЛЕЕ 25 СИМВОЛОВ*`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*ССЫЛКА НА ГРУППУ БЫЛА ВОССТАНОВЛЕНА*`}

//Botón 
const smsSig = () => { return `➡️ СЛЕДУЮЩИЙ ➡️`}
const smsSigPrem = () => { return `❤️‍🔥 СЛЕДУЮЩИЙ ❤️‍🔥`}
const smsCont18Porn = () => { return `🔞 *СОДЕРЖИМОЕ* 🔞`} //texto
const smsCont18Porn2 = () => { return `🔞 *СОДЕРЖИМОЕ* 🔞`} //texto
const smsCont18PornP = () => { return `🌟 *СОДЕРЖИМОЕ* ❤️‍🔥 PREMIUM* 🌟`} //texto
const smsCont18PornP2 = () => { return `ПРЕМИУМ ❤️‍🔥 КОНТЕНТ`} //texto  

//propietario(a).js
const smsJoin = (user) => { return `${packname}\nЭто бот WhatsApp, который поможет вам выполнять различные действия 🪄 В ПРИВАТНОЙ ГРУППЕ И ТАКЖЕ ТЕБЕ БУДЕТ ВЕСЕЛО 🎈 С ЕЕ МНОЖЕСТВОМ ФУНКЦИЙ, НАСЛАЖДАЙСЯ ULTIMATEBOT!!! 😸

💖 GATABOT БЫЛА ПРИГЛАШЕНА:\n@${user}`}
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*ВВЕДИТЕ ССЫЛКУ НА ГРУППУ*\n*Пример:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*ОН ПРИСОЕДИНИЛСЯ К ГРУППЕ ✅*`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*ОТВЕТЬТЕ НА СООБЩЕНИЕ ИЛИ ВВЕДИТЕ СООБЩЕНИЕ, ИСПОЛЬЗУЯ ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*ОТПРАВЛЯЯ ОФИЦИАЛЬНОЕ СООБЩЕНИЕ, ПОДОЖДИТЕ МИНУТКУ...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО ПО АДРЕСУ ${totalPri} ПРИВАТНЫЙ ЧАТ(Ы)*\n\n*ОБЩЕЕ ВРЕМЯ ДОСТАВКИ: ${time}*\n${totalPri >= 3000 ? '\n*ОНИ БЫЛИ ОТПРАВЛЕНЫ НЕ ВО ВСЕ ЧАТЫ, ЧТОБЫ ИЗБЕЖАТЬ ПЕРЕПОЛНЕНИЯ*' : ''}`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *ОТПРАВЛЕННОЕ СООБЩЕНИЕ:*`}
const smsBCbot2 = () => { return `ЧАСТНЫЙ`}
const smsBCbot3 = () => { return `ГРУППА`}
const smsBCbot4 = () => { return `ОБЩИЙ`}
const smsBCbot5 = () => { return `ОБЩЕЕ ВРЕМЯ ДОСТАВКИ:`}
const smsBCbot6 = () => { return `ОНИ БЫЛИ ОТПРАВЛЕНЫ НЕ ВО ВСЕ ЛИЧНЫЕ ЧАТЫ, ЧТОБЫ ИЗБЕЖАТЬ ПЕРЕПОЛНЕНИЯ`}
const smsBCbot7 = () => { return `✅ *ОФИЦИАЛЬНОЕ СООБЩЕНИЕ* ✅`}

//propietario(a).js
const smsChatGP1 = () => { return "*ОТПРАВЛЯЮ СООБЩЕНИЕ, ПОДОЖДИТЕ МИНУТКУ...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *ОФИЦИАЛЬНОЕ СООБЩЕНИЕ* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО ПО АДРЕСУ ${totalGP} GRUPO(S)*`}

const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*Отметьте кого-то или ответьте на сообщение пользователя, или напишите номер, который хотите заблокировать с помощью команд*\n\n*ПРИМЕР:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot} НЕ МОЖЕТ БЫТЬ ЗАБЛОКИРОВАН С ПОМОЩЬЮ ЭТОЙ КОМАНДЫ* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *Я НЕ МОГУ ЗАБЛОКИРОВАТЬ ВЛАДЕЛЬЦА @${ownerNumber} КОМПАНИИ "${packname}"*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*НЕ НУЖНО ЗАНОВО БЛОКИРОВАТЬ @${number}, ЕСЛИ ОН УЖЕ ЗАБЛОКИРОВАН* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}ПОЛЬЗОВАТЕЛЬ БЫЛ ЗАБЛОКИРОВАН 🙀\nОН(А) НЕ СМОЖЕТ ИСПОЛЬЗОВАТЬ ${gt}`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} ВЫ ЗАБЛОКИРОВАНЫ ПОЛЬЗОВАТЕЛЕМ @${usr} И НЕ МОЖЕТЕ ИСПОЛЬЗОВАТЬ КОМАНДЫ, ПОКА КТО-ТО НЕ СНИМЕТ БЛОКИРОВКУ* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*ПРОИЗОШЛА ОШИБКА, ВОЗМОЖНО, ПОЛЬЗОВАТЕЛЬ НЕ НАХОДИТСЯ В МОЕЙ БАЗЕ ДАННЫХ. ПОПРОБУЙТЕ НАПИСАТЬ ${usedPrefix + command} ${number}*\n\`\`\`ЕСЛИ ОШИБКА ПРОДОЛЖАЕТСЯ, СООБЩИТЕ ОБ ЭТОЙ КОМАНДЕ\`\`\``}
//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*\n\n*ღ Версия для ${global.packname} » _${global.vs}_*\n*ღ Версия JadiBot » _${global.vsJB}_*\n\n🟢 *_ФУНКЦИЯ БЫТЬ СУБ-БОТОМ_* 🟢\n\n*➡️ С помощью другого мобильного телефона или на ПК отсканируйте этот QR-код, чтобы стать субботом*\n\n*1️⃣ Направляйтесь к трем точкам в правом верхнем углу*\N*2️⃣ Перейдите к опции "Связанные устройства" *\N*3️⃣ Отсканируйте этот QR-код для входа в систему*\N\N📢 *Срок действия этого QR-кода истекает через 45 секунд!*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*ЭТА КОМАНДА ОТКЛЮЧЕНА МОИМ ВЛАДЕЛЬЦЕМ(А)*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *ЧТОБЫ СТАТЬ ДОПОЛНИТЕЛЬНЫМ БОТОМ, ПЕРЕЙДИТЕ ПО ОСНОВНОМУ НОМЕРУ*\n*ღ Перейдите по следующей ссылке:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *СОЕДИНЕНИЕ НЕОЖИДАННО ПРЕРВАЛОСЬ, МЫ ПОПЫТАЕМСЯ ВОССТАНОВИТЬ СОЕДИНЕНИЕ...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *СОЕДИНЕНИЕ БЫЛО ЗАКРЫТО, ВАМ НУЖНО БУДЕТ ПОДКЛЮЧИТЬСЯ ВРУЧНУЮ С ПОМОЩЬЮ КОМАНДЫ #serbot И ПОВТОРНО ОТСКАНИРОВАТЬ НОВЫЙ QR-КОД*`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *ПОДКЛЮЧЕНИЕ УСПЕШНО!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *ПОДКЛЮЧЕНИЕ УСПЕШНО!!! ВЫ МОЖЕТЕ ПОДКЛЮЧИТЬСЯ, ИСПОЛЬЗУЯ СВОЙ (ИДЕНТИФИКАТОР), ИЛИ ИСПОЛЬЗОВАТЬ:*`}
const smsJBCargando = () => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *ОН ПОДКЛЮЧЕН!! ПОЖАЛУЙСТА, ПОДОЖДИТЕ, ПОКА СООБЩЕНИЯ ЗАГРУЗЯТСЯ...*\n\n♻️ *ДОСТУПНЫЕ ОПЦИИ:*\n*» #stop _(Остановить функцию вспомогательного бота)_*\n*» #eliminarsesion _(Стереть все следы суб-бота)_*\n*» #serbot _(Получить новый QR-код, чтобы стать суб-ботом)_*`}
const smsJBInfo1 = () => { return `💖 *ПОЛЕЗНАЯ ССЫЛКА*`}
const smsJBInfo2 = () => { return `💖 *Функция стабильна, если есть какие-либо недостатки, пожалуйста, свяжитесь со мной: Wa.me/79319547247*\n💝 *Вы можете сделать добровольное пожертвование через Сбербанк: 4279 3806 9387 5009*\n\n*Большое спасибо за поддержку ${global.packname}*`}

//jadibot-deleteSesion.js
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*ИСПОЛЬЗУЙТЕ ЭТУ КОМАНДУ ДЛЯ ГЛАВНОГО БОТА*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*Я БУДУ СКУЧАТЬ ПО ТЕБЕ ${global.packname} Пока!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*ВЫ ВЫШЛИ ИЗ СИСТЕМЫ И СТЕРЛИ ВСЕ СЛЕДЫ*`}
const smsJBErr = () => { return `*ВЫ ВЫШЛИ ИЗ СИСТЕМЫ КАК ВСПОМОГАТЕЛЬНЫЙ БОТ* ♻️`}

//comandos+18-adult.js
const smsContAdult = () => { return `${lenguajeGB['smsAvisoAG']()}*КОМАНДЫ 🔞 ОТКЛЮЧЕНЫ, ИСПОЛЬЗУЙТЕ #on modohorny*`}

//comandos+18-menu.js
const smsList1 = () => { return `Ему не хватает `}
const smsList2 = () => { return `\nНажмите здесь, чтобы купить`}
const smsList3 = () => { return `Доступный контент 😸`}
const smsList4 = () => { return `Контент недоступен 😿\nНажмите здесь, чтобы купить `}
const smsList5 = () => { return `*Выберите вариант*\n*из списка, чтобы увидеть*\n*содержимое* 😋`}
const smsList6 = () => { return `👀 ПРОСМОТРЕТЬ СПИСОК 👀`}

//descargas-consejos.js
const smsConj = () => { return `🍃 НОВЫЙ СОВЕТ`}
const smsFras = () => { return `🍃 НОВАЯ ФРАЗА`}

//info-contacto.js
const smsContacto1 = () => { return ' Я ' + packname + ' Бот для WhatsApp, предназначенный для помощи во всем, что вы попросите 😎'}
const smsContacto2 = () => { return 'Я - Владелец ' + packname + ' если у вас есть какие-либо сомнения, вы можете их мне сообщить ✌️'}
const smsContacto3 = () => { return '👑 Владелец'}
const smsContacto4 = () => { return 'Официальный Контакт Чат-Менеджер'}
const smsContacto5 = () => { return '🐣 Могу я вам помочь чем-нибудь?'}
const smsContacto6 = () => { return 'У меня нет электронной почты 🙏'}
const smsContacto7 = () => { return '🌎 Мировой'}
const smsContacto8 = () => { return 'Этот аккаунт является Ботом 👀'}


export default { lenguaje, smsAvisoRG, smsJoin, smsJoin1, smsJoin2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5, smsPropban6, smsPropban7, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsChatGP1, smsChatGP2, smsChatGP3, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsAvisoAG, smsAvisoIIG, smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsLista22_1, smsCodigoQR, smsConexionOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp, smsSig, smsSigPrem, smsCont18Porn, smsCont18Porn2, smsCont18PornP, smsCont18PornP2,
smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBCargando, smsJBInfo1, smsJBInfo2, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsJBErr, smsContAdult, smsList1, smsList2, smsList3, smsList4, smsList5, smsList6, smsConj, smsFras, smsContacto1, smsContacto2, smsContacto3, smsContacto4,
smsContacto5, smsContacto6, smsContacto7, smsContacto8 };
