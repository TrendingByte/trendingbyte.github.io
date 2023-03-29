---
sidebar_position: 1
---

# Strapi Populate Basic

## AboutUs
![about us](/static/img/about_us.png)
```
fetch("http://139.180.217.104:41021/api/home-page?" + "populate[AboutUs][populate]=*" )
```

## OurActivities
![our activities](/static/img/our_activities.png)
```
fetch("http://139.180.217.104:41021/api/home-page?" + "&populate[OurActivities][populate][0]=Cards.image" )
```

## TfCounter
![tf counter](/static/img/tf_counter.png)
```
fetch("http://139.180.217.104:41021/api/home-page?" + "&populate[TfCounter][populate]=bg1" + "&populate[TfCounter][populate]=bg2" + "&populate[TfCounter][populate][0]=Counters.image" )
```



