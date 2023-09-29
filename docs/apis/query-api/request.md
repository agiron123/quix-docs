# Forming a request

How you send requests to the Query API will vary depending on the client or language you’re using. But the API still has behavior and expectations that is common across all clients.

!!! tip

	The examples in this section show how to use the popular [`curl`](https://curl.se/){target=_blank} command line tool.

## Before you begin

Sign up for a [free Quix account](https://portal.platform.quix.ai/self-sign-up).

Read about [authenticating](authenticate.md) with the Query API.

## Endpoint URLs

The Query API is available on a per-environment basis, so the subdomain is based on a combination of your organization and environment names. See [How to get a environment ID](../../platform/how-to/get-environment-id.md) to find out how to get the exact hostname required. It will be in this format:

    https://telemetry-query-${organization}-${environment}.platform.quix.ai/

So your final endpoint URL will look something like:

    https://telemetry-query-acme-weather.platform.quix.ai/

## Method

Most endpoints use the `POST` method, even those that just fetch data. Ensure your HTTP client sends `POST` requests as appropriate.

Using `curl`, the `-X POST` flag specifies a POST request. Note that this is optional if you’re using the `-d` flag to send a payload (see below).

```bash
curl -X POST ...
```

## Payload

For most methods, you’ll need to send a JSON object containing supported parameters. You’ll also need to set the appropriate content type for the payload you’re sending:

```bash
curl -H "Content-Type: application/json" ...
```

!!! warning

	You **must** specify the content type of your payload. Failing to include this header will result in a `415 UNSUPPORTED MEDIA TYPE`	status code.

You can send data via a POST request using the `curl` flag `-d`. This should be followed by either a string of JSON data, or a string starting with the *@* symbol, followed by a filename containing the JSON data.

```bash
curl -d '{"key": "value"}' ...
curl -d "@data.json" ...
```

## Complete curl example

You should structure most of your requests to the API around this pattern:

```bash
curl -H "Authorization: ${token}" \
     -H "Content-Type: application/json" \
     -d "@data.json" \
     https://${domain}.platform.quix.ai/${endpoint}
```