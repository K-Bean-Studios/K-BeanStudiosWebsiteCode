import react from 'react';
import csbanner from './Assets/Crash Simulator Banner.jpg';
import fbbanner from './Assets/Fally Blocks Banner.jpg';
import jbbanner from './Assets/Jumpii Boii Banner.jpg';
import './Games.css';

function Games() {
    return (
        <div>
            <section className='title'>
                <h1 className='title'>Games!</h1>
            </section>
            <div className="card-grid">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img
                                src={csbanner}
                                alt="Crash Simulator Banner"
                            />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">Crash Simulator</p>
                            </div>
                        </div>
                        <div className="content">
                            A game
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img
                                src={fbbanner}
                                alt="Crash Simulator Banner"
                            />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4"><a href='games/fallyblocks'>Fally Blocks</a></p>
                            </div>
                        </div>
                        <div className="content">
                            A game
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img
                                src={jbbanner}
                                alt="Crash Simulator Banner"
                            />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4"><a href='games/jumpiiboii'>Jumpii Boii</a></p>
                            </div>
                        </div>
                        <div className="content">
                            A game
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games;