import react from 'react';
import './Home.css'

function Home() {
    return (
        <div>
            <section className='home-section'>
                <h1 className='title is-3'>Welcome to K-Bean Studios!</h1>
            </section>
            <section className='intro-section'>
                <div className='mt-6 has-text-centered'>
                    <h2 className='title has-text-white is-4'>We're a small game-making studio publishing games for others to play!</h2>
                </div>
                <div className='mt-6 has-text-left'>
                    <h2 className='subtitle has-text-white'>Explore our website:</h2>
                    <div className='card has-background-grey-dark'>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-left'>
                                    <figure className='image is-75x75'>
                                        <img src="https://bulma.io/assets/images/placeholders/96x96.png" alt="Games" />
                                    </figure>
                                </div>
                                <div className='media-content' style={{ display: 'flex', alignItems: 'center' }}>
                                    <p className='title is-4 has-text-grey-lighter'><span className='has-text-primary'><a href='/games'>Check out our games!</a></span> <br></br><br></br> We got <span className='has-text-danger'>Arcade-style</span>, <span className='has-text-warning'>simulator</span>, and <span className='has-text-info'>shooters</span> ready-to-play! </p>
                                </div>
                            </div>
                        </div>
                        <div className='content'>
                        </div>
                    </div>
                    <div className='card has-background-grey-dark'>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-left'>
                                    <figure className='image is-75x75'>
                                        <img src="https://bulma.io/assets/images/placeholders/96x96.png" alt="Games" />
                                    </figure>
                                </div>
                                <div className='media-content' style={{ display: 'flex', alignItems: 'center' }}>
                                    <p className='title is-4 has-text-grey-lighter'><span className='has-text-info'><a href='/about'>Learn about us!</a></span> <br></br><br></br> Having been started in <span className='has-text-success'>2021</span>, we have a lot of intersting <span className='has-text-danger'>history</span> behind us!</p>
                                </div>
                            </div>
                        </div>
                        <div className='content'>
                        </div>
                    </div>
                    <div className='card has-background-grey-dark'>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-left'>
                                    <figure className='image is-75x75'>
                                        <img src="https://bulma.io/assets/images/placeholders/96x96.png" alt="Games" />
                                    </figure>
                                </div>
                                <div className='media-content' style={{ display: 'flex', alignItems: 'center' }}>
                                    <p className='title is-4 has-text-grey-lighter'><span className='has-text-warning'><a href='/current-projects'>Check our current projects!</a></span> <br></br><br></br>We have <span className='has-text-info'>much</span> in mind, check out the list of <span className='has-text-danger'>current</span> and <span className='has-text-success'>planned</span> projects!</p>
                                </div>
                            </div>
                        </div>
                        <div className='content'>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;