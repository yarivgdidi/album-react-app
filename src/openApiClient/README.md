### generate open api client
```
npx @openapitools/openapi-generator-cli generate -i ../open-api/album.yaml -g typescript-axios -o src/openApiClient --skip-validate-spec --additional-properties packageName=AlbumClient
```