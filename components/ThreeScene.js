'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function ThreeScene({ onSelectHotspot }) {
  const mountRef = useRef(null);
  const [activeZone, setActiveZone] = useState('all');
  const [isRotating, setIsRotating] = useState(true);

  const isRotatingRef = useRef(isRotating);
  isRotatingRef.current = isRotating;

  const sceneObjectsRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    rowhouseGroup: null,
    zones: {},
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const getWidth = () => container.clientWidth || container.offsetWidth || 600;
    const getHeight = () => container.clientHeight || container.offsetHeight || 520;

    const width = getWidth();
    const height = getHeight();

    // 1. SCENE
    const scene = new THREE.Scene();

    // 2. CAMERA - Angled perspective on the rowhouse
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(16, 10, 18);

    // 3. RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. ORBIT CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 3.2, 0); // Focus on rowhouse center
    controls.minDistance = 8;
    controls.maxDistance = 35;
    controls.maxPolarAngle = Math.PI / 2 + 0.02; // Don't dip beneath ground
    controls.autoRotate = false;
    controls.update();

    // 5. MAIN ROWHOUSE GROUP
    const rowhouseGroup = new THREE.Group();
    scene.add(rowhouseGroup);

    // 6. REALISTIC ARCHITECTURAL MATERIALS (Crisp White Walls, Rich Browns, Limestone & Teak)
    // Crisp, clean luxury white architectural stucco for the house body
    const whiteFacadeMat = new THREE.MeshStandardMaterial({
      color: 0xf5f4ef,
      roughness: 0.32,
      metalness: 0.04,
    });

    // Real Architectural Brown Timber & Cedar
    const richBrownRoofMat = new THREE.MeshStandardMaterial({
      color: 0x4a301f, // Rich architectural brown cedar shingle roof
      roughness: 0.65,
      metalness: 0.08,
    });

    const warmCedarWoodMat = new THREE.MeshStandardMaterial({
      color: 0x8e5832, // Warm natural cedar/oak timber rafters & pergola
      roughness: 0.55,
      metalness: 0.06,
    });

    const darkWalnutWoodMat = new THREE.MeshStandardMaterial({
      color: 0x2e1c10, // Dark walnut / espresso wood trim & window frames
      roughness: 0.45,
      metalness: 0.08,
    });

    const teakWoodDeckMat = new THREE.MeshStandardMaterial({
      color: 0x73492a, // Real warm teak terrace & porch floor decking
      roughness: 0.62,
      metalness: 0.05,
    });

    const warmTimberSidingMat = new THREE.MeshStandardMaterial({
      color: 0x85542e, // Architectural horizontal timber wall cladding accent
      roughness: 0.58,
      metalness: 0.06,
    });

    // Real Cut Limestone Pillars & Chimney
    const naturalLimestoneMat = new THREE.MeshStandardMaterial({
      color: 0xd5cebe, // Natural light creamy-sand limestone
      roughness: 0.78,
      metalness: 0.08,
    });

    // Warm, golden interior glowing glass windows
    const glowingGlassMat = new THREE.MeshStandardMaterial({
      color: 0xfff0cc,
      emissive: 0xffa630,
      emissiveIntensity: 0.68,
      roughness: 0.12,
      metalness: 0.15,
      transparent: true,
      opacity: 0.88,
    });

    const glassBalconyMat = new THREE.MeshStandardMaterial({
      color: 0xe0f0fa,
      roughness: 0.08,
      metalness: 0.25,
      transparent: true,
      opacity: 0.55,
    });

    // Crystal clear swimming pool water
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x10c6f0,
      emissive: 0x0582a8,
      emissiveIntensity: 0.35,
      roughness: 0.1,
      metalness: 0.25,
      transparent: true,
      opacity: 0.85,
    });

    // Crisp white pool marble coping
    const poolMarbleCurbMat = new THREE.MeshStandardMaterial({
      color: 0xf2eee6,
      roughness: 0.35,
    });

    // Real Lush Green Lawn
    const lawnMat = new THREE.MeshStandardMaterial({
      color: 0x346e2a, // Realistic vibrant manicured lawn green
      roughness: 0.85,
      metalness: 0.02,
    });

    // 7. GROUND PLATFORM & LAWN
    const lawnGeo = new THREE.BoxGeometry(26, 0.5, 22);
    const lawnMesh = new THREE.Mesh(lawnGeo, lawnMat);
    lawnMesh.position.y = -0.25;
    lawnMesh.receiveShadow = true;
    rowhouseGroup.add(lawnMesh);

    // Stone Terrace Plinth Base
    const porchBaseGeo = new THREE.BoxGeometry(16, 0.3, 14);
    const porchBase = new THREE.Mesh(porchBaseGeo, naturalLimestoneMat);
    porchBase.position.set(0, 0.05, 0);
    porchBase.receiveShadow = true;
    rowhouseGroup.add(porchBase);

    // Real Teak Wood Porch Deck on Top
    const deckGeo = new THREE.BoxGeometry(15.6, 0.1, 13.6);
    const deckMesh = new THREE.Mesh(deckGeo, teakWoodDeckMat);
    deckMesh.position.set(0, 0.22, 0);
    deckMesh.receiveShadow = true;
    rowhouseGroup.add(deckMesh);

    // Plunge pool on the front-right
    const poolGeo = new THREE.BoxGeometry(5.5, 0.35, 3.8);
    const poolMesh = new THREE.Mesh(poolGeo, waterMat);
    poolMesh.position.set(4.5, 0.26, 4.2);
    rowhouseGroup.add(poolMesh);

    // Pool border rim (white marble)
    const poolCurbGeo = new THREE.BoxGeometry(5.9, 0.12, 4.2);
    const poolCurb = new THREE.Mesh(poolCurbGeo, poolMarbleCurbMat);
    poolCurb.position.set(4.5, 0.33, 4.2);
    rowhouseGroup.add(poolCurb);

    // 8. MAIN ROWHOUSE CENTRAL LIVING SALON (Double-height Gabled Structure in White & Brown)
    const centralLivingGroup = new THREE.Group();

    // Central Main Body (Double Height in Crisp White Stucco)
    const centerWallGeo = new THREE.BoxGeometry(8, 4.8, 8);
    const centerWall = new THREE.Mesh(centerWallGeo, whiteFacadeMat);
    centerWall.position.set(0, 2.5, 0);
    centerWall.castShadow = true;
    centerWall.receiveShadow = true;
    centralLivingGroup.add(centerWall);

    // Front Expansive Cathedral Glass Window (Glowing Warm Interior)
    const frontGlassGeo = new THREE.BoxGeometry(6.6, 4.2, 0.2);
    const frontGlass = new THREE.Mesh(frontGlassGeo, glowingGlassMat);
    frontGlass.position.set(0, 2.5, 4.02);
    centralLivingGroup.add(frontGlass);

    // Architectural Window Mullions / Grid (Dark Walnut wood frame)
    const mullionHorizGeo = new THREE.BoxGeometry(6.8, 0.1, 0.3);
    for (let my of [1.6, 2.5, 3.4]) {
      const mh = new THREE.Mesh(mullionHorizGeo, darkWalnutWoodMat);
      mh.position.set(0, my, 4.05);
      centralLivingGroup.add(mh);
    }

    const mullionVertGeo = new THREE.BoxGeometry(0.12, 4.2, 0.3);
    for (let mx of [-2.2, 0, 2.2]) {
      const mv = new THREE.Mesh(mullionVertGeo, darkWalnutWoodMat);
      mv.position.set(mx, 2.5, 4.05);
      centralLivingGroup.add(mv);
    }

    // 9. ICONIC PITCHED GABLED ROOF IN REAL ARCHITECTURAL BROWN
    const roofPitchedGroup = new THREE.Group();

    // Gabled Roof Left Slope (Rich Cedar Shingle Brown)
    const leftSlopeGeo = new THREE.BoxGeometry(6.2, 0.35, 9.6);
    const leftSlope = new THREE.Mesh(leftSlopeGeo, richBrownRoofMat);
    leftSlope.position.set(-2.4, 5.7, 0);
    leftSlope.rotation.z = Math.PI / 6; // 30 degrees
    leftSlope.castShadow = true;
    roofPitchedGroup.add(leftSlope);

    // Gabled Roof Right Slope (Rich Cedar Shingle Brown)
    const rightSlopeGeo = new THREE.BoxGeometry(6.2, 0.35, 9.6);
    const rightSlope = new THREE.Mesh(rightSlopeGeo, richBrownRoofMat);
    rightSlope.position.set(2.4, 5.7, 0);
    rightSlope.rotation.z = -Math.PI / 6; // -30 degrees
    rightSlope.castShadow = true;
    roofPitchedGroup.add(rightSlope);

    // Ridge Beam at the peak (Dark Walnut)
    const ridgeGeo = new THREE.BoxGeometry(0.4, 0.4, 9.8);
    const ridgeMesh = new THREE.Mesh(ridgeGeo, darkWalnutWoodMat);
    ridgeMesh.position.set(0, 6.55, 0);
    roofPitchedGroup.add(ridgeMesh);

    // Warm timber soffit rafters under the eaves (Cedar Brown)
    const rafterGeo = new THREE.BoxGeometry(0.18, 0.25, 9.5);
    for (let rx of [-3.8, -2.0, 0, 2.0, 3.8]) {
      const rafter = new THREE.Mesh(rafterGeo, warmCedarWoodMat);
      rafter.position.set(rx, 4.8, 0);
      roofPitchedGroup.add(rafter);
    }

    // Front Gable Infill Slats (Warm Cedar Horizontal Timber Siding)
    for (let gy = 4.95; gy <= 6.35; gy += 0.28) {
      const halfW = (6.55 - gy) * 1.95;
      if (halfW > 0.25) {
        const slatGeo = new THREE.BoxGeometry(halfW * 2, 0.22, 0.15);
        const slat = new THREE.Mesh(slatGeo, warmCedarWoodMat);
        slat.position.set(0, gy, 4.02);
        roofPitchedGroup.add(slat);
      }
    }

    centralLivingGroup.add(roofPitchedGroup);

    // 10. NATURAL CUT LIMESTONE COLUMNS / PILLARS (Front Porch Architecture)
    for (let cx of [-3.6, 3.6]) {
      const columnGeo = new THREE.BoxGeometry(0.85, 4.6, 0.85);
      const columnMesh = new THREE.Mesh(columnGeo, naturalLimestoneMat);
      columnMesh.position.set(cx, 2.4, 4.2);
      columnMesh.castShadow = true;
      centralLivingGroup.add(columnMesh);
    }

    // Stone Chimney on the left roof (Natural Limestone)
    const chimneyGeo = new THREE.BoxGeometry(1.2, 4.5, 1.4);
    const chimneyMesh = new THREE.Mesh(chimneyGeo, naturalLimestoneMat);
    chimneyMesh.position.set(-2.8, 5.8, 1.5);
    chimneyMesh.castShadow = true;
    centralLivingGroup.add(chimneyMesh);

    // Chimney cap (Dark Walnut / Copper)
    const capGeo = new THREE.BoxGeometry(1.5, 0.15, 1.7);
    const capMesh = new THREE.Mesh(capGeo, darkWalnutWoodMat);
    capMesh.position.set(-2.8, 8.1, 1.5);
    centralLivingGroup.add(capMesh);

    rowhouseGroup.add(centralLivingGroup);

    // 11. SIDE ROWHOUSE WING / PRIVATE MASTER SUITE (Right Side)
    const rightWingGroup = new THREE.Group();

    // Right Wing Wall (Crisp White Stucco)
    const rightWallGeo = new THREE.BoxGeometry(4.5, 3.6, 7);
    const rightWall = new THREE.Mesh(rightWallGeo, whiteFacadeMat);
    rightWall.position.set(5.8, 1.9, -0.5);
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    rightWingGroup.add(rightWall);

    // Right Wing Timber Accent Cladding on Front
    const rightTimberCladGeo = new THREE.BoxGeometry(4.3, 1.0, 0.1);
    const rightTimberClad = new THREE.Mesh(rightTimberCladGeo, warmTimberSidingMat);
    rightTimberClad.position.set(5.8, 0.6, 3.03);
    rightWingGroup.add(rightTimberClad);

    // Right Wing Roof (Cantilevered terrace with Teak Sundeck)
    const rightRoofGeo = new THREE.BoxGeometry(5.2, 0.25, 7.8);
    const rightRoof = new THREE.Mesh(rightRoofGeo, teakWoodDeckMat);
    rightRoof.position.set(5.8, 3.75, -0.5);
    rightWingGroup.add(rightRoof);

    // Terrace Glass Railing with Walnut Handrail
    const railGeo = new THREE.BoxGeometry(4.8, 0.65, 0.08);
    const railMesh = new THREE.Mesh(railGeo, glassBalconyMat);
    railMesh.position.set(5.8, 4.2, 3.2);
    rightWingGroup.add(railMesh);

    const railCapGeo = new THREE.BoxGeometry(5.0, 0.08, 0.12);
    const railCap = new THREE.Mesh(railCapGeo, darkWalnutWoodMat);
    railCap.position.set(5.8, 4.55, 3.2);
    rightWingGroup.add(railCap);

    // Right Wing Windows (Warm amber glow with Walnut frame)
    const rightWinGeo = new THREE.BoxGeometry(3.2, 2.0, 0.15);
    const rightWin = new THREE.Mesh(rightWinGeo, glowingGlassMat);
    rightWin.position.set(5.8, 2.1, 3.02);
    rightWingGroup.add(rightWin);

    const rightWinFrameGeo = new THREE.BoxGeometry(3.35, 2.15, 0.1);
    const rightWinFrame = new THREE.Mesh(rightWinFrameGeo, darkWalnutWoodMat);
    rightWinFrame.position.set(5.8, 2.1, 3.0);
    rightWingGroup.add(rightWinFrame);

    rowhouseGroup.add(rightWingGroup);

    // 12. SIDE ROWHOUSE WING / GUEST SUITE & GARAGE (Left Side)
    const leftWingGroup = new THREE.Group();

    // Left Wing Wall (Crisp White Stucco)
    const leftWallGeo = new THREE.BoxGeometry(4.5, 3.6, 7);
    const leftWall = new THREE.Mesh(leftWallGeo, whiteFacadeMat);
    leftWall.position.set(-5.8, 1.9, -0.5);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    leftWingGroup.add(leftWall);

    // Left Wing Timber Accent Panel
    const leftTimberCladGeo = new THREE.BoxGeometry(4.3, 1.0, 0.1);
    const leftTimberClad = new THREE.Mesh(leftTimberCladGeo, warmTimberSidingMat);
    leftTimberClad.position.set(-5.8, 0.6, 3.03);
    leftWingGroup.add(leftTimberClad);

    // Left Wing Roof (Matching cantilevered Teak terrace)
    const leftRoofGeo = new THREE.BoxGeometry(5.2, 0.25, 7.8);
    const leftRoof = new THREE.Mesh(leftRoofGeo, teakWoodDeckMat);
    leftRoof.position.set(-5.8, 3.75, -0.5);
    leftWingGroup.add(leftRoof);

    // Pergola Louvers on Left Wing Portico (Warm Cedar Wood)
    const pergolaBeamGeo = new THREE.BoxGeometry(0.12, 0.22, 3.2);
    for (let px of [-4.2, -5.0, -5.8, -6.6, -7.4]) {
      const pbeam = new THREE.Mesh(pergolaBeamGeo, warmCedarWoodMat);
      pbeam.position.set(px, 3.95, 1.6);
      leftWingGroup.add(pbeam);
    }

    // Left Wing Front Windows
    const leftWinGeo = new THREE.BoxGeometry(3.2, 2.0, 0.15);
    const leftWin = new THREE.Mesh(leftWinGeo, glowingGlassMat);
    leftWin.position.set(-5.8, 2.1, 3.02);
    leftWingGroup.add(leftWin);

    const leftWinFrameGeo = new THREE.BoxGeometry(3.35, 2.15, 0.1);
    const leftWinFrame = new THREE.Mesh(leftWinFrameGeo, darkWalnutWoodMat);
    leftWinFrame.position.set(-5.8, 2.1, 3.0);
    leftWingGroup.add(leftWinFrame);

    rowhouseGroup.add(leftWingGroup);

    // 13. REALISTIC PINE TREES (Surrounding Nature Landscape)
    const treePositions = [
      [-9.5, 0, 5],
      [-10.5, 0, -4],
      [10, 0, -3],
      [9.5, 0, 5.5],
      [-4.5, 0, -8],
      [4.5, 0, -8],
    ];

    const treeTrunkMat = new THREE.MeshStandardMaterial({
      color: 0x4a3220, // Real tree bark brown
      roughness: 0.9,
    });

    const pineMat = new THREE.MeshStandardMaterial({
      color: 0x1e492c, // Real fresh evergreen pine
      roughness: 0.75,
      metalness: 0.05,
    });

    treePositions.forEach(([tx, ty, tz]) => {
      // Tree Trunk
      const trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 2.2, 6);
      const trunk = new THREE.Mesh(trunkGeo, treeTrunkMat);
      trunk.position.set(tx, 1.1, tz);
      trunk.castShadow = true;
      rowhouseGroup.add(trunk);

      // Conical Pine Foliage Tiers
      for (let t = 0; t < 3; t++) {
        const coneGeo = new THREE.ConeGeometry(1.6 - t * 0.35, 2.0 - t * 0.3, 7);
        const cone = new THREE.Mesh(coneGeo, pineMat);
        cone.position.set(tx, 2.4 + t * 1.2, tz);
        cone.castShadow = true;
        rowhouseGroup.add(cone);
      }
    });

    // 14. FLOATING PARTICLES (Starlight / Embers)
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 30;
      particlePositions[i + 1] = Math.random() * 16;
      particlePositions[i + 2] = (Math.random() - 0.5) * 30;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffd985,
      size: 0.22,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 15. REALISTIC DAY/DUSK ARCHITECTURAL LIGHTING
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.4); // Natural sky fill
    scene.add(ambientLight);

    // Bright Directional Sunlight casting crisp realistic shadows
    const sunLight = new THREE.DirectionalLight(0xffeed4, 2.6);
    sunLight.position.set(16, 26, 14);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    // Soft sky rim light from the opposite angle
    const skyRimLight = new THREE.DirectionalLight(0xb2d6f7, 0.85);
    skyRimLight.position.set(-15, 18, -12);
    scene.add(skyRimLight);

    // Interior Warm Glow Light (radiating from inside the house)
    const interiorWarmLight = new THREE.PointLight(0xffa229, 4.0, 24);
    interiorWarmLight.position.set(0, 3.2, 2.5);
    scene.add(interiorWarmLight);

    // Front Porch Accent Light
    const porchLight = new THREE.PointLight(0xffd58c, 3.2, 16);
    porchLight.position.set(0, 2.0, 5.0);
    scene.add(porchLight);

    // Pool turquoise light
    const poolLight = new THREE.PointLight(0x00d2ff, 2.8, 12);
    poolLight.position.set(4.5, 1.2, 4.2);
    scene.add(poolLight);

    sceneObjectsRef.current = {
      scene,
      camera,
      renderer,
      controls,
      rowhouseGroup,
      zones: { centralLivingGroup, rightWingGroup, leftWingGroup },
    };

    // 16. RESIZE OBSERVER
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth || container.offsetWidth || 600;
      const h = container.clientHeight || container.offsetHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    // 17. ANIMATION LOOP
    let animId;
    const startTime = performance.now();

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      const time = (performance.now() - startTime) * 0.001;

      // Gentle auto-rotation
      if (isRotatingRef.current) {
        rowhouseGroup.rotation.y += 0.003;
      }

      // Gentle water ripple
      poolMesh.position.y = 0.25 + Math.sin(time * 2.8) * 0.015;

      // Gentle light pulse for warm cozy interior
      interiorWarmLight.intensity = 4.2 + Math.sin(time * 2) * 0.4;

      controls.update();
      renderer.render(scene, camera);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      controls.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleZoneFocus = (zoneKey, label) => {
    setActiveZone(zoneKey);
    const { zones } = sceneObjectsRef.current;
    if (!zones) return;

    if (onSelectHotspot) {
      onSelectHotspot(label);
    }
  };

  return (
    <div className="three-scene-wrapper">
      <div ref={mountRef} className="three-canvas-container" />

      {/* Floating 3D Control Bar */}
      <div className="three-overlay-controls">
        <div className="three-floor-selector">
          <span className="selector-label">Inspect Section:</span>
          <div className="floor-buttons-scroll">
            <button
              type="button"
              className={`floor-btn ${activeZone === 'all' ? 'active' : ''}`}
              onClick={() => handleZoneFocus('all', 'Full Rowhouse Elevation')}
            >
              Full Elevation
            </button>
            <button
              type="button"
              className={`floor-btn ${activeZone === 'salon' ? 'active' : ''}`}
              onClick={() => handleZoneFocus('salon', 'Double-Height Living Salon')}
            >
              Cathedral Salon
            </button>
            <button
              type="button"
              className={`floor-btn ${activeZone === 'terrace' ? 'active' : ''}`}
              onClick={() => handleZoneFocus('terrace', 'Private Sundeck & Suite')}
            >
              Sundeck Terrace
            </button>
            <button
              type="button"
              className={`floor-btn ${activeZone === 'pool' ? 'active' : ''}`}
              onClick={() => handleZoneFocus('pool', 'Garden Plunge Pool')}
            >
              Plunge Pool
            </button>
          </div>
        </div>

        <div className="three-footer-hint">
          <span>✨ Drag 360° to Orbit Rowhouse • Pinch to Zoom</span>
          <button
            type="button"
            className="auto-rotate-toggle"
            onClick={() => setIsRotating(!isRotating)}
          >
            {isRotating ? '⏸ Pause Orbit' : '▶ Play Orbit'}
          </button>
        </div>
      </div>
    </div>
  );
}
