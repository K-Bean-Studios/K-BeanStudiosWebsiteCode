import { useEffect } from 'react';
import { initUnity } from './script';
import './TemplateData/style.css';

function FallyBlocks() {
    /* global createUnityInstance */
    useEffect(() => {
        initUnity();
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <div id="unity-container" className="unity-desktop">
                <canvas id="unity-canvas" width={960} height={600}></canvas>
                <div id="unity-loading-bar">
                    <div id="unity-logo"></div>
                    <div id="unity-progress-bar-empty">
                        <div id="unity-progress-bar-full"></div>
                    </div>
                </div>
                <div id="unity-warning"></div>
                <div id="unity-footer">
                    <div id="unity-fullscreen-button"></div>
                    <div id="unity-build-title">Fally Blocks</div>
                    <p style={{ fontStyle: 'normal' }}>A&D to move, space to restart</p>
                </div>
            </div>
        </div>
    );
}

export default FallyBlocks;