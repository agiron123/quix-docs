# Computer vision

In this tutorial you learn about a real-time computer vision application, using a [Quix template project](https://github.com/quixio/computer-vision-demo){target=_blank}. 

The project uses the Transport for London (TfL) traffic cameras, known as Jam Cams, as the video input. The [YOLO v8](https://docs.ultralytics.com/) machine learning model is used to identify various objects such as types of vehicles. Additional services count the vehicles and finally the data is displayed on a map which is part of the web UI that has been created for this project. 

You'll fork the complete project from GitHub, and then create a Quix project from the forked repo, so you have a copy of the full application code running in your Quix account. You then examine the data flow through the project's pipeline, using tools provided by the Quix Portal.

<div>
<a class="md-button md-button--primary" href="https://app-demo-computervisiondemo-prod.deployments.quix.ai/" target="_blank" style="margin-right:.5rem;">See the deployed project</a>

<a class="md-button md-button" href="https://portal.platform.quix.ai/pipeline?workspace=demo-computervisiondemo-prod&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qVTBRVE01TmtJNVJqSTNOVEpFUlVSRFF6WXdRVFF4TjBSRk56SkNNekpFUWpBNFFqazBSUSJ9.eyJodHRwczovL3F1aXguYWkvb3JnX2lkIjoiZGVtbyIsImh0dHBzOi8vcXVpeC5haS9vd25lcl9pZCI6ImF1dGgwfDI4YWQ4NWE4LWY1YjctNGFjNC1hZTVkLTVjYjY3OGIxYjA1MiIsImh0dHBzOi8vcXVpeC5haS90b2tlbl9pZCI6ImMzNzljNmVlLWNkMmYtNDExZC1iOGYyLTMyMDU0ZDc5MTY2YSIsImh0dHBzOi8vcXVpeC5haS9leHAiOiIxNzM3ODI5NDc5LjIyMyIsImlzcyI6Imh0dHBzOi8vYXV0aC5xdWl4LmFpLyIsInN1YiI6ImtyMXU4MGRqRllvUUZlb01nMGhqcXZia29lRkxFRDVBQGNsaWVudHMiLCJhdWQiOiJxdWl4IiwiaWF0IjoxNjk1NzE2MDI4LCJleHAiOjE2OTgzMDgwMjgsImF6cCI6ImtyMXU4MGRqRllvUUZlb01nMGhqcXZia29lRkxFRDVBIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOltdfQ.Ndm0K2iNHPxDq1ohF-yb-6LzIqx_UY8Ptcq0kAwSNye12S3deX_eDkC4XqZqW2NoSLd3GsmWV9PZGetGGp2IlqshQFZtUMp6WP6hq917ZC1i8JFx93PAbY7NT_88nFDovVlaRcoTpWvI-03KbryLkAoB28c6qb3EFwjCWFBuy_yA4yjQ8uF0-AZ0R9Qi4IBaekXWqcgO0a91gVRg0oA_hnzJFoR-EnZ2G1ZSxtuVgnyyPuQTMUvzJuUT_IJTLzEB_kejX0pcXRZBIwHP8MWLB4mE5DtIdz4jm8WIA4eZJZ7ZCG4dk-adQwZ2BdkNknV5eEwRgRJL4ybaplkaDlR-dg" target="_blank" style="margin-right:.5rem;">See the project running in Quix</a>
<br/>
</div>

## Technologies used

Some of the technologies used by this template project are listed here.

**Infrastructure:** 

* [Quix](https://quix.io/){target=_blank}
* [Docker](https://www.docker.com/){target=_blank}
* [Kubernetes](https://kubernetes.io/){target=_blank}

**Backend:** 

* [Confluent Cloud](https://www.confluent.io/lp/confluent-cloud/){target=_blank}
* [Quix Streams](https://github.com/quixio/quix-streams){target=_blank}
* [Flask](https://flask.palletsprojects.com/en/2.3.x/#){target=_blank}
* [pandas](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html){target=_blank}

**Video capture:**

* [TfL API](https://api-portal.tfl.gov.uk){target=_blank}
* [OpenCV](https://opencv.org/){target=_blank}

**Object detection:**

* [YOLOv8](https://github.com/ultralytics/ultralytics){target=_blank}

**Frontend:** 

* [Angular](https://angular.io/){target=_blank}
* [Typescript](https://www.typescriptlang.org/){target=_blank}
* [Microsoft SignalR](https://learn.microsoft.com/en-us/aspnet/signalr/){target=_blank}
* [Google Maps](https://developers.google.com/maps){target=_blank}

## GitHub repository

The complete code for this project can be found in the [Quix GitHub repository](https://github.com/quixio/computer-vision-demo){target="_blank"}.

## Getting help

If you need any assistance while following the tutorial, we're here to help in the [Quix forum](https://forum.quix.io/){target="_blank"}.

## Prerequisites

To get started make sure you have a [free Quix account](https://portal.platform.quix.ai/self-sign-up).

If you are new to Quix it is worth reviewing the [recent changes page](../../changes.md), as that contains very useful information about the significant recent changes, and also has a number of useful videos you can watch to gain familiarity with Quix.

### TfL account and API key

You'll also need a [free TfL account](https://api-portal.tfl.gov.uk){target=_blank}. 

Follow these steps to locate your TfL API key:

  1. Register for a [free TfL account](https://api-portal.tfl.gov.uk){target=_blank}.

  2. Login and click the `Products` menu item.

  3. You should have one product to choose from: `500 Requests per min.`

  4. Click `500 Requests per min.`

  5. Enter a name for your subscription into the box, for example "QuixFeed", and click `Register`.

  6. You can now find your API Keys in the profile page.

Later, you'll need to configure the TfL service with your own TfL API key.

### Git provider

You also need to have a Git account. This could be GitHub, Bitbucket, GitLab, or any other Git provider you are familar with, and that supports SSH keys. The simplest option is to create a free [GitHub account](){target=_blank}.

!!! tip

    While this tutorial uses an external Git account, Quix can also provide a Quix-hosted Git solution using Gitea for your own projects. You can watch a video on [how to create a project using Quix-hosted Git](https://www.loom.com/share/b4488be244834333aec56e1a35faf4db?sid=a9aa124a-a2b0-45f1-a756-11b4395d0efc){target=_blank}.

If you want to use the Quix AWS S3 service (optional), you'll need to provide your credentials for accessing AWS S3.

## The pipeline

There are several *main* stages in the [pipeline](https://portal.platform.quix.ai/pipeline?workspace=demo-computervisiondemo-prod&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qVTBRVE01TmtJNVJqSTNOVEpFUlVSRFF6WXdRVFF4TjBSRk56SkNNekpFUWpBNFFqazBSUSJ9.eyJodHRwczovL3F1aXguYWkvb3JnX2lkIjoiZGVtbyIsImh0dHBzOi8vcXVpeC5haS9vd25lcl9pZCI6ImF1dGgwfDI4YWQ4NWE4LWY1YjctNGFjNC1hZTVkLTVjYjY3OGIxYjA1MiIsImh0dHBzOi8vcXVpeC5haS90b2tlbl9pZCI6ImMzNzljNmVlLWNkMmYtNDExZC1iOGYyLTMyMDU0ZDc5MTY2YSIsImh0dHBzOi8vcXVpeC5haS9leHAiOiIxNzM3ODI5NDc5LjIyMyIsImlzcyI6Imh0dHBzOi8vYXV0aC5xdWl4LmFpLyIsInN1YiI6ImtyMXU4MGRqRllvUUZlb01nMGhqcXZia29lRkxFRDVBQGNsaWVudHMiLCJhdWQiOiJxdWl4IiwiaWF0IjoxNjk1NzE2MDI4LCJleHAiOjE2OTgzMDgwMjgsImF6cCI6ImtyMXU4MGRqRllvUUZlb01nMGhqcXZia29lRkxFRDVBIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOltdfQ.Ndm0K2iNHPxDq1ohF-yb-6LzIqx_UY8Ptcq0kAwSNye12S3deX_eDkC4XqZqW2NoSLd3GsmWV9PZGetGGp2IlqshQFZtUMp6WP6hq917ZC1i8JFx93PAbY7NT_88nFDovVlaRcoTpWvI-03KbryLkAoB28c6qb3EFwjCWFBuy_yA4yjQ8uF0-AZ0R9Qi4IBaekXWqcgO0a91gVRg0oA_hnzJFoR-EnZ2G1ZSxtuVgnyyPuQTMUvzJuUT_IJTLzEB_kejX0pcXRZBIwHP8MWLB4mE5DtIdz4jm8WIA4eZJZ7ZCG4dk-adQwZ2BdkNknV5eEwRgRJL4ybaplkaDlR-dg){target=_blank}:

1. *TfL camera feed* - TfL Camera feed or "Jam Cams". This service retrieves the raw data from the TfL API endpoint. A list of all JamCams is retrieved, along with the camera data. The camera data contains a link to a video clip from the camera. These video clips are hosted by TfL in MP4 format on AWS S3. A stream is created for each camera, and the camera data published to this stream. Using multiple streams in this way enables a solution capable of horizontal scaling, through additional topic partitions and, optionally, replicated services in a consumer group. Once the camera list has been scanned, the service sleeps for a configurable amount of time, and then repeats the previous code. This reduces the load, and also means the API limit of 500 requests per minute is not exceeded. Messages are passed to the frame grabber.

2. *TfL traffic camera frame grabber* - this service grabs frames from a TfL video file (MP4 format) at the rate specified. By default the grabber extracts one frame every 100 frames, which is typically one per five seconds of video. Messages are passed to the object detection service.

3. *Object detection* - this service uses the YOLOv8 computer vision algorthm to detect objects within a given frame.

4. *Stream merge* - merges the separate data streams (one for each camera) back into one, prior to sending to the UI.

5. *Web UI* - a UI that displays: frames with the objects that have been identified, and a map with a count of objects at each camera's location. The web UI is a web client app that uses the [Quix Streaming Reader API](../../../apis/streaming-reader-api/index.md), to read data from a Quix topic.

There are also some additional services in the pipeline:

1. *Cam vehicles* - calculates the total vehicles, where vehicle is defined as one of: car, 'bus', 'truck', 'motorbike'. This number is published to its utput topic. The *Max vehicle window* service subscribes to this topic.

2. *Max vehicle window* - calculates the total vehicles over a time window of one day. This service publishes messages its output topic. 

3. *Data buffer* - this provides a one second data buffer. This helps reduce load on the Data API service.

4. *Data API* - this REST API service provides the following endpoints: 

    * `max_vehicles` - last known maximum vehicle count for each camera. 24 hour rolling window.
    * `detected_objects` - output from the computer vision service for all cameras. excludes images
    * `vehicles` - the last known vehicle count for each camera
    * `image` - the last image from the specified camera

    This API is called by the UI to obtain useful data.

5. *S3* - stores objects in Amazon Web Services (AWS) S3. This service enables you to persist any data or results you might like to keep more permanently.

More details are provided on all these services later in the tutorial.

## The parts of the tutorial

This tutorial is divided up into several parts, to make it a more manageable learning experience. The parts are summarized here:

1. [Get the project](get-project.md) - you get the project up and running in your Quix account. 

2. [TfL camera feed](tfl-camera-feed.md) service. You examine the code and then see how to view the message data format used in the service, in real time.

3. [Frame grabber](tfl-frame-grabber.md) service. You examine the code and then see how to view the message data format used in the service, in real time.

4. [Object detection](object-detection.md) service. This is the YOLO v8 logic that identifies and annotates the objects identified in the frame. You examine the code and then see how to view the message data format used in the service, in real time.

5. [Web UI](web-ui.md) service. This is a web client app that uses the Quix Streaming Reader API to read data from a Quix topic (the output of the stream merge service). There are various UI components that are beyond the scope of this tutorial.

6. [Other services](other-services.md). The other services are fairly simple so are collected together for discussion. You can optionally investigate the message data format and code. 

7. [Add new service](add-service.md). You add a new service to a feature branch, test it, and then merge to the tutorial branch.

8. [Summary](summary.md). In this concluding part you are presented with a summary of the work you have completed, and also some next steps for more advanced learning about the Quix Platform.

## 🏃‍♀️ Next step

[Part 1 - Get the project :material-arrow-right-circle:{ align=right }](get-project.md)
