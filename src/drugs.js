const drugs = [
    {
        id: 1,
        name: 'Acetaminophen',
        description: 'Acetaminophen is a pain reliever and a fever reducer. Common conditions that acetaminophen treats include headache, muscle aches, arthritis, backache, toothaches, sore throat, colds, flu, and fevers.',
        img: 'https://i.ibb.co/WKvvw7V/acetaminophen.jpg',
        brands: "Actamin, Anacin AF, Apra, Bromo Seltzer, Children's Tylenol, Elixsure Fever/Pain, Mapap, Medi-Tabs, Q-Pap, Silapap Childrens, Tactinal, Tempra Quicklets, Tycolene, Tylenol, Vitapap", 
        drugClass: 'Miscellaneous analgesics',
        sideEffects: "Hives; difficulty breathing; swelling of your face, lips, tongue, or throat."
    },
    {
        id: 2,
        name: 'Cephalexin',
        description: 'Cephalexin is a cephalosporin (SEF a low spor in) antibiotic. Cephalexin is used to treat infections caused by bacteria, including upper respiratory infections, ear infections, skin infections, urinary tract infections and bone infections in adults and children who are at least 1 year old.',
        img: 'https://i.ibb.co/qjvrc8Q/cephalexin.jpg',
        brands: "Keflex, Biocef, Zartan, Panixine, Daxbia",
        drugClass: 'First generation cephalosporins',
        sideEffects: "Allergic reaction (hives, difficult breathing, swelling in your face or throat) or a severe skin reaction (fever, sore throat, burning eyes, skin pain, red or purple skin rash with blistering and peeling)."
    },
    {
        id: 3,
        name: 'Fentanyl',
        description: 'Fentanyl is a legal prescription drug used for pain control during surgery and for chronic or breakthrough cancer pain.',
        img: 'https://i.ibb.co/KwF1bvk/fentanyl.jpg', 
        brands: "Actiq, Duragesic, Fentora, Lazanda, Sublimaze, Subsys",
        drugClass: 'Narcotic drugs',
        sideEffects: "Overdose may cause death."
    },
    {
        id: 4,
        name: 'Gabapentin',
        description: 'Gabapentin is an anti-epileptic drug, also called an anticonvulsant. It affects chemicals and nerves in the body that are involved in the cause of seizures and some types of pain.Gabapentin is used together with other medicines to treat partial seizures in adults and children at least 3 years old.',
        img: 'https://i.ibb.co/D7Q8gTk/gabapentin.jpg',
        brands: "Gralise, Horizant, Neurontin, Gabarone",
        drugClass: 'Gamma-aminobutyric acid analogs',
        sideEffects: "Allergic reaction such as hives; difficult breathing; swelling of your face, lips, tongue, or throat; skin rash, fever, swollen glands, muscle aches, severe weakness, unusual bruising, upper stomach pain, or yellowing of your skin or eyes; mood or behavior changes, anxiety, panic attacks, trouble sleeping, or if you feel impulsive, irritable, agitated, hostile, aggressive, restless, hyperactive (mentally or physically), depressed, or having thoughts about suicide or hurting yourself."
    },
    {
        id: 5,
        name: 'Hydroxychloroquine',
        description: 'Hydroxychloroquine is a quinoline medicine used to treat or prevent malaria, a disease caused by parasites that enter the body through the bite of a mosquito.',
        img: 'https://i.ibb.co/bg5HJYM/hydroxychloroquine.jpg',
        brands: "Plaquenil, Plaquenil Sulfate, Quineprox",
        drugClass: 'Antimalarial quinolines, Antirheumatics',
        sideEffects: "Allergic reaction to hydroxychloroquine (hives, difficult breathing, swelling in your face or throat) or a severe skin reaction (fever, sore throat, burning eyes, skin pain, red or purple skin rash with blistering and peeling); serious heart problem: fast or pounding heartbeats, fluttering in your chest, shortness of breath, and sudden dizziness (like you might pass out)."
    },
    {
        id: 6,
        name: 'Ibuprofen',
        description: 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID). It works by reducing hormones that cause inflammation and pain in the body such as headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.',
        img: 'https://i.ibb.co/jvBFHHB/ibuprofen.jpg',
        brands: "Advil, Genpril, IBU, Midol IB, Motrin IB, Proprinal, Smart Sense Children's Ibuprofen",
        drugClass: 'Nonsteroidal anti-inflammatory drugs',
        sideEffects: "Hives, difficult breathing, swelling in your face or throat, severe skin reaction (fever, sore throat, burning eyes, skin pain, red or purple skin rash with blistering and peeling)."
    },
]