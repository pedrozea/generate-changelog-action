# pedrozea Conventional Changelog Action

This GitHub Action generates a changelog based on commits that follow the Conventional Commits format.

It is designed to streamline the documentation process by automatically generating a changelog derived from your project's commits. By leveraging the Conventional Commits format, the action ensures a consistent and organized structure for the changelog entries. This means that every feature addition, bug fix, or performance improvement is chronologically documented with clarity and precision. In addition to simplifying version tracking for developers, it provides end-users with a clear overview of the changes and updates in each release. By automating this aspect of your project maintenance, you're assured of a comprehensive history that mirrors the evolution of your software, without the manual oversight typically required.

## Inputs

The action accepts the following inputs:

-   `github-token` (required):
    -   Description: GitHub token used for authentication. It is utilized to authenticate and interact with the GitHub API during the action's execution. This ensures the action has the necessary permissions to access repository data, generate the changelog based on commits, and perform any other required operations on the repository. Using the token ensures a secure and seamless integration with GitHub functionalities.
    -   Example: `"${{ secrets.GITHUB_TOKEN }}"`

## Outputs

The action produces the following outputs:

-   `changelog`:
    -   Description: The generated changelog content. It provides a curated, chronologically ordered list of notable changes for each version of a project. It's intended to help users and developers keep track of changes, such as bug fixes, new features, and improvements, made between different versions or releases of the software. Each entry typically includes the version number, the date of release, and a summary of changes made in that version. It serves as a history log where one can quickly see what has been altered from one version to the next.
-   `CHANGELOG.md`  file:
    -   Description: The action generates a file named `CHANGELOG.md` at the root of the GitHub repository containing the changelog content. 

## Functional Specifics

-    **Commit Parsing**: Commits should follow the Conventional Commits format to be correctly parsed and included in the changelog.  For more information on conventional commits see *xyz*
-   **Incremental Updates**: The action scans the repository's commits since the last tag to the latest commit. Only new commits since the last generated changelog entry are processed, preventing redundancy.
-   **Version Detection**: Automatically detects new version numbers based on commit messages, ensuring accurate changelog versioning.
-   **Category Grouping**: Commits are categorized (e.g., Features, Bug Fixes, Performance Improvements) for organized changelog presentation.
-   **Link Integration**: Each changelog entry is hyperlinked to its corresponding commit or pull request on GitHub for detailed exploration.
-   **Collaborator Mention**: If a commit message mentions a collaborator, their GitHub profile is linked in the changelog for recognition.
-   **Error Handling**: Provides clear error messages for common issues, such as authentication failures or misformatted commits.


## Usage Examples

Here's a simple usage example for integrating the `pedrozea/conventional-changelog-action` into your workflow:

    name: Generate Changelog
    
    on:
      push:
        branches:
          - main
    
    jobs:
	 changelog:
	     runs-on: ubuntu-latest
	     
	     steps:
	     - name: Generate changelog
	       uses: pedrozea/conventional-changelog-action@v1
	       with:
	         github-token: "${{ secrets.GITHUB_TOKEN }}"    


