window.structCreator = 
[
    {
        header: "1. Описание предложения",
        body: [
            {
                type: "string",
                name: "Название проекта",
                info: "Введите название проекта, например: Сеть ресторанов",
                parsing_data: null,
                _id: "name"
            },
            {
                type: "string",
                name: "Цель привлечения средств",
                info: "Напишите коротко для чего вам требуется финансирование, например: Открытие 10 ресторанов",
                parsing_data: null,
                _id: "target"
            },
            {
                type: "string",
                name: "Общая сумма привлечения",
                info: "Укажите необходимую сумму для реализации проекта, например: 30 000 000",
                _id: "attraction_amount",
                parsing_data: null,
                redacting: true,
            },
            {
                type: "string",
                name: "Срок инвестирования",
                info: "Укажите срок заключения договора с инвестором в месяцах, например: 12, либо напишите 'бессрочно', если если это доля в проекте",
                parsing_data: null,
                _id: "date",
                bess: true,
            },
            {
                type: "string",
                name: "Минимальная сумма",
                info: "Укажите минимальную сумму входа в проект, например: 50 000",
                parsing_data: null,
                _id: "minimal_amount",
                redacting: true,
            },
            {
                type: "string",
                name: "Ставка % в месяц",
                info: "Введите целое или дробное значение в формате 1.15 и мы сами пересчитаем ее в % годовых",
                parsing_data: null,
                _id: "rate",
                number_t: true
            },
            {
                type: "menu",
                menu_list: ['Ежедневно', 'Ежемесячно', 'Ежеквартально', 'Ежегодно','Раз в 6 месяцев', 'В конце срока'],
                name: "Выплата процентов",
                info: "Ежедневно, Ежемесячно, Ежеквартально, Ежегодно, Раз в 6 месяцев, В конце срока",
                _id: "date_payments"
            },
            {
                type: "date",
                name: "Период сбора до",
                info: "Выберите дату окончания приема средств",
                _id: "collection_period",
                ogranit_day: true,
            }
        ]
    },
    {
        header: "2. Данные о компании",
        body: [
            {
                type: "string",
                name: "Название компании",
                info: "",
                parsing_data: "name/short_with_opf",
                readonly: true,
                _id: "name_company"
            },
            {
                type: "string",
                name: "ИНН",
                info: "",
                _id: "inn",
                parsing_data: "inn",
                readonly: true,
                number: true
            },
            {
                type: "string",
                name: "ОГРН",
                info: "",
                parsing_data: "ogrn",
                _id: "ogrn",
                readonly: true,
                number: true
            },
            {
                type: "addr",
                name: "Юридический адрес",
                info: "",
                parsing_data: null,
                moreGet: true,
                readonly: true,
                _id: "addr"
            },
            {
                type: "addr",
                name: "Фактический адрес",
                info: "Введите Фактический адрес",
                parsing_data: null,
                moreGet: true,
                shower: "Ваш юридический адрес не совпадают с Фактическим",
                _id: "addr_fact"
            },
            {
                type: "string",
                name: "Сайт",
                info: "Введите название / ссылку на ваш сайт",
                parsing_data: null,
                _id: "syte"
            }
        ]
    },
    {
        header: "3. Выписка из банка",
        body: [
            {
                type: "file",
                name: "Загрузите выписку с расчетного счета не менее чем за последние 6 месяцев. (Если она есть)",
                name_redacting: "Выписка из банка",
                _id: "file+3"
            },
        ]
    },
    {
        header: "3. Отчет о прибылях",
        body: [
            {
                type: "file",
                name: "Загрузите отчет о прибылях и убытках не менее чем за последние 6 месяцев.",
                name_redacting: "Отчет о прибылях",
                _id: "file+3_1"
            },
        ]
    },
    {
        header: "3. Отчет о движении денежных средств",
        body: [
            {
                type: "file",
                name: "Загрузите отчет о движении денежных средств не менее чем за последние 6 месяцев. (Если она есть)",
                name_redacting: "Отчет о движении денежных средств",
                _id: "file+3_2"
            },
        ]
    },
    {
        header: "3. Бухгалтерский баланс",
        body: [
            {
                type: "file",
                name: "Загрузите бухгалтерский баланс не старше 2 недель (Если она есть)",
                name_redacting: "Бухгалтерский баланс",
                _id: "file+3_3"
            },
        ]
    },
    {
        header: "4. Скан паспорта",
        body: [
            {
                type: "file",
                name: "Загрузите скан паспорта ИП, все страницы одним файлом в формате PDF по каждому лицу отдельно",
                name_redacting: "Скан паспорта",
                _id: "file+4"
            },
        ]
    },
    {
        header: "4. Данные собственника",
        body: [
            {
                type: "string",
                name: "Ф.И.О Собственника как в паспорте",
                info: "",
                parsing_data: null,
                _id: "sob_fio"
            },
            {
                type: "date",
                name: "Дата рождения",
                info: "",
                parsing_data: null,
                _id: "sob_date"
            },
            {
                type: "string",
                name: "Прописка как в паспорте",
                info: "",
                parsing_data: null,
                _id: "sob_prop"
            },
            {
                type: "string",
                name: "Регион согласно паспорту",
                info: "например Московская область",
                parsing_data: null,
                _id: "sob_region"
            },
            {
                type: "string",
                name: "Серия паспорта",
                info: "",
                parsing_data: null,
                form: "four_number",
                _id: "sob_serion"
            },
            {
                type: "string",
                name: "Номер паспорта",
                form: "six_number",
                info: "",
                parsing_data: null,
                _id: "sob_number"
            },
            {
                type: "string",
                name: "ИНН",
                info: "",
                parsing_data: null,
                _id: "sob_inn"
            },
        ]
    },
    {
        header: "5. Контакты",
        body: [
            {
                type: "string",
                name: "Ф.И.О Представителя",
                info: "",
                parsing_data: null,
                _id: "pred_fio"
            },
            {
                type: "string",
                name: "Должность",
                info: "Должность которую вы занимаете в компании",
                _id: "doljnost",
            },
            {
                type: "string",
                name: "Телефон",
                info: "Ваш номер телефона",
                _id: "phone",
                phone: true
            },
            {
                type: "string",
                name: "WhatsApp",
                info: "Ваш номер телефона привязанный к WhatsApp",
                _id: "whatsapp",
                phone: true
            },
            {
                type: "string",
                name: "Email",
                info: "Ваш действующий email",
                _id: "email",
                mail: true
            }
        ]
    },
    {
        header: "6. Реквизиты",
        body: [
            {
                type: "string",
                name: "Банк-получатель",
                info: "Введите название банка",
                _id: "bank"
            },
            {
                type: "string",
                name: "Корр. счет",
                info: "Введите Корр. счет",
                _id: "account_correct",
                number: true
            },
            {
                type: "string",
                name: "БИК",
                info: "Введите БИК",
                _id: "bik",
                number: true,
            },
            {
                type: "string",
                name: "КПП",
                info: "Введите КПП",
                _id: "kpp",
                number: true
            },
            {
                type: "string",
                name: "Получатель",
                info: "Введите кто будет получать инвестиции например: ООО 'Интегра'",
                _id: "recipient"
            },
            {
                type: "string",
                name: "Счет получателя",
                info: "Введите счет получателя",
                _id: "account_get",
                number: true
            }
        ]
    },
    {
        header: "7. Презентация",
        body: [
            {
                type: "file",
                name: "Загрузите презентацию вашего проекта. Обращаем внимание: Презентация не должна содержать контактов!",
                name_redacting: "Презентация",
                _id: "file+7"
            },
        ]
    },
    {
        header: "8. Видео презентация",
        body: [
            {
                type: "file",
                name: `Загрузите вашу видео-презентацию, еcли она есть`,
                name_redacting: "Видео презентация",
                _id: "file+8"
            },
        ]
    },
];