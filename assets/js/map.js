//List of Counties
var counties = [{
    name: "Antrim",
    code: "am",
    zoom: 10,
    center: {
        lat: 54.721359,
        lng: -6.207217
    }
}, {
    name: "Armagh",
    code: "ah",
    zoom: 10,
    center: {
        lat: 54.360620,
        lng: -6.658168
    }
}, {
    name: "Carlow",
    code: "cw",
    zoom: 10,
    center: {
        lat: 52.835972,
        lng: -6.92455
    }
}, {
    name: "Cavan",
    code: "cn",
    zoom: 10,
    center: {
        lat: 53.99432,
        lng: -7.3608
    }
}, {
    name: "Clare",
    code: "ce",
    zoom: 10,
    center: {
        lat: 52.765699,
        lng: -9.360603
    }
}, {
    name: "Cork",
    code: "c",
    zoom: 10,
    center: {
        lat: 51.904246,
        lng: -8.474038
    }
}, {
    name: "Derry",
    code: "dy",
    zoom: 10,
    center: {
        lat: 54.99452,
        lng: -7.31996
    }
}, {
    name: "Donegal",
    code: "dl",
    zoom: 10,
    center: {
        lat: 54.65449,
        lng: -8.11071,
    }
}, {
    name: "Down",
    code: "dn",
    zoom: 10,
    center: {
        lat: 54.65369,
        lng: -5.67438
    }
}, {
    name: "Dublin",
    code: "d",
    zoom: 10,
    center: {
        lat: 53.3441,
        lng: -6.26749
    }
}, {
    name: "Fermanagh",
    code: "fh",
    zoom: 10,
    center: {
        lat: 54.34653,
        lng: -7.6404
    }
}, {
    name: "Galway",
    code: "gw",
    zoom: 10,
    center: {
        lat: 53.2738,
        lng: -9.05178
    },
}, {
    name: "Kerry",
    code: "ky",
    zoom: 10,
    center: {
        lat: 52.084187,
        lng: -9.657327
    }
}, {
    name: "Kildare",
    code: "ke",
    zoom: 10,
    center: {
        lat: 53.15983,
        lng: -6.909
    }
}, {
    name: "Kilkenny",
    code: "kk",
    zoom: 10,
    center: {
        lat: 52.65374,
        lng: -7.24796
    }
}, {
    name: "Laois",
    code: "ls",
    zoom: 10,
    center: {
        lat: 53.0343,
        lng: -7.30187
    }
}, {
    name: "Leitrim",
    code: "lm",
    zoom: 10,
    center: {
        lat: 53.98933,
        lng: -8.06292
    }
}, {
    name: "Limerick",
    code: "lk",
    zoom: 10,
    center: {
        lat: 52.66386,
        lng: -8.62677
    }
}, {
    name: "Longford",
    code: "ld",
    zoom: 10,
    center: {
        lat: 53.725922,
        lng: -7.79838
    }
}, {
    name: "Louth",
    code: "lh",
    zoom: 10,
    center: {
        lat: 53.71677,
        lng: -6.35435
    }
}, {
    name: "Mayo",
    code: "mo",
    zoom: 10,
    center: {
        lat: 53.75972,
        lng: -9.11718
    }
}, {
    name: "Meath",
    code: "mh",
    zoom: 10,
    center: {
        lat: 53.654598,
        lng: -6.68882
    }
}, {
    name: "Monaghan",
    code: "mn",
    zoom: 10,
    center: {
        lat: 54.248451,
        lng: -6.96909
    }
}, {
    name: "Offaly",
    code: "oy",
    zoom: 10,
    center: {
        lat: 53.627941,
        lng: -8.18856
    }
}, {
    name: "Roscommon",
    code: "rn",
    zoom: 10,
    center: {
        lat: 53.627941,
        lng: -8.18856
    }
}, {
    name: "Sligo",
    code: "so",
    zoom: 10,
    center: {
        lat: 54.2706,
        lng: -8.47164
    }
}, {
    name: "Tipperary North",
    code: "tn",
    zoom: 10,
    center: {
        lat: 52.36096,
        lng: -7.75267
    }
}, {
    name: "Tipperary South",
    code: "ts",
    zoom: 10,
    center: {
        lat: 54.63536485,
        lng: -7.26114257
    }
}, {
    name: "Waterford",
    code: "wd",
    zoom: 10,
    center: {
        lat: 52.248889,
        lng: -7.148137
    }
}, {
    name: "Westmeath",
    code: "wh",
    zoom: 10,
    center: {
        lat: 53.5577902,
        lng: -7.34785583
    }
}, {
    name: "Wexford",
    code: "wx",
    zoom: 10,
    center: {
        lat: 52.33315732,
        lng: -6.45748899
    }
}, {
    name: "Wicklow",
    code: "ww",
    zoom: 10,
    center: {
        lat: 52.98073105,
        lng: -6.06115719
    }
}];

//List of Practices
var practices = [{
    name: "Currently none available in this area",
    code: "am",
    address: "",
    vet: "",
}, {
    name: "Cross Veterinary Clinic",
    position: {
        lat: 54.07531,
        lng: -6.6059
    },
    code: "ah",
    address: "Dundalk Road, Crossmaglen, Co. Armagh",
    vet: "Valerie Desai",

}, {
    name: "Oaklawns Veterinary Surgery",
    position: {
        lat: 52.84488,
        lng: -6.91768
    },
    code: "cw",
    address: "Old Dublin Road, Carlow, Co. Carlow",
    vet: "Valerie Desai",

}, {
    name: "Vet & Pet",
    position: {
        lat: 52.7021,
        lng: -6.99201
    },
    code: "cw",
    address: "Royal Oak, Bagenalstown, Co. Carlow",
    vet: "Marilu Halderman",

}, {
    name: "Breifne Animal Care",
    position: {
        lat: 53.96258,
        lng: -7.35865
    },
    code: "cn",
    address: "Ballinagh Road, Cavan, Co. Cavan",
    vet: "Carroll Sowards",

}, {
    name: "Tycusker Veterinary Clinic",
    position: {
        lat: 53.92144,
        lng: -7.57991
    },
    code: "cn",
    address: "Tycusker, Arva, Co. Cavan",
    vet: "Pei Arebalo",

}, {
    name: "Harveys Veterinary",
    position: {
        lat: 52.68194,
        lng: -9.64422
    },
    code: "ce",
    address: "Kilkee Road, Kilrush, Co. Clare",
    vet: "Merry Ewart",

}, {
    name: "Kilkee Veterinary Clinic",
    position: {
        lat: 52.67802,
        lng: -9.64424
    },
    code: "ce",
    address: "No 1, Circular Road, Kilkee, Co. Clare",
    vet: "Noah Mattern",

}, {
    name: "Keltic Veterinary",
    position: {
        lat: 52.35386,
        lng: -8.68204
    },
    code: "c",
    address: "Charleville Town Center, Bakers Road, Charleville, Co. Cork",
    vet: "Catheryn Broxton",

}, {
    name: "MacKessys Veterinary Hospital",
    position: {
        lat: 52.21173,
        lng: -8.99423
    },
    code: "c",
    address: "Demesne, Newmarket, Co. Cork",
    vet: "Demetria Keever",

}, {
    name: "Whitehouse Veterinary Clinic",
    position: {
        lat: 55.02428,
        lng: -7.34992
    },
    code: "dy",
    address: "14 Whitehouse Road, Londonderry, Co. Derry",
    vet: "Isis Loveall",

}, {
    name: "Mill Ford Veterinary Group",
    position: {
        lat: 54.95584,
        lng: -7.73428
    },
    code: "dl",
    address: "Forquar, Letterkenny, Co. Donegal",
    vet: "Cara Rosengarten",

}, {
    name: "Old Church Veterinary Hospital",
    position: {
        lat: 54.50198,
        lng: -8.19661
    },
    code: "dl",
    address: "The Mall, Ballyshannon, Co. Donegal",
    vet: "Reginia Alcock",

}, {
    name: "Iveagh Veterinary Surgery",
    position: {
        lat: 54.34327,
        lng: -6.27249
    },
    code: "dn",
    address: "30 Arderys Lane, Newry Road, Banbridge, Co. Down",
    vet: "Hannelore Shen",

}, {
    name: "Metrovets",
    position: {
        lat: 53.341301,
        lng: -6.278306
    },
    code: "d",
    address: "72 Meath Street, Merchants Quay, Dublin",
    vet: "Stefany Holdman",

}, {
    name: "Noah Veterinary Hospital",
    position: {
        lat: 53.395674,
        lng: -6.125651
    },
    code: "d",
    address: "38 Warren Louise Road, Co. Dublin",
    vet: "Adaline Bove",

}, {
    name: "Three Valleys Veterinary Ltd",
    position: {
        lat: 54.48244,
        lng: -7.65249
    },
    code: "fh",
    address: "107 Kesh Road, Irvinestown, Enniskillen, Co. Fermanagh",
    vet: "Audie Glasper",

}, {
    name: "Veterinary Surgery",
    position: {
        lat: 53.0703,
        lng: -8.82139
    },
    code: "gw",
    address: "Crowe Street, Gort, Co. Galway",
    vet: "Percy Croslin",

}, {
    name: "Ward Veterinary Clinic",
    position: {
        lat: 53.29911,
        lng: -8.74249
    },
    code: "gw",
    address: "Gurteen Acre, Athenry, Co. Galway",
    vet: "Rubie Arciniega",

}, {
    name: "Hurleys Veterinary Hospital",
    position: {
        lat: 52.27372,
        lng: -9.69991
    },
    code: "ky",
    address: "Brewery Road, Tralee, Co. Kerry",
    vet: "Cristie Pang",

}, {
    name: "Island Veterinary Clinic",
    position: {
        lat: 52.32128,
        lng: -9.76994
    },
    code: "ky",
    address: "St. Brendans Terrace, Listowel, Co. Kerry",
    vet: "Hershel Voyles",

}, {
    name: "Lalor Veterinary",
    position: {
        lat: 53.23568,
        lng: -6.62503
    },
    code: "ke",
    address: "The Mill, Johnstown, Naas, Co. Kildare",
    vet: "Shenna Geraghty",

}, {
    name: "Kenny and Cullen Veterinary Practice",
    position: {
        lat: 53.37637,
        lng: -6.93122
    },
    code: "ke",
    address: "Mylerstown, Carbury, Co. Kildare",
    vet: "Bethann Coomer",

}, {
    name: "Thomastown Veterinary Clinic",
    position: {
        lat: 52.53347,
        lng: -7.13925
    },
    code: "kk",
    address: "Dublin Road, Thomastown, Co. Kilkenny",
    vet: "Karla Hamada",

}, {
    name: "Village Veterinary Hospital",
    position: {
        lat: 52.64208,
        lng: -7.25433
    },
    code: "kk",
    address: "Cashel Villa, Kells Road, Co. Kilkenny",
    vet: "Bambi Maio",

}, {
    name: "Kyle Veterinary Clinic",
    position: {
        lat: 52.88418,
        lng: -7.41083
    },
    code: "ls",
    address: "Kyle, Durrow, Co. Laois",
    vet: "Ligia Bettinger",

}, {
    name: "Mountrath Veterinary Centre",
    position: {
        lat: 53.00603,
        lng: -7.48174
    },
    code: "ls",
    address: "Rushin Road, Mountrath, Co. Laois",
    vet: "Forest Spurrier",

}, {
    name: "Ashwood Veterinary Centre",
    position: {
        lat: 53.94087,
        lng: -7.86861
    },
    code: "lm",
    address: "Gortfadda, Mohill, Co. Leitrim",
    vet: "Marcene Stavros",

}, {
    name: "Beagh Veterinary Practice",
    position: {
        lat: 54.23067,
        lng: -8.30262
    },
    code: "lm",
    address: "Beagh, Dromahair, Co. Leitrim",
    vet: "Barry Mossey",

}, {
    name: "Hillside Veterinary Surgery",
    position: {
        lat: 52.36453,
        lng: -9.24995
    },
    code: "lk",
    address: "Dromtrasna, Abbeyfeale, Co. Limerick",
    vet: "Anjelica Feddersen  ",

}, {
    name: "Liston Veterinary",
    position: {
        lat: 52.44875,
        lng: -9.05458
    },
    code: "lk",
    address: "Lisiniska, Newcastle West, Co. Limerick",
    vet: "Tyrone Everhart",

}, {
    name: "Murphy & Leslie Veterinary Centre",
    position: {
        lat: 53.76645,
        lng: -7.54365
    },
    code: "ld",
    address: "Coolarty, Granard, Co. Longford",
    vet: "Jeannetta Beland",

}, {
    name: "Nally MVB MRCVS",
    position: {
        lat: 53.5771,
        lng: -7.78931
    },
    code: "ld",
    address: "Terlicken, Ballymahon, Co. Longford",
    vet: "Pedro Via",

}, {
    name: "O'Dowd Veterinary Hospital",
    position: {
        lat: 53.85339,
        lng: -6.53361
    },
    code: "lh",
    address: "Hale Street, Ardee, Co. Louth",
    vet: "Taren Elson",

}, {
    name: "Westgate Veterinary Hospital",
    position: {
        lat: 53.71918,
        lng: -6.34639
    },
    code: "lh",
    address: "Scarlet Street, Droghede, Co. Louth",
    vet: "Tillie Wolfram",

}, {
    name: "Crossmolina Veterinary Clinic",
    position: {
        lat: 54.1007,
        lng: -9.32005
    },
    code: "mo",
    address: "Chapel Street, Crossmolina, Co. Mayo",
    vet: "Lachelle Lickteig",

}, {
    name: "DKD Veterinary Services Ltd",
    position: {
        lat: 53.73418,
        lng: -9.00182
    },
    code: "mo",
    address: "Lower James Street, Claremorris, Co. Mayo",
    vet: "Adena Bendickson",

}, {
    name: "Moylagh Veterinary Clinic",
    position: {
        lat: 53.73967,
        lng: -7.15094
    },
    code: "mh",
    address: "Moylagh, Oldcastle, Co. Meath",
    vet: "Delicia Schoch",

}, {
    name: "Navan Veterinary Clinic",
    position: {
        lat: 53.64542,
        lng: -6.6994
    },
    code: "mh",
    address: "Commons Road, Clogherboy, Co. Meath",
    vet: "Stan Clayson",

}, {
    name: "All Creatures Veterinary Group",
    position: {
        lat: 54.26053,
        lng: -6.95299
    },
    code: "mn",
    address: "Tullyherim, Armagh Road, Co. Monaghan",
    vet: "Lin Noblin",

}, {
    name: "Carrick Veterinary Centre",
    position: {
        lat: 53.97589,
        lng: -6.71089
    },
    code: "mn",
    address: "Steadfast Industrial Estate, Carrickmacross, Co. Monaghan",
    vet: "Danna Dicarlo",

}, {
    name: "Cloghan Veterinary Clinic",
    position: {
        lat: 53.22533,
        lng: -7.88638
    },
    code: "oy",
    address: "Castle Street, Cloghan, Co. Offaly",
    vet: "Irmgard Shuck",

}, {
    name: "Dovegrove Veterinary Clinic",
    position: {
        lat: 53.11332,
        lng: -7.9295
    },
    code: "oy",
    address: "Dovegrove, Birr, Co. Offaly",
    vet: "Ashli Mesa",

}, {
    name: "Castlerea Veterinary Clinic",
    position: {
        lat: 53.76843,
        lng: -8.49177
    },
    code: "rn",
    address: "Main Street, Castlerea, Co. Roscommon",
    vet: "Cornelia Mcwain",

}, {
    name: "Cloverhill Veterinary Surgery",
    position: {
        lat: 53.652804,
        lng: -8.24726
    },
    code: "rn",
    address: "Lissagallon, Cloverhill, Co. Roscommon",
    vet: "Kym Hollander",

}, {
    name: "Animal Health Care",
    position: {
        lat: 54.09008,
        lng: -8.51536
    },
    code: "so",
    address: "Teeling Street, Ballymote, Co. Sligo",
    vet: "Lesa Hester",

}, {
    name: "Ballygawley Veterinary Clinic",
    position: {
        lat: 54.18033,
        lng: -8.49883
    },
    code: "so",
    address: "Ballygrania, Collooney, Co. Sligo",
    vet: "Humberto Kilby",

}, {
    name: "O'Connor & Julian Veterinary ",
    position: {
        lat: 52.50826,
        lng: -7.89117
    },
    code: "tn",
    address: "Cahir Road, Cashel, Co. Tipperary",
    vet: "Imogene Calles",

}, {
    name: "Borrisoleigh Veterinary Centre",
    position: {
        lat: 52.75268,
        lng: -7.95859
    },
    code: "ts",
    address: "Capanilly, Borrisoleigh, Thurles, Co. Tipperary",
    vet: "Hoyt Warner",

}, {
    name: "Parklands Veterinary Group",
    position: {
        lat: 54.47978,
        lng: -6.7337
    },
    code: "te",
    address: "5 Old Moy Road, Dungannon, Co. Tyrone",
    vet: "Kraig Rostad",

}, {
    name: "Parkview Vet Clinic",
    position: {
        lat: 54.80807,
        lng: -7.47993
    },
    code: "te",
    address: "Orchard Road, Industrial Estate, Strabane, Co. Tyrone",
    vet: "Rodger Seago",

}, {
    name: "Glenbower Veterinary",
    position: {
        lat: 52.09108,
        lng: -8.00708
    },
    code: "wd",
    address: "Barrack Street, Tallow, Co. Waterford",
    vet: "Flossie Sigler",

}, {
    name: "Lismore Vets",
    position: {
        lat: 52.13801,
        lng: -7.92743
    },
    code: "wd",
    address: "East Main Street, Lismore, Co. Waterford",
    vet: "Cammy Eidson",

}, {
    name: "Murrays Vet Practice",
    position: {
        lat: 53.40677,
        lng: -7.7382
    },
    code: "wh",
    address: "Mount Temple Road, Knockdomney, Moate, Co. Westmeath",
    vet: "Phylis Masse",

}, {
    name: "Glasson Veterinary Clinic",
    position: {
        lat: 53.42393,
        lng: -7.94069
    },
    code: "wh",
    address: "Glasson, Athlone, Westmeath",
    vet: "Lesley Fick",

}, {
    name: "Longstone Veterinary Clinic",
    position: {
        lat: 52.39834,
        lng: -6.93773
    },
    code: "wx",
    address: "10 Irishtown, New Ross, Co. Wexford",
    vet: "Catrina Montford",

}, {
    name: "Mill House Veterinary Practice",
    position: {
        lat: 52.66111,
        lng: -6.28967
    },
    code: "wx",
    address: "The Mill, Ballycarnew Road, Gorey, Co. Wexford",
    vet: "Daphne Glessner",

}, {
    name: "Avondale Veterinary",
    position: {
        lat: 52.92682,
        lng: -6.23873
    },
    code: "ww",
    address: "Corballis, Rathdrum, Co. Wicklow",
    vet: "Harvey Wan",

}, {
    name: "Carnew Veterinary Clinic",
    position: {
        lat: 52.71058,
        lng: -6.49513
    },
    code: "ww",
    address: "13 Main Street, Carnew, Co. Wicklow",
    vet: "Sallie Topham",

}];

//Show map

//Create markers

//Show inforwindow

//Zoom to selected county

//Show results by county

//Reset results