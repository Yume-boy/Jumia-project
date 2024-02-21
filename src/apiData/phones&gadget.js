const phoneData = [
    {
        id: 1,
        name: 'XIAOMI Redmi Note 13 6.67" 6GB RAM/128GB ROM Android 12 - Black',
        new: '₦ 214,000',
        price: 214000,
        old: '₦ 230,500',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/3476082/1.jpg?5801',
    },

    {
        id: 2,
        name: 'itel S23 6.6" 8GB RAM/256GB ROM Android 12 - White',
        new: '₦ 99,990',
        price: 99990,
        old: '₦ 150,000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/3355072/1.jpg?5389',
    },
    
        {
            id: 3,
            name: 'Infinix Smart 8 6.6" 4GB RAM/64GB ROM Android T Go - Black',
            new: '₦ 114,790',
            price: 114790,
            old: '₦ 250,000',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/1218882/1.jpg?6985',
        },
        
        {
            id: 4,
            name: 'Samsung Galaxy A15 6.5" 6GB RAM/128GB ROM Android 14 - Black',
            new: '₦ 229,715',
            price: 229715,
            old: '₦ 300,000',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/5778882/1.jpg?7774',
        },
        
        {
            id: 5,
            name: 'XIAOMI Redmi Note 13 Pro 6.67" 8GB RAM/256 GB ROM Android 12 -Black + Free Smart Light Sound Speaker',
            new: '₦ 344,500',
            price: 334500,
            old: '₦ 365,000',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/2086082/1.jpg?9356',
        },
        
        {
            id: 6,
            name: 'AGM PG001 Dual SIM, Torchlight, Wireless FM,SOS Function-Red',
            new: '₦ 15,209',
            price: 15209,
            old: '₦ 19,100',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/8379422/1.jpg?0527',
        },
        
        {
            id: 7,
            name: 'Samsung Galaxy A05s 6.7" 4GB RAM/128GB ROM Android 13 - Black',
            new: '₦ 179,350',
            price: 179350,
            old: '₦ 195,000',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/5535772/1.jpg?2847',
        },
        
        {
            id: 8,
            name: 'itel S23 6.6" 8GB RAM/256GB ROM Android 12 - White',
            new: '₦ 99,990',
            price: 99990,
            old: '₦ 150,000',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/3355072/1.jpg?5389',
        },
        
        {
            id: 9,
            name: 'itel A05s 6.6"HD+ 2GB RAM/32GB ROM Android 13 - Green',
            new: '₦ 78,300',
            price: 78300,
            old: '₦ 83,000',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/6159972/1.jpg?0197',
        },
        
        {
            id: 10,
            name: 'Samsung Galaxy A05 6.7" 4GB RAM/128GB ROM Android 13 - Black',
            new: '₦ 126,300',
            price: 126300,
            old: '₦ 150,000',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/8335772/1.jpg?3571',
        },
        
        {
            id: 11,
            name: 'UMIDIGI G1 6.52" 2GB RAM/32GB ROM Android 12- Sunglow Gold',
            new: '₦ 66,800',
            price: 66800,
            old: '₦ 98,420',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/7833241/1.jpg?4834',
        },
        
        {
            id: 12,
            name: 'itel A70 6.6" HD 4GB RAM/256GB ROM Android 12 - Gold',
            new: '₦ 105,300',
            price: 105300,
            old: '₦ 153,000',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/2058172/1.jpg?6400',
        },
        
        {
            id: 13,
            name: 'F9 Wireless Fingerprint Touch Headset Hifi Stereo',
            new: '₦ 3,985',
            price: 3985,
            old: '₦ 6,517',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/8833531/1.jpg?1696',
        },
        
        {
            id: 14,
            name: 'Romoss 20W PD 3.0 Phone Charger Fast Charge Type-C&USB-A Dual Ports',
            new: '₦ 9,300',
            price: 9300,
            old: '₦ 16,941',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/3049752/1.jpg?8971',
        },
        
        {
            id: 15,
            name: 'Zealot S1 BT Speakers Portable Multi Function With Torch',
            new: '₦ 15,990',
            price: 15990,
            old: '₦ 29,580',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/4581752/1.jpg?8009',
        },
        
        {
            id: 16,
            name: 'F9 Wireless Headset Bluetooth Earphone True Bass With Power Banc',
            new: '₦ 4,105',
            price: 4105,
            old: '₦ 7,253',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/7942952/1.jpg?2710',
        },
        
        {
            id: 17,
            name: 'Oraimo 10000mAh Power-Bank + Free Fast Charging Cable',
            new: '₦ 12,500',
            price: 12500,
            old: '₦ 26,000',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/3249172/1.jpg?9804',
    },

    {
        id: 18,
        name: 'Phone Tripod Moblie Phone Clip Bracket Monopod Stand',
        new: '₦ 2,864',
        price: 2864,
        old: '₦ 3,900',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/8042871/1.jpg?0641',
    },

    {
        id: 19,
        name: 'Oraimo Colorful Light Thumping Bass SoundFlow Wireless Soundbar',
        new: '₦ 59,500',
        price: 59500,
        old: '₦ 77,400',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/458188/1.jpg?1047',
    },

    {
        id: 20,
        name: 'XIAOMI Redmi 12 6.79" 8GB RAM/256 GB ROM Android 13-Midnight Black',
        new: '₦ 192,000',
        price: 192000,
        old: '₦ 195,000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/4142352/1.jpg?0794',
    },

    {
        id: 21,
        name: 'itel P55+ 6.6″ HD 8GB RAM/128GB ROM Android 12 - Green',
        new: '₦ 150,000',
        price: 150000,
        old: '₦ 159,900',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/9551372/1.jpg?8266',
    },

    {
        id: 22,
        name: 'AGM Note N1 6.52" 8GB Base RAM/8GB Extended RAM/128GB ROM Android 13- Blue',
        new: '₦ 104,800',
        price: 104800,
        old: '₦ 150,000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/4991532/1.jpg?7946',
    },

    {
        id: 23,
        name: 'Oraimo Fast Charge Power-Bank Slice Link 10000mAh 12W Black',
        new: '₦ 13,990',
        price: 13990,
        old: '₦ 29,300',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/7800242/1.jpg?5232',
    },

    {
        id: 24,
        name: 'Tronsmart T6 Mini 15W Portable Speaker With Good Bass,Bluetooth 5.0, Voice Assistant, Alexa-Red',
        new: '₦ 29,900',
        price: 29900,
        old: '₦ 50,000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/418887/1.jpg?4494',
    },

    {
        id: 25,
        name: 'UMIDIGI Air Buds U Wireless Earbuds - White',
        new: '₦ 25,800',
        price: 25800, 
        old: '₦ 35,380',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/266667/1.jpg?6367',
    },

    {
        id: 26,
        name: 'Oraimo Undo2 Fast Charging Micro USB Data Cable',
        new: '₦ 3,310',
        price: 3310,
        old: '₦ 6,620',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/558528/1.jpg?0352',
    },

    {
        id: 27,
        name: 'Oraimo Undo2 Fast Charging Type-C Data Cable',
        new: '₦ 3,310',
        price: 3310,
        old: '₦ 6,620',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/6591752/1.jpg?5127',
    },

    {
        id: 28,
        name: 'Oraimo Watch 3 Plus Clear Call 1.83 TFT Color Screen IP68 Dust',
        new: '₦ 40,200',
        price: 40200,
        old: '₦ 52,300',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/7778662/1.jpg?9824',
    },

    {
        id: 29,
        name: 'POHB Fast Charge Portable Power Banks With 4 Charging Cables 20000mah-black Y129',
        new: '₦ 11,700',
        price: 11700,
        old: '₦ 20,000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/5048362/1.jpg?3241',
    },

    {
        id: 30,
        name: 'Oraimo X Burna Boy SpacePods True Wireless Earbuds',
        new: '₦ 51,092',
        price: 51092,
        old: '₦ 69,600',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/4291752/1.jpg?5295',
    },

    {
        id: 31,
        name: 'XIAOMI Redmi 12 6.79" 8GB RAM/256 GB ROM Android 13-Midnight Black',
        new: '₦ 192,000',
        price: 192000,
        old: '₦ 195,000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/4142352/1.jpg?0794',
    },

    {
        id: 32,
        name: 'Oraimo Palm Powerful Bass Ultra Portable Design IP67 Portable Wireless Speake',
        new: '₦ 14,800',
        price:14800,
        old: '₦ 19,200',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/4957321/1.jpg?0887',
    },

    {
        id: 33,
        name: 'Colmi P28 Plus 1.69 TFT Full-touch Screen Smart Watch',
        new: '₦ 28,640',
        price: 28640,
        old: '₦ 53,590',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/9609411/1.jpg?5659',
    },

    {
        id: 34,
        name: 'Oraimo Tempo-W2 IP67 Waterproof 24 Training Modes Smart Watch',
        new: '₦ 47,200',
        price: 47200,
        old: '₦ 61,400',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/046128/1.jpg?0748',
    },

    {
        id: 35,
        name: 'Wireless Bluetooth Sports Earphones With Mic For All Phone',
        new: '₦ 3,860',
        price: 3860,
        old: '₦ 5,980',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/3780241/1.jpg?0332',
    },

    {
        id: 36,
        name: 'Ace Elec Power Banks 20000 MAh Utra Slim Portable Fast Charger (ACE ELEC)',
        new: '₦ 9,300',
        price: 9300,
        old: '₦ 12,000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/3088932/1.jpg?3620',
    },

    {
        id: 37,
        name: 'itel 20000mAh Dual Output Fast Charging Power Bank',
        new: '₦ 14,707',
        price: 14707,
        old: '₦ 16,900',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/523389/1.jpg?7967',
    },

    {
        id: 38,
        name: 'Oraimo FreePods Lite 40-hour Playtime ENC True Wireless Earbuds',
        new: '₦ 192,000',
        price: 192000,
        old: '₦ 195,000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/4661052/1.jpg?9292',
    },

    {
        id: 39,
        name: 'Oraimo FreePods 4 Active Noise Cancellation Earbuds',
        new: '₦ 36,194',
        price: 36194,
        old: '₦ 48,000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/7741722/1.jpg?2511',
    },

    {
        id: 40,
        name: 'S20 Wireless Bluetooth Earphone Touch LED Stereo Audio Black',
        new: '₦ 6,206',
        price: 6206,
        old: '₦ 10,498',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/4967531/1.jpg?7647',
    },
]

export default phoneData