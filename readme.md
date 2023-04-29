# UI5con2023
## UI5Library for UI5WebComponent
### Project setup
- Generate library named `SpaceLibrary` namespace `be.wl` for version `1.111.3` in a new folder
```
yo easy-ui5

library
```
- Open project
```
code be.wl.SpaceLibrary
```
- Add UI5WebComponent package as `devDependency`
```
    "SpacePackage": "file:../SpacePackage",
```
- Open `bash` terminal
- run npm install again
```
npm i
```
- Install UI5WebComponent Tooling
```
npm i -D @ui5/tooling-webc
```
- Add `"@ui5/tooling-webc"` to UI5 dependencies in `package.json`
```
"@ui5/tooling-webc"
```
- Add webcomponent scripts
```
    "prebuild": "rimraf src/webc/lib/thirdparty/ && ui5-webc-prebuild",
    "generate": "ui5-webc-generate",
```
- Install webcomponent resources (icons)
```
npm i -D @ui5/webcomponents @ui5/webcomponents-icons-tnt @ui5/webcomponents-icons-business-suite
```
### Configure UI5 Library 
- Change name `SpaceLibrary` to `be.wl.SpaceLibrary` in `ui5.yaml`

- Add `libraries`
```
    - name: sap.m
    - name: sap.ui.webc.common
```

- Add UI5WebCompnent tooling for running in `custommiddleware`
```
  - name: ui5-tooling-webc-middleware
    afterMiddleware: compression
```

- Add UI5WebComponent Tooling for generating the controls in `customConfiguration`
```
customConfiguration:
  ui5-tooling-webc:
    packages:
      'SpacePackage':
        aliases: # used to convert ES6 imports to UI5 module paths
          "^SpacePackage\/dist\/(.*?).js$": "be/wl/SpaceLibrary/thirdparty/$1"
        reverseAliases: # used by the middleware to serve third-party files as UI5 modules
          "^/resources/@ui5/(.*?)$": "@ui5/$1"
          # "^/resources/be/wl/SpaceLibrary/thirdparty/(.*?)$": "SpacePackage/dist/$1"
        inputPath: "dist/" # where to find the web components
        inputPathFilters: # relative to the inputPath, can   be inclusive or exclusive(!) filters
          - '**/*{.js,.json,.css}'
          - '!assets/'
          - '!test/'
          - '!**/*-static.js'
          - '!**/api.json'
        outputPath: "src/be/wl/SpaceLibrary/thirdparty/" # where to create the UI5 controls
        generation: # if set, control wrappers will be generated
          suffix: ""
          replaceJSDocNamespaces: # replace namespaces in api.json
          #noControl: # do not generate wrappers at all
          noTestPage: # do not generate test pages for these controls
          noQUnit: # do not generate QUnit tests for these controls
          additionalProperties:
            width:
              - be.wl.SpaceLibrary.SpaceComponent
            height:
              - be.wl.SpaceLibrary.SpaceComponent
            display:
            textDirection:
            color:
            backgroundColor:
          additionalEvents:
            click:
          includeLabelEnablement:
          includeFormSupport:
          includeSemanticFormSupport:
          features:
          versions:
            be.wl.SpaceLibrary.SpaceComponent: 1.0.0
            be.wl.SpaceLibrary.SpaceItemComponent: 1.0.0
          designtime:
```
### Generate controls
- Run prebuild
```
npm run prebuild
```
- Run generate
```
npm run generate
```
- Add slot property to aggeregation `items` in `SpaceComponent`
```
slot:"items"
```

### Test generated controls
- Copy logo to img folder
- Add control to `kitchen.html`
```
var oSpaceComponent = new SpaceComponent({
    intro: "Hello UI5con !",
    logo: "./img/star-wars-intro.png",
    // height:"500px",
    // width:"800px",
    items: [new SpaceItemComponent({
        title: "EPISODES IV-VI",
        description: "After years of galactic silence, civilization is on the brink of a new Star Wars release. Now, with the Force preparing to awaken, the people of Earth seek solace in films of old. With nowhere to turn, they gather in great numbers and watch the original trilogy without rest. Three films. 6 hours. 24 minutes. Popcorn. Slushies. Total elation."
    }), new SpaceItemComponent({
        title: "Episode V: The Empire Strikes Back Opener",
        description: "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space"
    })]
});
```
- Run test page
```
npm start
```