function Banner({ img, title }) {
    const bannerImg = { backgroundImage: `url(${img})` };

    return (
        <div className="banner" style={bannerImg}>
            <div className="banner-overlay"></div>
            <h1>{title}</h1>
        </div>
    );
}

export default Banner;
