# Get the project

While you can see the [deployed project running in Quix](https://portal.platform.quix.ai/pipeline?workspace=demo-chatappdemo-prod&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qVTBRVE01TmtJNVJqSTNOVEpFUlVSRFF6WXdRVFF4TjBSRk56SkNNekpFUWpBNFFqazBSUSJ9.eyJodHRwczovL3F1aXguYWkvb3JnX2lkIjoiZGVtbyIsImh0dHBzOi8vcXVpeC5haS9vd25lcl9pZCI6ImF1dGgwfDI4YWQ4NWE4LWY1YjctNGFjNC1hZTVkLTVjYjY3OGIxYjA1MiIsImh0dHBzOi8vcXVpeC5haS90b2tlbl9pZCI6ImMzNzljNmVlLWNkMmYtNDExZC1iOGYyLTMyMDU0ZDc5MTY2YSIsImh0dHBzOi8vcXVpeC5haS9leHAiOiIxNzM3ODI5NDc5LjIyMyIsImlzcyI6Imh0dHBzOi8vYXV0aC5xdWl4LmFpLyIsInN1YiI6ImtyMXU4MGRqRllvUUZlb01nMGhqcXZia29lRkxFRDVBQGNsaWVudHMiLCJhdWQiOiJxdWl4IiwiaWF0IjoxNjk1NzE2MDI4LCJleHAiOjE2OTgzMDgwMjgsImF6cCI6ImtyMXU4MGRqRllvUUZlb01nMGhqcXZia29lRkxFRDVBIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOltdfQ.Ndm0K2iNHPxDq1ohF-yb-6LzIqx_UY8Ptcq0kAwSNye12S3deX_eDkC4XqZqW2NoSLd3GsmWV9PZGetGGp2IlqshQFZtUMp6WP6hq917ZC1i8JFx93PAbY7NT_88nFDovVlaRcoTpWvI-03KbryLkAoB28c6qb3EFwjCWFBuy_yA4yjQ8uF0-AZ0R9Qi4IBaekXWqcgO0a91gVRg0oA_hnzJFoR-EnZ2G1ZSxtuVgnyyPuQTMUvzJuUT_IJTLzEB_kejX0pcXRZBIwHP8MWLB4mE5DtIdz4jm8WIA4eZJZ7ZCG4dk-adQwZ2BdkNknV5eEwRgRJL4ybaplkaDlR-dg){target=_blank}, it can be useful to learn how to get a project up and running in Quix. 

Once you have the project running in your Quix account, you can modify the project as required, and save your changes to your forked copy of the project. With a forked copy of the repository, you can also receive upstream bug fixes and improvements if you want to, by syncing the fork with the upstream repository. 

In the following sections you learn how to:

1. Fork an existing project repository, in this case the computer vision template project.
2. Create a new project (and environment) in Quix linked to your forked repository.

In later parts of the tutorial you explore the project pipeline using the Quix data explorer and other tools, viewing code, examining data structures, and getting a practical feel for the Quix Portal.

## 💡 Key ideas

The key ideas on this page:

* Forking a public template project repository
* Connecting Quix to an external Git repository, in this case the forked repository
* Quix projects, environments, and applications
* Pipeline view of project
* Synchronizing an environment

## Fork the project repository

Quix provides the computer vision template project as a [public GitHub repository](https://github.com/quixio/chat-demo-app){target="_blank"}. If you want to use this template as a starting point for your own project, then the best way to accomplish this is to fork the project. Using fork enables you to create a complete copy of the project, but also benefit from future bug fixes and improvements by using the upstream changes.

To fork the repository:

1. Navigate to the [Quix GitHub repository](https://github.com/quixio/chat-demo-app){target="_blank"}.

2. Click the `Fork` button to fork the repo into your GitHub account (or equivalent Git provider if you don't have a GitHub account). Make sure you fork all branches, as you will be looking at the `tutorial` branch.

    !!! tip 

        If you don't have GitHub account you can use another Git provider, such as GitLab or Bitbucket. If using Bitbucket, for example, you could import the repository - this would act as a clone (a static snapshot) of the repository. This is a simple option for Bitbucket, but you would not receive upstream changes from the original repository once the repository has been imported. You would however have a copy of the project you could then modify to suit your use case. Other providers support other options, check the documentation for your Git provider.

## Create your Quix project

Now that you have a forked copy of the repository in your GitHub account, you can now link your Quix account to it. Doing this enables you to build and deploy the project in your Quix account, and examine the pipeline much more closely.

To link Quix to this forked repository:

1. Log into your Quix account.

2. Click `+ Create project`.

3. Give your project a name. For example, "Sentiment Analysis".

4. Select `Connect to your own Git repo`, and follow the setup guide for your provider.

    !!! tip

        A setup guide is provided for each of the common Git providers. Other Git providers are supported, as long as they support SSH keys.

    The setup guide for GitHub is shown here:
            
    ![Git seup guide](../../images/git-setup-guide.png)

5. Assuming you are connecting to a GitHub account, you'll now need to copy the SSH key provided by Quix into your GitHub account. See the setup guide for further details.

    !!! important

        It is recommended that you create a new user in your Git provider for managing your Quix projects. You are reminded of this when you create a project (the notice is shown in the following screenshot).

    ![Create new user](../../images/create-new-github-user.png)


6. Click `Validate` to test the connection between Quix and GitHub. 

    !!! tip
    
        If errors occur you need to address them before continuing. For example, make sure you have the correct link to the repository, and you have have added the provided SSH key to your provider account, as outlined in the setup guide for that provider.

7. Click `Done` to proceed.

You now need to add an environment to your project. This is explained in the following section.

## Create your environment

A Quix project contains at least one branch. For the purposes of this tutorial you will examine the `tutorial` branch of the project. In a Quix project a branch is encapsulated in an environment. You'll create a `Tutorial` environment mapped to the `tutorial` branch of the repository.

Now create an environment called `Tutorial` which uses the `tutorial` branch:

1. Enter the environment name `Tutorial`.

2. Select the `tutorial` branch from the dropdown.

    Make sure the branch is protected, by making sure the `This branch is protected` checkbox is selected.

    !!! tip

        Making a branch protected ensures that developers cannot commit directly into the branch. Developers have to raise pull requests (PRs), which need to be approved before they can be merged into the protected branch.

3. Click `Continue` and then select the Quix Broker and Standard storage options to complete creation of the environment, and the project.

4. Go to the pipeline view. You will see that Quix is out of sync with the repository.

5. Click the `Sync` button to synchronize the environment, and then click `Go to pipeline`. You will see the pipeline building.

At this point you can wait a few minutes for the pipeline services to completely build and start running.

## See also

If you are new to Quix it is worth reviewing the [recent changes page](../../changes.md), as that contains very useful information about the significant recent changes, and also has a number of useful videos you can watch to gain familiarity with Quix.

## 🏃‍♀️ Next step

[Part 2 - Try the UI :material-arrow-right-circle:{ align=right }](try-the-ui.md)
