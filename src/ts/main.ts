import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import SplitType from 'split-type';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Types
interface Scene3D {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
}

interface AnimationState {
    isScrolling: boolean;
    currentSection: number;
}

// Class for managing 3D scenes
class SceneManager {
    private scenes: Map<string, Scene3D>;
    private animationState: AnimationState;
    private lenis: Lenis;

    constructor() {
        this.scenes = new Map();
        this.animationState = {
            isScrolling: false,
            currentSection: 0
        };

        // Initialize smooth scroll
        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true
        });

        this.init();
    }

    private init(): void {
        // Initialize hero scene
        this.initHeroScene();
        
        // Initialize text animations
        this.initTextAnimations();
        
        // Initialize scroll animations
        this.initScrollAnimations();
        
        // Start animation loop
        this.animate();
    }

    private initHeroScene(): void {
        const container = document.getElementById('hero-3d');
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Add initial 3D objects
        this.addHeroObjects(scene);

        camera.position.z = 5;

        this.scenes.set('hero', { scene, camera, renderer });
    }

    private addHeroObjects(scene: THREE.Scene): void {
        // Add your 3D objects here
        // Example: Moving truck model
        const geometry = new THREE.BoxGeometry(2, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x4CAF50 });
        const truck = new THREE.Mesh(geometry, material);
        scene.add(truck);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(ambientLight, directionalLight);

        // Animate truck
        gsap.to(truck.rotation, {
            y: Math.PI * 2,
            duration: 8,
            repeat: -1,
            ease: "none"
        });
    }

    private initTextAnimations(): void {
        // Split and animate text
        const splitTexts = document.querySelectorAll('.split-text');
        splitTexts.forEach(text => {
            const split = new SplitType(text as HTMLElement, { types: 'chars' });
            gsap.from(split.chars, {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: text,
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }

    private initScrollAnimations(): void {
        // Horizontal scroll for services section
        gsap.to('.services-wrapper', {
            x: () => -(document.querySelector('.services-wrapper')?.scrollWidth || 0) + window.innerWidth,
            ease: 'none',
            scrollTrigger: {
                trigger: '.services-horizontal',
                start: 'top top',
                end: () => `+=${document.querySelector('.services-wrapper')?.scrollWidth || 0}`,
                scrub: 1,
                pin: true
            }
        });
    }

    private animate = (): void => {
        requestAnimationFrame(this.animate);

        // Update Lenis smooth scroll
        this.lenis.raf(performance.now());

        // Render all scenes
        this.scenes.forEach(({ scene, camera, renderer }) => {
            renderer.render(scene, camera);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SceneManager();
}); 