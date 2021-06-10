let punto0Element = document.querySelector("#punto0");
let punto1Element = document.querySelector("#punto1");
let punto2Element = document.querySelector("#punto2");
let punto3Element = document.querySelector("#punto3");
let punto5Element = document.querySelector("#punto4");
let punto4Element = document.querySelector("#punto5");

var APP_DATA = {
  scenes: [
    {
      id: "0-ps_1",
      idn: 0,
      estacion: 0,
      name: "Estación 1 - 1",
      punto: punto0Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: 0,
        pitch: 0,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: 0.007710494330465778,
          pitch: 0.43451690450059033,
          rotation: 0,
          target: "1-ps_2",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.46955060082609634,
          pitch: -0.01685690977725507,
          title: "Greslebin",
          text: '<img src="./assets/greslebin.jpg" alt="greslebin">\n <p>Héctor Greslebin en uno de los túneles coloniales debajo de la Manzana de las Luces, 1920.</p>',
        },
      ],
      pdfHotspots: [],
    },
    {
      id: "1-ps_2",
      idn: 1,
      estacion: 0,
      name: "Estación 1 - 2",
      punto: punto0Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: 0,
        pitch: 0,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: 0.059484032934525644,
          pitch: 0.4631227290502782,
          rotation: 0,
          target: "2-ps_3",
        },
        {
          yaw: -3.071429372250508,
          pitch: 0.6028234863525359,
          rotation: 0,
          target: "0-ps_1",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.46955060082609634,
          pitch: -0.01685690977725507,
          title: "Perú 222",
          text: '<img src="./assets/manzanaFrente.jpg" alt="manzanaFrente">\n <p>Fachada de la Manzana de las Luces desde la calle Perú.<br> Año 1936</p>',
        },
      ],
      pdfHotspots: [],
    },
    {
      id: "2-ps_3",
      idn: 2,
      estacion: 0,
      name: "Estación 1 - 3",
      punto: punto0Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: -0.3,
        pitch: 0.2,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: 0.5471291502494857,
          pitch: 0.4913624344863692,
          rotation: 0,
          target: "3-ps_4",
        },
        {
          yaw: -0.06080380111174932,
          pitch: 0.360090500694955,
          rotation: 0,
          target: "4-ps_5",
        },
        {
          yaw: -0.8894050731484828,
          pitch: 0.6588335987407259,
          rotation: 0,
          target: "6-ps_7",
        },
        {
          yaw: 1.299134298252758,
          pitch: 0.4103260459489846,
          rotation: 0,
          target: "7-ps_8",
        },
        {
          yaw: -3.0207209510629216,
          pitch: 0.5927324952169091,
          rotation: 0,
          target: "1-ps_2",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "3-ps_4",
      idn: 3,
      estacion: 1,
      name: "Estación 2 - 1",
      punto: punto1Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: -0.3304946790708492,
        pitch: 0.20585596152721308,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -2.188186115150444,
          pitch: 0.5276091247542549,
          rotation: 0,
          target: "2-ps_3",
        },
        {
          yaw: -0.35064661923556706,
          pitch: 0.546098952563721,
          rotation: 0,
          target: "4-ps_5",
        },
        {
          yaw: -1.5908489586241927,
          pitch: 0.5105067153960494,
          rotation: 0,
          target: "6-ps_7",
        },
        {
          yaw: 2.981919750363927,
          pitch: 0.5905270795914728,
          rotation: 0,
          target: "7-ps_8",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "4-ps_5",
      idn: 4,
      estacion: 1,
      name: "Estación 2 - 2",
      punto: punto1Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: 0.4414285990175486,
        pitch: 0.3, //-0.11497449587588804,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -0.01595867482500779,
          pitch: 0.5141908817931018,
          rotation: 0,
          target: "5-ps_6",
        },
        {
          yaw: -1.7853147596811727,
          pitch: 0.12280278487497753,
          rotation: 0,
          target: "3-ps_4",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "5-ps_6",
      idn: 5,
      estacion: 1,
      name: "Estación 2 - 3",
      punto: punto1Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: -0.3181987157431614,
        pitch: 0.07203774831431353,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -2.151075533959471,
          pitch: 0.4766536901952314,
          rotation: 0,
          target: "4-ps_5",
        },
        {
          yaw: -0.5773690800797802,
          pitch: 0.46281800299708387,
          rotation: 0,
          target: "6-ps_7",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "6-ps_7",
      idn: 6,
      estacion: 1,
      name: "Estación 2 - 4",
      punto: punto1Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: 0.17587548616250714,
        pitch: 0.005678295230879371,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: 0.27315055903643824,
          pitch: 0.12,
          rotation: 0,
          target: "7-ps_8",
        },
        {
          yaw: -1.7394645952214507,
          pitch: 0.609996484401254,
          rotation: 0,
          target: "5-ps_6",
        },
        {
          yaw: 0.21,
          pitch: -0.11,
          title: "Bajar al Segundo Subsuelo",
          target: "1-ps_2",
          imgIcon: "./assets/escaleraAbajo.png",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "7-ps_8",
      idn: 7,
      estacion: 1,
      name: "Estación 2 - 5",
      punto: punto1Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: 0.5,
        pitch: 0.2650946021007478,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -1.503186515414436,
          pitch: 0.46399555257412217,
          rotation: 0,
          target: "3-ps_4",
        },
        {
          yaw: -2.6039307018506435,
          pitch: 0.40401497052562796,
          rotation: 0,
          target: "2-ps_3",
        },
        {
          yaw: 2.2904429171103953,
          pitch: 1.1308295531730528,
          rotation: 0,
          target: "8-ss_1",
          imgIcon: "./assets/linkLlenop.png",
        },
        {
          yaw: 6.779307018506435,
          pitch: 0.17,
          title: "Bajar al segundo subsuelo",
          rotation: 0,
          target: "8-ss_1",
          imgIcon: "./assets/escaleraAbajo.png",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "8-ss_1",
      idn: 8,
      estacion: 2,
      name: "Estación 3 - 1",
      punto: punto2Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: -1.0757017506843383,
        pitch: 0.15674143239424865,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -0.1564433819693427,
          pitch: 0.4084474858316032,
          rotation: 0,
          target: "9-ss_2",
        },
        {
          yaw: -0.8008896983791658,
          pitch: 0.031335268920276604,
          title: "Subir al primer subsuelo",
          rotation: 0,
          target: "7-ps_8",
          imgIcon: "./assets/escaleraArriba.png",
        },
        {
          yaw: -1.7085157766183716,
          pitch: 0.5078816117635672,
          rotation: 0,
          target: "14-ss_7",
        },
        {
          yaw: 3.1106465236831884,
          pitch: 0.5492005112615868,
          rotation: 0,
          target: "12-ss_5",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "9-ss_2",
      idn: 9,
      estacion: 3,
      name: "Estación 4 - 1",
      punto: punto3Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: -0.03490658503988975,
        pitch: 0.1932753217527008,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -3.1196984750737187,
          pitch: 0.7147662093648162,
          rotation: 0,
          target: "8-ss_1",
        },
        {
          yaw: 3.1292818756890792,
          pitch: 0.2487404041712633,
          rotation: 0,
          target: "13-ss_6",
        },
        {
          yaw: -2.617510245768555,
          pitch: 0.14140267189287314,
          rotation: 0,
          target: "14-ss_7",
        },
        {
          yaw: 0.02811620669646331,
          pitch: 0.38282482443497656,
          rotation: 0,
          target: "10-ss_3",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "10-ss_3",
      idn: 10,
      estacion: 3,
      name: "Estación 4 - 2",
      punto: punto3Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: 0.005370243852290457,
        pitch: 0.13832449497986943,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -0.01316180219604135,
          pitch: 0.29286997180536645,
          rotation: 0,
          target: "11-ss_4",
        },
        {
          yaw: -3.120518476859681,
          pitch: 0.6609881361637644,
          rotation: 0,
          target: "9-ss_2",
        },
        {
          yaw: -3.098034331260317,
          pitch: 0.35654509718633776,
          rotation: 0,
          target: "8-ss_1",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "11-ss_4",
      idn: 11,
      estacion: 3,
      name: "Estación 4 - 3",
      punto: punto3Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: 0.13405486449747706,
        pitch: 0.08073194310552267,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -3.1193173574356834,
          pitch: 0.2914259180360297,
          rotation: 0,
          target: "9-ss_2",
        },
        {
          yaw: 3.009607984111481,
          pitch: 0.6567419204279457,
          rotation: 0,
          target: "10-ss_3",
        },
      ],
      infoHotspots: [
        {
          yaw: 6.179307018506435,
          pitch: -0.07,
          title: "Africanismos",
          target: "",
          imgIcon: "./assets/link_africa.svg",
          text: '<p> Descargá el PDF sobre africanismos en <a href="https://drive.google.com/file/d/1Gl-q-ZfjHLMg5owAo6JDGSaxzCe02hYt/view?usp=sharing">Este link</a></p>',
        },
      ],
      pdfHotspots: [],
    },
    {
      id: "12-ss_5",
      idn: 12,
      estacion: 5,
      name: "Estación 6 - 1",
      punto: punto5Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: -0.3168462166392807,
        pitch: 0.2330672997606058,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -3.124703772075341,
          pitch: 0.5132564652628808,
          rotation: 0,
          target: "8-ss_1",
        },
        {
          yaw: -0.007688345724325529,
          pitch: 0.4380711958294796,
          rotation: 0,
          target: "13-ss_6",
        },
        {
          yaw: 3.097310825374654,
          pitch: 0.26442207857894395,
          rotation: 0,
          target: "9-ss_2",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "13-ss_6",
      idn: 13,
      estacion: 5,
      name: "Estación 6 - 2",
      punto: punto5Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: 0.3302698828693913,
        pitch: 0.04358169019913838,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -2.9452477506034285,
          pitch: 0.43701554094612227,
          rotation: 0,
          target: "12-ss_5",
        },
        {
          yaw: -2.917013465821599,
          pitch: 0.15788789902128286,
          rotation: 0,
          target: "8-ss_1",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "14-ss_7",
      idn: 14,
      estacion: 4,
      name: "Estación 5 - 1",
      punto: punto4Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: -0.1, //-0.3235565998987404,
        pitch: 0.12695535840618177,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: 2.087841502223295,
          pitch: 0.3850570876316155,
          rotation: 0,
          target: "9-ss_2",
        },
        {
          yaw: 2.8439774259877018,
          pitch: 0.6064877343500044,
          rotation: 0,
          target: "8-ss_1",
        },
        {
          yaw: -2.731644302043394,
          pitch: 0.5197799218842807,
          rotation: 0,
          target: "12-ss_5",
        },
        {
          yaw: -0.08552348764678541,
          pitch: 0.6275258041360097,
          rotation: 0,
          target: "15-ss_8",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "15-ss_8",
      idn: 15,
      estacion: 4,
      name: "Estación 5 - 2",
      punto: punto4Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: -0.10875600416495246,
        pitch: 0.089058236493889,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -0.04417359477646521,
          pitch: 0.5688824203402003,
          rotation: 0,
          target: "16-ss_9",
        },
        {
          yaw: 3.118145685478442,
          pitch: 0.6780954068440366,
          rotation: 0,
          target: "14-ss_7",
        },
        {
          yaw: 3.0635460093378333,
          pitch: 0.3581397256766259,
          rotation: 0,
          target: "8-ss_1",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "16-ss_9",
      idn: 16,
      estacion: 4,
      name: "Estación 5 - 3",
      punto: punto4Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: -0.1074070905643314,
        pitch: 0.06631996334651191,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: -0.09570910062659443,
          pitch: 0.5890161567361503,
          rotation: 0,
          target: "17-ss_10",
        },
        {
          yaw: 3.075873009104158,
          pitch: 0.6398728059028826,
          rotation: 0,
          target: "15-ss_8",
        },
        {
          yaw: 3.086329389291244,
          pitch: 0.3218668115373351,
          rotation: 0,
          target: "14-ss_7",
        },
        {
          yaw: -0.10491332227434569,
          pitch: 0.3504760106601754,
          rotation: 0,
          target: "18-ss_11",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "17-ss_10",
      idn: 17,
      estacion: 4,
      name: "Estación 5 - 4",
      punto: punto4Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: 1.5578239869965564,
        pitch: 0.1932753217527008,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: 1.5295388593852666,
          pitch: 0.49803222709433825,
          rotation: 0,
          target: "18-ss_11",
        },
        {
          yaw: -1.5311657221170272,
          pitch: 0.6645801283069659,
          rotation: 0,
          target: "16-ss_9",
        },
        {
          yaw: -1.5395026499549598,
          pitch: 0.3587691093939043,
          rotation: 0,
          target: "7-ps_8",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "18-ss_11",
      idn: 18,
      estacion: 4,
      name: "Estación 5 - 5",
      punto: punto4Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.18230000438205352,
          pitch: 0.17967637555756966,
          rotation: 0,
          target: "19-ss_12",
        },
        {
          yaw: 3.1204720453873964,
          pitch: 0.6331697939166183,
          rotation: 0,
          target: "17-ss_10",
        },
        {
          yaw: 3.112335967226157,
          pitch: 0.34460483745115766,
          rotation: 0,
          target: "16-ss_9",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "19-ss_12",
      idn: 19,
      estacion: 4,
      name: "Estación 5 - 6",
      punto: punto4Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: 2.8394446412858,
        pitch: 0.10291686203492212,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: 3.002791563467012,
          pitch: 0.26748823168533775,
          rotation: 0,
          target: "20-ss_13",
        },
        {
          yaw: 0.12376887360832356,
          pitch: 0.2717614917684976,
          rotation: 0,
          target: "18-ss_11",
        },
      ],
      infoHotspots: [],
      pdfHotspots: [],
    },
    {
      id: "20-ss_13",
      idn: 20,
      estacion: 4,
      name: "Estación 5 - 7",
      punto: punto4Element,
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1440,
      initialViewParameters: {
        yaw: -0.18393085194094283,
        pitch: -0.018948560956143723,
        fov: 1.3074507059741394,
      },
      linkHotspots: [
        {
          yaw: 2.8298255542723822,
          pitch: 0.3320489907703852,
          rotation: 0,
          target: "19-ss_12",
        },
      ],
      infoHotspots: [
        {
          yaw: 5.89307018506435,
          pitch: -0.05,
          title: "Arqueologia Urbana",
          target: "",
          imgIcon: "./assets/link_arqUrbana.svg",
          text: '<a download="Africanismos.pdf" href="https://drive.google.com/file/d/1SZCqPVDwI59fJD0wk9P8xg_gvFDcPdw3/view?usp=sharing" >link para descargar Africanismos</a>',
        },
      ],
      pdfHotspots: [],
    },
  ],
  name: "Project Title",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: false,
    viewControlButtons: false,
  },
};
