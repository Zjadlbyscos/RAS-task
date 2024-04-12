let cities = {
    'Warszawa': {'Kraków': 209, 'Białystok': 132, 'Olsztyn': 161, 'Gdańsk': 229, 'Bydgoszcz': 200, 'Lublin': 118, 'Poznań': 198, 'Szczecin': 340, 'Gorzów Wielkopolski': 283, 'Wrocław': 225, 'Opole': 228, 'Katowice': 193, 'Kielce': 128, 'Rzeszów': 207, 'Łódź': 104 },
    'Białystok': {'Olsztyn': 210, 'Warszawa': 132, 'Lublin': 226, 'Bydgoszcz': 306, 'Gdańsk': 289, 'Łódź': 209, 'Poznań': 306, 'Szczecin': 448, 'Gorzów Wielkopolski': 391, 'Wrocław': 333, 'Opole': 343, 'Katowice': 309, 'Kielce': 247, 'Kraków': 327, 'Rzeszów': 320 },
    'Olsztyn': {'Warszawa': 161, 'Lublin': 263, 'Bydgoszcz': 187, 'Gdańsk': 114, 'Łódź': 211, 'Poznań': 268, 'Szczecin': 367, 'Gorzów Wielkopolski': 353, 'Wrocław': 335, 'Opole': 350, 'Katowice': 316, 'Kielce': 273, 'Kraków': 353, 'Rzeszów': 355 },
    'Gdańsk': {'Warszawa': 229, 'Lublin': 341, 'Bydgoszcz': 116, 'Łódź': 206, 'Poznań': 197, 'Szczecin': 262, 'Gorzów Wielkopolski': 281, 'Wrocław': 295, 'Opole': 345, 'Katowice': 311, 'Kielce': 314, 'Kraków': 365, 'Rzeszów': 422 },
    'Bydgoszcz': {'Warszawa': 200, 'Lublin': 286, 'Łódź': 155, 'Poznań': 97, 'Szczecin': 219, 'Gorzów Wielkopolski': 183, 'Wrocław': 197, 'Opole': 254, 'Katowice': 258, 'Kielce': 262, 'Kraków': 312, 'Rzeszów': 380 },
    'Lublin': {'Warszawa': 118, 'Łódź': 189, 'Poznań': 287, 'Szczecin': 429, 'Gorzów Wielkopolski': 372, 'Wrocław': 314, 'Opole': 319, 'Katowice': 248, 'Kielce': 148, 'Kraków': 211, 'Rzeszów': 114 },
    'Łódź': {'Warszawa': 104, 'Poznań': 143, 'Szczecin': 282, 'Gorzów Wielkopolski': 226, 'Wrocław': 145, 'Opole': 167, 'Katowice': 137, 'Kielce': 139, 'Kraków': 193, 'Rzeszów': 274 },
    'Poznań': {'Warszawa': 198, 'Szczecin': 168, 'Gorzów Wielkopolski': 109, 'Wrocław': 127, 'Opole': 182, 'Katowice': 232, 'Kielce': 260, 'Kraków': 286, 'Rzeszów': 368 },
    'Szczecin': {'Gorzów Wielkopolski': 73, 'Wrocław': 247, 'Opole': 289, 'Katowice': 337, 'Kielce': 402, 'Kraków': 391, 'Rzeszów': 473 },
    'Gorzów Wielkopolski': {'Wrocław': 187, 'Opole': 229, 'Katowice': 278, 'Kielce': 342, 'Kraków': 332, 'Rzeszów': 414 },
    'Wrocław': {'Opole': 81, 'Katowice': 129, 'Kielce': 252, 'Kraków': 183, 'Rzeszów': 265 },
    'Opole': {'Katowice': 83, 'Kielce': 210, 'Kraków': 138, 'Rzeszów': 220 },
    'Katowice': {'Kielce': 132, 'Kraków': 67, 'Rzeszów': 148 },
    'Kielce': {'Kraków': 100, 'Rzeszów': 145 },
    'Kraków': {'Rzeszów': 112 }
};

let startCity = 'Warszawa';