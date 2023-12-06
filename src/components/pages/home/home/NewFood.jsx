import YouTube from 'react-youtube';

const NewFood = () => {
    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const _onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <div className='mt-16'>
            <h2 className="lg:text-5xl text-3xl font-bold mb-10 px-8 md:px-0">Community Food Share ...</h2>
            <YouTube videoId="gnj7YSdScyo" opts={opts} onReady={_onReady} />
        </div>
    );
};

export default NewFood;
