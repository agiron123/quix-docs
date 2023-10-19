---
title: Quickstart
description: Get started in under 10 minutes
---

# Quickstart

This Quickstart is designed to show you how to get your data into Quix and display it, in **less than 10 minutes**.

## Watch a video

Create your first project and environment:

<div style="position: relative; padding-bottom: 59.726027397260275%; height: 0;"><iframe src="https://www.loom.com/embed/6056fffa4f0e49799ed24a54496ae81a?sid=4475117c-41c3-462b-9550-4c33dae5da2a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Get data into Quix and display it:

<div style="position: relative; padding-bottom: 59.47802197802198%; height: 0;"><iframe src="https://www.loom.com/embed/5ce302bc4ca74b1d9a02ee9a80989666?sid=b40fc99c-ef0b-42cf-8baf-4bfa6911e187" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Peek at the code

If you're just curious, click the box to see the complete code.

??? example "Push CPU load data to Quix Platform"

    Click the (+) symbols to see the code annotations.

    ```python
    # pip install psutil
    # pip install quixstreams
    # pip install python-dotenv
    import psutil # (1)
    import quixstreams as qx # (2)
    from dotenv import load_dotenv # (3)
    import time
    import datetime
    import os

    load_dotenv()
    token = os.getenv("STREAMING_TOKEN")

    def get_cpu_load(): # (4)
        cpu_load = psutil.cpu_percent(interval=1)
        return cpu_load

    # Obtain streaming token from portal
    client = qx.QuixStreamingClient(token) # (5)

    # Open a topic to publish data to
    topic_producer = client.get_topic_producer("cpu-load") # (6)

    stream = topic_producer.create_stream() # (7)
    stream.properties.name = "Quickstart CPU Load - Server 1"
    stream.timeseries.buffer.time_span_in_milliseconds = 100   # Send data in 100 ms chunks

    def main():
        try:
            while True:
                cpu_load = get_cpu_load()
                print(f"CPU Load: {cpu_load}%")
                stream.timeseries \
                    .buffer \
                    .add_timestamp(datetime.datetime.utcnow()) \
                    .add_value("CPU_Load", cpu_load) \
                    .publish() # (8)
        except KeyboardInterrupt:
            print("Closing stream")
            stream.close()

    if __name__ == '__main__':
        main()
    ```

    1. Make sure you `pip install psutil`.
    2. Make sure you `pip install quixstreams`.
    3. Make sure you `pip install python-dotenv`.
    4. The function to return CPU load.
    5. You can connect to Quix Platform using the token you can find in your Quix account.
    6. Get the topic you are going to publish data to. If the topic does not exist, it is created.
    7. Create a Quix stream to write to. You can think of a stream as a channel within a topic.
    8. Publish your data to the stream.

## Download the code

The complete code for the Quickstart can be found in the [Quix Tutorials GitHub repository](https://github.com/quixio/tutorial-code/tree/main/quickstart){target=_blank}.

## Prerequisites

To complete the Quickstart you'll need the following:

1. [Python installed](https://www.python.org/downloads/){target=_blank} on your machine. Python version >= 3.6 < 4 is required for the Quix Streams client library.
2. A [free Quix account](https://portal.platform.quix.ai/self-sign-up).

## 1. Install the Python modules

Once you have Python installed, open up a terminal and install the following modules using `pip`:

```
pip install quixstreams
pip install psutil
pip install python-dotenv
```

!!! tip

    If you're on Mac and using Homebrew, you may have multiple Python versions installed. In this case you may have to use the command `pip3` to install your modules. 

You're going to use the [Quix Streams](../client-library-intro.md) library to push data into Quix Platform. This is just one of [many ways](../platform/ingest-data.md) to get your data into Quix. You could for example simply log into Quix and use one of our already available [connectors](../platform/connectors/index.md), but where's the fun in that!

You use the `psutil` module to retrieve the CPU load on your laptop.

!!! tip

    You use `python-dotenv` as you securely store your streaming token (previously known as the SDK token) in a `.env` file.

## 2. Create your project and environment

You'll need to create a project and an environment. You can watch a video on how to do this:

<div style="position: relative; padding-bottom: 59.726027397260275%; height: 0;"><iframe src="https://www.loom.com/embed/6056fffa4f0e49799ed24a54496ae81a?sid=4475117c-41c3-462b-9550-4c33dae5da2a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 3. Get your token

You'll need a streaming token to connect your client code to your Quix environment:

1. Log in to the Quix Portal and enter the `Develop` environment.
2. Click `Settings` and then click `Develop` again to display the environment settings.
3. Click `APIs and tokens`.
4. Click `Streaming Token`.
5. Copy the streaming token to the clipboard using the button provided.

## 4. Create your `.env` file

You'll store your streaming token securely in a `.env` file on your computer in the same directory as your Python code. To create the `.env` file:

1. Open up a terminal on your laptop, make a new directory for your code. 
2. Using your editor, create a `.env` file in your project directory. On the first line add the text `STREAMING_TOKEN=`.
3. Paste the streaming token from the clipboard into the `.env` file _immediately_ after the `=` (there should be no space between the `=` and the token).
4. Save the file.

Your streaming token is now safely stored in your `.env` file for your Python code to use.

## 5. Write your code

You'll now write the Python code that runs on your computer, and publishes your CPU load into a Quix topic.

1. Create a new file `cpu_load.py`.
2. Copy and paste in the following code:

    ```python 
    import psutil
    import quixstreams as qx
    import time
    import datetime
    import os
    from dotenv import load_dotenv

    load_dotenv()
    token = os.getenv("STREAMING_TOKEN")

    def get_cpu_load():
        cpu_load = psutil.cpu_percent(interval=1)
        return cpu_load

    # Obtain streaming token from portal
    client = qx.QuixStreamingClient(token)

    # Open a topic to publish data to
    topic_producer = client.get_topic_producer("cpu-load")

    stream = topic_producer.create_stream()
    stream.properties.name = "Quickstart CPU Load - Server 1"
    stream.timeseries.buffer.time_span_in_milliseconds = 100   # Send data in 100 ms chunks

    def main():
        try:
            while True:
                cpu_load = get_cpu_load()
                print(f"CPU Load: {cpu_load}%")
                stream.timeseries \
                    .buffer \
                    .add_timestamp(datetime.datetime.utcnow()) \
                    .add_value("CPU_Load", cpu_load) \
                    .publish()
        except KeyboardInterrupt:
            print("Closing stream")
            stream.close()

    if __name__ == '__main__':
        main()
    ```

3. Save the file.

## 6. Run your code

Run your code with the following command in your terminal:

```
python cpu_load.py
```

!!! tip

    If you're on Mac and using Homebrew, you may have multiple Python versions installed. In this case you may have to use the command `python3` to run your code. 

The code runs and, after creating the `cpu-load` topic, displays your CPU load. The code is now publishing data to the Quix topic `cpu-load`.

## 7. See the data in Quix

1. Switch back to the Quix Portal and enter your `Develop` environment.
2. Click on `Topics` in the main left-hand navigation.
3. You see the `cpu-load` topic. Note the vertical green bars representing inbound data.
4. Hover the mouse over the `Data` column. You see the tool tip text `View live data`.
5. Click the mouse where the tool tip text is displayed. You are taken to the Quix Data Explorer in a new tab.
6. Under `SELECT STREAMS` select the box `Quickstart CPU Load - Server 1`.
7. Under `SELECT PARAMETERS OR EVENTS` select `CPU_Load`. 

Your real-time CPU load is displayed as a waveform. You can also take a look at the table view, and the message view. 

## Conclusion

That concludes the Quickstart! In this Quickstart you've learned the following:

* How to create a project and an environment.
* How to obtain the streaming token for your environment.
* How to publish data into a Quix topic from the command line using Quix Streams.
* How to view real-time data in a topic using the Quix Data Explorer.

## Secret tip 🕵️‍♀️

!!! tip

    Our docs support hotkeys. Press ++slash++, ++s++, or ++f++ to activate search, ++p++ or ++comma++ to go to the previous page, ++n++ or ++period++ to go to the next page.

## Next steps

Try the [Quix Tour](../platform/quixtour/overview.md) and build out a complete CPU overload detection pipeline.
