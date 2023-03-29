---
sidebar_position: 1
---

# Strapi Populate Basic

## AboutUs
### Structure
![about us](/img/about_us.png)

### Fetch
```
fetch("localhost:1337/api/home-page?" + "populate[AboutUs][populate]=*" )
```

## OurActivities
### Structure
![our activities](/img/our_activities.png)

### Fetch
```
fetch("localhost:1337/api/home-page?" + "&populate[OurActivities][populate][0]=Cards.image" )
```

## TfCounter

### Structure
![tf counter](/img/tf_counter.png)

### Fetch
```
fetch("localhost:1337/api/home-page?" + "&populate[TfCounter][populate]=bg1" + "&populate[TfCounter][populate]=bg2" + "&populate[TfCounter][populate][0]=Counters.image" )
```



