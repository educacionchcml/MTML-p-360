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

  // Grab elements from DOM.
  var panoElement = document.querySelector("#pano");
  var sceneNameElement = document.querySelector("#titleBar .sceneName");
  var sceneListElement = document.querySelector("#sceneList");
  var sceneElements = document.querySelectorAll("#sceneList .scene");
  var sceneListToggleElement = document.querySelector("#sceneListToggle");
  var autorotateToggleElement = document.querySelector("#autorotateToggle");
  var fullscreenToggleElement = document.querySelector("#fullscreenToggle");

  //***EDITANDO***
  //inicio
  let contenedorPlacaNegra = document.querySelector(".contenedorPlacaNegra");
  let boton360 = document.querySelector(".boton360");

  //nav
  let logoElement = document.querySelector(".logo");
  let botonIdioma = document.querySelector("#idioma");
  let botonSubtitulos = document.querySelector("#subtitulos");
  let ruedita = document.querySelector("#ruedita");

  //estaciones
  let panelElement = document.querySelector(".ContenedorPanel");
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
  let punto4Element = document.querySelector("#punto4");
  let punto5Element = document.querySelector("#punto5");
  let puntoActualElement = document.querySelector("#puntoActual");

  //subtitulos
  let subElement = document.querySelector(".sub");

  /*audio*/
  let track = document.createElement("audio");
  let muteElement = document.querySelector(".audios");
  let currentTimeElement = document.querySelector("#currentTime");

  pPanelElementEsp.innerHTML = textos[0].esp;

  //empezar
  function empezar() {
    contenedorPlacaNegra.classList.add("disabled");
  }

  boton360.addEventListener("click", empezar);

  //cambiar idioma
  function cambiarIdioma() {
    pPanelElementEsp.classList.toggle("disabled");
    pPanelElementIng.classList.toggle("enabled");
  }

  botonIdioma.addEventListener("click", cambiarIdioma);

  //botones (puntos) del mapa
  //mostrar punto actual si estaba oculto
  function mostrarPunto() {
    if (puntoActualElement.classList.contains("disabled")) {
      puntoActualElement.classList.toggle("disabled");
    }
  }

  punto0Element.addEventListener("click", function () {
    switchScene(scenes[0]);
    mostrarPunto();
  });
  punto1Element.addEventListener("click", function () {
    switchScene(scenes[3]);
    mostrarPunto();
  });
  punto2Element.addEventListener("click", function () {
    switchScene(scenes[8]);
    mostrarPunto();
  });
  punto3Element.addEventListener("click", function () {
    switchScene(scenes[9]);
    mostrarPunto();
  });
  punto4Element.addEventListener("click", function () {
    switchScene(scenes[12]);
    mostrarPunto();
  });
  punto5Element.addEventListener("click", function () {
    switchScene(scenes[14]);
    mostrarPunto();
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
  }

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
  function mostrarMapa(scene) {
    let sceneActual = scene.data.id;
    let orden = sceneActual.split("-");

    if (orden[0] <= 7) {
      primerSubsueloMapaElement.style.display = "block";
      segundoSubsueloMapaElement.style.display = "none";
      boton1erSubElement.style.display = "block";
      boton2doSubElement.style.display = "none";
    } else {
      primerSubsueloMapaElement.style.display = "none";
      segundoSubsueloMapaElement.style.display = "block";
      boton1erSubElement.style.display = "none";
      boton2doSubElement.style.display = "block";
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

  //***EDITANDO***

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
    yawSpeed: 0.03,
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

  /*editado*/

  function switchScene(scene) {
    sceneAnterior(scene);
    stopAutorotate();

    let ivp2 = { ...scene.data.initialViewParameters };
    let yaw = ivp2.yaw;
    let pitch = ivp2.pitch;

    if (scene.data.idn >= escenaAnt[0].data.idn || scene.data.idn === 8) {
      scene.view.setParameters(scene.data.initialViewParameters);
    } else if (
      scene.data.idn >= escenaAnt[0].data.idn ||
      scene.data.idn === 7
    ) {
      ivp2.yaw = yaw + 2;
      ivp2.pitch = pitch - 0.5;
      scene.view.setParameters(ivp2);
    } else {
      ivp2.yaw = yaw + 3.15;
      scene.view.setParameters(ivp2);
    }

    scene.scene.switchTo();
    cambiarTextos(scene.data.idn);
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
    mostrarMapa(scene); //editado
    posicionPunto(scene); //editado
  }

  let escenaAnt = [];

  function sceneAnterior(scene) {
    escenaAnt.push(scene);
    if (escenaAnt.length > 2) {
      escenaAnt.shift();
    }
    return escenaAnt;
  }

  //cambiar texto
  function cambiarTextos(id) {
    if (id <= 2) {
      let nuevotexto = document.createElement("div");
      nuevotexto.textContent = textos[0].esp;
      pPanelElementEsp.appendChild(nuevotexto);
      est1On.classList.toggle("enabled");
      est1Off.classList.toggle("enabled");
      /*pPanelElementEsp.innerHTML = textos[0].esp;
      pPanelElementIng.innerHTML = textos[0].ing;
      est1On.classList.toggle("enabled");*/
    } else if (id > 2 && id <= 7) {
      pPanelElementEsp.innerHTML = textos[1].esp;
      pPanelElementIng.innerHTML = textos[1].ing;
      est2On.classList.toggle("enabled");
      est2Off.classList.toggle("enabled");
    } else if (id === 8) {
      pPanelElementEsp.innerHTML = textos[2].esp;
      pPanelElementIng.innerHTML = textos[2].ing;
      est3On.classList.toggle("enabled");
      est3Off.classList.toggle("enabled");
    } else if (id > 8 && id <= 11) {
      pPanelElementEsp.innerHTML = textos[3].esp;
      pPanelElementIng.innerHTML = textos[3].ing;
      est4On.classList.toggle("enabled");
      est4Off.classList.toggle("enabled");
    } else if (id > 11 && id <= 18) {
      pPanelElementEsp.innerHTML = textos[4].esp;
      pPanelElementIng.innerHTML = textos[4].ing;
      est5On.classList.toggle("enabled");
      est5Off.classList.toggle("enabled");
    } else if (id >= 19) {
      pPanelElementEsp.innerHTML = textos[5].esp;
      pPanelElementIng.innerHTML = textos[5].ing;
      est6On.classList.toggle("enabled");
      est6Off.classList.toggle("enabled");
    }
  }

  /*editado */

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  //resalta el nombre de la escena actual
  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute("data-id") === scene.data.id) {
        el.classList.add("current");
      } else {
        el.classList.remove("current");
      }
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
    icon.src = "img/link.png";
    icon.classList.add("link-hotspot-icon");

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
    icon.src = "img/info.png";
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
    closeIcon.src = "img/close.png";
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

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  /*
    currentTimeElement.textContent = calculateTime(
      track.duration - track.currentTime
    )
*/

  function mute_sound() {
    track.volume = 0;
    volume.value = 0;
  }

  function playTrack(tk) {
    track.src = tracks[tk].path;
    pausesong();
    console.log("sonido pausado");
  }

  function pausesong() {
    track.pause();
  }

  function volume_change() {
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
  }

  function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
  }

  // Display the initial scene.
  switchScene(scenes[0]);
})();
