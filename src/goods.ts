interface Goods {
    id: number,
    price: number
    url: string,
    name: string,
    description: string
}

export const Goods: Goods[] = [
    {
        id: 1,
        price: 120000,
        url: 'https://connectstore.ru/upload/resize_cache/iblock/111/450_450_0/ito7lbkrk7pscr08yfn08olupu1uxxh8.jpg',
        name: 'Iphone 14 Pro Max',
        description: 'Тип дисплея: Super Retina XDR OLED, True Tone, ProMotion с адаптивной частотой обновления до 120 Гц. Основная камера: тройная 1 модуль 48 Мп, f/1.78, 24мм (широкоугольный), 2.44µm, dual pixel PDAF, второе поколение sensor-shift OIS'
    },
    {
        id: 2,
        price: 55000,
        url: 'https://connectstore.ru/upload/resize_cache/iblock/594/450_450_0/grpxy6ubqoy452cxlaszbepp7aa1rvl7.jpg',
        name: 'Ipad Air',
        description: 'Apple iPad Air 2022 10.9" Wi-Fi 64GB Starlight'
    },
    {
        id: 3,
        price: 110000,
        url: 'https://connectstore.ru/upload/resize_cache/iblock/4ed/450_450_0/t65p19l7fru1p5mri9decd4g17ztgraa.jpg',
        name: 'Mac-book Air M2',
        description: 'Подключенияпорт для зарядки MagSafe 3, выход 3.5 мм для наушников, два порта Thunderbolt/USB 4. Интерфейсы Bluetooth 5.0, Wi-Fi 6 802.11ax; совместимость со стандартом IEEE 802.11. Динамики звуковая система с четырьмя динамиками, широкий стереозвук, поддержка пространственного звучания. Микрофон система из трёх направленных микрофонов'
    },
    {
        id: 4,
        price: 75000,
        url: 'https://connectstore.ru/upload/resize_cache/iblock/e34/450_450_0/g040nmhkyc0bvha9xsn4vjnnb39tafj2.jpg',
        name: 'Apple Watch Ultra',
        description: 'постоянно включенный высотомер, оптический датчик сердца биения третьего поколения, акселерометр для измерения больших ускорений, гироскоп с высоким динамическим диапазоном, датчик внешней освещённости, датчик кислорода в крови, компас. Функции: мониторинг работы сердца, распознавание тренировок, уведомления о звонках, уведомления от приложений, кислород в крови, измерение ЭКГ, датчик температуры тела, мониторинг сна'
    },
    {
        id: 5,
        price: 22000,
        url: 'https://connectstore.ru/upload/resize_cache/iblock/fcd/450_450_0/lzd96gh7djwoncqsg5ltmojink2ugd9v.jpg',
        name: 'AirPods Pro',
        description: 'Беспроводные наушники Apple AirPods Pro в футляре с беспроводной зарядкой MagSafe'
    }
]