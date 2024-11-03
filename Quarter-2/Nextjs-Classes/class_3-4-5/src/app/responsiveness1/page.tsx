type Idata = {
title: string,
description: string,
}
const data : Idata[] = 
  [
  {
    title: "Hussain",
    description: "Hello from Hussain's blog"
  },
  {
    title: "Ali",
    description: "Hello from Ali's blog"
  },
  {
    title: "Saleem",
    description: "Hello from Saleem's blog"
  }
]
 

export default function Responsiveness1() {
  return (
    <div className="parentContainer">
      {data.map((Idata)=>(
              <div className="childContainer bounce-in-right">
        <div className="imageContainer"></div>
        <h1 className="title">{Idata.title}</h1>
        <p className="description">
          {Idata.description}
        </p>
        <button className="readMore">Read More</button>
      </div>
      ))
    }
    </div>
  );
}