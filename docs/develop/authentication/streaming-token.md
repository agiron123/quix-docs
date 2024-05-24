# Streaming token

A streaming token is a type of bearer token that can be used to authenticate your client library (Quix Streams) to access functionality necessary for streaming actions. Think of a streaming token as a token you use to access Quix, but with limited scope.

!!! important

	Each Quix environment comes with one of these tokens, limited in use to that specific environment. For example, if you obtain a streaming token from your production environment, the the streaming token is scoped to only authenticate connection of the client to the production environment.

As streaming tokens are scoped to a specific environment, it means you can specify a topic name, even if that same topic name is used across multiple environments. This is because the topic ID is automatically used for you, based on the streaming token used. For example, if you had a topic called `f1-data` in production and development environments, you could simply use the topic name of `f1-data` in your code, regardless of the environment you're connecting to. In production, the topic ID might be `orgname-projectname-prod-f1-data`, and in development it might be `orgname-projectname-dev-f1-data`, however, the correct topic ID is automatically used by Quix Streams, as the environment is identified in the token, and therefore the correct prefix to the topic name can be generated.

## How to get a streaming token (SDK Token)

You can access these tokens by logging into Quix and clicking on `Settings` in the main left-hand navigation. Select your environment, and then click on `APIs and tokens` and then click on `Streaming Tokens`.

If you are looking for a bearer token to access the Quix APIs, such as the Portal API, you can select `Personal Access Tokens`. These are custom JWTs.

## How to use a streaming token (SDK Token)

The streaming token is primarily used to authenticate the [Quix Streams client library](https://quix.io/docs/quix-streams/introduction.html).

When using Quix Streams in Quix Cloud, you no longer need to provide all broker credentials manually, they’ll be acquired when needed and set up automatically.

!!! warning

	Streaming Tokens (SDK Tokens) do not have an expiration date. Treat them as you would a password. If you think they’re exposed, rotate them.

## Rotating your token

If you suspect your streaming token (SDK Token) may have been exposed, best practice is to rotate it. Within the `Streaming token` dialog, click `rotate them` to display the `Rotating streaming tokens` dialog. Two tokens are then displayed.

Having two keys lets you update your services without interruption, as both `Token 1` and `Token 2` are always valid. Rotating deactivates `Token 1`, `Token 2` takes its place and a new `Token 2` is generated.

You have two main options regarding how you rotate:

1. The easiest way to rotate comes with some service downtime. This assumes you do not directly set the token for your Quix Streams code, instead you let Quix take care of it for you by using the default environment variable. In this scenario all you have to do is rotate keys, stop and start all your deployments. Until a service is restarted it’ll try to communicate with Quix using the deactivated token. If you’re using local environments, those need to be updated manually.

2. The alternative option is more complicated, but you can achieve no downtime. This requires you to set a new environment variable you control. This should point to the token to be used. Provide the value of this environment variable to your Quix Streams code by passing it as an argument. Once you have that, set the value of this environment variable to `Token 2` and start your services. When you’re sure you replaced the tokens for all services, rotate your keys.

!!! note

	Only users with Admin role can rotate.

## See also

* [Testing multiple environments](../../manage/testing-environments.md)
