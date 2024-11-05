import Image from "next/image";
export default function Home() {
  return (
    <main className="main">
      <section className="Banner">
        <div className="bannerContent">
          <div className="bannerContentTitles">
            <p id="ProBeyond">Pro.Beyond</p>
            <p className="Iphone14Pro">
              IPhone 14 <strong>Pro</strong>
            </p>
            <p id="textContentBanner">
              Created to change everything for the better. For everyone
            </p>
          </div>
          <button className="Button" id="ButtonIphone14ProShopNow">
            Shop Now
          </button>
        </div>
        <figure className="IphoneImage">
          <Image
            id="Iphone-Image"
            src="/IphoneImage.png"
            alt="nbbnv"
            width={406}
            height={632}
          />
        </figure>
      </section>
      <section className="smallerBanners">
        <div className="leftBanner">
          <div className="wideSquare">
            <Image
              id="play-station"
              src="/PlayStation.png"
              alt="nbbnv"
              width={360}
              height={343}
            />
            <div className="tilteAndText">
              <p id="title">Playstation 5</p>
              <p id="text">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="squares">
            <div className="squareBanner" id="leftSquareBanner">
              <Image
                id="herolarge"
                src="/herolarge.png"
                alt="nbbnv"
                width={104}
                height={272}
              />
              <div className="squareBannerTitleAndText">
                <p id="squareBannerTitle">Apple AirPods Max</p>
                <p id="squareBannerText">
                  Computational audio. Listen, it is powerful
                </p>
              </div>
            </div>
            <div className="squareBanner" id="rightSquareBanner">
              <Image
                id="herolarge"
                src="/image36.png"
                alt="nbbnv"
                width={136}
                height={190}
              />
              <div className="squareBannerTitleAndText">
                <p id="squareBannerTitle">Apple Vision Pro</p>
                <p id="squareBannerText">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightBanner">
          <div className="rightBannerContent">
            <div className="rightBannerContentTitleAndText">
              <p id="rightBannerContentTitle">Macbook Air</p>
              <p id="rightBannerContentText">
                The new 15 inch MacBook Air makes room for more
                <br /> of what you love with a spacious Liquid Retina
                <br /> display.
              </p>
            </div>
            <button className="Button" id="ButtonMacbookAirShopNow">
              Shop Now
            </button>
          </div>
          <Image
            id="MacBook"
            src="/MacBook.png"
            alt="nbbnv"
            width={292}
            height={502}
          />
        </div>
      </section>
      <section className="category">
        <div className="CategoryTop">
          <h2 id="BrowseByCategory">Browse By Category</h2>
          <div className="Arrows">
            <div className="BrowseByCategoryIcons">
              <Image
                id="BrowseByCategoryleftIcon"
                src="/leftIcon.png"
                alt="nbbnv"
                width={12.66}
                height={23}
              />
            </div>
            <div className="BrowseByCategoryIcons">
              <Image
                id="BrowseByCategoryleftIcon"
                src="/rightIcon.png"
                alt="nbbnv"
                width={12.66}
                height={23.31}
              />
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="categoryCard">
            <div className="categoryCardVector">
              <Image
                id="categoryCardPhone"
                src="/Phones.png"
                alt="nbbnv"
                width={48}
                height={48}
              />
            </div>
            <p id="categoryCardPhoneText">
             <b>Phones</b>
            </p>
          </div>
          <div className="categoryCard">
          <div className="categoryCardVector">
              <Image
                id="categoryCardPhone"
                src="/SmartWatches.png"
                alt="nbbnv"
                width={48}
                height={48}
              />
            </div>
            <p id="categoryCardPhoneText">
             <b>Smart Watches</b>
            </p>
          </div>
          <div className="categoryCard">
          <div className="categoryCardVector">
              <Image
                id="categoryCardPhone"
                src="/Cameras.png"
                alt="nbbnv"
                width={48}
                height={48}
              />
            </div>
            <p id="categoryCardPhoneText">
             <b>Cameras</b>
            </p>
          </div>
          <div className="categoryCard">
          <div className="categoryCardVector">
              <Image
                id="categoryCardPhone"
                src="/Headphones.png"
                alt="nbbnv"
                width={48}
                height={48}
              />
            </div>
            <p id="categoryCardPhoneText">
             <b>Headphones</b>
            </p>
          </div>
          <div className="categoryCard">
          <div className="categoryCardVector">
              <Image
                id="categoryCardPhone"
                src="/Computers.png"
                alt="nbbnv"
                width={48}
                height={48}
              />
            </div>
            <p id="categoryCardPhoneText">
             <b>Computers</b>
            </p>
          </div>
          <div className="categoryCard">
          <div className="categoryCardVector">
              <Image
                id="categoryCardPhone"
                src="/Gaming.png"
                alt="nbbnv"
                width={48}
                height={48}
              />
            </div>
            <p id="categoryCardPhoneText">
             <b>Gaming</b>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
