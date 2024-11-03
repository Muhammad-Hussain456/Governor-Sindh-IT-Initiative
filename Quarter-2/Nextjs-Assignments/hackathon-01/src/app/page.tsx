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
          <button id="Button">Shop Now</button>
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
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className="squareBanner" id="rightSquareBanner">
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
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightBanner">
          <div className="rightBannerContent">
            <div className="rightBannerContentTitleAndText">
              <p id="rightBannerContentTitle">
              Macbook Air
              </p>
              <p id="rightBannerContentText">
                Created to change everything for the better. For everyone
              </p>
            </div>
            <button id="Button">Shop Now</button>
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

      </section>
    </main>
  );
}
