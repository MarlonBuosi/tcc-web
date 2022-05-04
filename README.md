# Within a team which is using Pull Requests (PR), please make sure Pull Request's commit message is following the convention

## Format of the commit message

``` markdown
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
The header is mandatory and the scope of the header is optional.

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

The footer should contain a closing reference to an issue if any.

#### <a name="commit-header"></a>Commit Message Header
```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: module-name|scope-of-change
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

**Revert**

If the commit reverts a previous commit, it should begin with _revert:_ , followed by the header of the reverted commit. In the body it should say: This reverts commit <hash>, where the hash is the SHA of the commit being reverted.

**Subject line**

Subject line contains succinct description of the change.

**Allowed <type>**

Must be one of the following:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

**Allowed <scope>**

Scope could be anything specifying place of the commit change. For example migration, import, task-view, etc.

- migration: entity framework migration changes
- import: any change related with import
- task-view: any change on task view
- administrator: any change related with admin entities or view
- custom-reports
- <span style="background-color:yellow; color: #000"><please feel free to add others></span>

**<subject> text**

The subject contains a succinct description of the change:

- use imperative, present tense: “change” not “changed” nor “changes”
- **don't capitalize first letter**
- **no dot (.) at the end**


**Body**

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

**Footer**

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit Closes.

Breaking Changes should start with the word _BREAKING CHANGE:_ with a space or two newlines. The rest of the commit message is then used for this.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
