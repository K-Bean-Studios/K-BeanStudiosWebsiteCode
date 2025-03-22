import react from 'react';
import { useEffect } from 'react';
import { initUnity } from './script';
import './TemplateData/style.css'

function Jumpiiboii() {
    /* global createUnityInstance */
    useEffect(() => {
        initUnity();
      }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <div id="unity-container" className='unity-desktop'>
                <canvas id="unity-canvas" width={960} height={1000}></canvas>
                <div id="unity-loading-bar">
                    <div id="unity-logo"></div>
                    <div id="unity-progress-bar-empty">
                        <div id="unity-progress-bar-full"></div>
                    </div>
                </div>
                <div id="unity-warning"></div>
                <div id="unity-footer">
                    <div id="unity-fullscreen-button"></div>
                    <div id="unity-build-title">Jumpii boii</div>
                    <p style={{ fontStyle: 'normal' }}>WASD to move, R to reset, M for main menu</p>
                </div>
            </div>
        </div>
    )
}

export default Jumpiiboii;