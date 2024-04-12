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


const graph = {
    0: {1: 209, 2: 161, 3: 118, 4: 200, 5: 229, 6: 104, 7: 198, 8: 340, 9: 283, 10: 225, 11: 228, 12: 193, 13: 128, 14: 209, 15: 207},
    1: {0: 209, 2: 353, 3: 263, 4: 306, 5: 341, 6: 211, 7: 268, 8: 367, 9: 353, 10: 286, 11: 429, 12: 314, 13: 211, 14: 211, 15: 355},
    2: {0: 161, 1: 353, 3: 263, 4: 187, 5: 114, 6: 211, 7: 268, 8: 367, 9: 353, 10: 286, 11: 429, 12: 314, 13: 211, 14: 211, 15: 355},
    3: {0: 118, 1: 263, 2: 263, 4: 286, 5: 341, 6: 189, 7: 287, 8: 429, 9: 372, 10: 287, 11: 114, 12: 319, 13: 148, 14: 248, 15: 114},
    4: {0: 200, 1: 306, 2: 187, 3: 286, 5: 116, 6: 155, 7: 97, 8: 219, 9: 183, 10: 97, 11: 282, 12: 226, 13: 155, 14: 258, 15: 380},
    5: {0: 229, 1: 341, 2: 114, 3: 341, 4: 116, 5: 206, 7: 197, 8: 262, 9: 281, 10: 197, 11: 282, 12: 226, 13: 314, 14: 311, 15: 422},
    6: {0: 104, 1: 211, 2: 211, 3: 189, 4: 155, 5: 206, 6: 143, 7: 282, 8: 219, 9: 226, 10: 143, 11: 282, 12: 167, 13: 139, 14: 137, 15: 274},
    7: {0: 198, 1: 268, 2: 268, 3: 287, 4: 97, 5: 197, 6: 14}
  };
  
  const source = 0; 

export default {cities,graph,source}