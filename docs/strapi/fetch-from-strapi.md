---
sidebar_position: 2
---

# Fetch Data from Strapi

## AboutUs

### Structure

![about us](/img/about_us.png)

### Code 
```javaScript title="AboutUs.js"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const API_BASE_URL = "localhost:1337";

function AboutUs({ data }) {
  useEffect(() => {
    console.log("abutUs data :>> ", data);
  }, [data]);

  return (
    <section className="tf-section tf-sc-about3">
      <div>
        <div>
          <img src={API_BASE_URL + data.image?.data.attributes.url} />
        </div>
        <div> {data.title}</div>
        <h2 className="title clr-pri-2">{data.subtitle}</h2>
      </div>
      <p> {data.description} </p>
      <div>
        <Link href={data.buttonLink || ""}>{data.buttonTitle}</Link>
      </div>
    </section>
  );
}

export default AboutUs;
```

## OurActivities

### Structure

![our activities](/img/our_activities.png)

### Code
```javaScript title="OurActivities.js"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const API_BASE_URL = "localhost:1337";

function OurActivities({ data }) {
  useEffect(() => {
    console.log("ourActivities data :>> ", data);
  }, [data]);

  return (
    <section>
      <div>
        <div> {data.title} </div>
        <h2> {data.subtitle} </h2>
      </div>
      <div>
        {data?.Cards?.map((card) => (
          <div key={card.id}>
            <div>
              <div>
                <img src={API_BASE_URL + card.image.data.attributes.url} />
              </div>
              <div>
                <Link href={card.titleLink || ""}>
                  <a> {card.title} </a>
                </Link>
                <p> {card.subtitle} </p>
                <Link href={card.buttonLink || ""}>
                  <a> {card.buttonTitle} </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurActivities;
```

## TfCounter

### Structure

![tf counter](/img/tf_counter.png)

### Code
```javaScript title="TfCounter.js"
import { useEffect } from "react";

const API_BASE_URL = "localhost:1337";

const TfCounter = ({ nonst, data }) => {
  useEffect(() => {
    console.log("tfCounter data :>> ", data);
  }, [data]);

  return (
    <section>
      <img src={API_BASE_URL + data.bg1?.data.attributes.url} alt="Image" />
      <img src={API_BASE_URL + data.bg2?.data.attributes.url} alt="Image" />

      <div className="row">
        {data?.Counters?.map((counter) => (
          <div className="col-xl-3 col-lg-3 col-md-3 col-12">
            <div>
              <div>
                <img
                  src={API_BASE_URL + counter.image?.data.attributes.url}
                  alt="Image"
                />
              </div>
              <div>
                <p className="clr-pri-1"> {counter.title} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TfCounter;
```

## Fetch data in Home Page

```javaScript title="HomePage.js"
import AboutUs from "./tb/components/AboutUs";
import OurActivities from "./tb/components/OurActivities";
import TfCounter from "./tb/components/TfCounter";

const Home = () => {
  const [aboutUs, setAboutUs] = useState({});
  const [ourActivities, setOurActivities] = useState({});
  const [tfcounter, setTfcounter] = useState({});

  useEffect(() => {
    (async () => {
      let
        aboutUs,
        ourActivities,
        tfcounter;
      let homeData;
      await fetch(
        "localhost:1337/api/home-page?" +
          "populate[AboutUs][populate]=*" +
          "&populate[OurActivities][populate][0]=Cards.image" +
          "&populate[TfCounter][populate]=bg1" +
          "&populate[TfCounter][populate]=bg2" +
          "&populate[TfCounter][populate][0]=Counters.image"
      )
        .then((x) => x.json())
        .then((resposeObject) => {
          aboutUs = resposeObject.data.attributes.AboutUs;
          ourActivities = resposeObject.data.attributes.OurActivities;
          tfcounter = resposeObject.data.attributes.TfCounter;
        });

      console.log("homeData", homeData);
      setAboutUs(aboutUs);
      setOurActivities(ourActivities);
      setTfcounter(tfcounter);
    })();
  }, []);

  return (
    <Layout noFooter noHeader bodyClass={"main"}>
      <AboutUs data={aboutUs} />
      <OurActivities data={ourActivities} />
      <TfCounter data={tfcounter} />
    </Layout>
  );
};
export default Home;
```
