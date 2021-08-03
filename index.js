/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

(function () {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;
  var textos = window.TEXTO_DATA.textos;
  var tracks = window.TRACKS.tracks;
  var subs = window.SUBS.estaciones;

  var platform = window.navigator.platform;
  var isIos = platform.includes("Mac" || "iP");

  // Grab elements from DOM.
  var panoElement = document.querySelector("#pano");
  //var sceneNameElement = document.querySelector("#titleBar .sceneName");
  var sceneListElement = document.querySelector("#sceneList");
  //var sceneElements = document.querySelectorAll("#sceneList .scene");
  var sceneListToggleElement = document.querySelector("#sceneListToggle");
  var autorotateToggleElement = document.querySelector("#autorotateToggle");
  var fullscreenToggleElement = document.querySelector("#fullscreenToggle");

  //inicio
  let contenedorPlacaNegra = document.querySelector(".contenedorPlacaNegra");
  let logosIber = document.querySelector(".logosIber");
  let logosMuseos = document.querySelector(".logosMuseos");
  let botonesInicio = document.querySelector(".botonesInicio");
  let boton360 = document.querySelector(".boton360");
  let barrita = document.querySelector(".barrita");
  let botonJuego = document.querySelector(".botonJuego");
  let fondoNegro = document.querySelector(".fondoNegro");

  //nav
  let logoElement = document.querySelector(".logo");

  //estaciones
  let panelElement = document.querySelector(".ContenedorPanel");
  let estacionesFondo = document.querySelector(".PanelTxt");
  let pPanelElementEsp = document.querySelector(".txt_esp");
  let pPanelElementIng = document.querySelector(".txt_ing");
  let estacionesOnElement = document.querySelector(".estacionesOn");
  let estacionesOffElement = document.querySelector(".estacionesOff");
  let est1On = document.querySelector("#est1On");
  let est2On = document.querySelector("#est2On");
  let est3On = document.querySelector("#est3On");
  let est4On = document.querySelector("#est4On");
  let est5On = document.querySelector("#est5On");
  let est6On = document.querySelector("#est6On");
  let est1Off = document.querySelector("#est1Off");
  let est2Off = document.querySelector("#est2Off");
  let est3Off = document.querySelector("#est3Off");
  let est4Off = document.querySelector("#est4Off");
  let est5Off = document.querySelector("#est5Off");
  let est6Off = document.querySelector("#est6Off");
  //let scrollUp = document.querySelector(".scrollUp");
  //let scrollDown = document.querySelector(".scrollDown");
  //let anchoMapa = document.querySelector("Subsuelos");

  //recorrido
  let mapaElement = document.querySelector(".Mapa");
  let primerSubsueloMapaElement = document.querySelector(".primerSub");
  let segundoSubsueloMapaElement = document.querySelector(".segundoSub");
  let recorridoOnElement = document.querySelector(".recorridoOn");
  let recorridoOffElement = document.querySelector(".recorridoOff");
  let boton1erSubElement = document.querySelector("#btn1sub");
  let boton2doSubElement = document.querySelector("#btn2sub");
  let vac1 = document.querySelector("#vacio1");
  let vac2 = document.querySelector("#vacio2");
  let punto0Element = document.querySelector("#punto0");
  let punto1Element = document.querySelector("#punto1");
  let punto2Element = document.querySelector("#punto2");
  let punto3Element = document.querySelector("#punto3");
  let punto5Element = document.querySelector("#punto4");
  let punto4Element = document.querySelector("#punto5");
  let puntoActualElement = document.querySelector("#puntoActual");
  let mapa1Img = document.querySelector(".mapaPrimerSub");
  let mapa2Img = document.querySelector(".mapaSegundoSub");
  //let avanzar = document.querySelector(".avanzar");
  //let retroceder = document.querySelector(".retroceder");

  //subtitulos
  let subElement = document.querySelector(".ContenedorSubs");

  //audio - idioma
  let botonIdioma = document.querySelector(".lengua");
  let audio = document.querySelector(".aud");
  let currentTimeElement = document.querySelector("#currentTime");
  currentTimeElement.style.visibility = "hidden";
  let track = document.querySelector("#audioControl"); //let track = document.createElement("audio");
  //track.setAttribute("controls", true);

  //empezar
  function empezar() {
    contenedorPlacaNegra.classList.add("disabled");
    fondoNegro.style.display = "none";
    switchScene(scenes[0]);
    playTrack(0), reproducidos.push("0");
  }

  function home() {
    contenedorPlacaNegra.classList.remove("disabled");
    contenedorPlacaNegra.style.visibility = "hidden";
    botonesInicio.style.visibility = "visible";
    botonesInicio.style.animationDuration = "0s";
    fondoNegro.style.display = "block";
    pausesong();
  }

  function seguir() {
    contenedorPlacaNegra.classList.add("disabled");
    fondoNegro.style.display = "none";
    pausesong();
  }

  boton360.addEventListener("click", empezar);
  logoElement.addEventListener("click", home);
  botonJuego.addEventListener("click", seguir);

  //cambiar idioma
  function cambiarIdioma() {
    pPanelElementEsp.classList.toggle("disabled");
    pPanelElementIng.classList.toggle("enabled");
    document.querySelector("#idioma").classList.toggle("disabled");
    document.querySelector("#language").classList.toggle("enabled");
    if (
      document.body.classList.contains("mobile") &&
      pPanelElementIng.classList.contains("enabled")
    ) {
      est1Off.setAttribute("src", "/assets/ing_estacion1Off.svg");
      est2Off.setAttribute("src", "/assets/ing_estacion2Off.svg");
      est3Off.setAttribute("src", "/assets/ing_estacion3Off.svg");
      est4Off.setAttribute("src", "/assets/ing_estacion4Off.svg");
      est5Off.setAttribute("src", "/assets/ing_estacion5Off.svg");
      est6Off.setAttribute("src", "/assets/ing_estacion6Off.svg");
      est1On.setAttribute("src", "/assets/i_mob_estacion1On.svg");
      est2On.setAttribute("src", "/assets/i_mob_estacion2On.svg");
      est3On.setAttribute("src", "/assets/i_mob_estacion3On.svg");
      est4On.setAttribute("src", "/assets/i_mob_estacion4On.svg");
      est5On.setAttribute("src", "/assets/i_mob_estacion5On.svg");
      est6On.setAttribute("src", "/assets/i_mob_estacion6On.svg");
      recorridoOnElement.setAttribute("src", "/assets/ing_recorridoOn.svg");
      recorridoOffElement.setAttribute("src", "/assets/ing_recorridoOff.svg");
      boton1erSubElement.setAttribute("src", "/assets/ing_primerSub.svg");
      boton2doSubElement.setAttribute("src", "/assets/ing_segundoSub.svg");
    } else if (pPanelElementIng.classList.contains("enabled")) {
      est1On.setAttribute("src", "/assets/ing_estacion1On.svg");
      est2On.setAttribute("src", "/assets/ing_estacion2On.svg");
      est3On.setAttribute("src", "/assets/ing_estacion3On.svg");
      est4On.setAttribute("src", "/assets/ing_estacion4On.svg");
      est5On.setAttribute("src", "/assets/ing_estacion5On.svg");
      est6On.setAttribute("src", "/assets/ing_estacion6On.svg");
      est1Off.setAttribute("src", "/assets/ing_estacion1Off.svg");
      est2Off.setAttribute("src", "/assets/ing_estacion2Off.svg");
      est3Off.setAttribute("src", "/assets/ing_estacion3Off.svg");
      est4Off.setAttribute("src", "/assets/ing_estacion4Off.svg");
      est5Off.setAttribute("src", "/assets/ing_estacion5Off.svg");
      est6Off.setAttribute("src", "/assets/ing_estacion6Off.svg");
      recorridoOnElement.setAttribute("src", "/assets/ing_recorridoOn.svg");
      recorridoOffElement.setAttribute("src", "/assets/ing_recorridoOff.svg");
      boton1erSubElement.setAttribute("src", "/assets/ing_primerSub.svg");
      boton2doSubElement.setAttribute("src", "/assets/ing_segundoSub.svg");
    } else if (document.body.classList.contains("mobile")) {
      est1On.setAttribute("src", "/assets/mob_estacion1On.svg");
      est2On.setAttribute("src", "/assets/mob_estacion2On.svg");
      est3On.setAttribute("src", "/assets/mob_estacion3On.svg");
      est4On.setAttribute("src", "/assets/mob_estacion4On.svg");
      est5On.setAttribute("src", "/assets/mob_estacion5On.svg");
      est6On.setAttribute("src", "/assets/mob_estacion6On.svg");
      est1Off.setAttribute("src", "/assets/desk_estacion1Off.svg");
      est2Off.setAttribute("src", "/assets/desk_estacion2Off.svg");
      est3Off.setAttribute("src", "/assets/desk_estacion3Off.svg");
      est4Off.setAttribute("src", "/assets/desk_estacion4Off.svg");
      est5Off.setAttribute("src", "/assets/desk_estacion5Off.svg");
      est6Off.setAttribute("src", "/assets/desk_estacion6Off.svg");
      recorridoOnElement.setAttribute("src", "/assets/desk_recorridoOn.svg");
      recorridoOffElement.setAttribute("src", "/assets/desk_recorridoOff.svg");
      boton1erSubElement.setAttribute("src", "/assets/desk_primerSub.svg");
      boton2doSubElement.setAttribute("src", "/assets/desk_segundoSub.svg");
    } else {
      est1On.setAttribute("src", "/assets/desk_estacion1On.svg");
      est2On.setAttribute("src", "/assets/desk_estacion2On.svg");
      est3On.setAttribute("src", "/assets/desk_estacion3On.svg");
      est4On.setAttribute("src", "/assets/desk_estacion4On.svg");
      est5On.setAttribute("src", "/assets/desk_estacion5On.svg");
      est6On.setAttribute("src", "/assets/desk_estacion6On.svg");
      est1Off.setAttribute("src", "/assets/desk_estacion1Off.svg");
      est2Off.setAttribute("src", "/assets/desk_estacion2Off.svg");
      est3Off.setAttribute("src", "/assets/desk_estacion3Off.svg");
      est4Off.setAttribute("src", "/assets/desk_estacion4Off.svg");
      est5Off.setAttribute("src", "/assets/desk_estacion5Off.svg");
      est6Off.setAttribute("src", "/assets/desk_estacion6Off.svg");
      recorridoOnElement.setAttribute("src", "/assets/desk_recorridoOn.svg");
      recorridoOffElement.setAttribute("src", "/assets/desk_recorridoOff.svg");
      boton1erSubElement.setAttribute("src", "/assets/desk_primerSub.svg");
      boton2doSubElement.setAttribute("src", "/assets/desk_segundoSub.svg");
    }
  }

  botonIdioma.addEventListener("click", cambiarIdioma);

  //botones (puntos) del mapa
  //mostrar punto actual si estaba oculto
  function mostrarPunto() {
    if (puntoActualElement.classList.contains("disabled")) {
      puntoActualElement.classList.remove("disabled");
    }
  }

  punto0Element.addEventListener("click", function () {
    switchScene(scenes[0]);
    if (document.body.classList.contains("mobile")) {
      showMapa();
    }
  });
  punto1Element.addEventListener("click", function () {
    switchScene(scenes[3]);
    if (document.body.classList.contains("mobile")) {
      showMapa();
    }
  });
  punto2Element.addEventListener("click", function () {
    switchScene(scenes[8]);
    if (document.body.classList.contains("mobile")) {
      showMapa();
    }
  });
  punto3Element.addEventListener("click", function () {
    switchScene(scenes[9]);
    if (document.body.classList.contains("mobile")) {
      showMapa();
    }
  });
  punto4Element.addEventListener("click", function () {
    switchScene(scenes[14]);
    if (document.body.classList.contains("mobile")) {
      showMapa();
    }
  });
  punto5Element.addEventListener("click", function () {
    switchScene(scenes[12]);
    if (document.body.classList.contains("mobile")) {
      showMapa();
    }
  });

  //posicionar punto indicador de la escena en curso
  function posicionPunto(scene) {
    let puntoActual = scene.data.punto;
    let posyActual = window.getComputedStyle(puntoActual);
    let posy = posyActual.getPropertyValue("top");
    let posxActual = window.getComputedStyle(puntoActual);
    let posx = posxActual.getPropertyValue("left");
    puntoActualElement.style.top = posy;
    puntoActualElement.style.left = posx;
    window.onresize = () => {
      posicionPunto(scene);
    };
  }

  //mostrar mapa(recorrido)
  function showMapa() {
    mapaElement.classList.toggle("enabled");
    recorridoOffElement.classList.toggle("disabled");
    recorridoOnElement.classList.toggle("enabled");
    if (panelElement.classList.contains("enabled")) {
      panelElement.classList.toggle("enabled");
      estacionesOffElement.classList.toggle("disabled");
      estacionesOnElement.classList.toggle("enabled");
    }
  }

  //mostrar panel (estciones)
  function mostrarPanel() {
    panelElement.classList.toggle("enabled");
    estacionesOffElement.classList.toggle("disabled");
    estacionesOnElement.classList.toggle("enabled");
    if (mapaElement.classList.contains("enabled")) {
      mapaElement.classList.toggle("enabled");
      recorridoOffElement.classList.toggle("disabled");
      recorridoOnElement.classList.toggle("enabled");
    }
  }

  recorridoOffElement.addEventListener("click", showMapa);
  recorridoOnElement.addEventListener("click", showMapa);
  estacionesOffElement.addEventListener("click", mostrarPanel);
  estacionesOnElement.addEventListener("click", mostrarPanel);

  //Cambia el mapa de subsuelo con el cambio de escena
  function mostrarMapa(orden) {
    if (orden <= 7) {
      primerSubsueloMapaElement.style.display = "block";
      segundoSubsueloMapaElement.style.display = "none";
      boton1erSubElement.style.display = "block";
      boton2doSubElement.style.display = "none";
      //probando
      vac1.style.visibility = "hidden";
      vac2.style.visibility = "visible";
    } else {
      primerSubsueloMapaElement.style.display = "none";
      segundoSubsueloMapaElement.style.display = "block";
      boton1erSubElement.style.display = "none";
      boton2doSubElement.style.display = "block";
      //probando
      vac2.style.visibility = "hidden";
      vac1.style.visibility = "visible";
    }
  }

  //boton cambiar Subsuelo
  function cambiar1Sub() {
    vac1.style.visibility = "hidden";
    vac2.style.visibility = "visible";
    primerSubsueloMapaElement.style.display = "block";
    segundoSubsueloMapaElement.style.display = "none";
    boton1erSubElement.style.display = "block";
    boton2doSubElement.style.display = "none";
    puntoActualElement.classList.toggle("disabled");
  }

  function cambiar2Sub() {
    vac2.style.visibility = "hidden";
    vac1.style.visibility = "visible";
    primerSubsueloMapaElement.style.display = "none";
    segundoSubsueloMapaElement.style.display = "block";
    boton1erSubElement.style.display = "none";
    boton2doSubElement.style.display = "block";
    puntoActualElement.classList.toggle("disabled");
  }

  vac1.addEventListener("click", cambiar1Sub);
  vac2.addEventListener("click", cambiar2Sub);

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function () {
      if (mql.matches) {
        document.body.classList.remove("desktop");
        document.body.classList.add("mobile");
      } else {
        document.body.classList.remove("mobile");
        document.body.classList.add("desktop");
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add("desktop");
  }

  //mostrar assets para desktop o mobile
  if (document.body.classList.contains("mobile")) {
    mapa1Img.setAttribute("src", "/assets/mob_mapa1.png");
    mapa2Img.setAttribute("src", "/assets/mob_mapa2.png");
    estacionesFondo.setAttribute("src", "/assets/mob_paneltxt.png");
    barrita.setAttribute("src", "./assets/mob_barrita.png");
    logosIber.setAttribute("src", "./assets/mob_logosIber.png");
    logosMuseos.setAttribute("src", "./assets/mob_logosMuseos.png");
    est1On.setAttribute("src", "./assets/mob_estacion1On.svg");
    est2On.setAttribute("src", "./assets/mob_estacion2On.svg");
    est3On.setAttribute("src", "./assets/mob_estacion3On.svg");
    est4On.setAttribute("src", "./assets/mob_estacion4On.svg");
    est5On.setAttribute("src", "./assets/mob_estacion5On.svg");
    est6On.setAttribute("src", "./assets/mob_estacion6On.svg");
  } else {
    mapa1Img.setAttribute("src", "/assets/desk_mapa1.png");
    mapa2Img.setAttribute("src", "/assets/desk_mapa2.png");
    estacionesFondo.setAttribute("src", "/assets/desk_paneltxt.png");
    barrita.setAttribute("src", "./assets/desk_barrita.png");
    logosIber.setAttribute("src", "./assets/desk_logosIber.png");
    logosMuseos.setAttribute("src", "./assets/desk_logosMuseos.png");
    est1On.setAttribute("src", "./assets/desk_estacion1On.svg");
    est2On.setAttribute("src", "./assets/desk_estacion2On.svg");
    est3On.setAttribute("src", "./assets/desk_estacion3On.svg");
    est4On.setAttribute("src", "./assets/desk_estacion4On.svg");
    est5On.setAttribute("src", "./assets/desk_estacion5On.svg");
    est6On.setAttribute("src", "./assets/desk_estacion6On.svg");
  }

  // Detect whether we are on a touch device.
  document.body.classList.add("no-touch");
  window.addEventListener("touchstart", function () {
    document.body.classList.remove("no-touch");
    document.body.classList.add("touch");
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add("tooltip-fallback");
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode,
    },
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function (data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" }
    );
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(
      data.faceSize,
      (100 * Math.PI) / 180,
      (120 * Math.PI) / 180
    );
    var view = new Marzipano.RectilinearView(
      data.initialViewParameters,
      limiter
    );

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true,
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function (hotspot) {
      //console.log(hotspot);
      var element = createLinkHotspotElement(hotspot);
      scene
        .hotspotContainer()
        .createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function (hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene
        .hotspotContainer()
        .createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view,
    };
  });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: -0.01, //0.03
    targetPitch: 0,
    targetFov: Math.PI / 2,
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add("enabled");
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener("click", toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add("fullscreen-enabled");
    fullscreenToggleElement.addEventListener("click", function () {
      screenfull.toggle();
    });
    screenfull.on("change", function () {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add("enabled");
      } else {
        fullscreenToggleElement.classList.remove("enabled");
      }
    });
  } else {
    document.body.classList.add("fullscreen-disabled");
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener("click", toggleSceneList);

  // Start with the scene list open on desktop.
  if (!document.body.classList.contains("mobile")) {
    showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function (scene) {
    var el = document.querySelector(
      '#sceneList .scene[data-id="' + scene.data.id + '"]'
    );
    el.addEventListener("click", function () {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      if (document.body.classList.contains("mobile")) {
        hideSceneList();
      }
    });
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector("#viewUp");
  var viewDownElement = document.querySelector("#viewDown");
  var viewLeftElement = document.querySelector("#viewLeft");
  var viewRightElement = document.querySelector("#viewRight");
  var viewInElement = document.querySelector("#viewIn");
  var viewOutElement = document.querySelector("#viewOut");

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod(
    "upElement",
    new Marzipano.ElementPressControlMethod(
      viewUpElement,
      "y",
      -velocity,
      friction
    ),
    true
  );
  controls.registerMethod(
    "downElement",
    new Marzipano.ElementPressControlMethod(
      viewDownElement,
      "y",
      velocity,
      friction
    ),
    true
  );
  controls.registerMethod(
    "leftElement",
    new Marzipano.ElementPressControlMethod(
      viewLeftElement,
      "x",
      -velocity,
      friction
    ),
    true
  );
  controls.registerMethod(
    "rightElement",
    new Marzipano.ElementPressControlMethod(
      viewRightElement,
      "x",
      velocity,
      friction
    ),
    true
  );
  controls.registerMethod(
    "inElement",
    new Marzipano.ElementPressControlMethod(
      viewInElement,
      "zoom",
      -velocity,
      friction
    ),
    true
  );
  controls.registerMethod(
    "outElement",
    new Marzipano.ElementPressControlMethod(
      viewOutElement,
      "zoom",
      velocity,
      friction
    ),
    true
  );

  function sanitize(s) {
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");
  }

  let reproducidos = [];

  //cambiar el numero en el boton estacion, cambiar el texto de los paneles
  function cambiarEstacion(estacion, idn, tiempo) {
    let todasEst = [
      est1On,
      est2On,
      est3On,
      est4On,
      est5On,
      est6On,
      est1Off,
      est2Off,
      est3Off,
      est4Off,
      est5Off,
      est6Off,
    ];

    todasEst.forEach((element) => element.classList.remove("enabled"));
    pPanelElementEsp.innerHTML = textos[`${estacion}`].esp;
    pPanelElementIng.innerHTML = textos[`${estacion}`].ing;
    mostrarEstacion(estacion);
  }

  function mostrarEstacion(estacion) {
    if (estacion == 0) {
      est1On.classList.add("enabled");
      est1Off.classList.add("enabled");
    } else if (estacion == 1) {
      est2On.classList.add("enabled");
      est2Off.classList.add("enabled");
    } else if (estacion == 2) {
      est3On.classList.toggle("enabled");
      est3Off.classList.toggle("enabled");
    } else if (estacion == 3) {
      est4On.classList.toggle("enabled");
      est4Off.classList.toggle("enabled");
    } else if (estacion == 4) {
      est5On.classList.toggle("enabled");
      est5Off.classList.toggle("enabled");
    } else {
      est6On.classList.toggle("enabled");
      est6Off.classList.toggle("enabled");
    }
  }

  //crea la data de la escena previa
  let escenaAnt = [];

  function sceneAnterior(scene) {
    escenaAnt.push(scene);
    if (escenaAnt.length > 2) {
      escenaAnt.shift();
    }
    return escenaAnt;
  }

  function switchScene(scene) {
    let est = scene.data.estacion;
    //let tiempo = track.duration - track.currentTime;
    let idn = scene.data.idn;

    sceneAnterior(scene);
    stopAutorotate();
    //startAutorotate();

    let ivp2 = { ...scene.data.initialViewParameters };
    let yaw = ivp2.yaw;
    let pitch = ivp2.pitch;

    if (
      scene.data.idn >= escenaAnt[0].data.idn ||
      scene.data.idn == 8 ||
      scene.data.idn == 0 ||
      scene.data.idn == 3
    ) {
      scene.view.setParameters(scene.data.initialViewParameters);
    } else if (scene.data.idn == 7 && escenaAnt[0].data.idn == 8) {
      ivp2.pitch = pitch - 0.6;
      ivp2.yaw = yaw + 2.6;
      scene.view.setParameters(ivp2);
    } else if (scene.data.idn == 12 && escenaAnt[0].data.idn == 14) {
      ivp2.yaw = yaw + 0.8;
      scene.view.setParameters(ivp2);
    } else if (scene.data.idn == 9 && escenaAnt[0].data.idn == 12) {
      ivp2.yaw = yaw + 0;
      scene.view.setParameters(ivp2);
    } else {
      ivp2.yaw = yaw + 3.15;
      scene.view.setParameters(ivp2);
    }

    function seguir() {
      scene.scene.switchTo();
      //startAutorotate();
      mostrarMapa(scene.data.idn);
      posicionPunto(scene);
      mostrarPunto();
      cambiarEstacion(est, scene.data.idn); //, tiempo);
    }

    /*
    function preguntarSeguir() {
      const modal = document.createElement("div");
      modal.classList.add("preguntarSeguir");
      const child = document.createElement("div");
      child.classList.add("preguntarSeguir-child");
      const text = document.createElement("p");
      text.classList.add("preguntarSeguir-p");
      const quedarse = document.createElement("div");
      quedarse.classList.add("quedarse");
      const seguirRecorrido = document.createElement("div");
      seguirRecorrido.classList.add("seguir");

      if (pPanelElementIng.classList.contains("enabled")) {
        text.innerHTML =
          "<p>The audio must stop in order to continue<br>Do you wish to continue the tour?</p>";
        quedarse.innerHTML = "<p>Keep listening</p>";
        seguirRecorrido.innerHTML = "<p>Continue <br>with the tour</p>";
      } else {
        text.innerHTML =
          "<p>Para continuar debe detenerse el audio en curso<br>¿Desea continuar el recorrido?</p>";
        quedarse.innerHTML = "<p>Seguir<br>escuchando</p>";
        seguirRecorrido.innerHTML = "<p>Continuar<br>recorrido</p>";
      }

      modal.appendChild(child);
      child.appendChild(text);
      child.appendChild(quedarse);
      child.appendChild(seguirRecorrido);

      document.body.appendChild(modal);

      function removeModal() {
        const modal = document.querySelector(".preguntarSeguir");
        if (modal) {
          modal.remove();
        }
      }

      function seguiryReproducior() {
        seguir();
        removeModal();
        playTrack(`${est}`);
        reproducidos.push(`${est}`);
      }

      modal.addEventListener("click", (event) => {
        if (event.target.className === "preguntarSeguir") {
          removeModal();
        }
      });

      quedarse.addEventListener("click", removeModal);

      seguirRecorrido.addEventListener("click", seguiryReproducior);
    }
    */

    switch (idn) {
      case 3:
      case 8:
      case 9:
      case 12:
      case 14:
        /*if (reproducidos.indexOf(`${est}`) === -1 && !track.ended) {
          preguntarSeguir();
        } else */
        if (reproducidos.indexOf(`${est}`) === -1) {
          playTrack(`${est}`), reproducidos.push(`${est}`);
          seguir();
        } else {
          seguir();
        }
        break;

      default:
        seguir();
    }
  }

  function showSceneList() {
    sceneListElement.classList.add("enabled");
    sceneListToggleElement.classList.add("enabled");
  }

  function hideSceneList() {
    sceneListElement.classList.remove("enabled");
    sceneListToggleElement.classList.remove("enabled");
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle("enabled");
    sceneListToggleElement.classList.toggle("enabled");
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains("enabled")) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains("enabled")) {
      autorotateToggleElement.classList.remove("enabled");
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add("enabled");
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {
    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement("div");
    wrapper.classList.add("hotspot");
    wrapper.classList.add("link-hotspot");

    // Create image element.
    var icon = document.createElement("img");
    icon.classList.add("link-hotspot-icon");
    icon.src = hotspot.imgIcon || "assets/link.png";

    //hotspot.imgIcon.slice(0, -7) + "ing.svg" || "assets/link.png";

    //agregar clase escalera al wrapper
    if (hotspot.hasOwnProperty("imgIcon")) {
      wrapper.classList.add("escalera");
      if (hotspot.imgIcon.slice(9, 12) == "bnd") {
        wrapper.classList.add("banderita");
      }
    }
    if (hotspot.imgIcon == "./assets/linkLlenop.png") {
      wrapper.classList.add("linkLlenop");
    }

    /*if (hotspot.imgIcon.slice(9, 11) == "es") {
      wrapper.classList.add("banderita");
    }*/

    // Set rotation transform.
    var transformProperties = [
      "-ms-transform",
      "-webkit-transform",
      "transform",
    ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = "rotate(" + hotspot.rotation + "rad)";
    }

    // Add click event handler.
    wrapper.addEventListener("click", function () {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement("div");
    tooltip.classList.add("hotspot-tooltip");
    tooltip.classList.add("link-hotspot-tooltip");
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {
    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement("div");
    wrapper.classList.add("hotspot");
    wrapper.classList.add("info-hotspot");

    // Create hotspot/tooltip header.
    var header = document.createElement("div");
    header.classList.add("info-hotspot-header");

    // Create image element.
    var iconWrapper = document.createElement("div");
    iconWrapper.classList.add("info-hotspot-icon-wrapper");
    var icon = document.createElement("img");
    icon.src = hotspot.imgIcon || "assets/fotoIco.png";
    icon.classList.add("info-hotspot-icon");
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement("div");
    titleWrapper.classList.add("info-hotspot-title-wrapper");
    var title = document.createElement("div");
    title.classList.add("info-hotspot-title");
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement("div");
    closeWrapper.classList.add("info-hotspot-close-wrapper");
    var closeIcon = document.createElement("img");
    if (document.body.classList.contains("mobile")) {
      closeIcon.src = "assets/cruzNegra.svg";
    } else {
      closeIcon.src = "assets/cruz.png";
    }
    closeIcon.classList.add("info-hotspot-close-icon");
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement("div");
    text.classList.add("info-hotspot-text");
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement("div");
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add("info-hotspot-modal");
    document.body.appendChild(modal);

    var toggle = function () {
      wrapper.classList.toggle("visible");
      modal.classList.toggle("visible");
    };

    //agregar clases linksPdf al wrapper
    if (hotspot.hasOwnProperty("imgIcon")) {
      header.classList.add("header-pdf");
      iconWrapper.classList.add("iconWrapper-pdf");
      titleWrapper.classList.add("titleWrapper-pdf");
      closeWrapper.classList.add("closeIcon-pdf");
      text.classList.add("text-pdf");
      modal.classList.add("modal-pdf");
    }

    // Show content when hotspot is clicked.
    wrapper
      .querySelector(".info-hotspot-header")
      .addEventListener("click", toggle);

    // Hide content when close icon is clicked.
    modal
      .querySelector(".info-hotspot-close-wrapper")
      .addEventListener("click", toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "wheel",
      "mousewheel",
    ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function (event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  //tracks
  /*if (window.navigator.vendor === "Google Inc.") {
      track.src = tracks[tk].pathOgg;
    } else {
      track.src = tracks[tk].pathMp3;
    }
  */
  /*
  audio.addEventListener("click", function () {
    document.querySelector("#audioOn").classList.toggle("disabled");
    document.querySelector("#audioMute").classList.toggle("enabled");
    mute_sound();
  });
  */

  //colocar subs correspondientes al audio
  function ActualizarSub(time, todosSubs) {
    const subtitulos = todosSubs[time];
    if (subtitulos !== undefined) {
      subElement.innerHTML = subtitulos;
    }
  }

  //esconder o mostrar subs y tiempo
  function showTiempoSubs(track) {
    if (track.duration - track.currentTime > 0) {
      subElement.style.display = "block";
      currentTimeElement.style.display = "block";
    } else if (track.duration - track.currentTime === 0) {
      subElement.style.display = "none";
      currentTimeElement.style.display = "none";
    }
  }

  //formatea minutos y segundos
  const calculateTime = (secs) => {
    if (isNaN(secs)) {
      return "cargando...";
    } else {
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${returnedSeconds}`;
    }
  };

  function actualizarSubtitulos(tk) {
    track.ontimeupdate = function () {
      currentTimeElement.textContent = calculateTime(
        track.duration - track.currentTime
      );
      if (pPanelElementIng.classList.contains("enabled")) {
        ActualizarSub(Math.floor(track.currentTime), SUBS.stations[`${tk}`]);
        showTiempoSubs(track);
      } else {
        ActualizarSub(Math.floor(track.currentTime), SUBS.estaciones[`${tk}`]);
        showTiempoSubs(track);
      }
    };
  }

  function mute_sound() {
    if (track.volume === 1) {
      track.volume = 0;
    } else if (track.volume === 0) {
      track.volume = 1;
    }
  }

  function playTrack(tk) {
    if (!isIos) {
      track.setAttribute("src", tracks[tk].pathMp3); //track.src = tracks[tk].pathOgg;
    } else {
      track.setAttribute("src", tracks[tk].pathMp3); //track.src = tracks[tk].pathMp3;
    }
    track.play();
    actualizarSubtitulos(tk);
  }

  function pausesong() {
    if (contenedorPlacaNegra.classList.contains("disabled")) {
      track.play();
    } else {
      track.pause();
    }
  }
  /*
  console.log(escenaAnt);

  function siguienteEstacion() {
    switchScene(scenes[++]);
  }

  function anteriorEstacion() {
    switchScene(scenes[--]);
  }

  avanzar.addEventListener("click", siguienteEstacion);
  retroceder.addEventListener("click", anteriorEstacion);
*/
  // Display the initial scene.
  switchScene(scenes[0]);
})();
