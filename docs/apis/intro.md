# Quix APIs

The Quix Platform provides several APIs. These are:

* Streaming Writer API
* Streaming Reader API
* Portal API
* Query API

While [Quix Streams](../client-library-intro.md) is the main client library for Quix, there are certain use cases where you need an alternative:

* The client uses a language that is not supported by Quix Streams (Quix Streams supports Python and C# only)
* There are resource constraints which mean you can't run Quix Streams
* The nature of the client (for example, a web browser)

In these situations Streaming Reader and Writer APIs can provide an alternative solution - for example, they can easily be accommodated in a modern web browser, or using most modern programming languages with an HTTP or SignalR client. 

Portal API is useful for automating processes normally carried out manually in the Quix Portal.

Query API is useful for testing and examining data persisted into the Quix internal database.

Each of these APIs is described in more detail in the following sections.

## Streaming Writer API

The [Streaming Writer API](./streaming-writer-api/index.md) enables you to stream data into a Quix topic. 

Streaming Writer provides both an HTTP interface and a [SignalR](https://learn.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr){target=_blank} interface, with SignalR supporting WebSockets, for real-time data transfer.

* [Read more about Streaming Writer API](./streaming-writer-api/index.md)

## Streaming Reader API

The [Streaming Reader](./streaming-reader-api/index.md) API enables you to stream data out of a Quix topic. 

Streaming Reader uses Microsoft's [SignalR](https://learn.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr){target=_blank} technology, which provides both WebSockets and Long Polling, depending on client capabilities.

* [Read more about Streaming Reader API](./streaming-reader-api/index.md)

## Portal API

The [Portal API](portal-api/index.md) gives access to the Quix Portal interface enabling you to automate your project deployment, management and monitoring. For example, you could build command line tools in any language with an HTTP interface available, to create, deploy, and monitor services.

[Read more about Portal API](portal-api/index.md)

## Query API

The [Query API](query-api/index.md) enables you to fetch persisted data from Quix. You can use it for exploring the platform, testing, prototyping applications, or working with persisted data in any language with HTTP capabilities.

!!! note

    Query API was previously known as Data Catalogue API. You may still see occasional references to the Data Catalogue API in the UI and docs.

[Read more about Query API](query-api/index.md)

## Comparing the APIs

Use cases for these APIs are shown in the following table:

| API | Interface | Purpose | Typical use case | Docs link |
|---|---|---|---|----|
| Streaming Writer API | HTTP, SignalR (WebSockets) | Publish data to a Quix topic | External service, command line client | [Streaming Writer API](./streaming-writer-api/index.md) | 
| Streaming Reader API | SignalR (WebSockets and Long Polling)| Subscribe to a Quix topic | Web browser client, dashboard, command line client | [Streaming Reader API](./streaming-reader-api/index.md) |
| Portal API | HTTP (REST)| Automate Quix | Creating and monitoring deployments | [Portal API](./portal-api/index.md) |
| Query API | HTTP (REST) | Retrieve persisted data | Evaluate service is processing data correctly | [Query API](./query-api/index.md) |

## Next steps

Read the prerequisites and how to get the API references: 

* Learn about [prerequisites](prerequisites.md)
* Get the [API references](api-references.md)
* Learn how to form [HTTP requests](http-requests.md)
* Set up [SignalR](signalr.md) (if using WebSockets rather than HTTP)