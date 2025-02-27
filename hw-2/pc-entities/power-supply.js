export default class PowerSupply {
    constructor(name, price, type, efficiency, wattage, modular, color) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.efficiency = efficiency;
        this.wattage = wattage;
        this.modular = modular;
        this.color = color;
    }

    static json = [
        {
            "name": "Corsair RM750e (2023)",
            "price": 78.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM850e (2023)",
            "price": 119,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM850x (2021)",
            "price": 134.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM1000e (2023)",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CX650M (2021)",
            "price": 69.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Corsair RM650 (2023)",
            "price": 89.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart",
            "price": 39.95,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair RM850",
            "price": 139.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "Corsair SF750",
            "price": 169.99,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master MWE Gold 850 - V2",
            "price": 95.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MAG A650BN",
            "price": 67.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM1000x (2021)",
            "price": 174.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Gigabyte UD750GM",
            "price": 84.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MAG A550BN",
            "price": 59.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Asus ROG THOR 1600T Gaming",
            "price": 631.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1600,
            "modular": "Full",
            "color": "Silver / Black"
        },
        {
            "name": "Thermaltake Smart",
            "price": 44.99,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GX2",
            "price": 64.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM750x (2021)",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair SF850L",
            "price": 128.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MAG A850GL PCIE5",
            "price": 99.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 (2024)",
            "price": 79.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MAG A750GL PCIE5",
            "price": 93.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone HELA",
            "price": 623.11,
            "type": "ATX",
            "efficiency": null,
            "wattage": 2050,
            "modular": "Full",
            "color": "Black / White"
        },
        {
            "name": "Apevia Galaxy",
            "price": 54.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Corsair HX1500i (2023)",
            "price": 359.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM750",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "Apevia Prestige",
            "price": 51.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair CX750M (2021)",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS PLUS 850 Gold",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 12 M",
            "price": 94.9,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair AX1600i",
            "price": 609.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Asus TUF Gaming B",
            "price": 50.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 12 M",
            "price": 109.9,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power 13",
            "price": 249.9,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair AX1200",
            "price": 799,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 12 M",
            "price": 129.9,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF A3 Snow",
            "price": 139.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Asus ROG Strix",
            "price": 162.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Corsair CV650",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 500 BR",
            "price": 59.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "NZXT C850 (2022)",
            "price": 114.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair SF1000L",
            "price": 159.96,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI A1000G PCIE5",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair HX1200 Platinum",
            "price": 429,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 850 GT",
            "price": 124.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CX (2023)",
            "price": 59.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart",
            "price": 54.99,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair CV550",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "MSI MPG A850G PCIE5",
            "price": 129,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart BM3",
            "price": 69.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1600 T2",
            "price": 799.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Lian Li SP850",
            "price": 134,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "NZXT C750 (2022)",
            "price": 94.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair HX1000i (2023)",
            "price": 234.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 (2024)",
            "price": 89.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Lian Li SP850",
            "price": 127.5,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RMe (2023)",
            "price": 169.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power Pro 13",
            "price": 399.9,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Gigabyte UD850GM",
            "price": 104.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Lian Li SP",
            "price": 128.01,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1000 GT",
            "price": 189.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Straight Power 12",
            "price": 169.9,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Gigabyte P750GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V850 SFX GOLD",
            "price": 129.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "EVGA SuperNOVA 750 GT",
            "price": 109.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME TX-1000",
            "price": 309.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS GX",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF A3 - TT Premium Edition",
            "price": 99.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF A3 Snow",
            "price": 99.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "MSI MAG A650GL",
            "price": 89.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart BM3",
            "price": 59.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Asus ROG STRIX G",
            "price": 163.08,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Asus ROG THOR P2 Gaming",
            "price": 309.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Silver / Black"
        },
        {
            "name": "Gigabyte UD1000GM",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "NZXT C1000 (2022)",
            "price": 154.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Asus TUF Gaming 1000G",
            "price": 148.31,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 500 W1",
            "price": 54.57,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair CX (2023)",
            "price": 69.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 600 GD",
            "price": 83.8,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE GOLD 750 V2 FULL MODULAR",
            "price": 144.79,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MEG Ai1300P PCIE5",
            "price": 309.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black / Copper"
        },
        {
            "name": "EVGA 600 BR",
            "price": 69.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Asus TUF Gaming 850G",
            "price": 203.89,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V850 SFX GOLD",
            "price": 229,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power 13",
            "price": 199.9,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Apevia CAPTAIN",
            "price": 31.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 10",
            "price": 131.21,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 10",
            "price": 111.72,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 650 GT",
            "price": 88,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Apevia Prestige",
            "price": 66.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Straight Power 12",
            "price": 179.9,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS GX",
            "price": 160.34,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF3 Snow",
            "price": 234.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "be quiet! Straight Power 12",
            "price": 139.9,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Logisys PS480D",
            "price": 16.98,
            "type": "ATX",
            "efficiency": null,
            "wattage": 480,
            "modular": false,
            "color": null
        },
        {
            "name": "MSI MPG A650GF",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 700 GD",
            "price": 89.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair CX (2023)",
            "price": 77.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "NZXT C1200",
            "price": 199.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 11",
            "price": 91.89,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM750 (2019)",
            "price": 224.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM1200x SHIFT",
            "price": 199.21,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full / Side",
            "color": "Black"
        },
        {
            "name": "Apevia Galaxy",
            "price": 69.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Silverstone SFX",
            "price": 112.53,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Gigabyte UD-GM PG5",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Asus ROG THOR P2 Gaming",
            "price": 301.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Silver / Black"
        },
        {
            "name": "EVGA SuperNOVA 650 G+",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 12 M",
            "price": 169.9,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MPG A750GF WHITE",
            "price": 252.77,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Thermaltake Toughpower GF A3 - TT Premium Edition",
            "price": 86.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Apevia Premier",
            "price": 59.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Corsair RM850x SHIFT",
            "price": 144.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full / Side",
            "color": "Black"
        },
        {
            "name": "Gigabyte P450B",
            "price": 54.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF3 TT Premium",
            "price": 149.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "CoolMax I-500",
            "price": 26.68,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Gigabyte P650G (US)",
            "price": 59.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 400 N1",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master V750 SFX GOLD",
            "price": 146.98,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Gigabyte P-B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Deepcool PQ850M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF A3 - TT Premium Edition",
            "price": 79.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 600 W1",
            "price": 64.02,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair RM1000x SHIFT",
            "price": 185.75,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full / Side",
            "color": "Black"
        },
        {
            "name": "GameMax GP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS Plus 650 Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA 700 BR",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 850 GM",
            "price": 163.9,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair AX1500i",
            "price": 749,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA GE",
            "price": 80.65,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM1000x",
            "price": 245,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic PRIME TX",
            "price": 499.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1600,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "be quiet! Pure Power 12 M",
            "price": 104.9,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! SFX L Power",
            "price": 130.53,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic FOCUS Plus 750 Gold",
            "price": 135,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Asus Prime AP-750G",
            "price": 109.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "be quiet! Dark Power Pro 13",
            "price": 389.9,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS Plus Platinum",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Asus ROG THOR 1200P",
            "price": 349.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MPG A750GF",
            "price": 95.34,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V SFX Platinum",
            "price": 248.99,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 1100,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex III Gold",
            "price": 109.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Vetroo GV1000",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "ARESGAME AGV",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Gigabyte P550B",
            "price": 69.19,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF3 TT Premium",
            "price": 259.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone SX500-G",
            "price": 116.47,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "PowerSpec PS 750BSM",
            "price": 67.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Asus ROG THOR P2 Gaming",
            "price": 181,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "EVGA GE",
            "price": 99.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair CV750",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Deepcool PK650D",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Gigabyte P850GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1000 P6",
            "price": 219.88,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "ADATA XPG CORE Reactor 850",
            "price": 107.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 10",
            "price": 111.19,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF A3 - TT Premium Edition",
            "price": 127.08,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic VERTEX GX-1200",
            "price": 244.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "SeaSonic FOCUS GX",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PF500 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master V650 SFX GOLD",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 650 B5",
            "price": 84.28,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 PE",
            "price": 109.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair SF600",
            "price": 225,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart BX1",
            "price": 83.79,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake TR2",
            "price": 59.64,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair RM650x (2021)",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 750 G2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sparkle FSP350-60GNV",
            "price": 69.99,
            "type": "SFX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Deepcool PX1000G",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Montech TITAN GOLD 850W",
            "price": 99.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS GX-1000 ATX 3.0",
            "price": 199.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Asus ROG LOKI",
            "price": null,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Silver / Black"
        },
        {
            "name": "Deepcool PQ1000M",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PX850G",
            "price": 104.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS GX-850 ATX 3.0",
            "price": 158.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "PowerSpec PS 650BF",
            "price": 55.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 10",
            "price": 143.69,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart BM3",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "MSI MEG Ai1000P PCIE5",
            "price": 251,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Copper"
        },
        {
            "name": "SeaSonic FOCUS Plus Platinum",
            "price": 175.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Montech CENTURY MINI",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex Platinum SE",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM750x (2018)",
            "price": 169.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic S12III",
            "price": 78.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair CX550 (2017)",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair RM850x (2018)",
            "price": 180.92,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MPG A850GF",
            "price": 132.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone SFX",
            "price": 217.98,
            "type": "SFX",
            "efficiency": "titanium",
            "wattage": 800,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA 750 GQ",
            "price": 109.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 2000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Super Flower Leadex Titanium",
            "price": 349.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF3 TT Premium",
            "price": 99.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 850 G3",
            "price": 299.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! System Power 10",
            "price": 157.23,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax REVOLUTION D.F. 2",
            "price": 122.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 650 BQ",
            "price": 83.89,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 1300 GT",
            "price": 237.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 750 GM",
            "price": 179.31,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 9 500 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Asus TUF Gaming 750G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF3 TT Premium",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 PE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "GameMax GX Pro Rampage",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Cooler Master V550 SFX GOLD",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE Bronze V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "ARESGAME AGV",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "GameMax GX Pro Rampage",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Silverstone DA850 Gold",
            "price": 179.12,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / White"
        },
        {
            "name": "Thermaltake Toughpower GF A3 - TT Premium Edition",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro PTM X PRO,Gen5",
            "price": 155.26,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MPG A1000G",
            "price": 179.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Straight Power 12",
            "price": 129.9,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex III Gold",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair HX1000 Platinum",
            "price": 390,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master MWE Bronze V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "KOLINK Classic Power",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Thermaltake Smart BX1 650",
            "price": 59.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Asus ROG LOKI",
            "price": 219.99,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Cooler Master V SFX Gold ATX 3.0",
            "price": 148.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair AX1200i",
            "price": 657.73,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic S12III",
            "price": 63.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM650x (2018)",
            "price": 194.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "SeaSonic PRIME PX-1300",
            "price": 499.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart BM2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "be quiet! SFX L Power",
            "price": 175.43,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Asus ROG LOKI",
            "price": 229.99,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "White / Silver"
        },
        {
            "name": "EVGA SuperNOVA 1000 G+",
            "price": 288.01,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone FX600 Platinum",
            "price": 179.99,
            "type": "Flex ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Asus ROG-STRIX-850G",
            "price": 155.07,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro GE",
            "price": 74.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Asus ROG Strix",
            "price": 134.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "ADATA XPG CORE Reactor 750",
            "price": 97.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! SFX Power 3 450",
            "price": 99.49,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 850 G5",
            "price": 134.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Green"
        },
        {
            "name": "Deepcool PM750D",
            "price": 88.25,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "ADATA XPG PYLON",
            "price": 150,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 450 BR",
            "price": 99.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Asus ROG Strix Aura Edition",
            "price": 208.67,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS Plus Gold",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "ADATA XPG CORE Reactor 650",
            "price": 87.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Montech TITAN GOLD 1000W",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 550 BP",
            "price": 65.84,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 650 GQ",
            "price": 157.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic PRIME Ultra Titanium",
            "price": 309.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "GameMax RGB Rainbow",
            "price": 109.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair SF600",
            "price": 195,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA 500 BQ",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 12 M",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 750 B5",
            "price": 99.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "CoolMax ZX-500",
            "price": 39.99,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Segotep GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 550 G3",
            "price": 138.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair HX1500i (2022)",
            "price": 399.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Asus ROG THOR 850P",
            "price": 349.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "SeaSonic G12 GC",
            "price": 107.79,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black / Blue"
        },
        {
            "name": "Corsair RM750x SHIFT",
            "price": 109.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full / Side",
            "color": "Black"
        },
        {
            "name": "Corsair RM850",
            "price": 197.94,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PM850D",
            "price": 87.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Asus ROG LOKI",
            "price": 189.99,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Aerocool LUX RGB 750M (230V EU)",
            "price": 86.37,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 9 CM",
            "price": 106.69,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Corsair CX650M",
            "price": 199.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Deepcool PK750D",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS GX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1000G XC",
            "price": 149.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 650 G5",
            "price": 113.7,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Green"
        },
        {
            "name": "Asus ROG THOR P2 Gaming EVA Edition",
            "price": 504.44,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Thermaltake Toughpower GF1 PE",
            "price": 95,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Raidmax XT",
            "price": 30.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 750 G3",
            "price": 299.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master M2000",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 2000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Fractal Design Ion Gold",
            "price": 121.13,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GX1",
            "price": 98.14,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Silverstone SX1000-LPT",
            "price": 232.11,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic G12 GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black / Blue"
        },
        {
            "name": "Thermaltake Toughpower GX3",
            "price": 89.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 750 N1",
            "price": 91.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA 650 N1",
            "price": 82.85,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair SF450",
            "price": 199.96,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 450,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 600 BQ",
            "price": 175.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Asus ROG Strix Aura Edition",
            "price": 239.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master Elite 400 V3",
            "price": 63.49,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Straight Power 11 750W",
            "price": 260,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Apevia Galaxy",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Deepcool PK600D",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair CX450M (2015)",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic FOCUS PX",
            "price": 175.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM850x",
            "price": 180.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Deepcool PF700 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 11 600",
            "price": 124.19,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 850 BQ",
            "price": 119.21,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Silverstone SFX",
            "price": 95.38,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Silverstone HELA 1200R",
            "price": 253.05,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 850 GQ",
            "price": 191.23,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 1000 G5",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Green"
        },
        {
            "name": "SeaSonic PRIME TX",
            "price": 439.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Corsair CX550M",
            "price": 191,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! Straight Power 12",
            "price": 239.9,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power 13",
            "price": 209.9,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Enermax REVOLUTION D.F. 2",
            "price": 113.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master G700",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic VERTEX GX-1000",
            "price": 215.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "EVGA SuperNOVA 1000 G7",
            "price": 239.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Blue"
        },
        {
            "name": "SeaSonic FOCUS GX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE Bronze V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Silverstone FX350-G",
            "price": 94.09,
            "type": "Flex ATX",
            "efficiency": "gold",
            "wattage": 350,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "NZXT C750 (2023)",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart BM2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Corsair HX1000i",
            "price": 429,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair CV450",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 11",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair HX850 Platinum",
            "price": 268,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone DA650 Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / White"
        },
        {
            "name": "SeaSonic VERTEX PX-1200",
            "price": 329.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "GameMax RGB Rainbow",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 850 B5",
            "price": 112.44,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart RGB 230V",
            "price": 140,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Raidmax RX-530SS",
            "price": 44.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 530,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Deepcool DQ750-M-V2L",
            "price": 174.57,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Green"
        },
        {
            "name": "Silverstone SFX",
            "price": 73.94,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair VS350",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 350,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair CX600",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair CX650 (2017)",
            "price": 143.97,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA 500 GD",
            "price": 104.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Straight Power 11 850W",
            "price": 260.02,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Asus TUF Gaming",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS",
            "price": 135.61,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Apevia Signature",
            "price": 69.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1050,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic VERTEX PX-1000",
            "price": 279.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Cooler Master XG850 Plus",
            "price": 132.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PQ750M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS SGX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 650 G3",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic FOCUS GX-750 ATX 3.0",
            "price": 139.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1600 G2",
            "price": 549,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair RM650",
            "price": 204.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Montech CENTURY G5",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Extreme 850R Platinum",
            "price": 224.37,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 650 GM",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic B12 BC",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair HX750 Platinum",
            "price": 339.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 850G XC",
            "price": 139.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Dagger Pro",
            "price": 136.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM750x White (2018)",
            "price": 225,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "Corsair RM650 (2019)",
            "price": 210.1,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME TX-850",
            "price": 487.73,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PK700D",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM750",
            "price": 195.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic G12 GC",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black / Blue"
        },
        {
            "name": "Cooler Master MWE Bronze V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Silverstone DA750 Gold",
            "price": 152.08,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / White"
        },
        {
            "name": "be quiet! System Power 9 CM",
            "price": 155.74,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Corsair TX550M Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master V650 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "be quiet! Pure Power 11",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power Pro 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Phanteks AMP v2",
            "price": 167.3,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PF400 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair TX650M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower SFX",
            "price": 169.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Phanteks Revolt SFX",
            "price": 199.99,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "NZXT C650 (2022)",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1000 P2",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "PowerSpec PS 650BSM",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Corsair AX1000",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Corsair VS550 (2018)",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex Platinum SE",
            "price": 149.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Cooler Master MasterWatt 550",
            "price": 90,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 850 P6",
            "price": 208.91,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Phanteks AMP v2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Raidmax Cobra",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 750 G5",
            "price": 152.91,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Green"
        },
        {
            "name": "Corsair RM750x",
            "price": 174.94,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GF3 TT Premium",
            "price": 179.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower TF1 - TT Premium",
            "price": 449.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PK550D",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF3 TT Premium",
            "price": 184,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1350,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "ADATA XPG PYLON",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 850 G2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 650 G2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair RM850x (2018)",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "NZXT C750",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 550 G2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair CX750F",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "be quiet! Dark Power Pro 12",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CX500M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master MWE Gold 650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1000 G6",
            "price": 193.54,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 430,
            "modular": false,
            "color": "Black / White"
        },
        {
            "name": "Apevia Spirit",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME Ultra Titanium",
            "price": 495,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "NZXT C650",
            "price": 89.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 650 P5",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Teal"
        },
        {
            "name": "Corsair CX750M V2 (2017 Edition)",
            "price": 209,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black / White"
        },
        {
            "name": "Deepcool PK500D",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SHARKOON WPM Gold Zero 550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Raidmax RX-730SS",
            "price": 54.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 730,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Deepcool PF600 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Deepcool PF650 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Segotep GP",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS SGX (2021)",
            "price": 169.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair HX1200i",
            "price": 599,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair CX600M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "ARESGAME AGV",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 9 700 CM",
            "price": 160.8,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE Bronze",
            "price": 88.49,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 9",
            "price": 114.19,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Gigabyte UD1000GM PG5 (rev. 2.0)",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 850 G6",
            "price": 176.08,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower SFX",
            "price": 149.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Apevia Prestige",
            "price": 74.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 11",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Montech CENTURY G5",
            "price": 94,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GAMDIAS KRATOS E1",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower iRGB PLUS TT Premium Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM550x (2018)",
            "price": 216,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Corsair CX750 (2017)",
            "price": 94.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MWE Bronze V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Fractal Design Ion Gold",
            "price": 156.79,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA GE",
            "price": 86.47,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM850x White",
            "price": 379.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "Cooler Master MWE Gold V2 ATX3.0",
            "price": 179.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1250,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic B12 BC",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Gigabyte UD850GM PG5 (rev. 2.0)",
            "price": 112.68,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Aerocool Integrator",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA GE",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair CXM",
            "price": 149.94,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master MWE White V2 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Super Flower LEADEX VII XG",
            "price": 174.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower LEADEX VII XG",
            "price": 249.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V SFX Platinum",
            "price": null,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower SFX",
            "price": 139.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Asus Prime AP-850G",
            "price": 138.46,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "Silverstone SX750-PT",
            "price": null,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Straight Power 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Strider Platinum S",
            "price": 195.95,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic VERTEX GX-850",
            "price": 190,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Xilence XP500R6",
            "price": 88.07,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Cooler Master V850 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Corsair RM850 (2019)",
            "price": 188.6,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 Snow - TT Premium",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "SeaSonic FOCUS",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CX650F",
            "price": 199.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex III Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V550 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "GameMax RGB Rainbow",
            "price": 118.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair TX750M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Super Flower LEADEX VII XG",
            "price": 144.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 750 BQ",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group FSP400-60FGGBA",
            "price": 103.72,
            "type": "Flex ATX",
            "efficiency": "gold",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Gigabyte UD1300GM PG5",
            "price": 183,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 600 GQ",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Antec CSK",
            "price": 107.1,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black / Yellow"
        },
        {
            "name": "Asus ROG Strix",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "EVGA 650BP",
            "price": 74.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 750 BP",
            "price": 79.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1600 G+",
            "price": 317.18,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "PowerSpec GFM",
            "price": 94.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro Ti PRO,Gen 5",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec Signature",
            "price": 266.14,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "EVGA SuperNOVA 750 GA",
            "price": 179.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair TX650M Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic PRIME PX-1600 ATX 3.0",
            "price": 509.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1600,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Fractal Design Ion Gold",
            "price": 173.59,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 650 GA",
            "price": 136.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE GOLD 650 V2 FULL MODULAR",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA N1",
            "price": 59.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex V Pro",
            "price": 219.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Corsair CX750",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic FOCUS Gold",
            "price": 105.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Deepcool PX850G WH",
            "price": 150.65,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Xilence XP600R6",
            "price": 87,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "EVGA SuperNOVA 750 G6",
            "price": 138.21,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CX750F",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill Capstone",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master G800",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "CoolMax V-400",
            "price": 37.15,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Montech TITAN GOLD 1200W",
            "price": 149.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Fanless",
            "price": 298.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 700,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair VS650 (2018)",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair CX500",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic FOCUS Plus Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Zalman ZM-600-GT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 1000 P3",
            "price": 224,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "SeaSonic G12 GM",
            "price": 145.79,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black / Blue"
        },
        {
            "name": "Super Flower Leadex III ARGB",
            "price": 169.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Asus TUF Gaming B",
            "price": 86.35,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro G Pro",
            "price": 179.51,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Gigabyte AORUS P1200W",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic B12 BC",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair HX1000i (2022)",
            "price": 275,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone SST-TX300",
            "price": 74.98,
            "type": "TFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair Vengeance 750M",
            "price": 94.99,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic PRIME TX-1600 ATX 3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1600,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Asus ROG Strix Aura Edition",
            "price": 178.5,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "ADATA XPG FUSION 1600",
            "price": 569.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1600,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "EVGA SuperNOVA 750 P2",
            "price": 236.78,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair VS450",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic G12 GM",
            "price": 135.61,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black / Blue"
        },
        {
            "name": "ADATA XPG PYLON",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Thermaltake TP-750M",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Silverstone VA550-B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 700 BQ",
            "price": 81.87,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "GameMax RGB Rainbow",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 750 G7",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Blue"
        },
        {
            "name": "Cooler Master Elite V3",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec NE850G M ATX3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic G12 GC",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": false,
            "color": "Black / Blue"
        },
        {
            "name": "Logisys PS480D2",
            "price": 16.98,
            "type": "ATX",
            "efficiency": null,
            "wattage": 480,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 1000 G3",
            "price": 395.76,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair RM850e (2022)",
            "price": 188.02,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! SFX Power 3 300",
            "price": 71.29,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Silverstone SX700-PT",
            "price": 157.47,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 700,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS SPX (2021)",
            "price": 197.98,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair HX850i",
            "price": 396,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Deepcool PX1200G",
            "price": 169.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "G.Skill MB750G",
            "price": 84.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone TX500-G",
            "price": 146.1,
            "type": "TFX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM1000e (2022)",
            "price": 242.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart Pro RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GF A3 - TT Premium Edition",
            "price": 156.49,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 450 GM",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V750 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Corsair RM750e (2022)",
            "price": 160,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Litepower",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair TX750M Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "GAMDIAS KRATOS P1 G",
            "price": 84.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "iTek GF EVO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake TR2 S",
            "price": 90,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cougar POLAR",
            "price": 209.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "SeaSonic B12 BC",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro PTM X PRO,Gen5",
            "price": 184.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1600 P2",
            "price": 637.8,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 11 FM 650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master MasterWatt",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Azza ARGB",
            "price": 62.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Athena Power AP-MTFX30",
            "price": 36.99,
            "type": "TFX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "KOLINK Regulator",
            "price": 109.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 850 GA",
            "price": 272.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Asus TUF Gaming 650B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "PowerSpec PSX 850GFM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE Gold V2 ATX3.0",
            "price": 169.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cougar VTE",
            "price": 56.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic CORE GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE White V2 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Razer Katana Chroma",
            "price": 389.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair SF450",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Full",
            "color": null
        },
        {
            "name": "ARESGAME AGK",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "Vetroo GV1000",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic Prime Fanless PX-500",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Gigabyte AORUS P GM",
            "price": 213.24,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Fractal Design Ion+ 2 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 860,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master G600",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master MasterWatt",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex III Gold",
            "price": 114.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart BM2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower PF3-L",
            "price": 220.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CX450 (2017)",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax REVOLUTION D.F. 2",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CS650M",
            "price": 149,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Smart RGB 230V",
            "price": 71.91,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair HX850",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group HV PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "PowerSpec PS 650GSM",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex III ARGB",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "EVGA SuperNOVA 1000 T2",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower PF3",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SHARKOON SilentStorm Cool Zero 750",
            "price": 167.49,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone HELA 850R",
            "price": 222.31,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "SeaSonic M12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 620,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enhance ENP-7660",
            "price": null,
            "type": "Flex ATX",
            "efficiency": "platinum",
            "wattage": 600,
            "modular": false,
            "color": "Silver"
        },
        {
            "name": "SeaSonic PRIME TX-1300 ATX 3.0",
            "price": 516.98,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "SHARKOON SilentStorm",
            "price": 149.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V750 Gold V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GameMax GX Pro Rampage",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone SFX",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic FOCUS",
            "price": 169.98,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Essential",
            "price": 78.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "EVGA SuperNOVA 1200 P3",
            "price": 449.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Cooler Master V850 Gold i",
            "price": 156.03,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Gold"
        },
        {
            "name": "Silverstone SX-G",
            "price": 142.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart BX1 550",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SHARKOON SilentStorm Cool Zero 650",
            "price": 146.38,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex Titanium",
            "price": 239.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GameMax RGB",
            "price": 179.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Straight Power 11 550W",
            "price": 109.9,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 550 GM",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone SX650-G",
            "price": 137.86,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Deepcool PF550 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair CX430",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic FOCUS SGX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Mars Gaming MPII650",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Corsair RM550x (2021)",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic G12 GC",
            "price": 94.49,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black / Blue"
        },
        {
            "name": "Corsair TX850M Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Gigabyte P1000GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower Grand RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone SX1000R-PL",
            "price": 287.41,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / White"
        },
        {
            "name": "GameMax GM",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Inter-Tech Argus APS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 720,
            "modular": false,
            "color": "Black / Orange"
        },
        {
            "name": "Segotep GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM750i",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic VERTEX PX-850",
            "price": 219.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "EVGA SuperNOVA 1300 G+",
            "price": 282.18,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V750 SFX GOLD",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "be quiet! Straight Power 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1200 P2",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Smart RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand RGB",
            "price": 112.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA 550 B5",
            "price": 151.75,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 850 G7",
            "price": 179.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Blue"
        },
        {
            "name": "Antec NE1000G M White ATX 3.0",
            "price": 207.31,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "FSP Group Hydro G PRO ATX3.0(PCIe5.0)",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1600 P+",
            "price": 509.06,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Asus ROG Strix",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "EVGA SuperNOVA 1300 G2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Aerocool Integrator MOD XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black / Red"
        },
        {
            "name": "Corsair CX550M (2021)",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic Prime Fanless PX-450",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 450,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master Elite V3",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Litepower",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME TX-750",
            "price": 305,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Gigabyte B700H",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "NZXT E850",
            "price": 149.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone DA550 Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black / White"
        },
        {
            "name": "Corsair CX550F",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec CSK",
            "price": 87.08,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "GAMDIAS KRATOS M1 B",
            "price": 79.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower Grand RGB",
            "price": 144.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake TR2 S",
            "price": 82.19,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 650 G1",
            "price": 223.49,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Deepcool PF750 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "ENDORFY Supremo FM5",
            "price": 266,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro G Pro",
            "price": 120.62,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME 1300 Gold",
            "price": 281.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair HX750",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair RM650",
            "price": 222.2,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Super Flower Leadex Platinum",
            "price": 124.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V750 Gold i",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Gold"
        },
        {
            "name": "Apex AL-8250SFX",
            "price": 72.02,
            "type": "SFX",
            "efficiency": null,
            "wattage": 250,
            "modular": false,
            "color": null
        },
        {
            "name": "Deepcool PM650D",
            "price": 79.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair CX650F",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "In Win IP-S200DF1-0",
            "price": 52.02,
            "type": "TFX",
            "efficiency": null,
            "wattage": 200,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME 600 Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "NZXT C (2019)",
            "price": 104.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 750 G+",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower SFX 600W Gold",
            "price": 134.59,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PF450 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair AX850",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "SeaSonic G12 GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black / Blue"
        },
        {
            "name": "EVGA SuperNOVA 650 G6",
            "price": 116.2,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Straight Power 11 1000W",
            "price": 252,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "MSI MAG A600DN",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair AX860",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 860,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic PRIME Platinum",
            "price": 290,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Asus ROG Strix Aura Edition",
            "price": 164.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GameMax GT",
            "price": null,
            "type": "TFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Silver"
        },
        {
            "name": "be quiet! Dark Power Pro 12",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "KOLINK Classic Power",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Silverstone DA1650 Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1650,
            "modular": "Full",
            "color": "Black / White"
        },
        {
            "name": "Corsair VS650",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Phanteks Revolt X",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "EVGA 600 B1",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME PX",
            "price": 377.5,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Gigabyte UD1000GM PG5",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "ENDORFY Vero L5",
            "price": 175,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM750x White",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "EVGA 1000 GQ",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group Dagger Pro",
            "price": 179.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Gold"
        },
        {
            "name": "Fractal Design Ion+ 2 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 760,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone FX500-G",
            "price": null,
            "type": "Flex ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 500 B1",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 550 GA",
            "price": 174.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair HX750i",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master MWE Gold 750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "ADATA XPG Core Reactor II",
            "price": 114.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "ENDORFY Vero L5",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Straight Power 11",
            "price": 208.48,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Strider Titanium",
            "price": 359.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black / Blue"
        },
        {
            "name": "Chieftec GPS-700A8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black / White"
        },
        {
            "name": "Gigabyte AORUS P GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Corsair RM1000",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GX1",
            "price": 87.23,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 850 P2",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Gigabyte UD-GM PG5",
            "price": 164.89,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone DA750R-GMA",
            "price": 220.76,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Fractal Design Ion+ 2 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 660,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone TX700-G",
            "price": 181.97,
            "type": "TFX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS Plus 550 Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master XG750 Plus",
            "price": 141.47,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair TX550M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Thermalright TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 850 G+",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Fractal Design Ion SFX 650G",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Aerocool AER-P7-P650W",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "MSI MPG A750G PCIE5",
            "price": 125.35,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CS750M",
            "price": 216.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec NeoECO Gold",
            "price": 143.63,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax CYBERBRON",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black / Silver"
        },
        {
            "name": "Thermaltake Toughpower GF1 ARGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Lian Li PE",
            "price": null,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Xilence XP400R6",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "be quiet! Straight Power 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 450 BT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair AX760",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 760,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Chieftec GPS-600A8",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA NEX650G Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic S12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "MSI MAG A500DN",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 550 GS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Phanteks Revolt SFX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Strider Platinum S",
            "price": 269.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill HIVE S",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Smart Pro RGB",
            "price": 199.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master V650 Gold V2",
            "price": 258.33,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Montech CENTURY",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Enermax MAXREVO SLI",
            "price": 149.94,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1350,
            "modular": "Full",
            "color": "Black / Gold"
        },
        {
            "name": "Deepcool PK450D",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair TX650",
            "price": 255,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Straight Power 11 650W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone SFX",
            "price": 169.99,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Gigabyte PW400",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Razer Katana Chroma",
            "price": 209.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CX550F",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "EVGA SuperNOVA 850 P5",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Teal"
        },
        {
            "name": "SeaSonic FOCUS",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V SFX Gold ATX 3.0",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "EVGA SuperNOVA 1300 P+",
            "price": 494.93,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair GS800",
            "price": 239,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 1000 G2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "ADATA XPG KYBER",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master G500",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "GameMax GS",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Silver"
        },
        {
            "name": "be quiet! System Power 9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair VS600 (2020)",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cougar GEX",
            "price": 111.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic M12II EVO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 520,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Fractal Design Ion+ 560P",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 560,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "KOLINK Classic Power",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "GAMDIAS KRATOS E1",
            "price": 121,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax Revolution D.F. X",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Fractal Design Ion SFX 500G",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Raidmax XT",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME",
            "price": 195.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "ADATA XPG Core Reactor II",
            "price": 147.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 650 P6",
            "price": 139.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Corsair VS500 (2020)",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Phanteks Revolt X",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "EVGA 430 W1",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "BitFenix BFG GOLD ATX3.0",
            "price": 89.9,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermalright TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Essential",
            "price": 61.74,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "NZXT C (2019)",
            "price": 149.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 Snow - TT Premium",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "be quiet! Dark Power 12",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME PX",
            "price": 182.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Enermax Revolution D.F.",
            "price": 94.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "SeaSonic Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 400,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group HYPER K PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "SeaSonic CORE GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA G FTW",
            "price": 184.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "LC-Power OFFICE SERIES",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master GX III GOLD",
            "price": 136,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Purple"
        },
        {
            "name": "Thermaltake Toughpower SFX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "NZXT C (2019)",
            "price": 109.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "NOX URANO TX",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair RM650x",
            "price": 203.4,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower PF3",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart BX1 RGB 750",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower PF3",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake TR2",
            "price": 62.4,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "NZXT C550",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Corsair Vengeance 650M",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 11 FM 750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Ultra Platinum 1000",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power 12",
            "price": 289.14,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair TX750",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MWE Bronze 650",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro PTM PRO,Gen5",
            "price": 264.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GameMax GX Pro Rampage",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1250,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Antec High Current Gamer Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec NE1000G M ATX3.0",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V650",
            "price": 138.65,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake TPD-0550M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "ENDORFY Supremo FM5",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic S12II",
            "price": 247.77,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 520,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Straight Power 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec CSK",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "Thermaltake Toughpower GX1 RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair HX850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic FOCUS Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair RM1000i",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "GAMDIAS KRATOS M1 B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex Titanium",
            "price": 319.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermalright TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Corsair HX750",
            "price": 273.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "ARESGAME AGT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "PC Power & Cooling PM0600",
            "price": 105.59,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": "Black / Red"
        },
        {
            "name": "Corsair RM550x",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic FOCUS SGX (2021)",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic M12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 620,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic S12III",
            "price": 129,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Deepcool PX1000G WH",
            "price": 160.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "be quiet! Pure Power 11 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME SNOWSILENT",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "NZXT HALE82 V2 550W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "In Win P85FII",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "SeaSonic SSP-300SUG",
            "price": 99.99,
            "type": "Flex ATX",
            "efficiency": "gold",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 750 P5",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Teal"
        },
        {
            "name": "ADATA XPG Core Reactor II",
            "price": 107.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Dagger Pro",
            "price": 149.99,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Gold"
        },
        {
            "name": "Thermaltake Toughpower Grand RGB Platinum",
            "price": 269.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 11",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Segotep GP700G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Deepcool DA500",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black / Gold"
        },
        {
            "name": "Thermaltake Litepower",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "NOX Hummer",
            "price": 83.34,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic G",
            "price": 138.44,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair CX850M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "PowerSpec PS 550BF",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE GOLD 650 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Azza PSAZ-650B14",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME PX",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "EVGA SuperNOVA 650 P2",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "KOLINK Core RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 650 GS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Gigabyte GP-G750H",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic VERTEX GX-750",
            "price": 169.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Silverstone Essential",
            "price": 95.85,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black / Blue"
        },
        {
            "name": "Antec NeoECO Gold",
            "price": 152.16,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master MWE Bronze V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill HIVE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master V850 Gold V2",
            "price": 209.09,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "iTek GF750 EVO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "Deepcool DQ-M-V2L",
            "price": 152.88,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Green"
        },
        {
            "name": "EVGA SuperNOVA 850 T2",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Deepcool PF350 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 350,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM850i",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Fractal Design Ion Gold",
            "price": 159.29,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group FSP300-60LG",
            "price": 148.02,
            "type": "Mini ITX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic FOCUS Gold",
            "price": 139.34,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "NOX Hummer GD",
            "price": 105.7,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower SFX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Strider Platinum",
            "price": 138.65,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider Titanium",
            "price": 336.99,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1100,
            "modular": "Full",
            "color": "Black / Blue"
        },
        {
            "name": "SeaSonic FOCUS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Antec NE1300G M ATX3.0",
            "price": 197,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CX430M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 430,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake TR2 S 550W",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro G PRO ATX3.0(PCIe5.0)",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master V SFX Gold ATX 3.0",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Cooler Master MWE Bronze V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Chieftec ATMOS",
            "price": 159.59,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CS550M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax Revolution D.F.",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cougar VTX",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Logisys PS550E12BK",
            "price": 39.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro PTM PRO",
            "price": 160.62,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master XG650 Plus",
            "price": 130.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 600 BA",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME",
            "price": 259.29,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Tacens Radix VII AG",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA NEX750B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex III ARGB",
            "price": 169.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Thermalright TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Asus ROG-STRIX-850G-GUNDAM-EDITION",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Antec VP PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair RM650i",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA 460 BP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 460,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec NeoECO Gold ZEN",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black / Gold"
        },
        {
            "name": "FSP Group Hydro PTM X PRO,Gen5",
            "price": 259.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone DA850R-GMA",
            "price": 242.09,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair Vengeance 650M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair RM850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic PRIME PX",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1600,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "EVGA 450 B3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair VS450",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider Platinum",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower PF3-L",
            "price": 207,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GAMDIAS KRATOS M1 B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE White V2 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS",
            "price": 105.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Fractal Design Ion+ 2 Platinum",
            "price": 191.19,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 560,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 ARGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master V750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "BitFenix Formula Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "FSP Group HEXA+",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex Platinum SE",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "LC-Power LC6 V2.31",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Gray"
        },
        {
            "name": "Silverstone TX300",
            "price": 81.51,
            "type": "TFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Straight Power 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 11 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Cooler Master V1000",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master MWE 500",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Gigabyte UD-GM PG5",
            "price": 112.68,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group Hydro GE",
            "price": 94.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master MWE Gold 1250 - V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1250,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Apevia ATX-CB700W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master V700",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair HX1050",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair AX860i",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 860,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 750 B2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Xilence XP1050MR9",
            "price": 215.5,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "SHARKOON SilentStorm Cool Zero 850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 650 G7",
            "price": 159.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Blue"
        },
        {
            "name": "Corsair AX850",
            "price": 319.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "ENDORFY Vero L5",
            "price": 168,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SHARKOON SilentStorm Icewind Black",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Phanteks AMP",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 ARGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair TX850",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Azza PSAZ-750PT14",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair RM450",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone NJ450-SXL",
            "price": null,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 450,
            "modular": "Full",
            "color": "Black / Blue"
        },
        {
            "name": "ARESGAME AGS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black / Red"
        },
        {
            "name": "Super Flower Leadex V Platinum Pro",
            "price": 199.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Azza PSAZ-550W",
            "price": 50.59,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "LC-Power LC6 V2.31",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White / Gray"
        },
        {
            "name": "Apevia Spirit",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master 600W MasterWatt Lite 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "G.Skill PS850G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V SFX Gold ATX 3.0",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Enermax Revolution D.F. X",
            "price": 144.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower PF3-L",
            "price": 166.86,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF2 ARGB",
            "price": 142.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone DA850R-GMA",
            "price": 257.02,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "be quiet! Pure Power 11 FM 850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Chieftec ATMOS",
            "price": 167.69,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower PF1 - TT Premium Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro G Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair VS500",
            "price": 234.54,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MWE Gold 1050 - V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair TX850M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "ADATA XPG CYBERCORE",
            "price": 189.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Deepcool PX1000P",
            "price": 239.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "FSP Group Hydro PTM PRO",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex Platinum",
            "price": 299.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart SE",
            "price": 177,
            "type": "ATX",
            "efficiency": null,
            "wattage": 630,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Segotep GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Corsair RM550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "ENDORFY Supremo FM5",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro G Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec High Current Gamer Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE Bronze 550",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power L8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower PF1 - TT Premium Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "KOLINK Regulator",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair HX650",
            "price": 316.95,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair TX950",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 950,
            "modular": false,
            "color": null
        },
        {
            "name": "Mars Gaming MP700",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle FSP300-60ATV",
            "price": 59.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone NJ700",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 700,
            "modular": "Full",
            "color": "Silver"
        },
        {
            "name": "Corsair HX1000",
            "price": 479.99,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! Dark Power 12",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Zalman ZM500-RS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Zalman ZM600-ST",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermalright TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cougar GEX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Apex SL-275TFX",
            "price": 45.95,
            "type": "TFX",
            "efficiency": null,
            "wattage": 275,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Raider 550",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA NEX750G Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax Revolution D.F. X",
            "price": 144.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "LC-Power LC6650 V2.3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "CoolMax V-500",
            "price": 33.19,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "NOX Hummer X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GAMDIAS KRATOS P1 G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SHARKOON SilentStorm Icewind Black",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Corsair CX450M (2021)",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic VERTEX PX-750",
            "price": 197.46,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Apevia Prestige",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME PX",
            "price": 301.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Antec VP PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax MAXREVO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1800,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic M12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 520,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec EARTHWATTS GOLD PRO 750",
            "price": 149.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SilentiumPC Vero L2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Silverstone DA1000R",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro PTM PRO",
            "price": 179.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Ultra Platinum 750",
            "price": 179.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake TOUGHPOWER PF1 ARGB",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone Essential",
            "price": 94.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "Silverstone Strider",
            "price": 99.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Straight Power 11 450W",
            "price": 259,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! System Power 9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Athena Power AP-MFATX40",
            "price": null,
            "type": "Mini ITX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MasterWatt Lite 500W Full Range",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MWE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SilentiumPC Vero L2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "NZXT E500",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 500 BA",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE GOLD 550 V2 FULL MODULAR",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Phanteks Revolt SFX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PQ650M",
            "price": 126.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group HYPER K PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "Cooler Master V850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Fractal Design Ion+ 860P",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 860,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair VS550",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Deepcool DQ650-M-V2L",
            "price": 192,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V1200",
            "price": 306.89,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "GameMax GP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Phanteks AMP",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "GameMax GM",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Zalman TX",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "ADATA XPG PYLON",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Fractal Design Ion+ 660P",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 660,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone DA750R-GMA",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Lian Li SP750",
            "price": 122.42,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Cooler Master MWE White V2 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Silverstone Strider",
            "price": 424.24,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1500,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA 450 W3",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "FSP Group HYPER K PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "Antec EARTHWATTS GOLD PRO 650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "ADATA XPG Core Reactor II",
            "price": 155.67,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex V Pro",
            "price": 249.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "SeaSonic CORE GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "PC Power & Cooling Silencer",
            "price": 315.5,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 380,
            "modular": false,
            "color": null
        },
        {
            "name": "Gigabyte GreenMax Plus",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar BXM750",
            "price": 94.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Orange / Black"
        },
        {
            "name": "Super Flower Golden Green HX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic 1000FX WHITE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Silverstone Strider Platinum",
            "price": 139.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Xilence Performance A+ III",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Antec NE850G M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "SeaSonic 750FX WHITE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Silverstone SX600-G",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 10",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Smart RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Gigabyte PB500",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX TS",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master G650M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair TX750M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Silverstone HELA R",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Xilence XP550R9",
            "price": 134,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Thermaltake Smart Pro RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "NZXT HALE90 V2 1200W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec High Current Gamer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 900,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax Platimax D.F.",
            "price": 145.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec Signature Platinum",
            "price": 275.2,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Ultra Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master 700W MasterWatt Lite 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MWE GOLD 750 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master G750M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Legion GX Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Silverstone Essential",
            "price": 89.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "ADATA XPG KYBER",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill HIVE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic FOCUS Plus Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec High Current Gamer Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone SFX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Full",
            "color": null
        },
        {
            "name": "ADATA XPG CYBERCORE",
            "price": 235.32,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "LC-Power LC6560GP3 V2.3 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 560,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Deepcool DA600-M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart BM2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower PF3",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 700 B1",
            "price": 217.49,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Pure Power 11 FM 1000",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic Core GC",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Xigmatek NRP-PC602",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "SilentiumPC Supremo FM2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 550 B3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Segotep GF",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Gray"
        },
        {
            "name": "ABS Majesty",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1100,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar COUGAR-GX1050",
            "price": 164.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Athena Power Apollo",
            "price": 49.99,
            "type": "SFX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower PF1 - TT Premium Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic SSP-300SFG",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Pure Power 11 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Montech GAMMA II",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart RGB 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Montech TITAN GOLD 750W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME",
            "price": 227,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Strider Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone Strider Platinum",
            "price": 150.38,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Deepcool PM800D",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Montech CENTURY",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "In Win Classic",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 900,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Segotep GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Thermaltake Smart BX1 RGB 550",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Xilence XP750MR9",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black / Red"
        },
        {
            "name": "Deepcool DQ750-M-V2L",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White / Black"
        },
        {
            "name": "Antec High Current Gamer",
            "price": 148.02,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 620,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 750 G1",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! STRAIGHT POWER E9 | 580W CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 580,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "ADATA XPG Core Reactor II",
            "price": 94.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME Ultra Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Smart SE",
            "price": 148,
            "type": "ATX",
            "efficiency": null,
            "wattage": 530,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Antec VP PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! STRAIGHT POWER E9 | 480W CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 480,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar GEX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec VP PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "FSP Group HEXA 85+",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair GS700",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": 114.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master V1300 Platinum",
            "price": 399.9,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 Snow - TT Premium",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "SeaSonic PRIME TX-650",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cougar GEX X2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Phanteks AMP",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CS450M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Hamburg",
            "price": 123,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 530,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec NeoECO Gold ZEN",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black / Gold"
        },
        {
            "name": "Corsair GS600",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 800,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master MWE 450",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill PHOTON-650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill PHOTON-1050",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group Hydro PTM PRO",
            "price": 189.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PX1300P",
            "price": 299.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Thermaltake Toughpower Grand RGB 650 SE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair TX550M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! Dark Power Pro 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "GameMax GM",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Silver"
        },
        {
            "name": "Cooler Master MWE Gold 550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair VX450",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "SHARKOON WPM Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair TX650M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermalright TP",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "SeaSonic SSP-300TBS",
            "price": 77.63,
            "type": "TFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Silver"
        },
        {
            "name": "MSI MAG A650BN EVA e-PROJECT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black / Purple"
        },
        {
            "name": "Cougar STX",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master B500 ver.2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec Signature Platinum",
            "price": 251.15,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 710 BP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 710,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Deepcool DA700N",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec Earthwatts Green",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 380,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MWE Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Raidmax Vortex",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec VP PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Aerocool P7 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1000 G1",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone Strider Plus",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA 650 B3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone Essential",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 850 B2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 1000 P5",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Blue / Black"
        },
        {
            "name": "FSP Group HYPER S",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "PC Power & Cooling Silencer",
            "price": 210.62,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone Essential",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "In Win PB",
            "price": 150,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar VTE X2",
            "price": 67.98,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair Vengeance 400",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group CANNON PRO (230V)",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 2000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair HX750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SilentiumPC Elementum E2 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "KOLINK KL-SFX250",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 250,
            "modular": false,
            "color": "Black / Green"
        },
        {
            "name": "Cooler Master B600 ver. 2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master G550M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic PRIME",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Enermax MaxTytan",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill VALENS-600",
            "price": 140,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec NeoECO Gold ZEN",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": "Black / Gold"
        },
        {
            "name": "Cooler Master V550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Phanteks AMP",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA 510 BP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 510,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower Grand RGB 750 SE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower Grand RGB 850 SE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "OCZ ModXStream Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SHARKOON SilentStorm Icewind Black",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Apex AG-M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 - TT Premium",
            "price": 264.24,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group HEXA 85+ PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic CORE GC-500",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "Corsair AX650",
            "price": 250,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Smart BX1 RGB 650",
            "price": 136.94,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Phanteks Revolt Pro",
            "price": 414.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Silver / Black"
        },
        {
            "name": "Silverstone SFX",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Pure Power 11 FM 550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SilentiumPC Supremo L2 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA 450 BV",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Phanteks AMP",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! STRAIGHT POWER E9 680W / CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 680,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake TR2 S",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group DAGGER PRO ATX3.0",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic 850FX WHITE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "LC-Power LC6 V2.31",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Gray"
        },
        {
            "name": "In Win P75F",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "LC-Power LC6350 V2.3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "OCZ ModXStream Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic TFX 350",
            "price": null,
            "type": "TFX",
            "efficiency": "gold",
            "wattage": 350,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group FSP220-60LE(80)",
            "price": null,
            "type": "Mini ITX",
            "efficiency": "plus",
            "wattage": 220,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec NeoECO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Silverstone Essential",
            "price": 119.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill PHOTON-750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Super Flower Leadex VI Platinum PRO",
            "price": 199.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Blue"
        },
        {
            "name": "Thermalright TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "GameMax GP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Silverstone Strider Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1500,
            "modular": "Full",
            "color": "Black / Blue"
        },
        {
            "name": "SeaSonic Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 11 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 400,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Apevia ATX-AQ700W-BK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec High Current Gamer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 520,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G RGB Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Xigmatek Vector",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer Mk II",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 950,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hyper M85+",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Ultra Gold 1000",
            "price": 379.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group HEXA 85+ PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "LC-Power LC6 V2.31",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black / Gray"
        },
        {
            "name": "FSP Group Hydro PTM PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Sparkle ATX-350PN-B204",
            "price": 57.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "LC-Power LC6 V2.31",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Gray"
        },
        {
            "name": "be quiet! Pure Power 10",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair AX750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Segotep CP-PSU-ST-P750F",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power Pro 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group Hyper M",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Antec VP PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Integra R2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex V Pro",
            "price": 249.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Gold"
        },
        {
            "name": "Super Flower Legion GX Pro",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Antec Earthwatts Green",
            "price": 108.11,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! System Power U9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax MAXPRO",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MWE Gold 750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power Pro 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master MasterWatt 750 TUF Gaming Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black / Gray"
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair AX760i",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 760,
            "modular": "Full",
            "color": null
        },
        {
            "name": "In Win P85",
            "price": 144.18,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cougar POLAR",
            "price": 161.49,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "ENDORFY Supremo FM5",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Phanteks Revolt Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Silver / Black"
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec NeoECO 750 Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SilentiumPC Supremo FM2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF2 ARGB",
            "price": 130.11,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair G700",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "SilentiumPC Vero M2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Fractal Design Ion+ 760P",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 760,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Athena Power AP-MFATX40P8",
            "price": 117.75,
            "type": "Flex ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "KOLINK Regulator",
            "price": 149.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "LC-Power LC V2.31",
            "price": null,
            "type": "TFX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Super Flower Legion GX Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "EVGA 610 BP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 610,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax REVOLUTION SFX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master GX III GOLD",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Purple"
        },
        {
            "name": "Thermaltake Toughpower SFX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Enermax Platimax D.F.",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair Vengeance 550M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic SSP-300ST",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XFX XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec CSK",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "Cooler Master GX",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Anode Bronze",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power L8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 630,
            "modular": "Semi",
            "color": "Black / Orange"
        },
        {
            "name": "be quiet! System Power 10 U",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Deepcool GamerStorm DQ-M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "be quiet! Straight Power 10 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "NZXT HALE90 V2 1000W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill RD-Z",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec NeoECO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 620,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Gigabyte GreenMax Plus",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Zalman zm-750-XG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "EVGA 450 B1",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Pure Power L8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 530,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "In Win P105II",
            "price": 186.12,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower LEADEX VII Platinum PRO",
            "price": 269.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! TFX Power 3 300",
            "price": 129.86,
            "type": "TFX",
            "efficiency": "gold",
            "wattage": 300,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic SS-300TFX Bronze",
            "price": 62.9,
            "type": "TFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone ST85F-GS-V2",
            "price": 129.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group FSP450-60GHS(85)-R",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax Revolution D.F.",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "FSP Group Dagger Pro",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master XG750",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master GX",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair VX550",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax XT",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec High Current Gamer Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair HX620",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 620,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SHARKOON WPM Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "ARESGAME AGS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black / Red"
        },
        {
            "name": "Cooler Master XG850",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair CS850M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master MWE GOLD 550 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Xilence XP850MR9",
            "price": 154.88,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black / Red"
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 730,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 860,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Apex AL-D500EXP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro M",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! System Power 8",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group HEXA 85+",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Xigmatek ACXTNRP-PC502",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "RIOTORO BUILDER",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Corsair G800",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MWE GOLD 850 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake German",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 630,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Straight Power 10 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master V1000 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master XG650",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF1 - TT Premium",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake TOUGHPOWER PF1 ARGB",
            "price": 304.98,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group SFX Pro",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Deepcool DQ750ST",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 660,
            "modular": "Full",
            "color": null
        },
        {
            "name": "GameMax GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 2000,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE White V2 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF A3 - TT Premium Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 360,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec Earthwatts",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec NeoECO Classic",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec VP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GX1 500",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill ARC 750",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Xilence XP700R6",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "FSP Group HEXA 85+ PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "LC-Power LC8550 V2.31 Prophet",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black / Blue"
        },
        {
            "name": "FSP Group FSP500-50FSPT",
            "price": 198.99,
            "type": "Flex ATX",
            "efficiency": "platinum",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill RBR1000-M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax CYBERBRON",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black / Silver"
        },
        {
            "name": "SeaSonic Snow Silent 1050",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill Glacier 600M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic FOCUS SPX (2021)",
            "price": null,
            "type": "SFX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro Ti PRO,Gen 5",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master Silent Pro Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group AURUM S 400W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group FSP300-57FCB",
            "price": null,
            "type": "Flex ATX",
            "efficiency": "gold",
            "wattage": 300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Legion GX Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Rosewill Capstone",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair AX1500i 240V",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group HEXA 85+",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA 750 B3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "G.Skill PS750G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Fractal Design Integra M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "RAIJINTEK CRATOS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "GameMax GM-1050",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1050,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "KOLINK Classic Power",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "KOLINK KL-SFX450",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black / Green"
        },
        {
            "name": "BitFenix Whisper M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 10 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 400,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 10 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic M12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GX1 RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec NeoECO Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master 500W MasterWatt Lite 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MasterWatt Lite 600W Full Range",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA 750 B3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group Hyper M85+",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Thermalright TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Thermalright TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "SHARKOON SilentStorm",
            "price": 94.29,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cougar GX-S",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "LC-Power LC6 V2.31",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Gray"
        },
        {
            "name": "LC-Power LC1000P V3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool DA600N",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "BitFenix Formula Gold 650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower iRGB PLUS 1000",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cougar VTE X2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec True Power",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group AU-400FL",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 400,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "HEC HEC200SA-2FX",
            "price": null,
            "type": "Mini ITX",
            "efficiency": null,
            "wattage": 200,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax RX-700AC",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Xigmatek Vector",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "EVGA 650 GD",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Zalman TX",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax EMG900EWT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 900,
            "modular": "Full",
            "color": null
        },
        {
            "name": "NZXT HALE82 V2 700W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec EARTHWATTS GOLD PRO 550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA NEX1500 Classified",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair CX850M V2 (2017 Edition)",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black / White"
        },
        {
            "name": "Cooler Master MWE Gold 650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 1050 GS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill PHOTON-850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill ARC 650",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "GameMax GX Pro Rampage",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1250,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermalright TP",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "SeaSonic PRIME Ultra Gold 750",
            "price": 169.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Zalman ACRUX",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Super Flower Leadex III ARGB Pro",
            "price": 189,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair VS400",
            "price": 369,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Anode Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Rosewill Glacier 500M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair TX650",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ ModXStream Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 400,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power L7",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 530,
            "modular": false,
            "color": null
        },
        {
            "name": "Apex AG-M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake TR2 RX",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Silverstone Strider Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group FSP500-50FGGBN",
            "price": null,
            "type": "Flex ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA 700 GQ",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Zalman zm-650-XG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "RIOTORO BUILDER",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Silverstone VIVA",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Silverstone VIVA",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power L8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master Elite V2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower iRGB PLUS TT Premium Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1250,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 750 P6",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Rosewill PHOTON-1200",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "In Win A55",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "In Win A65",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "XFX XTR",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "RAIJINTEK CRATOS",
            "price": 96.9,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "In Win P130II",
            "price": 240.2,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA G FTW",
            "price": 154.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Zalman ACRUX",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Antec Basiq",
            "price": 88.34,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone SX300-B",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Super Flower Golden Green HX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Athena Power AP-MFATX50P8",
            "price": 179.99,
            "type": "Flex ATX",
            "efficiency": "silver",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Xilence XP650R9",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Raidmax Vampire",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower iRGB PLUS 850",
            "price": 285,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec NeoECO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 520,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic SS-460FL Active PFC F3",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 460,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group Hydro G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar LX500",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS SGX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower iRGB PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1250,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic CORE GX-500",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Full",
            "color": "Black / Gold"
        },
        {
            "name": "be quiet! PURE POWER 9 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "XFX TS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Power Zone 750W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair TX850 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic Snow Silent",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group FSP400-60GHS(85)-R",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex V Platinum Pro",
            "price": 219.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Thermaltake Toughpower iRGB PLUS 750",
            "price": 224.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill Glacier 700M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake TOUGHPOWER PF1 ARGB",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill HIVE S",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XFX XTR",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 10 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "BitFenix Formula Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax RX-630SS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 630,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex III Super Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GAMDIAS ASTRAPE M1 B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black / Multicolor"
        },
        {
            "name": "Athena Power AP-MFATX30",
            "price": null,
            "type": "Mini ITX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair TX750 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Power Zone 1000W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 850 GS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "NZXT E650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 10 U",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower Grand RGB Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master Silent Pro M2",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower LEADEX VII Platinum PRO",
            "price": 229.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "KOLINK Regulator",
            "price": 169.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 750 PQ",
            "price": 218.49,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "LC-Power LC850P V3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair GS800 2013 Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Anode Bronze",
            "price": 146.91,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Rosewill HIVE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic M12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar SL500",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 760,
            "modular": "Full",
            "color": null
        },
        {
            "name": "GameMax GP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power Pro 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Sentey MBP HM",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SHARKOON SilentStorm Icewind",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "White / Black"
        },
        {
            "name": "Cooler Master MASTERWATT MAKER MIJ",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Raidmax Thunder RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 735,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "be quiet! Power Zone 650W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 1000 PS",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master MWE 400",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 10 U",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master Thunder",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Integra M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! Straight Power 10",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Sentey SDP650-SS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master V550 Gold V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Enermax MarbleBron",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Ultra Gold 850",
            "price": 195.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Deepcool PM500D",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower PF1 - TT Premium Edition",
            "price": 307.29,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GameMax GX Pro Rampage",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "LC-Power LC V2.31",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Enermax MaxTytan",
            "price": 399.98,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 11",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Azza PSAZ-650W",
            "price": 59.99,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME SNOWSILENT",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "SeaSonic PRIME SNOWSILENT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1250,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec True Power",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! System Power U9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 8",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar GX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": "Full",
            "color": "Black / Gold"
        },
        {
            "name": "be quiet! Dark Power Pro 10",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master i500",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "BitFenix Whisper M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master Elite",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 460,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Zalman zm-500-LE",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec VP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Xilence Performance A+ III",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "FSP Group Berserker 500",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master Hyper White",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic S12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "In Win A45",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Azza PSAZ-500B12",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! TFX Power 3 300",
            "price": null,
            "type": "TFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex VI Platinum PRO",
            "price": 169.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Blue"
        },
        {
            "name": "Antec Earthwatts Green",
            "price": 104.64,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "KOLINK KL-SFX350",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": "Black / Green"
        },
        {
            "name": "Thermaltake Toughpower Grand RGB Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic SS-300ES Bronze",
            "price": 104.44,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-JP1000W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec True Power",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Kuroutoshikou KRPW-BR650W/85+",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 10",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 630,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower iRGB PLUS 1200 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Twins",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "GameMax GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Antec VP PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master B500",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "GAMDIAS ASTRAPE M1",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": "Black / Multicolor"
        },
        {
            "name": "Zalman TX",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Raider 650",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec NeoECO Classic",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec High Current Gamer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 620,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX Core Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Pure Power L8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA NEX750B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "SilentiumPC Supremo L2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "XFX PRO Black Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Fractal Design Newton R3",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! Straight Power 10 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Azza PSAZ-850B14",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "In Win P65",
            "price": 173.79,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar GEX X2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex Gold",
            "price": 299.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic PRIME Ultra Gold 650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Inter-Tech Coba Nitrox Nobility",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 700,
            "modular": "Semi",
            "color": "Black / Orange"
        },
        {
            "name": "Cougar VTE X2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic M12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar SL400",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair HX650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Deepcool PK800D",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! System Power U9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 875,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Xigmatek NRP-PC702",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win P65F",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power Pro 11",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair VS600",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "SHARKOON SilentStorm Icewind",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "White / Black"
        },
        {
            "name": "SeaSonic PRIME Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec HCG-750 Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Pure Power L8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax Cobra",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Semi",
            "color": "Black / Gold"
        },
        {
            "name": "FSP Group HYPER S",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Noua Volture X GX-MVX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic SS-400ET Bronze",
            "price": 91.33,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win P75FII",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "Xilence XP1250MR9",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1250,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "EVGA SuperNOVA 850 GA",
            "price": 350,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Phanteks PH-P550GF",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Corsair CX-500 V3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Pure Power 10",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Glacier 850M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar SL600",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic S12III",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax Platimax",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "FSP Group AURUM S 600W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax ZU-500B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic PRIME Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Montech GAMMA II",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power Pro 10",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "GAMDIAS Cyclops X1 P",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black / Multicolor"
        },
        {
            "name": "Cooler Master Silent Pro M2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 720,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Ultra LSP750",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "FSP Group Raider 750",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GF2 ARGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Raidmax Thunder RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 535,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 660,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power L8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar CMX700V3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec Earthwatts",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Nfortec Sagitta RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Nightjar",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 520,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Straight Power 10 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Insignia NS-PCW5508",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master MWE Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "RAIJINTEK CRATOS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "BitFenix Whisper M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower PF1 - TT Premium Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "BitFenix Formula Gold 750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Zalman ACRUX",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "BitFenix Whisper M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Zalman ACRUX",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Montech CENTURY",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GAMDIAS KRATOS P1 G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec Basiq",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "GameMax GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! STRAIGHT POWER E9 | 500W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Montech GAMMA II",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax CYBERBRON",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black / Silver"
        },
        {
            "name": "SeaSonic PRIME Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master i700",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Athena Power APOLLO 600",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax Cobra",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GF A3 - TT Premium Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Phanteks AMP",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Berzerker",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX TS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Xigmatek Vector",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "XFX P1-650X-XXB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group FSP270-60LE",
            "price": null,
            "type": "Mini ITX",
            "efficiency": "plus",
            "wattage": 270,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Everest 85PLUS 800",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Xilence Performance A+ III",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Enermax Platimax",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1350,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic FOCUS SGX (2021)",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill PHOTON-550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Xilence XP430R8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 430,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Deepcool GamerStorm DQ-M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Aerocool XPredator GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Cougar COUGAR-1000CMX",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "Diablotek PSUL775",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 775,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec True Power",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group HYPER S",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill HIVE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Amazon",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermalright TP",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Fractal Design Anode Bronze",
            "price": 148.59,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "OCZ ZT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar POLAR X2",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "White / Gray"
        },
        {
            "name": "SeaSonic M12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec High Current Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ITX-AP250W",
            "price": null,
            "type": "Mini ITX",
            "efficiency": null,
            "wattage": 250,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC HEC350TEWX",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master eXtreme Power Plus",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ StealthXstream II",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax RX-1000AE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower iRGB PLUS 1000 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! System Power 8",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group AURUM S 500W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Quark 1000",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "CoolMax ZX-600",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Pure Power L7",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GX1 RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cooler Master Extreme 2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 525,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 750 T2",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master M620",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 620,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master GXII",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group HEXA 85+",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Fractal Design Newton R3",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Apevia Beast",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec High Current Gamer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "XFX P1-750X-XXB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group Hydro X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "SHARKOON SilentStorm Icewind",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "White / Black"
        },
        {
            "name": "Apevia APEVIA ATX-WR680W 680W ATX12V v2.3 SLI CrossFire Active PFC Power Supply",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 680,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair TX650 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "SHARKOON WPM Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "XFX Core Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Power Zone",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group Raider S 550",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX P1-550S-XXB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "LEPA MX-F1",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar BXM850",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": "Orange / Black"
        },
        {
            "name": "Sentey SDP550-SS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro M2",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer MK III",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar COUGAR-RS650",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec High Current Gamer Extreme",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Super Flower LEADEX VII Platinum PRO",
            "price": 199.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill Capstone",
            "price": 269,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "RAIJINTEK CRATOS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Corsair CX-750 V3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Deepcool DQ550ST",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master V450",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax REVOLUTION X't",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 430,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec VP650P",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-VS450W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "NZXT HALE90 V2 1000W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar RX500",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-WA900W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 900,
            "modular": false,
            "color": null
        },
        {
            "name": "Gigabyte GE-P450P-C2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Stallion",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Stallion",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Green",
            "price": 170,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 530,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Zalman ZM660-XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 660,
            "modular": "Full",
            "color": null
        },
        {
            "name": "GameMax GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1800,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec NeoECO 650 Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power Pro 10",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master i600",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MasterWatt 650 TUF Gaming Alliance Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black / Gray"
        },
        {
            "name": "Super Flower Leadex III Super Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "iTek GF EVO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "GAMDIAS ASTRAPE M1 B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black / Multicolor"
        },
        {
            "name": "Deepcool DN400",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Newton R3",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LC-Power LC1200P V3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 9",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Sentey MBP HM",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Azza PSAZ-750W",
            "price": 74.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "In Win PB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair TX850 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill LEPTON 700",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "NZXT HALE 90",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermalright TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power L8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic FOCUS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "EVGA SuperNOVA 850 PQ",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Solid Gear SDGR-FLEX220",
            "price": null,
            "type": "Flex ATX",
            "efficiency": null,
            "wattage": 220,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Litepower",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic S12G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Raider S 650",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill ARC 450",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex III ARGB Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Nfortec Sagitta RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "OCZ ZS",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "LC-Power LC6650GP3 V2.3 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "In Win Compact",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Smart DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "EVGA 500 BT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar GEX",
            "price": 209.4,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Raidmax Vampire",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "BitFenix Formula Gold 450",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec VP",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME Ultra Platinum 650",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 10",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Glacier 1000M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 530,
            "modular": false,
            "color": null
        },
        {
            "name": "NZXT HALE90 V2 850W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec EDGE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer MK III",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA N",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec True Power",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec True Power",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Apevia ATX-AS500W-BK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC HEC250SRT",
            "price": null,
            "type": "SFX",
            "efficiency": null,
            "wattage": 250,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master eXtreme Power",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master GX",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 775,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec Earthwatts Green",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Nexus NX-5000 R3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 530,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Smart",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Topower TOP-600WB",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec VP PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex III Super Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master 400W MasterWatt Lite 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Dagger 600",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Raidmax RX-635AP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 635,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar GX-S",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar GX-S",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec High Current Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1300,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Xigmatek NRP-MC702",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Xigmatek NRP-MC1002",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Zalman zm-550-XG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group Hydro Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Sentey MBP HM",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Antec High Current Gamer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master V Semi-Modular",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master G450M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "XFX Core Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Raider S 450",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group AURUM GOLD 700",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax Cobra",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! PURE POWER L8 400W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! System Power 10 U",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Antec High Current Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Fractal Design Integra M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Fractal Design Integra M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "EVGA SuperNOVA 750 GA",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master GXII",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win P75",
            "price": 135.98,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Solid Gear SDGR-650E",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "BitFenix BFG GOLD ATX3.0",
            "price": 109.9,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec Earthwatts",
            "price": 124.98,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME Ultra Platinum 550",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill VALENS-700M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Raidmax Vampire",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Fractal Design Edison M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Apevia ATX-VN500W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Pure Power 10 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SHARKOON WPC Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower XT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1475,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master MasterWatt Maker 1500 (no Bluetooth)",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec EDGE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro Hybrid",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Athena Power AP-TFX40",
            "price": 135,
            "type": "TFX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-JV650W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax ELT720AWT-ECO_II",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 720,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax EMD625AWT_II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 625,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Raidmax RX-850AE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill RV2-700",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 675,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec EarthWatts Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic SSP-450RT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec NeoECO 550 Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power L7",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Sentey XPP725-PS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 725,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! Dark Power Pro 10",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec NeoECO V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "In Win IP-S350CQ2-0T",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master GX",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Cologne",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 730,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "be quiet! Pure Power 9",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 400,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Azza PSAZ-850PT14",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar CougarA500",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Segotep GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SeaSonic SS-350TGM Retail",
            "price": null,
            "type": "TFX",
            "efficiency": "gold",
            "wattage": 350,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GF A3 - TT Premium Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill LEPTON 600",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "RIOTORO ONYX 650",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "XFX TS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Tacens AP II",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": "Black / Green"
        },
        {
            "name": "Cougar GX-F",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black / Orange"
        },
        {
            "name": "FSP Group AURUM 92+",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "XFX ProSeries",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic S12G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX ProSeries",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec Earthwatts Green",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "LC-Power LC1200 V2.4",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill ARC 550",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA W3",
            "price": 105.99,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Azza PSAZ-700A14",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec True Power",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group SFX Pro",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Super Flower SF-1000F14MP White",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Super Flower SF-1200F14MP White",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair VS350",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G RGB Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax MarbleBron RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": "White"
        },
        {
            "name": "SeaSonic PRIME Ultra Platinum 850",
            "price": 359.99,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group FSP300-60LG-5K",
            "price": 153.74,
            "type": "Flex ATX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax MarbleBron RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Antec VP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair GS500",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "BitFenix Formula Gold 550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "LC-Power LC6550 V2.3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "ADATA XPG KYBER",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax REVOLUTION X't",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 630,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Ultra X4",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XFX XTR",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! Pure Power 10",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Zalman ZM1000-HP",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar POLAR X2",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": "White / Gray"
        },
        {
            "name": "PC Power & Cooling Silencer MK III",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill Capstone",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar VTE X2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax TRIATHLOR",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Zalman 1250 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1250,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "NZXT HALE82",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "In Win IP-S300FF1-0",
            "price": 63,
            "type": "TFX",
            "efficiency": "plus",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX ProSeries",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax EMG800EWT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax EPR525AWT_II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 525,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle SPI460PFB2-MC2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 460,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Green",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 630,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Green",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill RP600V2-S-SL",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic SSP-350SE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 575,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Zalman ZM770-XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 770,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax NAXN ADV.",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax EPM600AWT",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax ZX-700",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic M12II 850 EVO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "be quiet! Dark Power Pro 10",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G RGB Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic CORE GX-650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "XFX XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX TS",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax Scorpio",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 735,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Gigabyte Odin GT 800",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 800,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "iTek GF EVO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "GAMDIAS ASTRAPE P1 G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Multicolor"
        },
        {
            "name": "Cooler Master Silent Pro M2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 620,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill LEPTON",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "RIOTORO ENIGMA G2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Yellow"
        },
        {
            "name": "RIOTORO ENIGMA G2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Yellow"
        },
        {
            "name": "Cougar VTX",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master V Semi-Modular",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group Raider 450",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill HERCULES-1600S",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Replace Power RP-TFX-420W",
            "price": null,
            "type": "TFX",
            "efficiency": null,
            "wattage": 420,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Lightning",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "OCZ ZX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax ENP450AST",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec High Current Gamer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 520,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 760,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Raidmax RX-500AF",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Anima APII500",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": "Black / Green"
        },
        {
            "name": "EVGA SuperNOVA 1000 PQ",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Cooler Master Hyper White",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill G650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 760,
            "modular": "Full",
            "color": null
        },
        {
            "name": "LEPA MaxBron",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA MaxBron",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA MX-F1",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master RS",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec High Current Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic SS-500ET Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ ZS",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Xilence XP530R8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 530,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Inter-Tech Coba Nitrox Nobility",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 800,
            "modular": "Semi",
            "color": "Black / Orange"
        },
        {
            "name": "be quiet! Straight Power 10",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Straight Power 10",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Straight Power 10",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar COUGAR-A560",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 560,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia AR",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Raidmax Cobra",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax Cobra",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Golden Green HX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Golden Green HX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Golden Green HX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermalright TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec VP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone ET500-ARGB",
            "price": 98.71,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax Platimax",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Deepcool DQ650ST",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Raider S 750",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Litepower",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "LC-Power LC6450 V2.3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Raidmax Cobra",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill CAPSTONE-1000-M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Fractal Design Edison M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Fractal Design Edison M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Montech CENTURY MINI",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill Capstone",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "OCZ ZT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower XT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1375,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair CS550M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair Vengeance 500",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "VIVO 24K",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill RD-Z",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Ultra Gold 550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "XFX ProSeries",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XFX ProSeries",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1250,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro Hybrid",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group Hydro PTM X PRO,Gen5",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Enermax RevoBron TGA",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Antec NeoECO",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax EMG700AWT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "EVGA Classified SR-2",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill RX750-S-B",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill CFZ",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Rosewill Quark 650",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec Earthwatts Green",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic Core GC",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black / Yellow"
        },
        {
            "name": "Cooler Master Extreme 2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 475,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec NeoECO Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec NeoECO Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "LEPA B650-SA",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex III ARGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill TOKAMAK 1200",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax TRIATHLOR ECO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Apex AG-M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Enermax REVOLUTION X't II",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill Capstone",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group HEXA 85+ PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Athena Power AP-TFX30",
            "price": null,
            "type": "TFX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Athena Power AP-MFATX25",
            "price": null,
            "type": "Mini ITX",
            "efficiency": "plus",
            "wattage": 250,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec EarthWatts Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA 550 GD",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "NZXT HALE 90",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic PRIME Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic PRIME Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Segotep GF",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Zalman 850-HP Plus",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Sparkle R-FSP400-60ETN",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Essential",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black / Blue"
        },
        {
            "name": "Fractal Design Tesla R2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "Noua Hyper ZR65",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax RX-535AP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 535,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill SilentNight-500",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group AU-500FL",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "EVGA W3",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cougar GX-F",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Orange"
        },
        {
            "name": "Rosewill G550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill Capstone G1200",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax REVOLUTION SFX",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 520,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar CMX550V3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group VITAL 400",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro PTM X PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "In Win Commander II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill Lightning",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex III ARGB Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Nfortec Sagitta RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Xilence XP730R8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 730,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Fractal Design Tesla R2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Integra R2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar CMX1200V3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar COUGAR-700CMX",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Thortech Thunderbolt PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master eXtreme Power Plus",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX ProSeries",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic ECO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Golden Silent",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax MaxTytan",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 800,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Solid Gear SDGR-750E",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec True Power",
            "price": 252.83,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group FSP300-60GHS-R",
            "price": null,
            "type": "SFX",
            "efficiency": "plus",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermalright TP",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec VP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax EPM850EWT",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Fractal Design Edison M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Deepcool GamerStorm DQ-M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Inter-Tech 88882144",
            "price": null,
            "type": "TFX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": "Silver"
        },
        {
            "name": "Ultra ULT-LS500",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": "Silver"
        },
        {
            "name": "HEC HEC200SAFX",
            "price": null,
            "type": "Mini ITX",
            "efficiency": null,
            "wattage": 200,
            "modular": false,
            "color": null
        },
        {
            "name": "Thortech Thunderbolt PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill RD-Z",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Zalman ZM460B-APS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 460,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Capstone",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax TRIATHLOR",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group Hydro PTM X PRO,Gen5",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec Signature",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Apevia ATX-WA750W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC X-Power Pro 600",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master Elite",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master eXtreme Power",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax ERV920EWT",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 920,
            "modular": "Full",
            "color": null
        },
        {
            "name": "OCZ Z Series Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "OCZ Z Series Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill RV350-2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1350,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Zalman ZM500-HP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "be quiet! System Power U9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax NAXN ADV.",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master New GX",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec Earthwatts",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax ZU-600B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "GameMax GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1350,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 460,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! STRAIGHT POWER E9 | 400W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! STRAIGHT POWER E9 | 450W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax REVOLUTION ATX 3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black / White"
        },
        {
            "name": "be quiet! Dark Power Pro 10",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G RGB Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "CoolMax ZU-900B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 900,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group Twins",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax MarbleBron",
            "price": 82.94,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Raidmax Scorpio",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 535,
            "modular": "Semi",
            "color": "Black / Blue"
        },
        {
            "name": "Raidmax Scorpio",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 635,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex III Super Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower LEADEX VII XG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Sparkle FSP300-60THA",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec EA-750 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax RX-735AP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 735,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar GX-S",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Fortress",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MPW-5502-ACABW 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Zalman zm-400-LE",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "RIOTORO ENIGMA G2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Yellow"
        },
        {
            "name": "Rosewill CFZ",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Cooler Master V Semi-Modular",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 760,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "LEPA P1375-MA",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1375,
            "modular": "Full",
            "color": null
        },
        {
            "name": "NZXT HALE82N 750W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group ATX300-PA",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax ENP500AWT",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Noua Volture GX-MV",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "SHARKOON WPM Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax MaxTytan",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1250,
            "modular": "Full",
            "color": "Black / Silver"
        },
        {
            "name": "Enermax Platimax D.F.",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar GX V3",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": "Semi",
            "color": "Black / Gold"
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Stallion",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Corsair G600",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone DA1000R",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Sparkle ATX-300PN-B204",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar GX-F",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black / Orange"
        },
        {
            "name": "Rosewill Capstone G750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "G.Skill PS1250P",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1250,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group AURUM 92+",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "OCZ Fatal1ty",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group Hydro PTM",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Kuroutoshikou KRPW-L5-500W/80+",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic M12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group PT1200FM",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Logisys PS575XBK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 575,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex Silver",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Topower TOP-500WB",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Nfortec Sagitta RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Fractal Design Integra R2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Xilence XP830R8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 830,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Mistel MX550 FANLESS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Fractal Design Integra R2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "PC Power & Cooling Fatal1ty Gaming",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "Enermax REVOLUTION DUO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Sentey ERP-600-SS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Sentey ERP-500-SM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar COUGAR-GX700",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "StarTech ATX2PW550WH",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MasterWatt",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "SeaSonic PRIME Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 520,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Ultra X4 Special Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone NJ600",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 600,
            "modular": "Full",
            "color": "Silver"
        },
        {
            "name": "Rosewill HIVE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Golden Silent",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 430,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "LC-Power LC6460GP3 V2.3 230V",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 460,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Kingwin ABT-650MM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Mushkin MKNPSJL1000",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA G800-MB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Kingwin ABT-1050MM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1050,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic Platinum",
            "price": 134.69,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax CYBERBRON",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill Green",
            "price": 80,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill VALENS-700",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax EPM1200EWT",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic S12G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec High Current Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "be quiet! POWER 2",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic SS-850HT Silver",
            "price": 169,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Zalman ZM600-HP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro Hybrid",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic SS-300ET Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro PTM X PRO,Gen5",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "E-Power EP-500LS-1",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec Basiq",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec Earthwatts",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-AS680W-BL",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 680,
            "modular": false,
            "color": null
        },
        {
            "name": "Apex AL-A400ATX",
            "price": 94.41,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC HEC200SA2FX",
            "price": null,
            "type": "Mini ITX",
            "efficiency": null,
            "wattage": 200,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC Zephyr MX-750",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master eXtreme Power Plus",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 460,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CA-300",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "VisionTek 900349",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax EPG600AWT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ Fatal1ty",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "OCZ EliteXStream",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic SSP-350ST",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax RX-380K",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 380,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax RX-450K",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax RX-600AF",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill RX850-S-B",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill SL-300TFX",
            "price": null,
            "type": "TFX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone DA700",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone OP1000-E",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XClio STABLEPOWER GOLD 750W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone Nightjar",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XFX Black Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax REVOLUTION X't",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 730,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 560,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic SS-300SFD",
            "price": null,
            "type": "SFX",
            "efficiency": "plus",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Deepcool PM600D",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill Quark 550",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill Quark 850",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Kingwin AP-550",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group ATX400-PNT",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ Fatal1ty",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair CX400",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax REVOLUTION ATX 3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black / White"
        },
        {
            "name": "Thermaltake Toughpower DPS G RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1250,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec High Current Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G RGB Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Topower TOP-800WB",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec VP PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "EVGA SuperNOVA NEX1500 Classified",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "In Win Classic",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XFX XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "BitFenix Whisper M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Ultra ULT-LSP550",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master MasterWatt Maker",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax REVOLUTION X't II",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Silverstone Strider Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "GAMDIAS ASTRAPE M1",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": false,
            "color": "Black / Multicolor"
        },
        {
            "name": "Diablotek PHD750",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro M2",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Xigmatek NRP-MC802",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": "Full",
            "color": null
        },
        {
            "name": "StarTech ATX2POWER350",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Madrid",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "EVGA 450 GD",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "NZXT HALE 90",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Azza PSAZ-1000PT14",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group DAGGER PRO ATX3.0",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic SS-1250XM2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1250,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XFX P1-850X-XXB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Kingwin Lazer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Kingwin Lazer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer Mk II",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ StealthXStream",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Raidmax RX-700AT",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 700,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "NZXT HALE82N 650W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win IP-P300BN7-2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ ZX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "OCZ ZX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1250,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Broadway Com Corp OKIA-BLACK-600",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax ENM750AWT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax EMD625AWT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 625,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower XT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "RIOTORO ENIGMA 850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "RIOTORO ONYX 750",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "BitFenix BFG GOLD",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group AURUM GOLD 600",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer Mk II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "BFG BFGR650WGSPSU",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master V850 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Phanteks PH-P750GS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill Capstone G850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA MaxGold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Tesla R2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro PTM",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "FSP Group Hydro PTM",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cougar CMX850V3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Sparkle ATX-300PA",
            "price": 187.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master VSM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LC-Power LC1000 V2.4",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master New GX",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill ARC M550",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill ARC M650",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Xion EN-600F12",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Newton R3",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "BitFenix Fury",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Xilence XP630R8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 630,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Athena Power AP-P4ATX80FEP8",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Tesla R2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Smart BX1 450",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Cougar COUGAR-A760",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 760,
            "modular": false,
            "color": null
        },
        {
            "name": "Thortech Thunderbolt",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Xion XON-700P12F",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia AD",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Apevia Astro",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill RD600-M",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Kingwin STR-500",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex V Gold Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower SF-1000F14MP Black",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill Tachyon 1200",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec VP-P",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake German",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group FSP300-60SGV",
            "price": null,
            "type": "TFX",
            "efficiency": "gold",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic SS-600ES",
            "price": 102.19,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": "Gray"
        },
        {
            "name": "RAIJINTEK CRATOS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill VALENS-500",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill VALENS-600M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair CX-600 V3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic PRIME AIRTOUCH",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "be quiet! TFX Power 2",
            "price": null,
            "type": "TFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! TFX Power 2",
            "price": null,
            "type": "TFX",
            "efficiency": "gold",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "LEPA B550-SA",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax REVOLUTION87+",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax REVOLUTION X't",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 530,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar POWERX",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Kuroutoshikou KRPW-BR550W/85+",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "FirePower ZX",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic SS-750HT Silver",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ ZT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill Glacier 1200M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "XFX P1-650X-CAG9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rocketfish RF-900WPS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 900,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower XT",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1275,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill Capstone",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake EVO_Blue",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake EVO_Blue",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake EVO_Blue",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group PT1000FM",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group Dagger 500",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master Elite",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax ZP-750B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "NZXT HALE90 V2 850W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax RevoBron TGA",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Cougar RX600",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec Earthwatts Green",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec True Power",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Apevia ATX-CB600W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-IB680W-GN",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 680,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-TL450W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Apex AL-A350ATX",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC HP585D RETAIL",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 585,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC ZEPHY580MX",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 580,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CA-350",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax MP-550B",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "VisionTek 900490",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax CXI-600B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Azza Titan",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ Fatal1ty",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Raidmax RX-1200AE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group FSP300-60GHS(85)",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Stallion",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill RV350",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone OP1000-P",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "XClio STABLEPOWER GOLD 1000W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Sunbeam PSU-COM780-BK-US",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 780,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Black Widow",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Deepcool PM550D",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill CFZ",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Rosewill Quark 750",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic SSP-550RT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic SSP-650RT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec High Current Gamer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec Earthwatts",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "VisionTek 900346",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle ATX-400PN-B204",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle FSP300THAR-MC",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "E-Power EP-500NE-XV",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax Platimax",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax ZU-800B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec NeoECO V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Logisys AT750BK",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Straight Power E9",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CL-500B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G RGB",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 1250,
            "modular": "Full",
            "color": null
        },
        {
            "name": "PC Power & Cooling S75CF",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax ETL450AWT-M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex V Pro",
            "price": 210.62,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower Leadex V Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Ultra LSP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill RV2-600",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "GAMDIAS ASTRAPE E1",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": false,
            "color": "Black / Multicolor"
        },
        {
            "name": "GAMDIAS ASTRAPE P1 G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black / Multicolor"
        },
        {
            "name": "Antec NE450M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar DX500",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermalright TB-750",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Raidmax RX-835AP",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 835,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Athena Power AP-P4ATX35",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Athena Power AP-P4ATX95FEPC",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 950,
            "modular": false,
            "color": null
        },
        {
            "name": "Athena Power AP-MFATX22",
            "price": null,
            "type": "Mini ITX",
            "efficiency": null,
            "wattage": 220,
            "modular": false,
            "color": null
        },
        {
            "name": "Diablotek PSDA500",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Diablotek PSDA400",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Diablotek PHD350",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Xion XON-800R14N",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 800,
            "modular": "Full",
            "color": null
        },
        {
            "name": "StarTech ATXPW550PRO2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "XClio DIAMONDPOWER 880W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 880,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax DIGIFANLESS",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "StarTech ATX2PW430PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "Xion AXP-700W14FG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "NZXT HALE90 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "CoolMax CX-550B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CU-700B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Ultra LSP650",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ EliteXStream",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin ABT-850MM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "PC Power & Cooling S47ATX-B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 470,
            "modular": false,
            "color": null
        },
        {
            "name": "PC Power & Cooling S61EPS-B",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 610,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin Mach 1",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group FSP650-80EGN",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin MK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin MK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Pure Power 9",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group Hydro GE",
            "price": 109.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Antec VP",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 630,
            "modular": false,
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 910,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win PB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "NZXT HALE82N 550W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle Magna GOLD PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax ENP600AWT",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group ATX350-PNT",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer Mk II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Raidmax Cobra",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Power Zone",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group AURUM GOLD 500",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group AURUM GOLD 400",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Phanteks PH-P650GS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Enermax REVOLUTION DUO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Tachyon",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill Tachyon",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill Tachyon",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "G.Skill PS850P",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "LEPA MaxBron",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA MaxBron",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA MaxGold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic SS-500ES Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower TOP-650PM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower TOP-1000WG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ ZS",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sentey GSP650-SM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sentey SDP750-SS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Linkworld LPG12-35-p4",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Sentey GSP1000-SM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sentey ERP-500-SS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Sentey ERP-500-SMR",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar COUGAR-RS450",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Thortech Thunderbolt",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer MK III",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec High Current Gamer Extreme",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Diablotek PSUL675",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 675,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower TOP-900W",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 900,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master New GX",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower Leadex Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Super Flower SF-1200F14MP Black",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Logisys PS550E12",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Super Flower LEADEX Special Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cooler Master V550S",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill VALENS-500M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Raidmax Vampire",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 900,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Corsair CX-430 V3",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "Deepcool PM700D",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "FSP Group FSP300-60GHT(85)",
            "price": null,
            "type": "TFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! POWER 2",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Ultra X4",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Kingwin Lazer Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Kingwin Lazer Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Kingwin Lazer Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1300,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FirePower ZT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake EVO_Blue",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thortech Thunderbolt PLUS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec EDGE",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer MK III",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake EVO_Blue",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "NZXT HALE90 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "NZXT HALE90 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake EVO_Blue",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "SeaSonic M12II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 380,
            "modular": false,
            "color": null
        },
        {
            "name": "E-Power EP-600NE-XV",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "LEPA B850-MA",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "NZXT HALE82N 650W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "NZXT HALE82",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "NZXT HALE82",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Antec Basiq",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec True Power",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Antec True Power",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Apevia ATX-AS500W-GN",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-AS600W-BL",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Mushkin MKNPSJL800",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC HP485D",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 485,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC HP485D Retail",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 485,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC XPOWER780",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CU-600B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax VL-600B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax ZP-1000B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax CUG-950B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 950,
            "modular": "Full",
            "color": null
        },
        {
            "name": "VisionTek 900488",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "CoolMax CX-400B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Dynapower EJ-750A80",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax EES400AWT_II",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax EGX1250EWT",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1250,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax EPG500AWT",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax ERV1020EWT",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1020,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax ETK500AWT",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win Commander",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "OCZ EliteXStream",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ StealthXstream II",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "OCZ StealthXstream II",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Libertas",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill Lightning",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill LP-6100C",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Stallion",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Stallion",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill RV2-500",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone DA750",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XFX P1-650X-CAH9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake EVO_Blue",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XFX Black Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower iRGB PLUS 850 Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Sparkle GW-EPS1250DA",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1250,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Xion AXP-850K14XE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Apevia Raptor",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": "Black / Red"
        },
        {
            "name": "Thortech Thunderbolt",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax EPM750AWT",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax ZU-700B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax RevoBron",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Sparkle SCC-750AF",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar RSB400",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "E-Power EP-550P5-T1",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master Elite",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle FSP400-60GHS",
            "price": null,
            "type": "SFX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle ATX-400PA",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower ZU-400W12",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "LEPA MaxBron",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake W0328RU",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower ZU-750W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower TOP-400W801",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master MasterWatt TUF Gaming Alliance",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": "Black / Gray"
        },
        {
            "name": "Antec High Current Gamer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Zeus",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1350,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill Capstone",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax MarbleBron",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": "White"
        },
        {
            "name": "RAIJINTEK CRATOS",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Super Flower SF-750F14TG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Topower ZU-1050W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1050,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax TRIATHLOR ECO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex Titanium",
            "price": null,
            "type": "ATX",
            "efficiency": "titanium",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "In Win GreenMe 650",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar DX600",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermalright TB450S",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermalright AG-650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermalright AG-750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermalright AG-750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "FSP Group HEXA 85+ PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Athena Power AP-P4ATX55FEC",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Athena Power AP-P4ATX85FEP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Diablotek PSDA600",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Fortress",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec High Current Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill Fortress",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Xigmatek ACXTNRP-PC402",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia XG",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win P55F",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Xion AXP-850R14N",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "XClio DIAMONDPOWER 1080W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1080,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2POW400HS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2PW530PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 530,
            "modular": false,
            "color": null
        },
        {
            "name": "Xion AXP-1000R14HE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Fractal Design Newton R3",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax CUQ-1200B",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1200,
            "modular": false,
            "color": null
        },
        {
            "name": "NZXT HALE 90",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Apevia ATX-AS680W-BK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 680,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CUL-950B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 950,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "XClio STABLEPOWER 460W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 460,
            "modular": false,
            "color": null
        },
        {
            "name": "Aerocool GT-1050SG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "RIOTORO BUILDER",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black / Red"
        },
        {
            "name": "Zalman 1000-HP Plus",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sentey MBP HM",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Silverstone ST75F-GS-V3",
            "price": 98.9,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "OCZ EliteXStream",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "Segotep GM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "PC Power & Cooling S75CF-B",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin Mach 1",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1220,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Kingwin Lazer Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Corsair TX650 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX P1-750S-CAB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX P1-650S-CAB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic SS-300TGW",
            "price": null,
            "type": "TFX",
            "efficiency": "gold",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "XClio GreatPower",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group ZEN 400",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax ZPG-500B",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Noua Hyper ZR55",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Broadway Com Corp OKIA-BLACK-680",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 680,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Broadway Com Corp P4-OKIA-550-RB",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "XClio GreatPower",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "PC Power & Cooling T12W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1200,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec High Current Gamer",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX P1850SNLB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax ENP550AWT",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX P1-750S-NLB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "BitFenix BFG GOLD",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "BitFenix BFG GOLD ATX3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Corsair TX750 V2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master Silent Pro Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill PHOTON 1350",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1350,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Sparkle Magna",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master Hyper White",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Rosewill Capstone G1000",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Kingwin ABT-750MM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cougar CMD 600",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 600,
            "modular": "Semi",
            "color": "Black / Blue"
        },
        {
            "name": "Cougar CMD 500",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black / Blue"
        },
        {
            "name": "Sparkle R-SPI1000GCM",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Athena Power AP-MFATX35",
            "price": null,
            "type": "Mini ITX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax ZPG-1200B",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group PT850FM",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master VSM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill HERCULES-1600",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 1600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Logisys PS480X2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 480,
            "modular": false,
            "color": null
        },
        {
            "name": "Logisys PS480D-BK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 480,
            "modular": false,
            "color": null
        },
        {
            "name": "Logisys PS480E12",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 480,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower GAPS-500MX",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Topower TOP-500PM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "LEPA G1000-MB",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Topower ZU-550W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win Glacier",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 900,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Fractal Design Integra R2",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Tesla R2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "BitFenix Fury",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Mistel MX650 FANLESS",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Fractal Design Tesla R2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Linkworld LPK2-30-P4",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cyonic AU-650X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cyonic AU-450X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cyonic AU-550X",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sentey ERP-600-SM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sentey GSP750-SM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sentey GSP850-SM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sentey ERP-400-SS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Sentey ERP-700-SS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Linkworld LPG8 630w",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 630,
            "modular": false,
            "color": null
        },
        {
            "name": "Antec NeoECO Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Cougar COUGAR-SX700",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle SPI300T8AB-B204",
            "price": null,
            "type": "TFX",
            "efficiency": "bronze",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle SPI300GLS-B204",
            "price": null,
            "type": "SFX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Cougar COUGAR-PX700",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Xion XON-850P14F",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Xion XON-1000P14F",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "Diablotek PSUL575",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 575,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group AU-750M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "XFX P1-550S-XXBA",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Ultra U12-42466",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Ultra U12-42467",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "iStarUSA TC-1200PD8G",
            "price": 305.99,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1200,
            "modular": "Full",
            "color": "Gray"
        },
        {
            "name": "HEC Orion",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 585,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Sparkle R-SPI700GHN",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax ENP650AWT B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax ENP550AWT B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower TOP-1000P12-ADJ",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "SeaSonic S12G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Logisys PS600XBK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Ultra LSP",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Ultra X4",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "E-Power EP-1200P10-T2",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA MaxPlatinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1050,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Rosewill SMG1200",
            "price": 99.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Kingwin KX-1000",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Apevia ATX-RP500W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win Commander II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill CMG1000G5",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill CMG1200G5",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake EVO_Blue",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "In Win Commander III",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "In Win Commander III",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 800,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group AURUM CM GOLD 650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "TUNIQ PSU-POT750-BK",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake EVO_Blue",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA G1000-MA",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Cooler Master Elite",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 460,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone OP850",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win Commander III 600",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "NZXT HALE82N 550W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "NZXT HALE82N 750W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "NZXT HALE90 V2 1200W",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Apevia ATX-AS500W-BL",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-AS520W-BK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 520,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-CW500WP4",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-IB680W-BL",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 680,
            "modular": false,
            "color": null
        },
        {
            "name": "In Win GreenMe 550",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Apevia ATX-TL450W-BK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC Raptor500",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC HP585D",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 585,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC X-Power Pro 650",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC XPOWER585 OEM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 585,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC XP1080",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1080,
            "modular": "Full",
            "color": null
        },
        {
            "name": "HEC XPOWER585 RETAIL",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 585,
            "modular": false,
            "color": null
        },
        {
            "name": "HEC ZEPHYR650",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower ZU-500W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Cooler Master eXtreme Power Plus",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CA-400",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CA-450",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CL-700B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CT-450 (silver)",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax CUG-700B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 700,
            "modular": "Full",
            "color": null
        },
        {
            "name": "CoolMax CUL-650B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "VisionTek 900489",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax CUL-750B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax CUL-850B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax CUQ-1350B",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1350,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax NW-650B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "VisionTek 900347",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Dynapower EP-45X.0562B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle R-SPI650ACAG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle R-SPI750ACAG",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Libertas",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill Stallion",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone OP750",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone OP800",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 800,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Sunbeam IC-PSU-US-2545-DW",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Sunbeam PSU-BKS580-US",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 580,
            "modular": false,
            "color": null
        },
        {
            "name": "Sunbeam PSU-COM680-BK-US",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 680,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sunbeam PSU-ECO750-US-BL",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "Sunbeam PSU-H680-REV-US",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 680,
            "modular": false,
            "color": null
        },
        {
            "name": "Sunbeam PSU-H680-REV-US-BL",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 680,
            "modular": false,
            "color": null
        },
        {
            "name": "Sunbeam PSU-HUSH580-US",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 580,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin Lazer Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Thermaltake TR2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic SS-350ET Bronze",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "SeaSonic SS-350SFE",
            "price": null,
            "type": "SFX",
            "efficiency": "plus",
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Quark 1200",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Xion AXP-700K14XE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Xion AXP-1000K14XE",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Kingwin Lazer Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Sparkle R-SPI900GCM",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 900,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax RevoBron",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 700,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Enermax ERV1000EWT-G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Topower ZU-650W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill SMG650",
            "price": 78.68,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Sparkle ATX-450PN",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle SCC-850AF",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "LEPA B550-SA",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "LEPA B650-SA",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower ZU-950",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 950,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower ZU-450W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group AU-1000PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group AU-1200PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group AU-850PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Topower TOP-400W80",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle GW-EPS1000DA",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Leadex V Pro",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Sparkle R-SPI700ACH5B",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 700,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax ZU-1000B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "BFG EX-1000",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Kingwin ABT-610MM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 610,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle R-SPI600ACH5B",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Zalman LE",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax RM-1000B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax ETL550AWT-M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax ETL650AWT-M",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Logisys PS550AC",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax REVOLUTION X't II",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "CoolMax ZP-850B",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Rosewill SMG850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Topower TOP-1200W",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 1200,
            "modular": "Full",
            "color": null
        },
        {
            "name": "CoolMax V-600",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermalright TB550S",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermalright TB650S",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermalright TB750S",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermalright TB850S",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Thermalright TB-650",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermalright TB-850",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermalright AG-650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "Thermalright AG-850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermalright AG-850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "White"
        },
        {
            "name": "FSP Group HEXA 85+ PRO",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Diablotek PHD450",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Diablotek PHD650",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Diablotek PHD550",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Athena Power AP-MPS3ATX30H",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Diablotek PHD850",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Diablotek PSDA350",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "Xion XON-1100P14HE",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1100,
            "modular": false,
            "color": null
        },
        {
            "name": "Xion XON-1250P14HE",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1250,
            "modular": false,
            "color": null
        },
        {
            "name": "XClio STABLEPOWER 850W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATXPW500PRO2",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "XClio GreatPower",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": "Full",
            "color": null
        },
        {
            "name": "StarTech ATX2POWER400",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATXPOW350PRO",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2PW500PRO",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2POWER430",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 430,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2POWER530",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 530,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2PW450PRO",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2PW400PRO",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2POWER450",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATXPW350DELL",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "XClio GOODPOWER 500W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2POW500HS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2POW450HS",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "StarTech ATX2PW550PRO",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Rome",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "CoolMax RM-750B",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 750,
            "modular": false,
            "color": null
        },
        {
            "name": "XClio GreatPower",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XClio GreatPower",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "LEPA G1200-MA",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Sentey MBP HM",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Rosewill Fortress",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "XClio STABLEPOWER 500W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin Lazer",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Kingwin ABT-450MM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "PC Power & Cooling PPCT860",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 860,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin Lazer Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Kingwin Lazer Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Kingwin Lazer Gold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Kingwin ABT-730MM",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 730,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin MK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin MK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "Kingwin MKX",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "XClio STABLEPOWER 1000W",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX P1-850S-CAB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Silverstone Strider",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "FSP Group FSP300-60GHT",
            "price": null,
            "type": "TFX",
            "efficiency": "plus",
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Lian Li PE",
            "price": null,
            "type": "SFX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "FSP Group SAGA+ 500R",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group SAGA+ 450R",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group SAGA+ 400R",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 400,
            "modular": false,
            "color": null
        },
        {
            "name": "PC Power & Cooling Silencer MK III",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 1200,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Broadway Com Corp OKIA-BLACK-550",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower GF A3 ATX 3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF A3 ATX 3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF A3 ATX 3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF A3 ATX 3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower GF A3 ATX 3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MAG A1000GL PCIE5",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "MSI MAG A1250GL PCIE5",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1250,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Enermax ENP350AST",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "PC Power & Cooling PPCT1200ESA",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 1200,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill SMG1050",
            "price": 109.99,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill PMG650",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill PMG750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill PMG850",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill PMG1050",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill PMG1200",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1200,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Kingwin Lazer Platinum",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Enermax EGX850EWL",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Sunbeam PSU-HUSH580-US-BL",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 580,
            "modular": false,
            "color": null
        },
        {
            "name": "XFX P1-450S-XXB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "be quiet! Power Zone",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "BitFenix BFG GOLD ATX3.0",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill CMG1000",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill CMG850",
            "price": 208.88,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "XClio Goodpower 550W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XClio Goodpower 650W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XClio Goodpower 750W",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "XFX P1-650S-NLB9",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Sparkle R-SPI600GHN",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Enermax REVOLUTION DUO",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 600,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill Tachyon",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Kingwin Lazer",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 660,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Solid Gear SDGR-900E",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 900,
            "modular": false,
            "color": null
        },
        {
            "name": "FSP Group AURUM 92+",
            "price": null,
            "type": "ATX",
            "efficiency": "platinum",
            "wattage": 650,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "OCZ Fatal1ty",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Full",
            "color": null
        },
        {
            "name": "LEPA MaxGold",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "LEPA MX-F1",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 350,
            "modular": false,
            "color": null
        },
        {
            "name": "CoolMax ZPG-1000B",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "In Win Commander II",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cooler Master VSM",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Diablotek PSDA300",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 300,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill ARC M450",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 450,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Rosewill PMG550",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill SMG750",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Topower GAPS-500LX",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": null
        },
        {
            "name": "Xion EN-450F12BK",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 450,
            "modular": false,
            "color": null
        },
        {
            "name": "Thermaltake Toughpower DPS G",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 750,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Thermaltake Toughpower Grand",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1050,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Fractal Design Tesla R2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "Fractal Design Tesla R2",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 650,
            "modular": false,
            "color": null
        },
        {
            "name": "BitFenix Fury",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Inter-Tech Coba Nitrox Nobility",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 900,
            "modular": "Semi",
            "color": "Black / Orange"
        },
        {
            "name": "HEC Zephyr 700 CM",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 700,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Sentey SDP850-SS",
            "price": null,
            "type": "ATX",
            "efficiency": "plus",
            "wattage": 850,
            "modular": false,
            "color": null
        },
        {
            "name": "Azza PSAZ-1000A14",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 1000,
            "modular": false,
            "color": null
        },
        {
            "name": "Thortech Thunderbolt",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Enermax RevoBron",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 500,
            "modular": "Semi",
            "color": "Black"
        },
        {
            "name": "Cougar COUGAR-SX850",
            "price": null,
            "type": "ATX",
            "efficiency": "silver",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Apevia Astro",
            "price": null,
            "type": "ATX",
            "efficiency": null,
            "wattage": 500,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "Ultra X4 Special Edition",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 850,
            "modular": "Full",
            "color": null
        },
        {
            "name": "Cougar A",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 660,
            "modular": false,
            "color": "Black"
        },
        {
            "name": "LEPA B550-MB",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": "Semi",
            "color": null
        },
        {
            "name": "Super Flower Amazon",
            "price": null,
            "type": "ATX",
            "efficiency": "bronze",
            "wattage": 550,
            "modular": false,
            "color": null
        },
        {
            "name": "Rosewill CS-1000M",
            "price": null,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 1000,
            "modular": "Full",
            "color": "Black"
        },
        {
            "name": "Rosewill CS-850M",
            "price": 119.66,
            "type": "ATX",
            "efficiency": "gold",
            "wattage": 850,
            "modular": "Full",
            "color": "Black"
        }
    ];
}