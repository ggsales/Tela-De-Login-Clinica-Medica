




export default function Layout() {
    return (

        <>
            <div className="video-box">
                <video id='videoBG' autoPlay muted loop >
                    <source src='assets/videos/bg.mp4' type='video/mp4' />
                </video>
                <div className="overlay-bg"></div>
            </div>

        </>
    )
}