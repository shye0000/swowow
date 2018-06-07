# swowow

### [ Container Docker ]


### [ Project deployment ]

    $ docker-compose build
    $ docker-compose up -d
    $ docker exec -it swowow bash

### [ Run tests ]

```
npm test
npm run test:watch
```

### [ Start development environment ]

```
npm run dev

Project url:                                localhost:8666
webpack-bundle-analyzer interface url:      localhost:6868
webpack-dev-server url:                     localhost:6686
```

### [ Versionning project ]

```
npm run version-major
npm run version-minor
npm run version-patch
```

### [ Build project with production environment ]

```
npm run build
```

### [ Run node server for production ]

```
npm start
