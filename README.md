# swowow

### [ Container Docker ]


### [ Project deployment ]

```
docker-compose build
docker-compose up -d
docker exec -it swowow bash
```

### [ Unit tests ]

```
npm test
npm run test:watch
npm run test:updateSnapshot
npm run test:coverage
```

### [ Start development environment ]

```
npm start

webpack-bundle-analyzer:      localhost:6868
webpack-dev-server:           localhost:6686
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
